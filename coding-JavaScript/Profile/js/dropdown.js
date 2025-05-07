//ドロップダウンの設定を関数でまとめる
function mediaQueriesWin(){
	$('.has-child').hover(
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
	) 
}


// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});