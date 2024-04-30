// Variables de las acciones
// true
const arrOpen = [
    "abre",
    "abrir",
    "desplegar",
    "despliega",
    "levanta",
    "levantar",
    "sube",
    "subir",
    "subirlas"
];

const arrOn = [
    "activar",
    "activa",
    "arrancar",
    "arranca",
    "conectar",
    "conecta",
    "dar luz",
    "encender",
    "encendido",
    "enciende",
    "hacer funcionar",
    "iluminar",
    "ilumina",
    "iniciar",
    "inicia",
    "poner en funcionamiento",
    "poner en marcha",
    "prender",
    "prende",
];

const arrActive = [
    "activa",
    "activar",
    "arrancar",
    "arranca",
    "conectar",
    "conecta",
    "encender",
    "enciende",
    "habilitar",
    "habilita",
    "iniciar",
    "inicia",
    "pon en marcha",
    "poner activo",
    "poner en actividad",
    "poner en funcionamiento",
];

// false

const arrOff = [
    "apaga",
    "apagar",
    "cerrar",
    "cierra",
    "dejar sin corriente",
    "desactiva",
    "desactivar",
    "desconectar",
    "desconecta",
    "desenergizar",
    "desenergiza",
    "detener",
    "deten",
    "extinguir",
    "extingue",
];
const arrClose = [
    "bajar las persianas",
    "bajar los estores",
    "bajar",
    "baja",
    "bajarlas",
    "cerrarlas",
    "cierra",
    "descender",
    "desciende",
    "desplegar",
    "despliega",
    "ocultar la vista",
    "ocultar",
    "oculta",
];

const arrDesactive = [
    "apagar",
    "apaga",
    "cerrar",
    "cierra",
    "desactivar la función",
    "desactivar",
    "desactiva",
    "desconectar",
    "desconecta",
    "detener",
    "detén",
    "finalizar",
    "finaliza",
    "inhabilitar",
    "inhabilita",
    "parar",
    "para",
  ];


// variables de los lugares

const arrRoom = [
    "habitación",
    "recámara",
    "dormitorio",
    "alcoba",
    "cuarto",
    "dormitorio",
    "cuarto de dormir",
    "cuarto de descanso",
    "pieza",
    "aposento"
];

const arrHall = [
    "salón",
    "sala",
    "estancia",
    "sala de estar",
    "sala de recepción",
    "cuarto de estar",
    "sala de reuniones",
];

const arrGarden = [
    "jardín",
    "huerto",
    "patio",
    "parque",
    "vergel",
    "campo",
    "prado",
    "arboreto",
    "terreno",
    "parterre",
    "plaza",
    "campo abierto"
];

const arrFan = [
    "abanicador",
    "abanicar",
    "aireador",
    "ventifactor",
    "ventifáctor",
    "ventifactorio",
    "ventífico",
    "ventilación",
    "ventilador eléctrico",
    "ventilador",
    "ventiladora",
    "ventolero",
];

const arrCurtains = [
    "cortínas",
    "cortesinas",
    "cortinados",
    "cortinajes",
    "cortinas",
    "estores",
    "gabardinas",
    "persianas",
    "tapices",
    "telones",
    "toldos",
    "visillos",
    "voladizos"
];

const arrAlarm = [
    "alarma",
    "alerta",
    "aviso",
    "señal de alarma",
    "sirena",
    "timbre",
    "aviso sonoro",
    "sistema de alerta",
    "aviso de emergencia"
];

const arrCamera = [
    "cámaras",
    "cámara",
    "videocámara",
    "cámara de vídeo",
    "cámara de filmar",
    "cámara de grabación",
    "cámara de cine",
    "cámara fotográfica",
    "cámara de fotos",
    "cámara de imágenes",
    "cámara de vigilancia",
    "cámara de seguridad",
    "cámara de circuito cerrado"
];

// Arreglos Unidos
// True
const arrTrue = arrOn.concat( arrOpen, arrActive );
// False
const arrFalse = arrOff.concat( arrClose, arrDesactive );

export { arrRoom, arrCamera, arrCurtains, arrGarden, arrAlarm, arrFan, arrHall, arrTrue, arrFalse };