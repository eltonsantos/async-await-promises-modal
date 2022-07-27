// Criar uma promessa
const myPromise = new Promise((resolve, reject) => {
  const nome = "Elton";

  if (nome === "Elton") {
    resolve(`Usuário ${nome} encontrado`);
  } else {
    reject(`Usuário ${nome} não encontrado`);
  }
});

// Chamando uma promessa
myPromise.then((data) => {
  console.log(data);
});

//////////////////////////////////////
// Encadeamento de thens
const myPromise2 = new Promise((resolve, reject) => {
  const nome = "Teste";

  if (nome === "Teste") {
    resolve(`Usuário ${nome} Encontrado`);
  } else {
    reject(`Usuário ${nome} Não Encontrado`);
  }
});

myPromise2.then((data) => {
            return data.toLowerCase();
          })
          .then((dataModificada) => {
            console.log(dataModificada);
          });

//////////////////////////////////////
// Tratamento de promises
const myPromise3 = new Promise((resolve, reject) => {
  const nome = "Rose";

  if (nome === "Rose") {
    resolve(`Usuário ${nome} Encontrado`);
  } else {
    reject(`Usuário ${nome} Não Encontrado`);
  }
});

myPromise3.then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log("Aconteceu um erro: " + err);
          });

//////////////////////////////////////
// Resolvendo varias promessas
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 OK");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  resolve("p2 OK");
});

const p3 = new Promise((resolve, reject) => {
  resolve("p3 OK");
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data);
});

console.log("Console apos o resolveAll")

//////////////////////////////////////
// Resolvendo varias promessas com Race
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p4 OK");
  }, 3000);
});

const p5 = new Promise((resolve, reject) => {
  resolve("p5 OK");
});

const p6 = new Promise((resolve, reject) => {
  resolve("p6 OK");
});

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
  console.log(data);
});

//////////////////////////////////////
// Fetch request na API di Github
// Fetch API
const username = "eltonsantos";

fetch(`https://api.github.com/users/${username}`, {
  method: "GET",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
}).then((response) => {
  console.log(typeof response);
  console.log(response);
  return response.json();
}).then((data) => {
  console.log(`O nome do usuário é: ${data.name}`);
}).catch((err) => {
  console.log(`Houve algum erro: ${err}`);
});