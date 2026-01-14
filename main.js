const axios = require('axios');

async function main() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log("Broma de Chuck Norris:");
        console.log(response.data.value);
    } catch (error) {
        console.log("Error al obtener datos:", error.message);
    }
}

main();
