import { setUser } from './detección-de-voz/js/interpretCommand.js';
import { pines } from './users.js';

export const validarPin = input => {
    // Buscar el PIN dentro de la cadena de entrada utilizando una expresión regular
    const match = input.match(/\b\d{4,6}\b/); // Busca un número de 5 a 6 dígitos

    // Si se encuentra un PIN en la entrada del usuario
    if (match) {
        const pin = match[0]; // Obtener el PIN encontrado
        // Buscar el usuario correspondiente al PIN
        const usuario = pines.find(item => item.pin === pin);
        // Si se encuentra un usuario con el PIN
        if (usuario) {
            // Retornar un objeto con el resultado de la validación y el usuario correspondiente
            return { valido: true, usuario: usuario.usuario };
        }
    }

    // Retornar un objeto con el resultado de la validación (falso)
    return { valido: false };
};
