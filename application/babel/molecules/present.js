function runPresent() {
  $('.wrapper').addClass('present')
  timeForEach = 1500

  function next() {
    item = '#present li'
    current = $(item+'.current')

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
  interval = setInterval(function() {
    next()
  }, timeForEach)

}
