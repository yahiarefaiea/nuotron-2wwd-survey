$(document).ready(function() {
  var range = $('.range')

  //  CHANGE RANGE FUNCTION
  function changeRange(that, init) {
    var input, current, labels

    input = $(that)
    if(init==true) input = $(that).find('input[type=range]')

    current = input.val()
    labels = input.siblings('ul')

    labels.children().removeClass('current')
    labels.children(':nth-child('+current+')').addClass('current')
  }

  //  INIT ALL RANGE
  for (i = 0; i < range.length; i++) {
    changeRange(range[i], true)
  }

  //  SET LISTENERS
  range.find('input[type=range]').on('change', function() {
    changeRange(this, false)
  })
})
