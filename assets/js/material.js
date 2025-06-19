//------------------
// gsap
//------------------
gsap.registerPlugin(ScrollTrigger);

//kv
setTimeout(function () {
  document.querySelectorAll('.js-kv').forEach(function (el) {
  el.classList.add('is-active');
  });
}, 500);

gsap.utils.toArray('.js-parallax1').forEach(wrap => {
  const y = wrap.getAttribute('data-y') || -100;

  gsap.to(wrap, {
    y: y,
    scrollTrigger: {
      trigger: wrap,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.8,
    }
  })
});

//実験結果
const a1 = gsap
  .to('.p-ex__tit-img', {
    xPercent: -100,
    duration: 20,
    repeat: -1,
    ease: 'none',
  })
  .seek(100);

ScrollTrigger.create({
  trigger: '.p-ex__tit-img',
  start: '-99999 top',
  onUpdate: (self) => {
    self.direction === -1 ? a1.reverse() : a1.play();
  },
});

//こんな人におすすめ
gsap.utils.toArray('.js-parallax2').forEach(wrap => {
  const y = wrap.getAttribute('data-y') || -50;

  gsap.to(wrap, {
    y: y,
    scrollTrigger: {
      trigger: wrap,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0,
    }
  })
});

//タイトル
gsap.utils.toArray(".js-fade").forEach((target) => {
  gsap.from(target, {
      scrollTrigger: {
          trigger: target,
          start: 'top-=200 center',
          once: true,
          // markers: true,
          toggleClass: {
              targets: target,
              className: "is-active",
          },
      },
  });
});


//------------------
// splide
//------------------
const splide1 = new Splide( '#splide-ex', {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  arrowPath: 'M13.3751 36.6668L10.4167 33.7085L24.1251 20.0002L10.4167 6.29183L13.3751 3.3335L30.0417 20.0002L13.3751 36.6668Z',
} );
splide1.mount();


const splide2 = new Splide( '#splide-voice', {
    type: 'fade',
    perPage: 1,
    perMove: 1,
    arrowPath: 'M20,40C9,40,0,31,0,20S9,0,20,0s20,9,20,20-9,20-20,20ZM20,1C9.5,1,1,9.5,1,20s8.5,19,19,19,19-8.5,19-19S30.5,1,20,1ZM16.9,27.8l-1.4-1.4,6.4-6.4-6.4-6.4,1.4-1.4,7.8,7.8-7.8,7.8Z',
} );
const splide2th = new Splide( '#splide-voice-thum', {
    type: 'fade',
    perPage: 1,
    perMove: 1,
    arrows: false,
    pagination: false,
} );

const currentEl = document.getElementById('current-slide');
const totalEl = document.getElementById('total-slides');
splide2.on('mounted', function () {
  totalEl.textContent = splide2.length;
  currentEl.textContent = splide2.index + 1;
});
// スライドが変わるたびに現在の番号を更新
splide2.on('move', function (newIndex) {
  currentEl.textContent = newIndex + 1;
});

splide2.sync( splide2th );
splide2.mount();
splide2th.mount();


//------------------
// クーポンコピー
//------------------
$(function () {
  $('.coupon-copy').click(function () {
    const url = $(this).data('txt');
    const $msg = $(this).siblings('.success-msg');

    navigator.clipboard.writeText(url).then(() => {
      $msg.fadeIn("slow", function () {
        $(this).delay(1000).fadeOut("slow");
      });
    });
  });
});


//------------------
// faq
//------------------
$(function () {
  $('.js-faq').click(function(){
    $(this).stop().toggleClass('is-active');
  });
});