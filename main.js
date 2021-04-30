function setCookie() {
  document.cookie = "cookies = allowed";
  console.log(document.cookie.split(';')[0]);
}

