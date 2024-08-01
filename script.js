
let tl =  gsap.timeline()
tl.from('nav .logo',{
    duration: 1,
    y: -100,
    opacity: 0
})

tl.from('.logo span',{
    color: "white",
    y:-100,
    opacity : 0,
    duration: 0.1,
    delay: 0.3,
    stagger: 0.1
})

tl.from('nav ul li',{
    y:-100,
    opacity : 0,
    duration: 1,
    delay: 0.6,
    stagger: 0.5
})


tl.from('.home-text',{
    opacity : 0,
    scale: 0,
    duration: 2,
    delay: 0,
    stagger: 0.1
})


tl.from('.home-text .button',{
    x:2000,
    y:-1000,
    opacity : 0,
    scale: 0,
    duration: 2,
    delay: 0,

})
gsap.from('.skill-cont',{
    opacity:0,
    scale: 0,
    duration:0.3,
    scrollTrigger:{
        scroller:'body',
        trigger: "#skills",
        start: "top 0%",
        end: "top -100%",
        scrub:true,
        pin:true
    }
})
