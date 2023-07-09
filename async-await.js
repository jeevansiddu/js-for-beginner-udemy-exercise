//we use async await to run in a synchronous way
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
async function display() {
  try {
    const user = await login("jeevan", 123);
    console.log("logged in");
    const image = await getImage(user.name);
    console.log("image got");
    const title = await getImageTitle(image[0]);
    console.log(title);
  } catch (e) {
    console.log(e);
  }
}
async function work() {
  console.log("start");
  await display();
  console.log("end");
}

work();
