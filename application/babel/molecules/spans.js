$(document).ready(function() {

  var paragraphs = $('p.spans')

  for (i = 0; i < paragraphs.length; i++) {
    var paragraph = $(paragraphs[i])
    var spans = paragraph.text().split(' ')
    paragraph.empty().removeAttr('class')

    $.each(spans, function(i, span) {
      paragraph.append($('<span>').text(span))
    })
  }

})
