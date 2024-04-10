gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

var tl = gsap.timeline();

tl.from("header", {
  opacity: 0,
  y: -100,
  duration: 0.4,
})

tl.from(".one, .two", {
  y: 100,
  color: "transparent",
  duration: 0.5,
  stagger: 0.5,
})

gsap.from(".img",{
    scrollTrigger:{
        scroller: ".main",
        trigger: ".animCon",
        // markers: true,
        start: "30%"
    },
    y: 200,
  opacity: 0,
  duration: 0.4,
  ease: "linear"
})

gsap.from(".img1,.img2, .img3", {
  scrollTrigger: {
    trigger: ".imgCon",
    scroller: ".main",
    // markers: true,
    start: "-50%",
    end: "10%"
  },
  opacity: 0,
  duration: 1,
  stagger: .3,
  ease: "linear"
})

gsap.from(".main .cpp .left h1",{
    scrollTrigger: {
        trigger: ".main .cpp .left",
        scroller: ".main",
        start: "-100%",
        end: "10%",
        // markers: true,
    },
    x: -100,
    opacity: 0,
    duration: .4,
    ease: "linear"
})
gsap.from(".main .cpp .right p,.main .cpp .right a",{
    scrollTrigger: {
        trigger: ".main .cpp .right",
        scroller: ".main",
        start: "-100%",
        end: "10%",
        // markers: true,
    },
    stagger: .3,
    x: 100,
    opacity: 0,
    duration: .4,
    ease: "linear"
})
gsap.from("#img, #img2",{
    scrollTrigger: {
        trigger: ".main .seeCon .left",
        scroller: ".main",
        start: "360%",
        end: "400%",
        // markers: true,
    },
    opacity: 0,
    duration: .7,
    stagger: .4,
    ease: "linear"
})

gsap.to(".line .lol .lol2",{
    scrollTrigger:{
        trigger: ".line",
        scroller: ".main",
        start: "8000%",
        end: "400%",
        // markers: true,
    },
    width: "100%",
    duration: 1,
    ease: "linear"
})

gsap.from(".popopo .conspec",{
    scrollTrigger:{
        scroller: ".main",
        trigger: ".popopo .con1",
        // markers: true,
        start: "-40%"
    },
    scale: 1.1,
    ease: "linear"
})

gsap.from(".input",{
    scrollTrigger:{
        trigger: ".inputCon",
        scroller: ".main",
        // markers: true,
        start: "-200%"
    },
    opacity: 0,
    ease: "linear"
})

gsap.from(".opt2 .lll",{
    scrollTrigger: {
        trigger: ".opt2",
        scroller: ".main",
        // markers: true,
        start: "-250%",
        end: "-130%",
        scrub: 2,
    },
    opacity: 0,
    duration: .4,
    stagger: .5,
    ease: "linear"
})



gsap.from(".opt1,.footer .opt3",{
    scrollTrigger: {
        trigger: ".opt2",
        scroller: ".main",
        // markers: true,
        start: "-100%",
    },
    opacity: 0,
    y: 100,
    duration: .4,
    stagger: .2,
    ease: "linear"
})


var con = document.querySelector(".secCon");

con.addEventListener("mouseenter", function () {
  gsap.to(".left .circle", {
    scale: 1,
  })
})
con.addEventListener("mousemove", function (dets) {
  var a = document.querySelector(".left .circle")
  if (dets.x > 500) {
    a.style.backgroundColor = "#dadada"
  } else {
    a.style.backgroundColor = "#cecece"
  }
  gsap.to(".left .circle", {
    x: dets.x - 100,
    y: dets.y,
  })
})

con.addEventListener("mouseleave", function () {
  console.log("bye");
  gsap.to(".left .circle", {
    scale: 0,
  })
})
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();