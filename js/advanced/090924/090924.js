/*
  function somma(a,b) {
    return a + b;
  }

  const result = somma(5,6);

  console.log(result);
  */

async function somma(a, b) {
  return a + b;
}

somma(5, 6).then((result) => console.log(result));

function promise1() {
  return new Promise((resolve, reject) => {
    console.log(pippo);
    setTimeout(() => {
      resolve("Response promise 1");
    }, 2000);
  });
}

//const asyncPromise1Arrow = async (a,b) => a + b;

async function asyncPromise1() {
  try {
    const response = await promise1();
    return response;
  } catch (error) {
    console.log("mi trovo qui", error);
  }
}

asyncPromise1();

/*promise1().then((result) => {
  console.log("result promise1", result);
});

asyncPromise1().then((result) => {
  console.log("result asyncPromise1", result);
}, (rej) => console.log("error", rej))
.catch((error) => console.log("error", error))*/

function promise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Response promise 1");
      }, 2000);
    });
  }

async function getAllData() {
    try {
      const response = await Promise.all([promise1(), promise1(), promise1(), promise1()]);
      console.log("qui ho la response all", response);
    } catch (err) {
      console.log(err);
    }
  }
  
  async function test() {
    try {
      await getAllData();
      console.log("getAllData completata")
      return "ciao";
    } catch (err) {
      console.log(err)
    }
  }
  
  test().then(prova => console.log(prova));
