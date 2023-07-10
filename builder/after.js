class User {
  constructor(name, { email, phone, address } = {}) {
    //this method is used in placed where there is many optional parameters
    // if no object is passed we initialize it to empty object
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }
}

const user = new User("jeevan", { age: 18, address: "mig-2" });
