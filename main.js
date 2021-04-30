var all_cookies = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});


  $(function(){
    setInterval(oneSecondFunction, 1000);
    });
    
    function oneSecondFunction() {
      if (all_cookies.cookie != "cookie = declined") {
        document.getElementById("cookie-container").style.display = block;
      } else if (all_cookies.cookie != "cookie = allowed") {
        document.getElementById("cookie-container").style.display = none;
      }
    }


function setCookie() {
  document.cookie = "cookie = allowed";
  document.getElementById("cookie-container").style.display = none;
}
function removeCookie() {
  document.cookie = "cookie = declined";
  document.getElementById("cookie-container").style.display = none;
}

