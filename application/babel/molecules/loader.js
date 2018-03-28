$(document).ready(function() {
  iterationCount()

  // JPRELOADER INIT
  $('body').jpreLoader({
    showSplash: false,
    showPercentage: false,
    loaderVPos: 0,
    splashVPos: 0
  }, function() {
    setTimeout(function() {
      iterationClear(function() {
        //  CALLBACK
        $('body').removeClass('page')
        runPresent()

        var tipSelector = document.querySelector('[title]')
        var tipSelectorAll = document.querySelectorAll('[title]')
        var tipSelectorLength = $('[title]').length

        tippy('[title]', {
          arrow: false,
          theme: 'nucubuc',
          followCursor: true
        })

        function runTippy() {
          for (var i = 0; i < tipSelectorLength; i++) {
            if($(window).width() > 991)
              tipSelectorAll[i]._tippy.enable()
            else
              tipSelectorAll[i]._tippy.disable()
          }
        }

        var resizeTimer
        runTippy()
        $(window).on('resize', function(e) {
          clearTimeout(resizeTimer)
          resizeTimer = setTimeout(runTippy, 250)
        })
      })
    }, 200)
  })
})
