// Code here!
// 1.
const hoodieOneH3 = document.querySelector("#hoodieOne");
hoodieOneH3.innerText = "Potato";
// 2.
const headerHome = document.querySelector("nav a");
headerHome.innerText = "Start";
// 3.
const contactInfo = document.querySelector("#contact");
contactInfo.innerText = "Mail Us";
//4.
const hoodieTwoInfo = document.querySelector(".art-2 p");
hoodieTwoInfo.innerText = "This hoodie is fire";
//5.
const hoodieOneButton = document.querySelector(".art-1 button");
hoodieOneButton.style.backgroundColor = "red";
hoodieOneButton.innerHTML = "<b>HELLO!</b>";
//6.
const hoodieOne = document.querySelector(".art-1 figure");
hoodieOne.style.backgroundColor = "rgb(199, 230, 195)";
//7.
const title = document.querySelector("title");
title.innerText = "DOM Shop";
//8.
const paragraphs = document.querySelectorAll("p");
for (let paras of paragraphs) {
  paras.style.backgroundColor = "rgb(130, 196, 123)";
}
//9.
const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.innerText = "Add to cart";
}
//10.
headerHome.classList.add("active");
//11.
const logo = document.querySelector("header img");
logo.classList.remove("logo");
//12.
const navBar = document.querySelector("nav");
const newNav = document.createElement("a");
newNav.innerText = "Menu";
navBar.prepend(newNav);
//13.
const main = document.querySelector("main");
const newProduct = (img, h2, h3, info) => {
  const newProductArticle = document.createElement("article");
  const newProductFigure = document.createElement("figure");
  const newElementIMG = document.createElement("img");
  const newH2 = document.createElement("h2");
  const newH3 = document.createElement("h3");
  const infoParagraph = document.createElement("p");
  newElementIMG.src = img;
  newH2.innerText = h2;
  newH3.innerHTML = h3;
  infoParagraph.innerText = info;
  main.append(newProductArticle);
  newProductFigure.append(newElementIMG);
  newProductArticle.append(newProductFigure, newH2, newH3, infoParagraph);
};
newProduct(
  "https://i.ibb.co/ft9qrCH/hoodie-forrest.png",
  "Sinus Hoodie",
  "Forrest",
  "Lorem ipsum"
);
/* newProduct(
//   "https://img.freepik.com/premium-psd/grey-hoodie-isolated-transparent-background_220739-91112.jpg?w=1380",
//   "Grey Hoodie",
//   "Grey",
//   "Random hoodie"
);*/

//14.
logo.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Found you!");
});
//15.
const articles = document.querySelectorAll("main article");
for (let article of articles) {
  article.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(`Hi, I'm article ${article.innerText}`);
  });
}
