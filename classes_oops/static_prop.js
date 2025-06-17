class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        return `${this.username} just Logged In`;
    }

    static createId(){
        return "123"
    }
}

const user1 = new User("Naruto");
console.log(user1.logMe()); // Naruto just Logged In
console.log(User.createId()); // 123    
console.log(user1.createId()); // This will throw an error since createId is a static method and cannot be called on an instance 