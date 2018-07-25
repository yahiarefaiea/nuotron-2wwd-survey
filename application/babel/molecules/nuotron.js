var Nuotron = {
  duration: 1200 * 4 - 150,
  iteration: 0,
  processing : false,
  enough : false,
  interval: null,
  callback : null,
  selector : '#nuotron .dot, #nuotron .dot:before',

  //  WAIT
  wait: function() {
    if(Nuotron.processing != true) {
      Nuotron.processing = true
      $('body').addClass('waiting')
      Nuotron.waiting()
      Nuotron.interval = setInterval(Nuotron.waiting, Nuotron.duration)
    }
  },

  //  WAITING
  waiting: function() {
    if(Nuotron.enough != true) {
      ++Nuotron.iteration
      return
    }

    Nuotron.stopping()
  },

  //  STOP
  stop: function(callback) {
    if(Nuotron.processing == true) {
      Nuotron.enough = true
      Nuotron.callback = callback

      $(Nuotron.selector).attr('style',
      'animation-iteration-count: ' + Nuotron.iteration +
      '; -webkit-animation-iteration-count: ' + Nuotron.iteration + ';')
    }
  },

  //  STOPPING
  stopping: function() {
    clearInterval(Nuotron.interval)
    if(typeof Nuotron.callback === 'function' && Nuotron.callback) Nuotron.callback()

    setTimeout(Nuotron.reset, 200)
  },

  //  RESET
  reset: function() {
    Nuotron.iteration = 0
    Nuotron.processing = false
    Nuotron.enough = false
    Nuotron.interval = null
    Nuotron.callback = null

    $('body').removeClass('waiting')
    $(Nuotron.selector).removeAttr('style')
  }
}
