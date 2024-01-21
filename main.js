var glide01 = new Glide(".glide-01", {
  type: "slider",
  focusAt: "center",
  perView: 1,
  autoplay: 3000,
  animationDuration: 700,
  gap: 0,
  classes: {
    activeNav: "[&>*]:bg-slate-700",
  },
});

glide01.mount();

var glide02 = new Glide(".glide-02", {
  type: "carousel",
  focusAt: "center",
  perView: 3,
  autoplay: 3000,
  animationDuration: 700,
  gap: 24,
  classes: {
    activeNav: "[&>*]:bg-slate-700",
  },
  breakpoints: {
    1024: {
      perView: 2,
    },
    640: {
      perView: 1,
    },
  },
});

glide02.mount();

var glide03 = new Glide(".glide-03", {
  type: "carousel",
  focusAt: "center",
  perView: 7,
  autoplay: 3000,
  animationDuration: 700,
  gap: 14,
  classes: {
    activeNav: "[&>*]:bg-slate-700",
  },
  breakpoints: {
    1024: {
      perView: 2,
    },
    640: {
      perView: 1,
    },
  },
});

glide03.mount();
