console.log("👋 Hello World!");

console.log("Tâche 1");
console.log("Tâche 2");
console.log("Tâche 3");

// setTimeout(() => {
//     console.log("Opération terminée !");
// }, 2000);

console.log("Tâche 4");

// function operationAsynchrone_1(callback) {
//     console.log("Début de l'opération...");
//     setTimeout(() => {
//         console.log("Opération_1 terminée !");
//         fin();
//     }, 2000); // Simule une opération qui prend 2 secondes
// }

// function fin() {
//     console.log("Je suis appelé après l'opération asynchrone.");
// }

// callback

// Promise Async Await

function operationAsynchrone_2() {
    return new Promise((resolve, reject) => {
        console.log("Début de l'opération...");
        setTimeout(() => {
            const success = true; // On peut imaginer un succès ou un échec
            if (success) {
                resolve("Opération_2 réussie !");
            } else {
                reject("Opération échouée !");
            }
        }, 2000);
    });
}

// operationAsynchrone_2()
//     .then((result) => console.log(result)) // Gérer le succès
//     .catch((error) => console.log(error)); // Gérer l'échec

function operationAsynchrone() {
    return new Promise((resolve, reject) => {
        console.log("Début de l'opération...");
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Opération réussie !");
            } else {
                reject("Opération échouée !");
            }
        }, 2000);
    });
}

async function login() {
    try {
        const result = await operationAsynchrone();
        console.log(result);
        // appel d'autres fonctions....
    } catch (error) {
        console.log(error);
    }
}

// login();

async function fetchData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        console.log(res);

        const data = await res.json();
        console.table(data);
        title.textContent = data.title;
    } catch (error) {
        console.log("Erreur lors de la récupération des données", error);
    }
}

fetchData();

// axios
