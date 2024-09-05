/*
Crea una catena di Promises per simulare un'operazione asincrona in più fasi.
-La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }.
-La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].
-Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.
*/

function displayValue(valueToDisplay) {
  console.log(valueToDisplay);
}

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = { id: 1, name: "John" };
      resolve(response);
    }, 2000);
  });
}

function fetchUserPosts(userId, userName) {
  console.log("Recupero post utente", userId, userName);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = ["Post 1", "Post 2", "Post 3"];
      resolve(response);
    }, 2000);
  });
}

fetchUserData().then((userData) => {
  fetchUserPosts(userData.id, userData.name).then((userPosts) => {
    displayValue(`${userData.name}, ${userPosts.join(", ")}`);
  });
});
