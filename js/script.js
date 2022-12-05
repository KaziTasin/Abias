$('.counter').counterUp({
    delay: 10,
    time: 1000
});
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

$(".service-main").slick({
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "0",
  arrows: false,
  autoplay: true,
  autoplaySpeed: 600,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})

$("#process .item1").mouseenter(function(){
  $("#process .item1 .round").css("background","#CEBCFA")
  $("#process .item1 .round1").css("background","#CEBCFA")
  $("#process .line1").css("width","11%")
  $("#process .item1 h2").css("color","#BEA6F8")
})
$("#process .item1").mouseleave(function(){
  $("#process .item1 .round").css("background","transparent")
  $("#process .item1 .round1").css("background","transparent")
  $("#process .line1").css("width","0")
  $("#process .item1 h2").css("color","#2E2E2E")
})
$("#process .item2").mouseenter(function(){
  $("#process .item1 .round").css("background","#CEBCFA")
  $("#process .item1 .round1").css("background","#CEBCFA") 
  $("#process .item2 .round").css("background","#CEBCFA")
  $("#process .item2 .round1").css("background","#CEBCFA")
  $("#process .line1").css("width","39%")
  $("#process .item1 h2").css("color","#BEA6F8")
  $("#process .item2 h2").css("color","#BEA6F8")
})
$("#process .item2").mouseleave(function(){
  $("#process .item1 .round").css("background","transparent")
  $("#process .item1 .round1").css("background","transparent")
  $("#process .item2 .round").css("background","transparent")
  $("#process .item2 .round1").css("background","transparent")
  $("#process .line1").css("width","0")
  $("#process .item1 h2").css("color","#2E2E2E")
  $("#process .item2 h2").css("color","#2E2E2E")
})
$("#process .item3").mouseenter(function(){
  $("#process .item1 .round").css("background","#CEBCFA")
  $("#process .item1 .round1").css("background","#CEBCFA") 
  $("#process .item2 .round").css("background","#CEBCFA")
  $("#process .item2 .round1").css("background","#CEBCFA") 
  $("#process .item3 .round").css("background","#CEBCFA")
  $("#process .item3 .round1").css("background","#CEBCFA")
  $("#process .line1").css("width","63%")
  $("#process .item1 h2").css("color","#BEA6F8")
  $("#process .item2 h2").css("color","#BEA6F8")
  $("#process .item3 h2").css("color","#BEA6F8")
})
$("#process .item3").mouseleave(function(){
  $("#process .item1 .round").css("background","transparent")
  $("#process .item1 .round1").css("background","transparent")
  $("#process .item2 .round").css("background","transparent")
  $("#process .item2 .round1").css("background","transparent")
  $("#process .item3 .round").css("background","transparent")
  $("#process .item3 .round1").css("background","transparent")
  $("#process .line1").css("width","0")
  $("#process .item1 h2").css("color","#2E2E2E")
  $("#process .item2 h2").css("color","#2E2E2E")
  $("#process .item3 h2").css("color","#2E2E2E")
})

$("#process .item4").mouseenter(function(){
  $("#process .item1 .round").css("background","#CEBCFA")
  $("#process .item1 .round1").css("background","#CEBCFA") 
  $("#process .item2 .round").css("background","#CEBCFA")
  $("#process .item2 .round1").css("background","#CEBCFA") 
  $("#process .item3 .round").css("background","#CEBCFA")
  $("#process .item3 .round1").css("background","#CEBCFA") 
  $("#process .item4 .round").css("background","#CEBCFA")
  $("#process .item4 .round1").css("background","#CEBCFA")
  $("#process .line1").css("width","100%")
  $("#process .item1 h2").css("color","#BEA6F8")
  $("#process .item2 h2").css("color","#BEA6F8")
  $("#process .item3 h2").css("color","#BEA6F8")
  $("#process .item4 h2").css("color","#BEA6F8")
})
$("#process .item4").mouseleave(function(){
  $("#process .item1 .round").css("background","transparent")
  $("#process .item1 .round1").css("background","transparent")
  $("#process .item2 .round").css("background","transparent")
  $("#process .item2 .round1").css("background","transparent")
  $("#process .item3 .round").css("background","transparent")
  $("#process .item3 .round1").css("background","transparent")
  $("#process .item4 .round").css("background","transparent")
  $("#process .item4 .round1").css("background","transparent")
  $("#process .line1").css("width","0")
  $("#process .item1 h2").css("color","#2E2E2E")
  $("#process .item2 h2").css("color","#2E2E2E")
  $("#process .item3 h2").css("color","#2E2E2E")
  $("#process .item4 h2").css("color","#2E2E2E")
})


$("#service2 .port-main").slick({
  autoplay: true,
  fade: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})

$("#testi .test-slider").slick({
  arrows: false,
  fade: true,
  asNavFor: "#testi .test-slider2",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})
$("#testi .test-slider2").slick({
  arrows: true,
  nextArrow:'<i class="fa-solid fa-arrow-right-long hasan"></i>',
  prevArrow:'<i class="fa-solid fa-arrow-left-long tonu"></i>',
  slidesToShow: 5,
  centerMode: true,
  centerPadding:0,
  asNavFor: "#testi .test-slider",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})

$('.tt1').rProgressbar({
  percentage: 92,
});
$('.tt2').rProgressbar({
  percentage: 75,
});
$('.tt3').rProgressbar({
  percentage: 65,
});
$('.tt4').rProgressbar({
  percentage: 99,
});
$('.tt5').rProgressbar({
  percentage: 97,
});

$('.tt2').rProgressbar({
  percentage: 95,
});

$(".up-button i").click(function(){
  $("html,body").scrollTop("0");
})

$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".up-button i").fadeIn();
  }else{
    $(".up-button i").fadeOut();
  } 
  if($(window).scrollTop() > 300){
    $("nav").addClass("fix");
  }else{
    $("nav").removeClass("fix");
  }
})