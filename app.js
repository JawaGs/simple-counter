let number = document.querySelector("#numero");

const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
const increase = document.querySelector("#increase");

decrease.addEventListener('click', function(){
    number.innerHTML = number.innerHTML - 1
})

reset.addEventListener('click', function(){
    number.innerHTML = 0
})

increase.addEventListener('click', function(){
    number.innerHTML = parseInt(number.innerHTML) + 1
})