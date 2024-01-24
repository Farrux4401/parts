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
  // focusAt: "right",
  perView: 3,
  autoplay: 3000,
  animationDuration: 700,
  gap: 24,
  classes: {
    activeNav: "[&>*]:bg-slate-700",
  },
  breakpoints: {
    1024: {
      perView: 1.5,
    },
    768: {
      perView: 1.5,
    },
  },
});

glide02.mount();

var glide03 = new Glide(".glide-03", {
  type: "carousel",
  perView: 7,
  autoplay: 3000,
  animationDuration: 700,
  gap: 14,
  classes: {
    activeNav: "[&>*]:bg-slate-700",
  },
  breakpoints: {
    1024: {
      perView: 5,
    },
    640: {
      perView: 2,
    },
  },
});

glide03.mount();

var glide04 = new Glide(".glide-04", {
  type: "carousel",
  // focusAt: "center",
  perView: 2,
  autoplay: false,
  animationDuration: 700,
  gap: 20,
  classes: {
    activeNav: "[&>*]:bg-slate-700",
  },
  breakpoints: {
    768: {
      perView: 1,
    },
  },
});

glide04.mount();

var glide05 = new Glide(".glide-05", {
  type: "carousel",
  perView: 1.5,
  autoplay: false,
  animationDuration: 700,
  gap: 20,
  classes: {
    activeNav: "[&>*]:bg-slate-700",
  },
  breakpoints: {
    768: {
      perView: 1.3,
    },
  },
});

glide05.mount();

document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.getElementById("dropdown-btn");
  const dropdownContent = document.getElementById("dropdown-content");

  dropdownBtn.addEventListener("click", function () {
    dropdownContent.classList.toggle("hidden");
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !dropdownBtn.contains(event.target) &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownContent.classList.add("hidden");
    }
  });
});
