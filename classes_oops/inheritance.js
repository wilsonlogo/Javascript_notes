class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        return `${this.username} just Logged In`
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(courseName){
        return `${this.username} added a new course`
    }
}
const teacher1=new Teacher("Kakashi","ka@google.com","1234")
console.log(teacher1.logMe())
console.log(teacher1.addCourse())

const teacher2=new User("Guy")
console.log(teacher2.logMe())
// console.log(teacher2.addCourse()) // This will throw an error since User does not have addCourse method    

console.log(teacher1 instanceof Teacher)  // true
console.log(teacher1 instanceof User )   // true    
console.log(teacher2 instanceof Teacher)  // false
console.log(teacher2 instanceof User)    // true
console.log(teacher1 instanceof Object)   // true
console.log(teacher2 instanceof Object)   // true

console.log(teacher1.__proto__ === Teacher.prototype) // true
console.log(teacher1.__proto__.__proto__ === User.prototype) // true

console.log(teacher1.__proto__.__proto__.__proto__ === Object.prototype) // true
