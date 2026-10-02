document.body.style.cssText = "margin:0px";
let men = ["Home", "About", "Service", "Contact"];
let head = document.createElement("header");
let contenHead = document.createElement("div");
contenHead.className = "content";

head.appendChild(contenHead);

let myh1 = document.createElement("h1");
myh1.style.cssText = "color:#0ba83fe2";

let textH = document.createTextNode("Ahmed");
myh1.appendChild(textH);
contenHead.appendChild(myh1);

let menu = document.createElement("ul");
menu.id = "menu";

for (let i = 0; i < men.length; i++) {
  let myli = document.createElement("li");
  let link = document.createElement("a");
  link.setAttribute("href", "#");
  let linktxt = document.createTextNode(`${men[i]}`);
  link.appendChild(linktxt);
  myli.appendChild(link);
  menu.appendChild(myli);
  link.style.cssText = " text-decoration: none ; color:#818080f4; ";
}
contenHead.appendChild(menu);

document.body.append(head);

//cssHeader
let cscontent = document.querySelector(".content");
cscontent.style.cssText =
  "display: flex; justify-content: space-between; align-items: center;";

let csmenu = document.getElementById("menu");

csmenu.style.cssText = "display: flex; list-style: none; gap: 15px;";

//main content

let mcontent = document.createElement("div");
mcontent.className = "main";

for (let i = 0; i <= 14; i++) {
  let productBox = document.createElement("div");
  productBox.className = "product";

  let productNum = document.createElement("span");
  productNum.textContent = i + 1;

  let productText = document.createTextNode("Product");

  productBox.appendChild(productNum);
  productBox.appendChild(document.createElement("br"));
  productBox.appendChild(productText);

  mcontent.appendChild(productBox);
  productBox.style.cssText =
    "padding: 20px; background-color: white; border: 1px solid #ddd; text-align: center; color: #888;";
  productNum.style.cssText = "color:black; font-size: 25px; font-weight: bold;";
}

document.body.appendChild(mcontent);
mcontent.style.cssText =
  "display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 20px; background-color: #ececec;";

//Foooter
let myfooter = document.createElement("footer");
let footerText = document.createTextNode("Copyright 2026");

myfooter.appendChild(footerText);
document.body.appendChild(myfooter);
myfooter.style.cssText =
  "color: white; background-color: #077331; text-align:center;padding:20px";
