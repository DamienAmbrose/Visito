document.cookie = "cookies = waiting";

if (document.cookie.split(';')[0] == "cookies = allowed") {
  document.getElementById("cookie-container").style.display = "none";
}

function setCookie() {
  document.cookie = "cookies = allowed";
  console.log(document.cookie.split(';')[0]);
}

function removeCookie() {
  document.cookie = "cookies = declined";
  console.log(document.cookie.split(';')[0]);
}