$(document).ready(function() {

  paragraphs = $('p.spans')

  for (i = 0; i < paragraphs.length; i++) {
    paragraph = $(paragraphs[i])
    spans = paragraph.text().split(' ')
    paragraph.empty().removeAttr('class')

    $.each(spans, function(i, span) {
      paragraph.append($('<span>').text(span))
    })
  }

})
