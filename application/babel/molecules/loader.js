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
      iterationClear()
      setTimeout(function() {

        //  CALLBACK
        $('body').removeClass('page')
        tippy('[title]', {
          arrow: false,
          theme: 'nucubuc',
          followCursor: true
        })
        runPresent()

      }, 1500)
    }, 200)
  })
})
