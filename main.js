var all_cookies = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});


function setCookie() {
  document.cookie = "cookie = allowed"
}
function removeCookie() {
  document.cookie = "cookie = declined"
}

if (all_cookies.cookie == "cookie = allowed") {
  document.getElementById("cookie-container").style.display = none;
}