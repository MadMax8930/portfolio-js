// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/script.js":[function(require,module,exports) {
var navMenu = document.getElementById('nav-menu');
var navToggle = document.getElementById('nav-toggle');
var navClose = document.getElementById('nav-close');
/*============= Toggle Mobile Menu =============*/

if (navToggle) {
  navToggle.addEventListener('click', function () {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', function () {
    navMenu.classList.remove('show-menu');
  });
}
/*============= Remove Mobile Menu =============*/


var navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(function (event) {
  return event.addEventListener('click', linkAction);
});
/*============= Skills Tabs =============*/

var skillsContent = document.getElementsByClassName('skills__content');
var skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  var itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }

  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}

skillsHeader.forEach(function (element) {
  element.addEventListener('click', toggleSkills);
});
/*============= Qualification Tabs =============*/

var tabs = document.querySelectorAll('[data-target]');
var contents = document.querySelectorAll('[data-content]');
var work = document.querySelector('[data-target="#work"]');
var educ = document.querySelector('[data-target="#education"]');
tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    if (tab !== educ) {
      educ.classList.remove("qualification__active");
      work.classList.add("qualification__active");
    } else {
      educ.classList.add("qualification__active");
      work.classList.remove("qualification__active");
    }

    var target = document.querySelector(tab.dataset.target);
    contents.forEach(function (content) {
      content.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");
  });
});
/*=============  Services Modal =============*/

var modalViews = document.querySelectorAll('.services__modal');
var modalBtns = document.querySelectorAll('.services__button');
var modalCloses = document.querySelectorAll('.services__modal-close');

var modal = function modal(modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach(function (modalBtn, i) {
  modalBtn.addEventListener('click', function () {
    modal(i);
  });
});
modalCloses.forEach(function (modalClose) {
  modalClose.addEventListener('click', function () {
    modalViews.forEach(function (modalView) {
      modalView.classList.remove('active-modal');
    });
  });
});
/*============= Portfolio Swiper =============*/

var swiperPortfolio = new Swiper('.portfolio__container', {
  // Optional parameters
  direction: 'horizontal',
  cssMode: true,
  loop: true,
  // Ppagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
/*============= Show Scroll Top =============*/

function scrollUp() {
  var scrollUp = document.getElementById('scroll-up'); //When the scroll is higher than 500 viewport height, add the show-scroll class

  if (window.scrollY >= 500) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);
/*============= Shadow Header after scroll =============*/

function scrollHeader() {
  var nav = document.getElementById('header'); // When the scroll is greater than 50 viewport height, add the scroll-header class

  if (window.scrollY >= 50) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);
/*=============  Nav Sections Active Link =============*/

var sections = document.querySelectorAll('section[id]');

function scrollActive() {
  var scrollY = window.pageYOffset;
  sections.forEach(function (current) {
    var sectionHeight = current.offsetHeight;
    var sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);
/*============= Dark Light Mode =============*/
// Check if dark mode is enabled
// if it's enabled, we turn it off, if it's disabled, we turn it on
// Add or Remove the class dark-theme to the body
// Update darkMode in the localStorage

var darkMode = localStorage.getItem("darkMode");
var darkModeToggle = document.querySelector('#theme-button');

var enableDarkMode = function enableDarkMode() {
  document.body.classList.add("dark-theme");
  darkModeToggle.classList.remove('uil-moon');
  darkModeToggle.classList.add('uil-sun');
  localStorage.setItem("darkMode", "enabled");
};

var disableDarkMode = function disableDarkMode() {
  document.body.classList.remove("dark-theme");
  darkModeToggle.classList.remove('uil-sun');
  darkModeToggle.classList.add('uil-moon');
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

if (darkMode === null) {
  disableDarkMode();
}

darkModeToggle.addEventListener("click", function () {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    darkModeToggle.classList.add('uil-moon');
    enableDarkMode();
    console.log(darkMode);
  } else {
    darkModeToggle.classList.add('uil-sun');
    disableDarkMode();
    console.log(darkMode);
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
      };
    }
  }
}

window.onload = appelPhone();
/*============= Loader =============*/

window.addEventListener('load', function () {
  document.querySelector('.loader-container').style.display = "none";
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

/*============= Animated Blob =============*/
// // Define an array of colors
// const colors = ['#B6D2F9','#C981EA','#112b39'];
// // Select the SVG paths
// var blobs = document.querySelectorAll("path");
// // Randomly apply colors to the SVG fill property
// blobs.forEach(blob => {
//   blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
// });
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54106" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map