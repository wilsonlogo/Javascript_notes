const user={
    username : "Jack Sparrow",
    LoginCount : 8,
    LoggedIn : true,
    getUserDetails : function(){
        // console.log(`Usename : ${this.username}`)
        // console.log(this)
    }
}
// console.log(this)

// console.log(user.LoggedIn)
// console.log(user.getUserDetails())


function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    // this.greeting=function(){
    //     console.log(`Welcome ${this.username}`)
    // }
    return this
}
const userone=new User("Naruto",5,true)
const usertwo=new User("Sasuke",2,false)
console.log(userone.constructor)
console.log(usertwo)

