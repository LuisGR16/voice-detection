import { insertarJson } from './sendData.js';
import { arrRoom, arrCamera, arrCurtains, arrGarden, arrAlarm, arrFan, arrHall, arrTrue, arrFalse } from './variables.js';

// Obtenemos el usuario a través del url
const urlParams = new URLSearchParams(window.location.search);
const user = urlParams.get('datos');

const txtOrder = document.getElementById('txt-order');

export const setUser = ( usuario ) => {
    user = usuario;
}

// Función para interpretar los comandos de voz
// Importar las variables necesarias desde otros archivos si es necesario

export function interpretCommand(result) {
    // Eliminar puntos y comas del resultado
    result = result.replace(".", "");
    result = result.replace(",", "");

    // Dividir el resultado en palabras
    let arrResult = result.split(/\s+/);

    // Verificar si "helen" está presente en el resultado
    if ( arrResult.includes( "helen" ) ) {

        if ( arrResult.some( palabra => arrTrue.includes( palabra ) ) ) {

            // Si encontró una palabra similar a recámara
            if ( arrResult.some( palabra => arrRoom.includes( palabra ) ) ) {
                insertarJson( "Encendiendo luz de la recámara", result, user );
                txtOrder.textContent = "Encendiendo luz de la recámara";
            }
            // Si encontró una palabra similar a sala
            if ( arrResult.some( palabra => arrHall.includes( palabra ) ) ) {
                insertarJson( "Encendiendo luz de la sala", result, user );
                txtOrder.textContent = "Encendiendo luz de la sala"
            }
            // Si encontró una palabra similar a jardín
            if ( arrResult.some( palabra => arrGarden.includes( palabra ) ) ) {
                insertarJson( "Encendiendo luces del jardín", result, user );
                txtOrder.textContent = "Encendiendo luces del jardín"
            }
            // Si encontró una palabra similar a ventilador
            if ( arrResult.some( palabra => arrFan.includes( palabra ) ) ) {
                insertarJson( "Encendiendo el ventilador", result, user );
                txtOrder.textContent = "Encendiendo el ventilador"
            }
            // Si encontró una palabra similar a cortinas
            if ( arrResult.some( palabra => arrCurtains.includes( palabra ) ) ) {
                insertarJson( "Abriendo las cortinas", result, user );
                txtOrder.textContent = "Abriendo las cortinas"
            }
            // Si encontró una palabra similar a alarma
            if ( arrResult.some( palabra => arrAlarm.includes( palabra ) ) ) {
                insertarJson( "Activando la alarma", result, user );
                txtOrder.textContent = "Activando la alarma"
            }
            // Si encontró una palabra similar a cámaras
            if ( arrResult.some( palabra => arrCamera.includes( palabra ) ) ) {
                insertarJson( "Encendiendo cámaras de seguridad", result, user );
                txtOrder.textContent = "Encendiendo cámaras de seguridad"
            }


        } else if ( arrResult.some( palabra => arrFalse.includes( palabra ) ) ) {
                
            // Si encontró una palabra similar a recámara
            if ( arrResult.some( palabra => arrRoom.includes( palabra ) ) ) {
                insertarJson( "Apagando luz de la recámara", result, user );
                txtOrder.textContent = "Apagando luz de la recámara"
            }
            // Si encontró una palabra similar a sala
            if ( arrResult.some( palabra => arrHall.includes( palabra ) ) ) {
                insertarJson( "Apagando luz de la sala", result, user );
                txtOrder.textContent = "Apagando luz de la sala"
            }
            // Si encontró una palabra similar a jardín
            if ( arrResult.some( palabra => arrGarden.includes( palabra ) ) ) {
                insertarJson( "Apagando luces del jardín", result, user );
                txtOrder.textContent = "Apagando luces del jardín"
            }
            // Si encontró una palabra similar a ventilador
            if ( arrResult.some( palabra => arrFan.includes( palabra ) ) ) {
                insertarJson( "Apagando el ventilador", result, user );
                txtOrder.textContent = "Apagando el ventilador"
            }
            // Si encontró una palabra similar a cortinas
            if ( arrResult.some( palabra => arrCurtains.includes( palabra ) ) ) {
                insertarJson( "Cerrando las cortinas", result, user );
                txtOrder.textContent = "Cerrando las cortinas"
            }
            // Si encontró una palabra similar a alarma
            if ( arrResult.some( palabra => arrAlarm.includes( palabra ) ) ) {
                insertarJson( "Desactivando la alarma", result, user );
                txtOrder.textContent = "Desactivando la alarma"
            }
            // Si encontró una palabra similar a cámaras
            if ( arrResult.some( palabra => arrCamera.includes( palabra ) ) ) {
                insertarJson( "Apagando cámaras de seguridad", result, user );
                txtOrder.textContent = "Apagando cámaras de seguridad"
            }
            
        }

    }
    
    /* else {
        orderResultDiv.innerHTML = `<p>Orden desconocida, intenta de nuevo</p>`;
    } */
}


