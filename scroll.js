var i = 0;
(function scroll () {
  if (paramName == 1) {
    return
  }
  i++
  window.scrollTo(0, 9999999)
  setTimeout(scroll, 900)
})()