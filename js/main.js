

$('.last__news_slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    nextArrow:'<i class="icon-Rarrowright last__news_arrow_right"></i>',
	prevArrow: '<i class="icon-Rarrowleft last__news_arrow_left"></i>',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 555,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  
/*  carts bottom  slider   */
$('.project__slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  nextArrow:'<i class="icon-Rarrowright last__news_arrow_right"></i>',
  prevArrow: '<i class="icon-Rarrowleft last__news_arrow_left"></i>',
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 555,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
/*  carts bottom  slider   */

/*  header navigation  slider   */

$('.header__navigation_ul').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  slidesToShow: 7,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows:false,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows:false,
      }
    },
    {
      breakpoint: 555,
      settings: {
        arrows:false,
      }
    }
  ]
});

/*  header navigation  slider   */



/*  cart all slider   */
$('.cart_page_slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  nextArrow:'<i class="icon-Rarrowright carts_page_arrow_right"></i>',
prevArrow: '<i class="icon-Rarrowleft carts_page_arrow_left"></i>',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 555,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/*  cart all slider   */

/*  history all slider   */
$('.history__photogallery_block').slick({
  dots: false,
  infinite: false,
  speed: 300,
  nextArrow:'<i class="icon-Rarrowright history_page_arrow_right"></i>',
  prevArrow: '<i class="icon-Rarrowleft history_page_arrow_left"></i>',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 555,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


/*  history all slider   */

/*  header search  class active */
const search = document.querySelector('.call__input');
const exitSearch = document.querySelector('.search__exit');
const searchHeader = document.querySelector('.search__header');

if(search) {
  search.addEventListener('click', function() {
    searchHeader.classList.toggle('active')
  })
};

if(exitSearch) {
  exitSearch.addEventListener('click', function() {
    searchHeader.classList.remove('active')
  })
};
/*  header search  class active */


/*  header menu  class active */
const burger = document.querySelector('.burger');
const headerExit = document.querySelector('.header__nav_exit');
const headerNav = document.querySelector('.header__nav');
const bodyy = document.querySelector('body')

if(burger) {
  burger.addEventListener('click', function() {
    headerNav.classList.toggle('active');
    bodyy.classList.toggle('active');
  })
};

if(headerExit) {
  headerExit.addEventListener('click', function() {
    headerNav.classList.remove('active')
    bodyy.classList.remove('active');
  })
};
/*  header menu  class active */



/*  header navigation link class active */
let btns = document.getElementsByClassName("header__navigation_links");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");


    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
};

/*  header navigation link class active */


/* carts main inner link anchor */

$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 1000, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });

      return false;
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Show/hide menu on scroll
  //if (scrollDistance >= 850) {
  //		$('nav').fadeIn("fast");
  //} else {
  //		$('nav').fadeOut("fast");
  //}

  // Assign active class to nav links while scolling
  $('.section2').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.right__navigation_ul a.active').removeClass('active');
          $('.right__navigation_ul a').eq(i).addClass('active');
      }
  });
}).scroll();

/* carts main inner link anchor */




/* carts header inner link anchor */
$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });

      return false;
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Show/hide menu on scroll
  //if (scrollDistance >= 850) {
  //		$('nav').fadeIn("fast");
  //} else {
  //		$('nav').fadeOut("fast");
  //}

  // Assign active class to nav links while scolling
  $('.section2').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.header__navigation_ul a.active').removeClass('active');
          $('.header__navigation_ul a').eq(i).addClass('active');
      }
  });
}).scroll();

/* carts header inner link anchor */


  
/* history header inner link anchor */
$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });

      return false;
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Show/hide menu on scroll
  //if (scrollDistance >= 850) {
  //		$('nav').fadeIn("fast");
  //} else {
  //		$('nav').fadeOut("fast");
  //}

  // Assign active class to nav links while scolling
  $('.section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.history__right_navigation_ul a.active').removeClass('active');
          $('.history__right_navigation_ul a').eq(i).addClass('active');
      }
  });
}).scroll();

/* history header inner link anchor */


/*  history years sticky   */
let right = document.getElementById("rightnavigation");
let stop = (right.offsetTop - 200);

window.onscroll = function (e) {
    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(scrollTop, right.offsetTop);
    // right.offsetTop;

    if (scrollTop >= stop) {
      right.className = 'stick';
    } else {
      right.className = '';
    }

};

/*  history years sticky   */







/* активный при скролле  */




