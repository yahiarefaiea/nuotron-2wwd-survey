function runPresent() {
  $('.wrapper').addClass('present')
  var item = '#present li',
      current, time

  //  NEXT FUNCTION
  function next() {
    if(!$(item).hasClass('current')) {
      //  IF THERE ISN'T A `CURRENT` CLASS
      current = $(item+':first-child')
      current.addClass('current')
    } else {
      //  IF THERE IS A `CURRENT` CLASS
      current = $(item+'.current').next()
      current.addClass('current').prev().removeAttr('class')

      //  IF REACHED THE END OF THE LIST
      if(current.is(':last-child')) {
        $('.wrapper').removeClass('present').addClass('survey')
        $('#start').css('display', 'block')

        setTimeout(function() {
          $('.wrapper').addClass('start')
        }, 500)
        return
      }
    }

    //  RUN NEXT FUNCTION AGAIN
    time = 1000 * current.attr('data-time')
    setTimeout(next, time)
  }
  next()
}
