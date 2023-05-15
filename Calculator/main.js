let numbers = document.querySelectorAll('.butt');
let input = document.querySelector('.glavniInput');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus')
let multiply = document.querySelector('.multiply');
let devide = document.querySelector('.devide');
let equal = document.querySelector('.equal');
let ac = document.querySelector('.ac')
let de = document.querySelector('.de')
let tacka = document.querySelector('.tacka');



for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click',function(e){

        let numValue = input.value += e.target.innerText
        input.style.background = 'grey';
       
    })
}



plus.addEventListener('click',function(e){
    if(!input.value ==""){
        if(input.value.toString().slice(-1) !== '+' && input.value.toString().slice(-1) !== '-' && input.value.toString().slice(-1) !== '*' && input.value.toString().slice(-1) !== '/' && input.value.toString().slice(-1) !== '.'){
          input.value += "+"
        }
      }
})
minus.addEventListener('click',function(){
    input.style.background = 'grey';
    if(input.value.toString().slice(-1) !== '+' && input.value.toString().slice(-1) !== '-' && input.value.toString().slice(-1) !== '*' && input.value.toString().slice(-1) !== '/'  && input.value.toString().slice(-1) !== '.'){
        input.value += "-"
      
    }
    
    
})
multiply.addEventListener('click',function(){
    if(!input.value==""){
        if(input.value.toString().slice(-1) !== '+' && input.value.toString().slice(-1) !== '-' && input.value.toString().slice(-1) !== '*' && input.value.toString().slice(-1) !== '/'  && input.value.toString().slice(-1) !== '.'){
            input.value += "*"
          
          }
    }
})

devide.addEventListener('click',function(){
    if(!input.value==""){
        if(input.value.toString().slice(-1) !== '/'){
            
            if(input.value.toString().slice(-1) !== '+' && input.value.toString().slice(-1) !== '-' && input.value.toString().slice(-1) !== '*' && input.value.toString().slice(-1) !== '/'  && input.value.toString().slice(-1) !== '.'){
                input.value += "/"
              }
          }
    }
})

equal.addEventListener('click',function(){
    if(input.value !== ''){
   input.value = eval(input.value)
    }
})

ac.addEventListener('click',function(){
    input.value = ''
})

de.addEventListener('click',function(){
    input.value = input.value.toString().slice(0,-1);
})
tacka.addEventListener('click',function(){    
    if(input.value !== ''){
        if(input.value.toString().slice(-1) !== '+' && input.value.toString().slice(-1) !== '-' && input.value.toString().slice(-1) !== '*' && input.value.toString().slice(-1) !== '/' && input.value.toString().slice(-1) !== "."){
            input.value += "."
          }
    }
   
    

})



