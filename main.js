//Allow .noatations from objects
var all_cookies = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});


//Do not show cookie pop up if cookie is allowed



  if (all_cookies.cookie == "allowed") {
    alert("Why?");
  } 






//Add and remove cookies
function setCookie() {
  document.cookie = "cookie=allowed; expires=Fri, 1 Jan 2077 12:00:00 UTC; path=/";
  document.getElementById("cookiemonster").style.display = 'none';
}
function removeCookie() {
  document.getElementById("cookiemonster").style.display = 'none';
}

