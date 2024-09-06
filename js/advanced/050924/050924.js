function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Response promise 1");
    }, 2000);
  });
}
function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Response promise 2");
    }, 1500);
  });
}
function promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Response promise 3");
    }, 2500);
  });
}
function promise4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Response promise 4");
    }, 3000);
  });
}

/*promise1().then((data) => console.log(data));
promise2().then((data) => console.log(data));
promise3().then((data) => console.log(data));
promise4().then((data) => console.log(data));*/

Promise.all([promise4(), promise2(), promise1(), promise3()]).then(
  (arg) => {
    console.log("all", arg);
  },
  (error) => {
    console.log("caso reject all", error);
  }
);

Promise.race([promise4(), promise2(), promise1(), promise3()]).then(
  (arg) => {
    console.log("race", arg);
  },
  (error) => {
    console.log("caso reject race", error);
  }
);
