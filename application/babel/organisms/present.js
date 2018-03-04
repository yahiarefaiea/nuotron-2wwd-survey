function runPresent() {
  $('.wrapper').addClass('present')
  var item = '#present li',
      current
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
    setTimeout(next, current.attr('data-time'))
  }
  next()
}
