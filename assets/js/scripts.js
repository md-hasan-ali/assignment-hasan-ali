
document.getElementsByClassName("tab-click")[0].addEventListener("click", function () {
  document.getElementsByClassName("display-area")[0].style.display = "block";
  document.getElementsByClassName("display-area")[1].style.display = "none";
  document.getElementsByClassName("display-area")[2].style.display = "none";
  document.getElementsByClassName("display-area")[3].style.display = "none";

  document.getElementsByClassName("tab-click")[0].classList.add("active");
  document.getElementsByClassName("tab-click")[1].classList.remove("active");
  document.getElementsByClassName("tab-click")[2].classList.remove("active");
  document.getElementsByClassName("tab-click")[3].classList.remove("active");
});

document.getElementsByClassName("tab-click")[1].addEventListener("click", function () {
  document.getElementsByClassName("display-area")[1].style.display = "block";
  document.getElementsByClassName("display-area")[0].style.display = "none";
  document.getElementsByClassName("display-area")[2].style.display = "none";
  document.getElementsByClassName("display-area")[3].style.display = "none";

  document.getElementsByClassName("tab-click")[1].classList.add("active");
  document.getElementsByClassName("tab-click")[0].classList.remove("active");
  document.getElementsByClassName("tab-click")[2].classList.remove("active");
  document.getElementsByClassName("tab-click")[3].classList.remove("active");

});

document.getElementsByClassName("tab-click")[2].addEventListener("click", function () {
  document.getElementsByClassName("display-area")[2].style.display = "block";
  document.getElementsByClassName("display-area")[0].style.display = "none";
  document.getElementsByClassName("display-area")[1].style.display = "none";
  document.getElementsByClassName("display-area")[3].style.display = "none";

  document.getElementsByClassName("tab-click")[2].classList.add("active");
  document.getElementsByClassName("tab-click")[0].classList.remove("active");
  document.getElementsByClassName("tab-click")[1].classList.remove("active");
  document.getElementsByClassName("tab-click")[3].classList.remove("active");

});

document.getElementsByClassName("tab-click")[3].addEventListener("click", function () {
  document.getElementsByClassName("display-area")[3].style.display = "block";
  document.getElementsByClassName("display-area")[0].style.display = "none";
  document.getElementsByClassName("display-area")[1].style.display = "none";
  document.getElementsByClassName("display-area")[2].style.display = "none";

  document.getElementsByClassName("tab-click")[3].classList.add("active");
  document.getElementsByClassName("tab-click")[0].classList.remove("active");
  document.getElementsByClassName("tab-click")[1].classList.remove("active");
  document.getElementsByClassName("tab-click")[2].classList.remove("active");

});

var boxAnimation = document.getElementById('slider');
var opener = false;

function Slider() {
  if (!open) {
    slider.style.right = '1.7rem';


    slider.style.transition = "transform .1s linear 0s, left .1s linear 0s";
    setTimeout(() => {
      document.getElementById("trySlider").classList.add("ovro");

    });
    slider.style.background = "#FF7901";
    open = true;
  }
  else {
    slider.style.right = "0";
    slider.style.background = "white";
    setTimeout(() => {
      document.getElementById("trySlider").classList.remove("ovro");

    });
    slider.style.transition = 'transform .1s linear 0s, left .1s linear 0s';
    open = false;

  };
};

var dot_animation = document.getElementById('doter');
var doteropen = false;


function dotse() {
  if (!doteropen) {
    doter.style.left = '1.7rem';


    doter.style.transition = "transform .1s linear 0s, left .1s linear 0s";
    setTimeout(() => {
      document.getElementById("doTs").classList.add("tab");

    });
    doter.style.background = "white";
    doteropen = true;
  }
  else {
    doter.style.left = "0";
    doter.style.background = "#FF7901";
    setTimeout(() => {
      document.getElementById("doTs").classList.remove("tab");

    });
    doter.style.transition = 'transform .1s linear 0s, left .1s linear 0s';
    doteropen = false;

  };
};


var dot_animationS = document.getElementById('doterS');
var doteropenS = false;


function dotseS() {
  if (!doteropenS) {
    doterS.style.right = '1.7rem';
    doterS.style.transition = "transform .1s linear 0s, left .1s linear 0s";
    setTimeout(() => {
      document.getElementById("doTsS").classList.add("tabS");
    });
    doterS.style.background = "#FF7901";
    doteropenS = true;
  }
  else {
    doterS.style.right = "0";
    doterS.style.background = "white";
    setTimeout(() => {
      document.getElementById("doTsS").classList.remove("tabS");

    });
    doterS.style.transition = 'transform .1s linear 0s, left .1s linear 0s';
    doteropenS = false;

  };
};

var dot_animationSs = document.getElementById('doterSs');
var doteropenSs = false;


function dotseSs() {
  if (!doteropenSs) {
    doterSs.style.right = '1.7rem';


    doterSs.style.transition = "transform .1s linear 0s, left .1s linear 0s";
    setTimeout(() => {
      document.getElementById("doTsSs").classList.add("tabSs");

    });
    doterSs.style.background = "#FF7901";
    doteropenSs = true;
  }
  else {
    doterSs.style.right = "0";
    doterSs.style.background = "white";
    setTimeout(() => {
      document.getElementById("doTsSs").classList.remove("tabSs");

    });
    doterSs.style.transition = 'transform .1s linear 0s, left .1s linear 0s';
    doteropenSs = false;

  };
};


let menu = document.querySelector(".menu-bar-area");
let bars = document.querySelector(".mobile-menu");
bars.addEventListener('click', () => {
  menu.classList.toggle('close');
})

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-selected");
    }
  }
}

