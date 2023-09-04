let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let bigimg = document.querySelector("#bigimg");
let mcontleft = document.querySelector("#mcontleft");

function setimgprop() {
  bigimg.style.marginTop = "-4rem";
  bigimg.style.marginRight = "10rem";
  bigimg.style.height = "98%";
  bigimg.style.transform = "rotate(-20deg)";
}

img1.addEventListener("click", function (e) {
  mcontleft.style.backgroundColor = "brown";
  bigimg.src = "images/img1.png";
  setimgprop();
  console.log(e);
});

img2.addEventListener("click", function (e) {
  mcontleft.style.backgroundColor = "rgb(217, 185, 185)";
  bigimg.src = "images/img2.png";
  setimgprop();
  console.log(e);
});

img3.addEventListener("click", function (e) {
  mcontleft.style.backgroundColor = "#CF4A72";
  bigimg.src = "images/img3.png";
  setimgprop();

  console.log(e);
});
