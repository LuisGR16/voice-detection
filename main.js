import { validarPin } from "./validarPin.js";
let acceso = false;

const audio = document.getElementById('audio');

// Función para iniciar el reconocimiento de voz
export function startSpeechRecognition() {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'es-ES'; // Configura el idioma de reconocimiento

    recognition.onresult = function (event) {
        const result = event.results[event.results.length - 1];
        const command = result[0].transcript.trim().toLowerCase();

        console.log("Comando reconocido:", command);
        acceso = validarPin(command);
        if (acceso.valido) {
            audio.play();
            setTimeout(function() {
                window.location.href = "detección-de-voz/index.html?datos=" + encodeURIComponent(acceso.usuario);
            }, 2000);
        }
        
    }

    recognition.onend = function () {
        console.log("Reconocimiento de voz detenido. Reiniciando...");
        startSpeechRecognition(); // Reinicia el reconocimiento de voz para que esté siempre escuchando
    }

    recognition.start();
    console.log("Escuchando...");
    
}

// Iniciar el reconocimiento de voz al cargar la página
window.onload = startSpeechRecognition;