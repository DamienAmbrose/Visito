//Allow .noatations from objects
var all_cookies = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});


//Do not show cookie pop up if cookie is allowed
     if (all_cookies.cookie == "allowed") {
        document.getElementById("cookie-container").style.display = "none";
      }


//Add and remove cookies
function setCookie() {
  document.cookie = "cookie=allowed expires=Fri, 1 Jan 2077 12:00:00 UTC; path=/";
  document.getElementById("cookie-container").style.display = "none";
}
function removeCookie() {
  document.cookie = "cookie=declined expires=Fri, 1 Jan 2077 12:00:00 UTC; path=/";
  document.getElementById("cookie-container").style.display = "none";
}

