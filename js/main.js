// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
 
//   $('.sliderItems').slick();
//   $('.sliderItems').slick({
//     rtl: true
//   });
// });

// var win= $(window).height(),
// uppernav= $('.upper-nav1').innerHeight();
// $('.head-sec').height(win-uppernav);
$('body').css('paddingTop',$('.upper-nav1').innerHeight());
$('[required]').blur(function(){
    if ($(this).val()==''){
        console.log('hi')
        $(this).next('span').fadeIn()
    }
   

})
$('[required]').focus(function(){
    if ($(this).val()==''){
        console.log('hi')
        $(this).next('span').fadeOut()
    }
   

})

var place=''
$('[placeholder]').focus(function(){
  place=$(this).attr('placeholder');
    $(this).attr('placeholder','')
})
.blur(function(){
    $(this).attr('placeholder',place)
})
$('#owl-carousel-1').owlCarousel({
    margin:10,
    loop:true,
    pagination:false,
    
    items:4,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
new WOW().init();

$(document).ready(function(){

 
  $('#owl-carousel-2').owlCarousel({
    loop:true,
    pagination:false,
    margin:10,
    
    center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$('#owl-carousel-3').owlCarousel({
    loop:true,
    pagination:false,
    
    autowidth:true,
    center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


//  var sub=` <div class="sub d-flex">
//  <div class="ul-hover">
// <ul>
//  <a class="therp">THERAPUTIC</a>
// <li><a href="" class="text-muted upper-case">type of message</a></li>
// <li><a href="" class="text-muted upper-case">type of message</a></li>
// <li><a href="" class="text-muted upper-case">type of message</a></li>



// <ul class="py-3">
//    <a class="therp">THERAPUTIC</a>
//  <li><a href="" class="text-muted upper-case">type of message</a></li>
//  <li><a href="" class="text-muted upper-case">type of message</a></li>
//  <li><a href="" class="text-muted upper-case">type of message</a></li>



//    </ul>
//  </ul>
// </div>
// <div class="ul-hover">
//    <ul class=>
//    <li class="therp"><p >THERAPUTIC</p></li>    
//      <li><a href="" class="text-muted upper-case">type of message</a></li>
//      <li><a href="" class="text-muted upper-case">type of message</a></li>
//      <li><a href="" class="text-muted upper-case">type of message</a></li>
//      <li><a href="" class="text-muted upper-case">type of message</a></li>
//      <li><a href="" class="text-muted upper-case">type of message</a></li>
//      <li><a href="" class="text-muted upper-case">type of message</a></li>
//      <li><a href="" class="text-muted upper-case">type of message</a></li>
//      <li><a href="" class="text-muted upper-case">type of message</a></li>
    

   
//        </ul>
//    </div>
//    <img src="img/thulmnails/dropdownimage.png" alt="" class="img-fluid">

 
// </div>`;

// $('.costum-nav .nav-item').mouseenter(function(){
// $('.sub').addClass('d-flex');


//   console.log('hi from custom nav')

// })
// $('.costum-nav .nav-item').mouseleave(function(){
  
//   })

});