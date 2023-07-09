// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "ed" });
//     // reject(new Error("Not logged in"));
//   }, 3000);
// });

// promise
//   .then((user) => {
//     console.log(user.name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function login(email, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User came");
      resolve({ name: "jeevan" });
    }, 3000);
  });
}

function getImage(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Image came");
      resolve(["img1", "img2"]);
    }, 3000);
  });
}

function getImageTitle(image) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("title got");
      resolve("title of video");
    }, 3000);
  });
}

login("jeevan", "123")
  .then((user) => {
    console.log("user got");
    return getImage(user.name);
  })
  .then((image) => {
    console.log("Image got");
    console.log(image);
    return getImageTitle(image[0]);
  })
  .then((title) => {
    console.log(title);
  });

// login("jeevan", "123")
//   .then((user) => getImage(user.name))
//   .then((image) => getImageTitle(image[0]))
//   .then((title) => {
//     console.log(title);
//   });

// to run the promises all at the same time
const twitter = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: "jeevan" });
  }, 3000);
});
const fb = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: "fb" });
  }, 3000);
});

//one disadvantage is we get every data at the same time ., so
//we need to wait for the longest request to complete to get the whole data

// Promise.all([twitter, fb]).then((result) => console.log(result));
