var survey = {
  //  INITIALIZE
  init: function() {
    $('.wrapper').removeClass('start').addClass('questions')
    $('#present li').removeAttr('class')
    surveyListeners()
    this.navigate($('#navigation li:first-child a').attr('href'))
    setTimeout(function() {
      $('#present').remove()
    }, 500)
  },
  //  CHANGE HASH
  changeHash: function(hash) {
    window.location.hash = hash
  },
  //  NAVIGATE
  navigate: function(target) {
    if(target == 'previous' && $('#navigation li:first-child').hasClass('current')) return
    if(target == 'next' && $('#navigation li:last-child').hasClass('current')) return

    if(target == 'previous')
      target = $('#navigation .current').prev().find('a').attr('href')
    else if(target == 'next')
      target = $('#navigation .current').next().find('a').attr('href')

    item = $('#navigation a[href="'+target+'"]').parent()

    $('#navigation li').removeAttr('class')
    item.addClass('current')
    item.prevAll().addClass('achieved')
    item.nextAll().removeClass('achieved')

    var index = item.index() + 1
    $('#currentQuestion li').removeAttr('class')
    $('#currentQuestion li:nth-child('+index+')').addClass('current')

    var allQuestions = []
    for (i = 0; i < $('#navigation li').length; i++) {
      var name = $('#navigation li:nth-child('+(i+1)+') a').attr('href')
      allQuestions.push(name.split('#')[1])
    }
    $('.wrapper').removeClass(allQuestions.join(' ')).addClass(target.split('#')[1])

    this.changeHash(target)
  }
}

//  SURVEY LISTENERS
function surveyListeners() {
  $('#navigation a').on('click', function(e) {
    var target = $(this).attr('href')
    survey.navigate(target)
    e.preventDefault()
  })

  //  PREVIOUS
  $('#previous').on('click', function(e) {
    survey.navigate('previous')
    e.preventDefault()
  })

  //  NEXT
  $('#next').on('click', function(e) {
    survey.navigate('next')
    e.preventDefault()
  })

  //  KEYS
  $(document).keydown(function(event) {
    previousKey = 37, nextKey = 39

    //  PREVIOUS KEY
    if(event.ctrlKey && event.keyCode == previousKey) {
      survey.navigate('previous')
      event.preventDefault();
    }

    //  NEXT KEY
    if(event.ctrlKey && event.keyCode == nextKey) {
      survey.navigate('next')
      event.preventDefault();
    }
  })
}
