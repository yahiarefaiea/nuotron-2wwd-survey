function runPresent() {
  $('.wrapper').addClass('present')
  var item = '#present li',
      current, time
  function next() {
    if(!$(item).hasClass('current')) {
      current = $(item+':first-child')
      current.addClass('current')
    } else {
      current = $(item+'.current').next()
      current.addClass('current').prev().removeAttr('class')

      if(current.is(':last-child')) {
        $('.wrapper').removeClass('present').addClass('survey')
        $('#start').css('display', 'block')

        setTimeout(function() {
          $('.wrapper').addClass('start')
        }, 500)
        return
      }
    }

    time = 1000 * current.attr('data-time')
    setTimeout(next, time)
  }
  next()
}
