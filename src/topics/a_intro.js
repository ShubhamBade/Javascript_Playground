// javascript can change html content
document.getElementById("h1Text").innerHTML = "Javascript Introdction";
// we can style element as well
document.getElementById("h1Text").style.fontSize = "40px";
// we can write javascript in <script /> tag as well please refer index.html
// we can write javscript code in header, body and external js files

// this function get called after button get pressed
function welcome() {
  console.log("Welcome to js");
}

welcome()