function runPresent() {
  $('.wrapper').addClass('present')
  var timeForEach = 1500

  function next() {
    var item = '#present li'
    var current = $(item+'.current')

    if(!$(item).hasClass('current')) {
      $(item+':first-child').addClass('current')
    } else {
      current.removeAttr('class').next().addClass('current')

      if(current.next().is('#p6')) {
        clearInterval(interval)
        $('.wrapper').removeClass('present').addClass('survey start')
      }
    }
  }

  next()
  var interval = setInterval(function() {
    next()
  }, timeForEach)

}
