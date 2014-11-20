;(function(){

  $.fn.lift = function(){
    return $(this).each(lift)
  }

  function lift(){
    var $pages = $(this)
    var $first = $pages.children('.page').eq(0)
    var total = $pages.children('.page').length
    var current = 1
    var $next = $('<div>').addClass('icos_arrow')
      .hide().appendTo($pages)

    var mc = new Hammer($pages.get(0))
    mc.get('swipe').set({
      direction: Hammer.DIRECTION_ALL,
      threshold: 5,
      velocity: 0.01
    })
    mc.on('swipeup swipedown', function(e){
      console.log(e)
      if (e.type === 'swipedown') {
        go(current - 1)
      } else if (e.type === 'swipeup') {
        go(current + 1)
      }
    })

    go(current)

    function go(page){
      page = Math.max(1, page)
      page = Math.min(page, total)
      if (page === current) return

      $next.hide()
      $first.animate({
        //'margin-top': '-' + (page-1) * 100 + '%'
        'margin-top': '-' + (page - 1) * $first.height() + 'px'
      })
      current = page
      if (page < total) $next.show()
    }
  }

})();
