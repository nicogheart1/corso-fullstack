function fetchDataFromAPI() {
  const promise = new Promise((resolve, reject) => {
    const data = { name: "John", age: 30 };
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
  promise.then((data) => {
    console.log(data);
  });
}

fetchDataFromAPI();
