const promiseOne = new Promise(function (resolve, reject) {
    // do async task 
    // such as network call , cryptography , DB calls
    setTimeout(function () {
        resolve()
        console.log("Async task is completed")
    }, 1000)
})
promiseOne.then(function () {
    console.log("Promise comsumed")
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve()
        console.log("Async 2 completed")
    }, 1000)
}).then(function () {
    console.log("Promise 2 consumed")
})

const promiseThree = new Promise(function (resolve, regret) {
    setTimeout(function () {
        resolve({ username: "Jack Sparrow", password: 123 })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user)
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Jac Wilson", Age: 123 })
        }
        else {
            reject("Err:")
        }
    }, 1000)
})
promiseFour.
    then((user) => {
        console.log(user)
        return user.username
    }).
    then((username) => {
        console.log(username)
    }).
    catch((error) => {
        console.log(error)
    }).
    finally(() => {
        console.log("Promise is either resolved or rejected")
    })

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Jac Wilson", Gender: "Male" })
        }
        else {
            reject("Err: Something went Wrong")
        }
    }, 1000)
})

async function consumePromise() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise()

// async function allUsers() {
//     try {
//         const response = await fetch("https://randomuser.me/api/")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// allUsers()

fetch("https://randomuser.me/api/").
then((response)=>{
    return response.json()
}).
then((data)=>{
    console.log("Data :",data)
}).
catch((error)=>{
    console.log(error)
})