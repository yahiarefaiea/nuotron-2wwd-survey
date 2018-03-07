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

//  START SURVEY
function startSurvey() {
  $('.wrapper').removeClass('start').addClass('questions')
  $('#present li').removeAttr('class')
  setTimeout(function() {
    $('#start').removeAttr('style')
  }, 500)
}

//  DOCUMENT READY
$(document).ready(function() {
  $('#start').on('click', function(e) {
    if($('.wrapper').hasClass('survey')) startSurvey()
    e.preventDefault()
  })
})
