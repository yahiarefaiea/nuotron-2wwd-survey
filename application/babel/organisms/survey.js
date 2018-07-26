var survey = {
  //  INITIALIZE
  init: function() {
    $(document).off('keydown')
    $('.wrapper').removeClass('start').addClass('questions')
    $('#present li').removeAttr('class')
    surveyListeners()
    this.questionsPush()
    this.navigate($('#navigation li:first-child a').attr('href'))
    setTimeout(function() {
      $('#present').remove()
    }, 500)
  },
  //  ALL QUESTIONS
  allQuestions: [],
  //  QUESTIONS PUSH
  questionsPush: function() {
    for (i = 0; i < $('#navigation li').length; i++) {
      var name = $('#navigation li:nth-child('+(i+1)+') a').attr('href')
      this.allQuestions.push(name.split('#')[1])
    }
  },
  //  CHANGE HASH
  changeHash: function(hash) {
    window.location.hash = hash
  },
  //  NAVIGATE
  navigate: function(target) {
    if(!$('.wrapper').hasClass('submiting')) {
      if(target == 'previous' && $('#navigation li:first-child').hasClass('current')) return
      if(target == 'next' && $('#navigation li:last-child').hasClass('current')) {
        this.submit()
        return
      }

      if(target == 'previous')
        target = $('#navigation .current').prev().find('a').attr('href')
      else if(target == 'next')
        target = $('#navigation .current').next().find('a').attr('href')

      var item = $('#navigation a[href="'+target+'"]').parent()
      var question = $('#questions > li[data-name="'+target.split('#')[1]+'"]')

      $('#navigation li').removeAttr('class')
      item.addClass('current')
      item.prevAll().addClass('achieved')
      item.nextAll().removeClass('achieved')

      $('#questions > li').removeAttr('class')
      question.addClass('current')

      var index = item.index() + 1
      $('#currentQuestion li').removeAttr('class')
      $('#currentQuestion li:nth-child('+index+')').addClass('current')

      $('.wrapper').removeClass(this.allQuestions.join(' ')).addClass(target.split('#')[1])

      //  BLUR AND FOCUS
      setTimeout(function() {
        $('*').blur()
        if(question.find('input[type=text], textarea').length) {
          setTimeout(function() {
            if(question.find('input[type=text], textarea').length == 1)
              question.find('input[type=text], textarea').focus()
            else
              question.find('.field:first-child').find('input[type=text], textarea').focus()
          }, 200)
        }
      }, 500)

      this.changeHash(target)
    }
  },
  //  PREPARED DATA
  preparedData: [],
  //  PREPARE
  prepare: function() {
    //  CLEAR EVERYTHING IN THE ARRAY
    this.preparedData = []

    //  LOOP THROUGH THE QUESTIONS
    for (var i = 0; i < $('#questions > li').length; i++) {
      var question = $('#questions > li:nth-child('+(i+1)+')')

      //  HANDLING QUESTIONTEXT
      var questionText = ''
      var questionTextSpans = question.find('.q span')
      for (var j = 0; j < questionTextSpans.length; j++) {
        questionText += questionTextSpans[j].innerHTML
        if((j+1) != questionTextSpans.length) questionText += ' '
      }

      //  HANDLING ANSWER
      var answer = question.find('input[type=text], textarea, input:radio:checked, input[type=range]').val()

      //  FALLBACK IF VALUE PASSED EMPTY
      var fallback = 'Passed empty..'
      if(answer == '' || answer === undefined) answer = fallback

      //  HANDLING WHAT HAPPENS IF DATA NAME WAS PLANET
      if(question.attr('data-name') == 'planet') {
        list = question.find('input[type=range]').siblings('ul')
        item = list.find('li:nth-child('+answer+')')
        answer = item.text()
      }

      //  HANDLING WHAT HAPPENS IF DATA NAME WAS MESSAGE
      if(question.attr('data-name') == 'message') {
        answer = []
        for (var j = 0; j < question.find('.field').length; j++) {
          var subQuestion = question.find('.field:nth-child('+(j+1)+')')
          var subAnswer = subQuestion.find('input[type=text]').val()

          //  FALLBACK IF VALUE PASSED EMPTY
          if(subAnswer == '' || subAnswer === undefined) subAnswer = fallback

          //  PUSH VALUES
          answer.push({
            name: subQuestion.find('input').attr('name'),
            question: subQuestion.find('input').attr('placeholder'),
            answer: subAnswer
          })
        }
      }

      //  PUSH VALUES
      this.preparedData.push({
        name: question.attr('data-name'),
        question: questionText,
        answer: answer
      })
    }
  },
  //  SUBMIT
  submit: function() {
    if(!$('.wrapper').hasClass('submiting')) {
      Nuotron.wait()
      $('#callback li:nth-child(1)').addClass('current')
      $('#questions > li').removeClass('current')
      $('.wrapper').addClass('submiting callback')

      this.prepare()
      var data = this.preparedData
      var that = this

      $.ajax({
        type: 'POST',
        url: 'includes/php/form.php',
        data: {dd: JSON.stringify(data)},
        dataType: 'json',
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          // //  HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
          // if(XMLHttpRequest.readyState == 4) {}
          // //  Network error (i.e. connection refused, access denied due to CORS, etc.)
          // else if(XMLHttpRequest.readyState == 0) {}
          // //  something weird is happening
          // else {}
          that.callback('error')
        },
        success: function(data) {
          that.callback(data.status)
        }
      })
    }
  },
  //  CALLBACK
  callback: function(status) {
    var that = this
    Nuotron.stop(function() {
      if(status == 'success') {
        $('.wrapper').addClass('success')
        history.pushState('', document.title, window.location.pathname)

        $('#land .text li').removeClass('current')
        setTimeout(function() {
          $('#land .text li:nth-child(2)').addClass('current')
          setTimeout(function() {
            $('#land .text li').removeClass('current')
            setTimeout(function() {
              $('#land .text li:nth-child(3)').addClass('current')
            }, 150)
          }, 4000)
        }, 150)

        setTimeout(function() {
          $(document).off('keydown')
          $('#survey, #nuotron, #callback').remove()
          $('.wrapper').removeClass('submiting questions ' + that.allQuestions.join(' '))
        }, 2000)
      } else {
        $('.wrapper').addClass('error')
        $('#callback li').removeClass('current')
        $('#callback li:nth-child(2)').addClass('current')
        setTimeout(function() {
          $('.wrapper').removeClass('submiting callback error')
          $('#callback li').removeClass('current')
          $('#questions > li:last-child').addClass('current')
        }, 4000)
      }
    })
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
    var tabKey = 9
    if(event.keyCode == tabKey) {
      if(event.shiftKey) survey.navigate('previous')
      else if(!$('#navigation li:last-child').hasClass('current')) survey.navigate('next')
      event.preventDefault()
    }
  })
}
