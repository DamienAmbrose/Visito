document.cookie = "cookies = waiting";
function setCookie() {
  document.cookie = "cookies = allowed";
  console.log(document.cookie.split(';')[0]);
}

function removeCookie() {
  document.cookie = "cookies = declined";
  console.log(document.cookie.split(';')[0]);
}