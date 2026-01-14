async function main() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        console.log("Broma de Chuck Norris:");
        console.log(data.value);
    } catch (error) {
        console.log("¡Ocurrió un error! No se pudo obtener la broma.");
        console.log("Detalle del error:", error.message);
    }
}

main();

