
// ==========================================
// THE CURSED UNIVERSE
// Interacciones, recuerdos, carta y piano
// ==========================================

const sky = document.getElementById("sky");
const enterButton = document.getElementById("enterButton");
const musicToggle = document.getElementById("musicToggle");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const letterBody = document.getElementById("letterBody");
const secretButton = document.getElementById("secretButton");
const finalSecret = document.getElementById("finalSecret");
const memoryDialog = document.getElementById("memoryDialog");
const closeDialog = document.getElementById("closeDialog");
const toast = document.getElementById("toast");

// ------------------------------------------
// 1. CREAR LAS ESTRELLAS DEL UNIVERSO
// ------------------------------------------

for (let i = 0; i < 95; i++) {
  const star = document.createElement("span");

  star.className = "sky-star";
  star.textContent = Math.random() > 0.82 ? "✦" : "·";

  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.fontSize = `${Math.random() * 12 + 4}px`;
  star.style.setProperty("--duration", `${Math.random() * 4 + 2}s`);
  star.style.setProperty("--delay", `${Math.random() * -5}s`);

  sky.appendChild(star);
}
/* ✦ Crear polvo cósmico ✦ */

const dustContainer = document.createElement("div");
dustContainer.className = "cosmic-dust";
dustContainer.setAttribute("aria-hidden", "true");
document.body.prepend(dustContainer);

for (let i = 0; i < 45; i++) {
  const particle = document.createElement("span");

  particle.className = "dust-particle";

  particle.style.setProperty("--x", `${Math.random() * 100}%`);
  particle.style.setProperty("--y", `${Math.random() * 100}%`);
  particle.style.setProperty("--size", `${Math.random() * 2 + 1}px`);
  particle.style.setProperty("--speed", `${Math.random() * 12 + 12}s`);
  particle.style.setProperty("--wait", `${Math.random() * -24}s`);
  particle.style.setProperty("--drift", `${Math.random() * 100 - 50}px`);

  dustContainer.appendChild(particle);
}


// ------------------------------------------
// 2. ENTRAR AL UNIVERSO
// ------------------------------------------

enterButton.addEventListener("click", () => {
  document.getElementById("memories").scrollIntoView({
    behavior: "smooth"
  });

  showToast("Bienvenida a nuestro pequeño universo :3 ");
});

// ------------------------------------------
// 3. RECUERDOS INTERACTIVOS
// PERSONALIZA ESTOS TEXTOS MÁS ADELANTE
// ------------------------------------------

const memories = [
  {
    title: "El inicio",
    text: "18/10/2025...Aquí empezó nuestra historia. Un encuentro que quizá parecía pequeño, pero que con el tiempo se convirtió en algo muy especial para mí."
  },
  {
    title: "Una coincidencia",
    text: "A vecez todavia no puedo creer que nos conocimos por una nota que puse y eso haya avanzado hasta estos momentos."
  },
  {
    title: "Un nuevo recuerdo",
    text: "Me gusta guardar los momentos que compartimos, incluso los más sencillos. Son esos pequeños instantes los que hacen especial estar contigo."
  },
  {
    title: "Mi lugar favorito",
    text: "No siempre hacen falta grandes planes. A veces, compartir un rato contigo ya hace que un día normal se vuelva un recuerdo bonito."
  },
  {
    title: "Lo que sigue",
    text: "Hoy es el día en que nos conocimos. No sé todos lo que viene, pero me alegra poder compartir esta parte de mi vida contigo zoe <3."
  }
];

const memoryNumber = document.getElementById("memoryNumber");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");

document.querySelectorAll("[data-memory]").forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.memory);
    const memory = memories[index];

    if (!memory) return;

    memoryNumber.textContent =
      `RECUERDO ${String(index + 1).padStart(2, "0")}`;

    memoryTitle.textContent = memory.title;
    memoryText.textContent = memory.text;

    memoryDialog.showModal();
  });
});

closeDialog.addEventListener("click", () => {
  memoryDialog.close();
});

memoryDialog.addEventListener("click", (event) => {
  if (event.target === memoryDialog) {
    memoryDialog.close();
  }
});

// ------------------------------------------
// 4. ABRIR LA CARTA Y ESCRIBIRLA
// ------------------------------------------


