
/* =========================================================
   ALEMAN ML
   Sistema principal de la aplicación
   ========================================================= */

(() => {
  "use strict";

  const STORAGE_KEY = "alemanML_progress_v1";
  const BLOCKS = window.ALEMAN_BLOCKS || [];

  const $ = (id) => document.getElementById(id);

  const screens = {
    home: $("homeScreen"),
    blocks: $("blocksScreen"),
    practice: $("practiceScreen"),
    review: $("reviewScreen")
  };

  // ---------------------------------------------------------
  // ESTADO Y PROGRESO
  // ---------------------------------------------------------

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  let progress = loadProgress();

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error("No se pudo guardar el progreso:", error);
    }
  }

  function getBlockProgress(blockId) {
    return progress[blockId] || {
      completedCards: {},
      completed: false
    };
  }

  function getCompletedCount(blockId) {
    const blockProgress = getBlockProgress(blockId);

    return Object.values(blockProgress.completedCards || {})
      .filter((count) => count >= 5).length;
  }

  function getLastPosition() {
    return progress._lastPosition || {
      blockId: 1,
      cardIndex: 0
    };
  }

  function saveLastPosition() {
    progress._lastPosition = {
      blockId: currentBlock?.id || 1,
      cardIndex: currentCardIndex
    };

    saveProgress();
  }

  // ---------------------------------------------------------
  // NAVEGACIÓN
  // ---------------------------------------------------------

  function showScreen(name) {
    Object.values(screens).forEach((screen) => {
      if (screen) screen.classList.remove("active");
    });

    if (screens[name]) {
      screens[name].classList.add("active");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goHome() {
    stopPractice();
    showScreen("home");
    renderHome();
  }

  function goToBlocks() {
    stopPractice();
    renderBlocks();
    showScreen("blocks");
  }

  // ---------------------------------------------------------
  // PANTALLA DE INICIO
  // ---------------------------------------------------------

  function renderHome() {
    const last = getLastPosition();
    const block = BLOCKS.find((item) => item.id === last.blockId);

    const continueTitle = $("continueTitle");
    const continueDescription = $("continueDescription");
    const progressText = $("progressText");

    if (continueTitle) {
      continueTitle.textContent = block
        ? `Bloque ${block.id}: ${block.title}`
        : "Comenzar aprendizaje";
    }

    if (continueDescription) {
      continueDescription.textContent = block
        ? `Tarjeta ${Math.min(last.cardIndex + 1, block.cards.length)} de ${block.cards.length}`
        : "Elige un bloque para comenzar";
    }

    if (progressText) {
      const completedBlocks = BLOCKS.filter((item) =>
        getBlockProgress(item.id).completed
      ).length;

      progressText.textContent =
        `${completedBlocks} de ${BLOCKS.length} bloques completados`;
    }
  }

  // ---------------------------------------------------------
  // SELECCIÓN DE BLOQUES
  // ---------------------------------------------------------

  function renderBlocks() {
    const container = $("blocksGrid");
    if (!container) return;

    container.innerHTML = "";

    BLOCKS.forEach((block) => {
      const completed = getBlockProgress(block.id).completed;
      const count = getCompletedCount(block.id);

      const button = document.createElement("button");
      button.className = "block-card";
      button.type = "button";

      if (completed) button.classList.add("completed");

      button.innerHTML = `
        <span class="block-number">BLOQUE ${block.id}</span>
        <strong>${escapeHTML(block.title)}</strong>
        <span class="block-status">
          ${completed ? "Completado" : `${count} / ${block.cards.length} tarjetas`}
        </span>
      `;

      button.addEventListener("click", () => {
        startBlock(block.id, 0);
      });

      container.appendChild(button);
    });
  }

  // ---------------------------------------------------------
  // REPASO DE BLOQUES COMPLETADOS
  // ---------------------------------------------------------

  function renderReviewBlocks() {
    const container = $("reviewBlocks");
    if (!container) return;

    container.innerHTML = "";

    const completedBlocks = BLOCKS.filter((block) =>
      getBlockProgress(block.id).completed
    );

    if (!completedBlocks.length) {
      container.textContent = "Todavía no has completado ningún bloque.";
      return;
    }

    completedBlocks.forEach((block) => {
      const button = document.createElement("button");
      button.className = "block-card completed";
      button.type = "button";
      button.textContent = `Bloque ${block.id}: ${block.title}`;

      button.addEventListener("click", () => {
        startBlock(block.id, 0, true);
      });

      container.appendChild(button);
    });
  }

  function goToReview() {
    stopPractice();
    renderReviewBlocks();
    showScreen("review");
  }

  // ---------------------------------------------------------
  // EJERCICIO ACTUAL
  // ---------------------------------------------------------

  let currentBlock = null;
  let currentCardIndex = 0;
  let reviewMode = false;
  let isPracticing = false;
  let isListening = false;
  let isSpeaking = false;
  let correctCount = 0;
  let recognition = null;
  let recognitionAvailable = false;
  let recognitionShouldRun = false;

  function getCurrentCard() {
    return currentBlock?.cards?.[currentCardIndex] || null;
  }

  function startBlock(blockId, cardIndex = 0, isReview = false) {
    const block = BLOCKS.find((item) => item.id === blockId);
    if (!block || !block.cards?.length) return;

    stopPractice();

    currentBlock = block;
    currentCardIndex = Math.max(
      0,
      Math.min(cardIndex, block.cards.length - 1)
    );

    reviewMode = isReview;
    correctCount = 0;

    saveLastPosition();
    showScreen("practice");
    renderCard();
  }

  function renderCard() {
    const card = getCurrentCard();
    if (!card) return;

    const blockTitle = $("practiceBlockTitle");
    const cardNumber = $("practiceCardNumber");
    const spanishPrompt = $("spanishPrompt");
    const germanAnswer = $("germanAnswer");
    const pronunciation = $("pronunciation");
    const verbReference = $("verbReference");
    const understood = $("understoodText");
    const counter = $("correctCounter");
    const voiceStatus = $("voiceStatus");

    if (blockTitle) {
      blockTitle.textContent =
        `Bloque ${currentBlock.id}: ${currentBlock.title}`;
    }

    if (cardNumber) {
      cardNumber.textContent =
        `Tarjeta ${currentCardIndex + 1} de ${currentBlock.cards.length}`;
    }

    if (spanishPrompt) spanishPrompt.textContent = card.es || "";
    if (germanAnswer) germanAnswer.textContent = card.de || "";

    if (pronunciation) {
      pronunciation.textContent = card.pronunciation || "";
    }

    if (verbReference) {
      if (card.inf) {
        verbReference.textContent = `Verbo de referencia: ${card.inf}`;
        verbReference.hidden = false;
      } else {
        verbReference.textContent = "";
        verbReference.hidden = true;
      }
    }

    if (understood) {
      understood.textContent = "Esperando tu respuesta";
    }

    if (counter) counter.textContent = "0 / 5";

    if (voiceStatus) {
      voiceStatus.textContent = "Pulsa READY para comenzar";
    }

    correctCount = 0;
    isPracticing = false;
  }

  // ---------------------------------------------------------
  // RECONOCIMIENTO DE VOZ
  // ---------------------------------------------------------

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = "de-DE";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    recognitionAvailable = true;

    recognition.onstart = () => {
      isListening = true;
      setVoiceStatus("Te estoy escuchando...");
    };

    recognition.onresult = (event) => {
      const alternatives = event.results[0];
      const transcript = alternatives[0]?.transcript || "";

      handleVoiceResult(transcript);
    };

    recognition.onerror = (event) => {
      isListening = false;

      if (
        event.error === "not-allowed" ||
        event.error === "service-not-allowed"
      ) {
        setVoiceStatus("Permite el acceso al micrófono para practicar.");
        recognitionShouldRun = false;
        return;
      }

      if (event.error === "no-speech") {
        setVoiceStatus("No he escuchado nada. Inténtalo otra vez.");
      } else if (event.error !== "aborted") {
        setVoiceStatus("No he podido reconocer la voz. Inténtalo otra vez.");
      }
    };

    recognition.onend = () => {
      isListening = false;

      if (recognitionShouldRun && isPracticing && !isSpeaking) {
        listenForAnswer();
      }
    };
  }

  function setVoiceStatus(message) {
    const element = $("voiceStatus");
    if (element) element.textContent = message;
  }

  // ---------------------------------------------------------
  // VOZ SINTÉTICA
  // ---------------------------------------------------------

  function speak(text, language = "de-DE", rate = 0.9) {
    return new Promise((resolve) => {
      if (!("speechSynthesis" in window)) {
        resolve();
        return;
      }

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      utterance.rate = rate;

      const voices = window.speechSynthesis.getVoices();

      const voice = voices.find((item) =>
        item.lang.toLowerCase().startsWith(language.toLowerCase())
      );

      if (voice) utterance.voice = voice;

      isSpeaking = true;

      utterance.onend = () => {
        isSpeaking = false;
        resolve();
      };

      utterance.onerror = () => {
        isSpeaking = false;
        resolve();
      };

      window.speechSynthesis.speak(utterance);
    });
  }

  // ---------------------------------------------------------
  // SECUENCIA DE APRENDIZAJE
  // ESPAÑOL UNA VEZ + ALEMÁN NORMAL + ALEMÁN LENTO
  // ---------------------------------------------------------

  async function readPromptAndListen() {
    if (!isPracticing) return;

    const card = getCurrentCard();
    if (!card) return;

    recognitionShouldRun = true;

    // 1. Explicación del significado en español.
    setVoiceStatus("Escucha el significado en español...");

    await speak(card.es, "es-ES", 0.95);

    if (!isPracticing) return;

    // 2. Primera pronunciación en alemán, velocidad normal.
    setVoiceStatus("Escucha la frase en alemán...");

    await speak(card.de, "de-DE", 0.85);

    if (!isPracticing) return;

    // 3. Segunda pronunciación en alemán, más despacio.
    setVoiceStatus("Escucha y repite en alemán...");

    await speak(card.de, "de-DE", 0.70);

    if (!isPracticing) return;

    // 4. La aplicación escucha la respuesta.
    listenForAnswer();
  }

  function listenForAnswer() {
    if (!recognitionAvailable || !recognition || !isPracticing) {
      setVoiceStatus(
        "El reconocimiento de voz no está disponible en este navegador."
      );
      return;
    }

    if (isListening || isSpeaking) return;

    try {
      recognition.start();
    } catch (error) {
      console.warn("No se pudo iniciar el reconocimiento:", error);
    }
  }

  // ---------------------------------------------------------
  // COMPROBACIÓN DE RESPUESTAS
  // ---------------------------------------------------------

  function normalizeText(text) {
    return String(text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ß/g, "ss")
      .replace(/[.,!?;:¿¡"'()]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isRepeatCommand(text) {
    const value = normalizeText(text);

    return [
      "wiederholen",
      "noch einmal",
      "nochmal",
      "repite",
      "repetir"
    ].includes(value);
  }

  function isCorrectAnswer(transcript, expected) {
    const heard = normalizeText(transcript);
    const target = normalizeText(expected);

    if (!heard || !target) return false;
    if (heard === target) return true;

    const heardWords = heard.split(" ");
    const targetWords = target.split(" ");

    if (targetWords.length <= 2) {
      return heardWords.join(" ") === targetWords.join(" ");
    }

    const matchingWords = targetWords.filter((word) =>
      heardWords.includes(word)
    ).length;

    return matchingWords / targetWords.length >= 0.85;
  }

  async function handleVoiceResult(transcript) {
    if (!isPracticing) return;

    const understood = $("understoodText");

    if (understood) {
      understood.textContent = transcript;
    }

    if (isRepeatCommand(transcript)) {
      setVoiceStatus("Repitiendo la frase en alemán...");
      await repeatCurrentPhrase();
      return;
    }

    const card = getCurrentCard();
    if (!card) return;

    if (isCorrectAnswer(transcript, card.de)) {
      correctCount++;

      const counter = $("correctCounter");

      if (counter) {
        counter.textContent = `${correctCount} / 5`;
      }

      setVoiceStatus(`¡Correcto! ${correctCount} de 5`);

      if (correctCount >= 5) {
        await speak("Sehr gut", "de-DE", 0.95);
        completeCurrentCard();
      } else {
        await speak("Richtig", "de-DE", 0.95);

        if (isPracticing) {
          await readPromptAndListen();
        }
      }
    } else {
      setVoiceStatus("No es correcto. Inténtalo otra vez.");

      await speak("Noch einmal", "de-DE", 0.9);

      if (isPracticing) {
        await readPromptAndListen();
      }
    }
  }

  // ---------------------------------------------------------
  // READY, STOP, REPETIR Y ESCUCHAR
  // ---------------------------------------------------------

  async function readyPractice() {
    if (!recognitionAvailable) {
      setVoiceStatus(
        "Tu navegador no permite reconocimiento de voz. Prueba con Chrome."
      );
      return;
    }

    if (isPracticing) return;

    isPracticing = true;
    recognitionShouldRun = true;

    await readPromptAndListen();
  }

  function stopPractice() {
    isPracticing = false;
    recognitionShouldRun = false;
    isListening = false;
    isSpeaking = false;

    if (recognition) {
      try {
        recognition.abort();
      } catch {}
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setVoiceStatus("Práctica detenida");
  }

  async function repeatCurrentPhrase() {
    const card = getCurrentCard();
    if (!card) return;

    if (recognition && isListening) {
      try {
        recognition.abort();
      } catch {}
    }

    setVoiceStatus("Escucha de nuevo la frase en alemán...");

    await speak(card.de, "de-DE", 0.70);

    if (isPracticing) {
      listenForAnswer();
    }
  }

  async function listenToGerman() {
    const card = getCurrentCard();
    if (!card) return;

    stopRecognitionOnly();

    await speak(card.de, "de-DE", 0.85);

    if (isPracticing) {
      listenForAnswer();
    }
  }

  function stopRecognitionOnly() {
    if (recognition && isListening) {
      try {
        recognition.abort();
      } catch {}
    }
  }

  // ---------------------------------------------------------
  // COMPLETAR TARJETA Y AVANZAR
  // ---------------------------------------------------------

  async function completeCurrentCard() {
    if (!currentBlock) return;

    const blockProgress = getBlockProgress(currentBlock.id);

    if (!blockProgress.completedCards) {
      blockProgress.completedCards = {};
    }

    blockProgress.completedCards[currentCardIndex] = 5;

    const allCompleted = currentBlock.cards.every(
      (_, index) => blockProgress.completedCards[index] >= 5
    );

    blockProgress.completed = allCompleted;

    progress[currentBlock.id] = blockProgress;

    saveProgress();

    setVoiceStatus("Tarjeta completada");

    await new Promise((resolve) => setTimeout(resolve, 700));

    if (!isPracticing) return;

    if (currentCardIndex < currentBlock.cards.length - 1) {
      currentCardIndex++;

      saveLastPosition();
      renderCard();

      await readPromptAndListen();
    } else {
      finishBlock();
    }
  }

  async function finishBlock() {
    stopPractice();

    const blockProgress = getBlockProgress(currentBlock.id);

    blockProgress.completed = true;
    progress[currentBlock.id] = blockProgress;

    progress._lastPosition = {
      blockId: currentBlock.id,
      cardIndex: 0
    };

    saveProgress();

    setVoiceStatus("¡Has terminado el bloque!");

    await speak(
      "Herzlichen Glückwunsch. Du hast den Block beendet.",
      "de-DE"
    );

    showScreen("home");
    renderHome();
  }

  // ---------------------------------------------------------
  // UTILIDADES
  // ---------------------------------------------------------

  function escapeHTML(value) {
    return String(value || "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]);
  }

  // ---------------------------------------------------------
  // BOTONES
  // ---------------------------------------------------------

  $("homeButton")?.addEventListener("click", goHome);

  $("continueButton")?.addEventListener("click", () => {
    const last = getLastPosition();
    startBlock(last.blockId, last.cardIndex);
  });

  $("chooseBlockButton")?.addEventListener("click", goToBlocks);

  $("reviewButton")?.addEventListener("click", goToReview);

  $("leavePracticeButton")?.addEventListener("click", goHome);

  $("listenButton")?.addEventListener("click", listenToGerman);

  $("repeatButton")?.addEventListener("click", repeatCurrentPhrase);

  $("readyButton")?.addEventListener("click", readyPractice);

  $("stopButton")?.addEventListener("click", stopPractice);

  document.querySelectorAll("[data-go]").forEach((button) => {
    button.addEventListener("click", () => {
      const destination = button.dataset.go;

      if (destination === "home") goHome();
      if (destination === "blocks") goToBlocks();
      if (destination === "review") goToReview();
    });
  });

  // ---------------------------------------------------------
  // INICIO
  // ---------------------------------------------------------

  function initializeApp() {
    renderHome();
    renderBlocks();
    renderReviewBlocks();

    if (!recognitionAvailable) {
      console.warn(
        "Aleman ML: reconocimiento de voz no disponible en este navegador."
      );
    }

    console.info("Aleman ML iniciado correctamente.");
    console.info(`${BLOCKS.length} bloques disponibles.`);
  }

  initializeApp();

})();