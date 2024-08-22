// naviagtion responsive
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
// navigation Responsive end here

// navigation scroll
// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scroll = $(window).scrollY();
//     if (scroll > 100) {
//       $(".navbar").css("background", "red");
//     } else {
//       $(".navbar").css("background", "radial-gradient(#fff, #ffd6d6)");
//     }
//   });
// });
// window.addEventListener("scroll", function () {
//   var header = document.querySelector(".navbar");
//   let windowPosition = window.scrollY > 0;
//   header.classList.toggle("scrolling-active", windowPosition);
// });
// navigation scroll end here

// counter js start here
const counters = document.querySelectorAll(".counter1");

counters.forEach((counter1) => {
  counter1.innerText = "0";

  const updateCounter = () => {
    const target = +counter1.getAttribute("data-target");
    const c = +counter1.innerText;
    const increment = Math.min(target - c, target / 250);
    if (c < target) {
      counter1.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 0.0001);
    }
  };
  updateCounter();
});
// counter js end here

//top scroll
mybutton = document.getElementById("myBtnn");
// navbar = document.getElementsByClassName("navbar");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // mybutton.style.display = "block";
    // navbar.style.backgroundColor = "red";
    // document.getElementsByClassName("navbar").style.backgroundColor = "lightblue";
  } else {
    // navbar.style.color = "red";
    // mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//top scroll end here

//form validation
function validateForm() {
  let namee = document.getElementById("name").value;
  let num = document.getElementById("num").value;
  let email = document.getElementById("email").value;

  if (namee != "" && !isNaN(namee)) {
    alert("Only character are allowed in Name");
  }
  if (num != "" && isNaN(num)) {
    alert("Character are not allowed in contact number");
  }
}
//form validation end here