const message = `A veces pienso en lo curiosa que es la vida.

Hace un año todavía no sabía todas las cosas bonitas, random y demás que llegarían a mi vida después de conocerte. No sabía cuántos recuerdos terminaríamos creando, ni que una persona podría volverse tan especial simplemente siendo ella misma. Y es como fack, porque no sabía lo bonito que se puede sentir.

Por eso hice esto para ti. Quería crear algo bonito, aparte de que vamos a salir y azi, sabes kjkdsjk. WaaAA, me da mucho sentimiento haberte conocido, porque justo por estas mismas fechas tenía muchos problemas y sentía que mi mundo se estaba yendo a la mierda. Y aunque esos problemas no desaparecieron, el que llegaras a mi vida hizo que hubiera momentos bonitos en medio de todo eso.

Y creo que eso es algo que nunca te había dicho de esta manera.

Hace un año nunca me hubiera imaginado que una persona que apenas estaba conociendo se volvería alguien tan importante para mí. Me gusta la forma en que poco a poco nos fuimos acercando, cómo empezamos hablando de cosas que nos gustan y terminamos compartiendo momentos que ahora recuerdo con mucho cariño.

Desde nuestras conversaciones más random hasta las veces que hemos salido, ido al cine, visto mangas y todas esas pequeñas cosas que tal vez parecen simples, pero que para mí tienen algo especial porque las viví contigo.

Me gusta poder conocerte un poquito más cada día, conocer tus gustos, tus ocurrencias, tu forma de pensar y todas esas pequeñas cosas que te hacen ser tú. Y aunque todavía me falten muchísimas cosas por conocer de ti, espero poder seguir haciéndolo con el tiempo.

Y, si algún día llegas a tener un mal día, te sientes triste o simplemente necesitas distraerte un rato, espero que también puedas encontrar conmigo un lugar donde ser tú misma, hablar de cualquier cosa o simplemente pasar el rato sin tener que fingir nada.

Si pudiera volver a aquel día en el que te conocí, sabiendo todo lo que sé ahora, creo que volvería a hacerlo. Volvería a hablarte, volvería a conocerte y volvería a vivir todos esos momentos que nos trajeron hasta aquí. Porque, si algo tengo claro, es que me alegra muchísimo que nuestros caminos se hayan cruzado.

Y bueno, después de todo este texto jksdjks, creo que lo más importante es decirte gracias.

Gracias por aparecer en mi vida, por las conversaciones, por las risas, por los momentos que hemos compartido y por todas esas pequeñas cosas que quizás haces sin darte cuenta, pero que consiguen alegrarme el día.

Gracias por ser tú, Zoe. Por dejarme conocerte y por formar parte de mis recuerdos más bonitos de este último año.

Ojalá este sea solamente el principio de muchísimos recuerdos más, de nuevas aventuras, de canciones que algún día nos recuerden a nosotros, de películas que todavía nos falte ver y de momentos que aún no sabemos que vamos a vivir. Porque, entre tantas personas y tantas casualidades, tuve la suerte de conocerte.

Feliz primer año desde que nuestros caminos se cruzaron.

Atte.:
Bryan...`;


let letterOpened = false;
let typingTimer;

function typeWriter(text, element, speed = 35) {
  clearInterval(typingTimer);
  element.textContent = "";

  let index = 0;

  typingTimer = setInterval(() => {
    element.textContent += text.charAt(index);
    index++;

    if (index >= text.length) {
      clearInterval(typingTimer);
    }
  }, speed);
}

envelope.addEventListener("click", () => {
  if (letterOpened) return;

  letterOpened = true;
  envelope.setAttribute("aria-expanded", "true");
  envelope.classList.add("opened");

  showToast("Un mensaje escrito entre las estrellas...");

  setTimeout(() => {
    envelope.hidden = true;
    letter.hidden = false;

    typeWriter(message, letterBody);

    letter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 500);
});

// ------------------------------------------
// 5. EL SECRETO FINAL
// ------------------------------------------

secretButton.addEventListener("click", () => {
  finalSecret.hidden = false;
  secretButton.disabled = true;
  secretButton.textContent = "Secreto descubierto 🖤";

  finalSecret.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  showToast("Has descubierto el último secreto ✦");
});

// ------------------------------------------
// 6. VOLVER AL PRINCIPIO
// ------------------------------------------

document.getElementById("backToTop").addEventListener("click", () => {
  document.getElementById("home").scrollIntoView({
    behavior: "smooth"
  });
});

// ------------------------------------------
// 7. MENSAJES PEQUEÑOS EN PANTALLA
// ------------------------------------------

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// ------------------------------------------
// 8. PIANO AMBIENTAL GENERADO POR CÓDIGO
// No requiere archivos de audio externos
// ------------------------------------------

let audioContext = null;
let musicPlaying = false;
let musicTimer = null;
let nextNoteTime = 0;
let noteIndex = 0;

const melody = [
  [261.63, 329.63, 392.00],
  [220.00, 261.63, 329.63],
  [174.61, 220.00, 261.63],
  [196.00, 246.94, 293.66]
];

function playNote(frequency, startTime, duration, volume = 0.045) {
  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, startTime);

  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.025);
  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    startTime + duration
  );

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.05);
}

function scheduleMusic() {
  if (!musicPlaying || !audioContext) return;

  while (nextNoteTime < audioContext.currentTime + 0.8) {
    const chord = melody[noteIndex % melody.length];

    // Acordes suaves
    chord.forEach((frequency, index) => {
      playNote(
        frequency,
        nextNoteTime + index * 0.12,
        2.2,
        0.025
      );
    });

    // Notas agudas para dar una sensación de piano lejano
    const highNote = chord[1] * 2;

    playNote(
      highNote,
      nextNoteTime + 0.45,
      1.5,
      0.012
    );

    nextNoteTime += 2.5;
    noteIndex++;
  }

  musicTimer = setTimeout(scheduleMusic, 250);
}

async function toggleMusic() {
  try {
    if (!audioContext) {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContextClass) {
        showToast("Tu navegador no permite reproducir este audio.");
        return;
      }

      audioContext = new AudioContextClass();
    }

    if (!musicPlaying) {
      await audioContext.resume();

      musicPlaying = true;
      nextNoteTime = audioContext.currentTime + 0.1;

      scheduleMusic();

      musicToggle.textContent = "♫ Piano activado";
      musicToggle.setAttribute("aria-pressed", "true");
    } else {
      musicPlaying = false;
      clearTimeout(musicTimer);

      await audioContext.suspend();

      musicToggle.textContent = "♫ Activar piano";
      musicToggle.setAttribute("aria-pressed", "false");
    }
  } catch (error) {
    showToast("No se pudo activar el audio. Inténtalo de nuevo.");
  }
}

musicToggle.addEventListener("click", toggleMusic);
