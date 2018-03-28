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
          Pops.init()
          $('.wrapper').addClass('start')
          $('#land .text li:first-child').addClass('current')
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

//  DOCUMENT READY
$(document).ready(function() {
  $('#start').on('click', function(e) {
    if($('.wrapper').hasClass('survey start')) survey.init()
    e.preventDefault()
  })

  $(document).keydown(function(event) {
    enterKey = 13
    if(event.keyCode == enterKey && $('.wrapper').hasClass('survey start')) {
      survey.init()
      event.preventDefault()
    }
  })
})
