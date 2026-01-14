const axios = require('axios');

async function main() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log("Broma de Chuck Norris:");
        console.log(response.data.value);
    } catch (error) {
        console.log("¡Ocurrió un error! No se pudo obtener la broma.");
        console.log("Detalle del error:", error.message);
    }
}

main();

