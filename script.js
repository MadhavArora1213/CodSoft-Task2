Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
Shery.makeMagnet(".mag");
Shery.hoverWithMediaCircle(".hvr", { videos: ["Videos./video1.mp4, Videos./video2.mp4, Videos./video3.mp4"] });

gsap.to(".element", {
    scrollTrigger: {
        trigger: ".featuredImage",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
    },
    y: "-300%",
    ease: Power1,
});
let elements = document.querySelectorAll(".element");
Shery.imageEffect(".images", {
    style: 5,
    config:{onMouse:{value: 1}},
    slideStyle: (setScroll) => {
        elements.forEach(function (element,index) {
            scrollTrigger.create({
                trigger: element,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress+index);
                },
            });
        });
    },
});
