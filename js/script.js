const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/*============= Toggle Mobile Menu =============*/

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*============= Remove Mobile Menu =============*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}

navLink.forEach(event => event.addEventListener('click', linkAction));

/*============= Skills Tabs =============*/

const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((element) => {
    element.addEventListener('click', toggleSkills)
});

/*============= Qualification Tabs =============*/ 

const tabs = document.querySelectorAll('[data-target]');
const contents = document.querySelectorAll('[data-content]');
const work = document.querySelector('[data-target="#work"]');
const educ = document.querySelector('[data-target="#education"]');

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {

           if (tab !== educ) {
                educ.classList.remove("qualification__active");
                work.classList.add("qualification__active");
           } else {
                educ.classList.add("qualification__active");
                work.classList.remove("qualification__active");
           }
        
        const target = document.querySelector(tab.dataset.target)

        contents.forEach((content) => {
            content.classList.remove("qualification__active");
        })
        target.classList.add("qualification__active");
    })
})

/*=============  Services Modal =============*/

const modalViews = document.querySelectorAll('.services__modal')
const modalBtns = document.querySelectorAll('.services__button')
const modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*============= Portfolio Swiper =============*/

const swiperPortfolio = new Swiper('.portfolio__container', {
  // Optional parameters
  direction: 'horizontal',
  cssMode: true,
  loop: true,

  // Ppagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*============= Show Scroll Top =============*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higher than 500 viewport height, add the show-scroll class
    if (window.scrollY >= 500) { 
        scrollUp.classList.add('show-scroll');
    } else { 
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

/*============= Shadow Header after scroll =============*/

function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    if (window.scrollY >= 50) { 
        nav.classList.add('scroll-header');
    } else { 
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)

/*=============  Nav Sections Active Link =============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*============= Dark Light Mode =============*/

// Check if dark mode is enabled
// if it's enabled, we turn it off, if it's disabled, we turn it on
// Add or Remove the class dark-theme to the body
// Update darkMode in the localStorage

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#theme-button');

const deskAnimation = document.querySelector('#desk-animation');
const sleepAnimation = document.querySelector('#sleep-animation');

const enableDarkMode = () => {
    sleepAnimation.classList.add('sleep__animation');
    deskAnimation.classList.remove('svg__animated');
    document.getElementById("sleep-animation").style.display = "block";
    document.getElementById("desk-animation").style.display = "none";

    document.body.classList.add("dark-theme");
    darkModeToggle.classList.remove('uil-moon');
    darkModeToggle.classList.add('uil-sun');

    localStorage.setItem("darkMode", "enabled");

};

const disableDarkMode = () => {
    deskAnimation.classList.add('svg__animated');
    sleepAnimation.classList.remove('sleep__animation');
    document.getElementById("desk-animation").style.display = "block";
    document.getElementById("sleep-animation").style.display = "none";

    document.body.classList.remove("dark-theme");
    darkModeToggle.classList.remove('uil-sun');
    darkModeToggle.classList.add('uil-moon');

    localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
    enableDarkMode();
} else {
    disableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        document.getElementById("desk-animation").style.display = "none";
        document.getElementById("sleep-animation").style.display = "block";
        darkModeToggle.classList.add('uil-moon');
        enableDarkMode();
    } else {
        document.getElementById("sleep-animation").style.display = "none";
        document.getElementById("desk-animation").style.display = "block";
        darkModeToggle.classList.add('uil-sun');
        disableDarkMode();
   }
});


/*============= Contact Call Phone =============*/

function appelPhone() {
    var liens = document.getElementsByTagName('a');
    for (var i = 0; i < liens.length; ++i) {
        // boucle de verifier tous les elements (liens) qui ont une class compose
        // lui viser directement element class compose
        if (liens[i].className == 'compose') {
            liens[i].href = "tel:+33695979938";
            liens[i].onclick = function () {
                window.location(this.href);
                return false;
            }
        }
    }
}
window.onload = appelPhone();

/*============= Loader =============*/

window.addEventListener('load', () => {
  document.querySelector('.loader-container').style.display ="none";
});

/*============= Dark Light Mode #2 =============*/

// const darkModeToggle = document.querySelector('#theme-button');
// const darkTheme = 'dark-theme';
// const sunIcon = 'uil-sun';

// Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme');
// const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => { document.body.classList.contains(darkTheme) ? 'dark' : 'light'; }
// const getCurrentIcon = () => { darkModeToggle.classList.contains(sunIcon) ? 'uil-moon' : 'uil-sun'; }

// We validate if user previously chose a topic
// if (selectedTheme) {
//     If the validation is fullfilled, we ask what the issue was to know if we activate
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     darkModeToggle.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](sunIcon)
// }

// Activate / deactivate the theme manually with the button
// darkModeToggle.addEventListener('click', () => {
//     Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     darkModeToggle.classList.toggle(sunIcon)
//     We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// });

// /*============= Testimonial Swiper =============*/

// let swiperTestimonial = new Swiper('.testimonial__container', {
//     loop: true,
//     grabCursor: true,

//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//     },
// });