function mediaQueriesWin(){
  if (window.innerWidth > 768) {
    $('.has-child').off('mouseenter mouseleave').hover(
      function() {
        $(this).children('.dropdown-style').css({
          display: 'flex',
          visibility: 'visible',
          opacity: 1
        });
      },
      function() {
        $(this).children('.dropdown-style').css({
          display: 'none',
          visibility: 'hidden',
          opacity: 0
        });
      }
    );
  } else {
    $('.has-child').off('mouseenter mouseleave'); // SPではhoverイベント無効
  }
}
