const small = 767;
const medium = 992;
const large = 1300;

const cKey = 67;
const bKey = 66;
const sKey = 83;
const escapeKey = 27;

const isMobile = $(window).width() <= medium ? true : false;

$('.partners-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: medium,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
      }
    }
  ]
});

$('.media-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: medium,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
      }
    }
  ]
});

if (isMobile) {
  $('.icons-wrapper').slick({
    centerMode: true,
    variableWidth: true
  })
}

var leftBeer = bodymovin.loadAnimation({
  container: document.getElementById('beer-left'),
  path: '../lottie/beer-left.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Left Beer Animation",
})

var rightBeer = bodymovin.loadAnimation({
  container: document.getElementById('beer-right'),
  path: '/lottie/beer-right.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Right Beer Animation"
})

var pie = bodymovin.loadAnimation({
  container: document.getElementById('pie'),
  path: '/lottie/pie.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Pie Animation"
})

var logoAnim = bodymovin.loadAnimation({
  container: document.getElementById('logo'),
  path: '/lottie/logo.json',
  renderer: 'svg',
  autoplay: false,
  name: "Logo Animation"
})

var headerBee = bodymovin.loadAnimation({
  container: document.getElementById('header-bee'),
  path: '/lottie/header-bee.json',
  renderer: 'svg',
  autoplay: false,
  name: "Header Bee Animation"
})

var code = bodymovin.loadAnimation({
  container: document.getElementById('code-animation'),
  path: '/lottie/code.json',
  renderer: 'svg',
  autoplay: false,
  name: "Code Animation",
})

var beerPage = bodymovin.loadAnimation({
  container: document.getElementById('beer-page'),
  path: '/lottie/beer-left.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Page Beer Animation"
})

// var iPhone = bodymovin.loadAnimation({
//   container: document.getElementById('iphone'),
//   path: '../lottie/iphone-bee-intro.json',
//   renderer: 'svg',
//   autoplay: false,
//   name: "iPhone Animation"
// })

var lids = bodymovin.loadAnimation({
  container: document.getElementById('lids'),
  path: '/lottie/lids.json',
  renderer: 'svg',
  autoplay: false,
  name: "Lids Animation"
})

var pageBee = bodymovin.loadAnimation({
  container: document.getElementById('page-bee'),
  path: '/lottie/page-bee.json',
  renderer: 'svg',
  autoplay: true,
  loop: true,
  name: "Page Bee Animation"
})

$(function() {

  logoAnim.addEventListener('DOMLoaded', function() {
    logoAnim.play();
    setTimeout(function() {
      headerBee.play();
    }, 2000)
  });

  headerBee.addEventListener('complete', function() {
    $('#header-bee').removeClass('active');
    $('#page-bee').addClass('active');
  })

  $('[data-open-popup]').click(e => openPopup($(e.target).attr('data-open-popup')));

  $('.close-popup').click(closePopup);

  document.addEventListener('keyup', function(e) {
    const keyCode = e.keyCode;
    if (keyCode == escapeKey) {
      closePopup();
    } else if (keyCode == cKey) {
      openPopup('company');
    } else if (keyCode == bKey) {
      openPopup('buzzz');
    } else if (keyCode == sKey) {
      openPopup('science');
    }
  })

});

function openPopup(popupName) {
  $(`[data-popup=${popupName}]`).fadeIn().addClass('active');
}

function closePopup() {
  $('.popup.active').fadeOut();
}

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = elem.offset().top;
  var elemBottom = elemTop + elem.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


// Bee scrolling path
const tl = gsap.timeline({paused: true});


if (isMobile) {
  tl.to("#page-bee", {left: '0.6vh', rotation: 65, duration: .5});
  tl.to("#page-bee", {left: '0.8vh', rotation: 100, duration: 1});
  tl.to("#page-bee", {left: '0.6vh', rotation: 140, duration: 1});
  tl.to("#page-bee", {left: '0.5vh', rotation: 165, duration: 1});
  tl.to("#page-bee", {left: '0.6vh', rotation: 65, duration: 1});
  tl.to("#page-bee", {left: '0.4vh', rotation: 130, duration: 1});
  tl.to("#page-bee", {left: '0.4vh', rotation: 165, duration: 3});
  tl.to("#page-bee", {left: 'calc(50vw - 190px)', rotation: 0, duration: 1});
} else {
  tl.to("#page-bee", {left: '50vh', rotation: 65, duration: .5});
  tl.to("#page-bee", {left: '70vh', rotation: 100, duration: 1});
  tl.to("#page-bee", {left: '60vh', rotation: 140, duration: 1});
  tl.to("#page-bee", {left: '30vh', rotation: 165, duration: 0.5});
  tl.to("#page-bee", {left: '40vh', rotation: 65, duration: 1});
  tl.to("#page-bee", {left: '20vh', rotation: 130, duration: 0.5});
  tl.to("#page-bee", {left: '20vh', rotation: 165, duration: 2});
  tl.to("#page-bee", {left: 'calc(50vw - 324px)', top: '49.964vh', rotation: 0, onComplete: toggleIphone, duration: 1});
  tl.to("#page-bee", { duration: 1});
}

function toggleIphone() {
  // $('#page-bee').removeClass('active');
  // $('#iphone').addClass('active');
  // iPhone.play();
}


window.addEventListener('scroll', _.throttle(function(){
  var pos = getVerticalScrollPercentage(document.body)/100;
  if ( pos < .50) {
    tl.progress(pos*2);
  }

  if (!codePlayed && isScrolledIntoView(codeEle)) {
    code.play();
    codePlayed = true;
  }

  if (!lidsPlayed && isScrolledIntoView(lidsEle)) {
    lids.play();
    lidsPlayed = true;
  }
}, 100));

function getVerticalScrollPercentage( elm ){
  var p = elm.parentNode
  return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
}

// starting animations

const codeEle = $('#code-animation');
let codePlayed = false;
const lidsEle = $('#lids');
let lidsPlayed = false;
