// navbar
var nav = document.querySelector('nav');
window.addEventListener('scroll',function(){
    if (window.pageYOffset > 100){
        
        nav.classList.add('bg-dark','shadow');
    }
    else{
        nav.classList.remove('bg-dark');
    }
})


// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({
//         items:1,
//         loop:true,
//         nav:true,
//         dots:true,
//         autoplay:true,
//         autoplaySpeed:1000,
//         smartSpeed:1500,
//         autoplayHoverPause:true
//     });
// });


// $('.home-slider').owlCarousel({
//     loop:true,
//     autoplay:true,
//     margin:10,
//     nav:true,
//     autoplayHoverPause:true,
//     items:1,
//     animateOut: 'fadeOut',
//     animateIn: 'fadeIn',
//     navText:["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
//     responsive:{
//       0:{ items:1,
//         nave: false
//       },
//       600:{ items:1,
//         nave: false
//       },
//       1000:{ items:1,
//         nave: true
//       }
//     }


// })

// let lightImg = document.querySelector(".light-img");
// let viewBtn = document.querySelectorAll(".view-btn");

// viewBtn.forEach(el => {
//   el.addEventListener("click", () => {
//     document.body.classList.add("effect");
//     let imgSrc = el.getAttribute("data-src");
//     lightImg.src = imgSrc;
//   });
// });

// window.addEventListener("click", event => {
//   if(event.target.className == "box-wrapper" || event.target.className == "close-btn") {
//     document.body.classList.remove("effect");
//   }
// })
