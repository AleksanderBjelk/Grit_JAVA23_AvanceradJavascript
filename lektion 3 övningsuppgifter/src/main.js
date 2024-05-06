import anime from "animejs";

// const animationObj = {
//     targets: 'div',
//     translateX: '500px',
//     duration: 2000,
//     loop: true,
//     easing: 'linear',
//     direction: 'alternate'
// }
// anime(animationObj);

//övningsuppgifter

// const animateObject = {
//     targets: '.div1',
//     translateX: '500px',
//     translateY: '300px',
//     backgroundColor: '#4287f5',
//     scale: 2,
//     rotate: 360,
//     duration: 2000,
//     endDelay: 1000,
//     loop: true,
//     autoplay: false,
//     easing: 'easeInOutExpo'
// }
// const animation = anime(animateObject)

// document.querySelector('.play').onclick = animation.play;
// document.querySelector('.paus').onclick = animation.pause;
// document.querySelector('.restart').onclick = animation.restart;

// const aObj = {
//     targets: '.div2',
//     backgroundColor: '#4287f5',
//     keyframes: [
//         {translateX: 50,
//         translateY: -50},
//         {translateX: 0},
//         {translateY: 0},
//     ],
//     duration: 2000,
//     loop: true
// }
// anime(aObj);

// const aObj2 = {
//     targets: ".div2",
//     backgroundColor: "#4287f5",
//     keyframes: [

//         { translateX: 0 },
//         { translateX: 50 },
//         { translateY: -50 },
//         { translateY: 0 },
//         { translateX: 100 },
//         { translateX: 50 },
//         { translateY: 50 },
//         { translateY: 0 },
//         { translateX: 0 },

        
//     ],
//     duration: 7000,
//     loop: true,
// };
// anime(aObj2);

const aObj3 = {
    targets: ".div2",
    // backgroundColor: "#4287f5",
    translateX: 250,
    delay: anime.stagger(500),
    
};

const aObj4 = {
    targets: ".div2",
    backgroundColor: '#343547',
    
    delay: 500
};



anime(aObj3);
anime(aObj4);

