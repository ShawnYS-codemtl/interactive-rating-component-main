const submit_btn = document.querySelector('#submit');


let rating = 1;

function storeVar(el) {
    rating = el.value;
  } 

function submit_rating(){ 
    window.location.href='thankyou.html';
}

submit_btn.addEventListener('click', submit_rating);



