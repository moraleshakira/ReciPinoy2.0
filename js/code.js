let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}

const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1)=> {
    star.addEventListener("click",() =>{

        stars.forEach((star,index2) =>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        });
    });


});

/////////LOAD MORE///////////
let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 5;

loadMoreBtn.onclick =() =>{
    let boxes = [...document.querySelectorAll('.discov-container .discov-box')]
    for (var i = currentItem;i < currentItem + 5; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 5;
}
///////LOAD MORE END///////

////////SCROLL//////
