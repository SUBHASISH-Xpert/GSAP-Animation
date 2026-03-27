// gsap is tow way to and form
gsap.to('#box',{
    x: 1000,
    duration: 2,   //move 2 seconds
    delay:1        //wait for 1 second before start
})

gsap.to('#box2',{
    x: 500,
    y: 200,
    duration: 2,   //move 2 seconds
    delay:1,         //wait for 1 second before start
    borderRadius:'20%',
    backgroundColor:'gray'
})

gsap.from('#box3',{
    x:1200,
    duration: 2,
    delay:1,
    rotate:360,
    backgroundColor:'blue',
    borderRadius:'20%',
    scale:1.5      //double the size of the box
})

// text animation
gsap.from('h2',{
    color:'red',
    duration:2,
    delay:1,
    y:100,          //y-axis 100px down then it will come to its original position
    opacity:0  ,   //not visible then it will come to its original position and become visible
    stagger:1       //stagger is used one by one animation of the element
})

// repeare animation
gsap.to('#box4',{
    x:1200,
    duration: 2,
    delay:1,
    rotate:360,
    repeat:1 ,  //repeat is used to repeat the animation 2 times
    // repeat:-1,
    yoyo:true   //yoyo is used to reverse the animation after it completes(right and left)
})

// Width expand animation for boxes
gsap.from('.box', {
    height: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "power2.out"
});

// timeline is used to create a sequence of animation v.v important
// 1st then secon d then third and so on
// gsap.to('#box5',{
//     x:1200,
//     duration: 1.5,
//     delay:1,
//     rotate:360
// })
// gsap.to('#box6',{
//     x:1200,
//     duration: 2,
//     delay:2.5,
//     rotate:360
// })
// gsap.to('#box7',{
//     x:1200,
//     duration: 2,
//     delay:4,
//     rotate:360
// })                     //not useful when we have many elements to animate

// timeline
var t1 = gsap.timeline()
t1.to('#box5',{
    x:1200,
    duration: 1.5,
    rotate:360,
    delay:1
})
t1.to('#box6',{
    x:1200,
    duration: 2,
})
t1.to('#box7',{
    x:1200,
    duration: 2,
})