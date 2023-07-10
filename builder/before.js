class User {
  constructor(name, email, phone, address) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }
}

//here only name is must other three are optional

const user1 = new User("jeevan", undefined, undefined, "mig-3"); // to set user with only name and address
const user2 = new User("jeevan", "2012109@gmail.com", undefined, "mig-3"); // set with email address and name
const user3 = new User("jeevan", undefined, "123456678", undefined); //set with name phone

//this is so tiresomw this is why we brought the builder pattern method
