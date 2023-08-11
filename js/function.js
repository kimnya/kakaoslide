$(function () {
	const $indicator = $('.slides-pagination>li>a');
	const $mianImg = $('.slides-item');
	const $next = $('.slides-next');
	const $prev = $('.slides-prev');
	let idx = 0;

	const moveFn = function () {
		$mianImg.parent().animate({ left: -100 * idx + '%' });
		$indicator.eq(idx).parent().addClass('on');
		$indicator.eq(idx).parent().siblings().removeClass('on');
	};
	$indicator.on('click', function (evt) {
		evt.preventDefault();
		idx = $indicator.index(this);
		moveFn();
	});

	$next.on('click', function (evt) {
		evt.preventDefault();
		if (idx < $mianImg.length - 1) {
			idx++;
		} else {
			idx = 0;
		}

		moveFn();
	});

	// idx = $indicator.index(this);
	$prev.on('click', function (evt) {
		evt.preventDefault();
		if (idx > 0) {
			idx--;
		} else {
			idx = $mianImg.length - 1;
		}

		moveFn();
	});
});
