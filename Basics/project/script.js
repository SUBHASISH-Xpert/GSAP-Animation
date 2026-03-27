var t1 = gsap.timeline()
t1.from('h2',{
    y: -20,
    opacity:0,
    duration:1,
    delay:0.5
})
t1.from('h4',{
    y: -20,
    opacity:0,
    duration:1,
    stagger:0.3
})
t1.from('h1',{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})