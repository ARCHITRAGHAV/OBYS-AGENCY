function locomotivescroll() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotivescroll();
function loadinganimation() {
    let tl = gsap.timeline();

    tl.from(".line h1", {
        y: 150,
        duration: 0.6,
        stagger: 0.25
    })

    tl.to("p", {
        opacity: 1
    })

    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1,
    })

    gsap.from("#line-part1", {
        opacity: 0,
        onStart: function () {
            let h5c = document.querySelector("#line-part1 h5");
            let count = 0;
            let s = setInterval(function () {
                if (count === 100) {
                    clearInterval(s);
                }
                h5c.innerText = count++;
            }, 20)
        }
    })

    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 1.45
    })

    tl.from("#page1", {
        delay: 0.1,
        y: 1200,
        duration: 0.5,
        ease: Power4
    })

    tl.to("#loader", {
        display: "none"
    })

    tl.from("#nav", {
        opacity: 0
    })

    tl.from(".graphics h1,#graphics3 h2,#graphics3 h3", {
        y: 120,
        duration: 0.6,
        stagger: 0.2
    })
    tl.from("#graphics1", {
        opacity: 0
    }, "-=1.6")
}
loadinganimation();
function cursorloading() {
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
    Shery.makeMagnet("#nav-part2 h4");
    let videoContainer = document.querySelector("#video-container");
    let video = document.querySelector("#video-container video");
    videoContainer.addEventListener("mouseenter", function () {
        videoContainer.addEventListener("mousemove", function (dets) {
            gsap.to(".mousefollower", {
                opacity: 0
            })
            gsap.to("#play", {
                left: dets.x - 570,
                y: dets.y - 300
            })
        })
    })
    videoContainer.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1
        })
        gsap.to("#play", {
            left: "68.2%",
            top: "-11%"
        })
    })
    let flag = 0;
    videoContainer.addEventListener("click", function () {
        if (flag == 0) {
            video.play();
            video.style.opacity = 1;
            document.querySelector("#play").innerHTML = `<i class="ri-pause-line"></i>`;
            gsap.to("#play", {
                scale: "0.5"
            })
            flag = 1;
        }
        else {
            video.pause();
            video.style.opacity = 0;
            document.querySelector("#play").innerHTML = `<i class="ri-play-fill"></i>`;
            gsap.to("#play", {
                scale: "1"
            })
            flag = 0;
        }

    })
}
cursorloading();
function sheryanimation() {
    Shery.imageEffect(".image-div", {
        style: 5,
        config: { "a": { "value": 0, "range": [0, 30] }, "b": { "value": 0.04, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.816650390625 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 10, "range": [0, 10] }, "metaball": { "value": 0.49, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 9.16, "range": [0, 100] } },
        // debug: true,
        gooey: true,
    });
}
sheryanimation();
function flag() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#flag", {
            left: dets.x,
            y: dets.y,
        })
    })
    document.querySelector("#graphics3").addEventListener("mouseenter", function () {
        gsap.to("#flag", {
            opacity: 1
        })
    })
    document.querySelector("#graphics3").addEventListener("mouseleave", function () {
        gsap.to("#flag", {
            opacity: 0
        })
    })
}
flag();