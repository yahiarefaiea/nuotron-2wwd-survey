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
  //  REACTIONS
  reactions: [
    {
      name: 'Bad',
      mouth: 'M17,73c-3.3-18,22.8-14.7,31,0',
      leftEye: 'M15,58c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1s-1,0.4-1,1C14,57.6,14.4,58,15,58',
      rightEye: 'M25,55c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1s-1,0.4-1,1C24,54.6,24.4,55,25,55'
    }, {
      name: 'Unhappy',
      mouth: 'M12,57c15.8-10.5,35.8-12.8,60-7',
      leftEye: 'M22,41c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C20,40.1,20.9,41,22,41',
      rightEye: 'M55,39c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C53,38.1,53.9,39,55,39'
    }, {
      name: 'Natural',
      mouth: 'M12,51c20-2.3,40-4.6,60-7',
      leftEye: 'M17,39c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C15,38.1,15.9,39,17,39',
      rightEye: 'M59,37c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C57,36.1,57.9,37,59,37'
    }, {
      name: 'Satisfied',
      mouth: 'M12,43c23.6,6.9,43.6,4.6,60-7',
      leftEye: 'M12,32c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C10,31.1,10.9,32,12,32',
      rightEye: 'M60,32c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C58,31.1,58.9,32,60,32'
    }, {
      name: 'Amazed',
      mouth: 'M12,45c10.9,29.4,48.7,26.7,60-15',
      leftEye: 'M14,25c1.1,0,2-2.2,2-5c0-2.8-0.9-5-2-5s-2,2.2-2,5C12,22.8,12.9,25,14,25',
      rightEye: 'M62,29c1.1,0,2-2.2,2-5c0-2.8-0.9-5-2-5s-2,2.2-2,5C60,26.8,60.9,29,62,29'
    }
  ],
  //  CHANGE REACTIONS
  changeReactions: function(value) {
    var reaction = this.reactions[value - 1]
    var mouth = $('#nucubuc .mouth')
    var leftEye = $('#nucubuc .leftEye')
    var rightEye = $('#nucubuc .rightEye')

    function createAnimation(obj, to) {
      var animate = obj.find('animate')
      animate.attr({
        from: obj.attr('d'),
        to: to
      })
      animate[0].beginElement()
      obj.attr('d', to)
    }

    createAnimation(mouth, reaction.mouth)
    createAnimation(leftEye, reaction.leftEye)
    createAnimation(rightEye, reaction.rightEye)
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
      else if(target == 'next') {
        target = $('#navigation .current').next().find('a').attr('href')
        if($('.wrapper').hasClass('impressionNow')
        && $('#questions > li[data-name="impressionNow"] input:checked').val() == 'Nope') {
          target = '#value'
        }
      }

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

      if(target == '#feeling')
        survey.changeReactions($('#questions > li[data-name="feeling"] input').val())

      //  BLUR AND FOCUS
      $('*').blur()
      if(question.find('input[type=text], textarea').length) {
        setTimeout(function() {
          if(question.find('input[type=text], textarea').length == 1)
            question.find('input[type=text], textarea').focus()
          else
            question.find('.field:first-child').find('input[type=text], textarea').focus()
        }, 500)
      }

      this.changeHash(target)
    }
  },
  //  SUBMIT
  submit: function() {
    if(!$('.wrapper').hasClass('submiting')) {
      iterationCount()
      $('#callback li:nth-child(1)').addClass('current')
      $('#questions > li').removeClass('current')
      $('.wrapper').addClass('submiting')

      //  SEND REQUEST HERE
      var status = 'success'
      this.callback(status)
    }
  },
  //  CALLBACK
  callback: function(status) {
    var that = this
    $('.wrapper').addClass('callback')
    iterationClear()

    setTimeout(function() {
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
          $('#survey, #nucubuc, #callback').remove()
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
    }, 1500)
  }
}

//  SURVEY LISTENERS
function surveyListeners() {
  $('#navigation a').on('click', function(e) {
    var target = $(this).attr('href')
    survey.navigate(target)
    e.preventDefault()
  })

  //  REACTIONS
  $('#questions > li[data-name="feeling"] input').on('change', function() {
    survey.changeReactions($(this).val())
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
