function primeiraFuncao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Esperou isso aqui");
      resolve();
    }, 3000);
  })
}

async function segundaFuncao() {
  console.log("Iniciou");
  await primeiraFuncao();
  console.log("Terminou");
}

segundaFuncao(); 

// PRÁTICA
function getUser(id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
        .then(data => data.json())
        .catch(err => console.log(err));
}

async function showUserName(id) {
  try {
    const user = await getUser(id);
    console.log(user);
    console.log(`O nome de usuário é ${user.data.first_name}`);
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

showUserName(3);