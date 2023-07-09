function login(email, pass, callback) {
  setTimeout(() => {
    console.log("User got");
    callback({ user: "jeevan" });
  }, 3000);
}

function getImage(email, callback) {
  setTimeout(() => {
    console.log("Image got");
    callback(["img1", "img2"]);
  }, 2000);
}

function getImageTitle(image, callback) {
  setTimeout(() => {
    console.log("title got");
    callback("title of video");
  }, 2000);
}

//callback hell
console.log("start");
const user = login("jeevan", "123", (user) => {
  console.log("user came");
  getImage(user, (image) => {
    console.log("Image came");
    getImageTitle(image[0], (title) => {
      console.log(title);
    });
  });
});

console.log("end");
