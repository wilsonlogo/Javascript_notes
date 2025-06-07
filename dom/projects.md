# Project Related To Dom
## Project links
[Click Here](https://stackblitz.com/edit/vitejs-vite-b61pcvgh?file=1-color_changer%2Fjs_code.js)

## Solution to Projects
### Project-1

``` javascript
const button = document.querySelectorAll(".button")
const body=document.querySelector("body")

button.forEach(function(buttons){
  console.log(buttons)
  buttons.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id==='grey'){
      body.style.backgroundColor="grey"
    }
    if(e.target.id==='white'){
      body.style.backgroundColor="white"
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor="blue"
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor="yellow"
    }
  })
})
```
### Project-2
```javascript
const form = document.querySelector("form")

form.addEventListener("submit",function(e){
  e.preventDefault()
  const height=parseInt(document.getElementById("height").value)
  const weight=parseInt(document.getElementById("weight").value)
  const result=document.getElementById("results")

  if(height == " " || height<0 || isNaN(height)){
    console.log("Please Enter the Valid Height")
  }
  else if(weight == " " || weight<0 || isNaN(weight)){
    console.log("Please Enter the Valid weight")
  }else{
    const bmi=(weight / ((height*height)/10000)).toFixed(2)
    result.innerHTML=`<span>${bmi}</span>`
  }
  
})
```

### Project-3
```javascript
const clock=document.getElementById("clock")

setInterval(function(){
  const time=new Date()
  clock.innerHTML=time.toLocaleTimeString()
},1000)
```


