const FASTMODE = true;

//snap sliders to left and right
let skeletonLayer = document.querySelector(".body-layers .skeleton-layer");
skeletonLayer.addEventListener("click", function () {
	TweenMax.to(document.querySelector('.middle'), 1, {delay: 0.4, width: 1080});
	TweenMax.to(scrollerMiddle, 1, {delay: 0.4, left: 1080-25});

	TweenMax.to(document.querySelector('.top'), 1, {delay: 0.4, width: 1080});
	TweenMax.to(scrollerTop, 1, {delay: 0.4, left: 1080-25});

	TweenMax.to(".organ-title", 0.4, {display: "none"});
	TweenMax.to(".muscle-title", 0.4, {display: "none"});
	TweenMax.to (".skeleton-title", 2, {display: "block", delay: 2, opacity: 2});
});

let organLayer = document.querySelector(".body-layers .organ-layer");
organLayer.addEventListener("click", function () {
	TweenMax.to(document.querySelector('.middle'), 1, {delay: 0.4, width: 1080});
	TweenMax.to(scrollerMiddle, 1, {delay: 0.4, left: 1080-25});

	TweenMax.to(document.querySelector('.top'), 1, {delay: 0.4, width: 0});
	TweenMax.to(scrollerTop, 1, {delay: 0.4, left: 0-25});

	TweenMax.to(".skeleton-title", 0.4, {display: "none"});
	TweenMax.to(".muscle-title", 0.4, {display: "none"});
	TweenMax.to (".organ-title", 2, {display: "block", delay: 2, opacity: 2});
});

let muscleLayer = document.querySelector(".body-layers .muscle-layer");
muscleLayer.addEventListener("click", function () {
	TweenMax.to(document.querySelector('.middle'), 1, {delay: 0.4, width: 0});
	TweenMax.to(scrollerMiddle, 1, {delay: 0.4, left: 0-25});

	TweenMax.to(document.querySelector('.top'), 1, {delay: 0.4, width: 0});
	TweenMax.to(scrollerTop, 1, {delay: 0.4, left: 0-25});

	TweenMax.to(".skeleton-title", 0.4, {display: "none"});
	TweenMax.to(".organ-title", 0.4, {display: "none"});
	TweenMax.to (".muscle-title", 2, {display: "block", delay: 2, opacity: 2});
});


// I hope this over-commenting helps. Let's do this!
// Let's use the 'active' variable to let us know when we're using it
let active = false;
// and define our dom elements to make it easier to read
let scrollerMiddle = document.querySelector('.scroller-middle');
let scrollerTop = document.querySelector('.scroller-top');
// let scrollerHorizontal = document.querySelector('.scroller-horizontal');

// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
scrollerMiddle.addEventListener('mousedown',function(){
  active = "middle";
  // Add our scrolling class so the scroller has full opacity while active
  scrollerMiddle.classList.add('scrolling');
});
// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener('mouseup',function(){
  active = false;
  scrollerMiddle.classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  scrollerMiddle.classList.remove('scrolling');
});

// We'll have to do the same for our top scroller
scrollerTop.addEventListener('mousedown',function(){
    active = "top";
    scrollerTop.classList.add('scrolling');
});
document.body.addEventListener('mouseup',function(){
  active = false;
  scrollerTop.classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  scrollerTop.classList.remove('scrolling');
});

// Let's figure out where their mouse is at
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  // Their mouse is here...
  let x = e.pageX;
  // but we want it relative to our wrapper
  x -= document.querySelector('.wrapper').getBoundingClientRect().left;
  // Okay let's change our state
  scrollIt(x);
});

// Let's use this function
function scrollIt(x){
  // Calculate our transform
  let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
  // we show all our bottom image but how much of our middle and top,
  // that'll depend on what we're dragging
  // if we're dragging the middle slider
  if (active==="middle"){
    document.querySelector('.middle').style.width = transform+"px";
    scrollerMiddle.style.left = transform-25+"px";
    // if we're using scroller-middle, middle must always be to the right of top
    if (scrollerTop.getBoundingClientRect().left>scrollerMiddle.getBoundingClientRect().left-5){
      document.querySelector('.top').style.width = transform-5+"px";
      scrollerTop.style.left = transform-30+"px";
    }
    if (x < 540) {
    	TweenMax.to(".organ-title", 0.4, {display: "none"});
    	TweenMax.to(".skeleton-title", 0.4, {display: "none"});
    	TweenMax.to (".muscle-title", 2, {display: "block", delay: 1, opacity: 2});
    } else {
    	TweenMax.to(".muscle-title", 0.4, {display: "none"});
    }
  }
  // if we're dragging the top slider
  if (active==="top"){
    document.querySelector('.top').style.width = transform+"px";
    scrollerTop.style.left = transform-25+"px";
    // if we're using scroller-top, top must always be to the left
    if (scrollerTop.getBoundingClientRect().left>scrollerMiddle.getBoundingClientRect().left-5){
      document.querySelector('.middle').style.width = transform+5+"px";
      scrollerMiddle.style.left = transform-20+"px";
    }
    if (x > 540) {
    	TweenMax.to(".organ-title", 0.4, {display: "none"});
    	TweenMax.to(".muscle-title", 0.4, {display: "none"});
    	TweenMax.to (".skeleton-title", 2, {display: "block", delay: 1, opacity: 2});
    } else {
    	TweenMax.to(".skeleton-title", 0.4, {display: "none"});
    }
    if (x < 540) {
    	TweenMax.to(".skeleton-title", 0.4, {display: "none"});
    	TweenMax.to(".muscle-title", 0.4, {display: "none"});
    	TweenMax.to (".organ-title", 2, {display: "block", delay: 1, opacity: 2});
    }
  }

  if ((active==="top" && x == 360) && (active==="middle" && x == 720)) {
	TweenMax.to(".organ-title", 0.4, {display: "none"});
  }
}

// Let's set our opening state based off the width, 
// we want to show a bit of both images so the user can see what's going on
active = "middle";
scrollIt(720);
active = "top";
scrollIt(360);
active = false;

// And finally let's repeat the process for touch events
// first our middle scroller...
scrollerMiddle.addEventListener('touchstart',function(){
    active = "middle";
    scrollerMiddle.classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
    active = false;
    scrollerMiddle.classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
    active = false;
    scrollerMiddle.classList.remove('scrolling');
});

// then scroller top, our second scroller
scrollerTop.addEventListener('touchstart',function(){
    active = "top";
    scrollerTop.classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
    active = false;
    scrollerTop.classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
    active = false;
    scrollerTop.classList.remove('scrolling');
});

document.querySelector('.wrapper').addEventListener('touchmove',function(e){
    if (!active) return;
    e.preventDefault();
    let x = e.touches[0].pageX;
    x -= document.querySelector('.wrapper').getBoundingClientRect().left;
    scrollIt(x);
});



















let speechBubble = document.querySelector(".speech-bubble");
let speechBubbleTop = document.querySelector(".speech-bubble-top");

let startScreen = document.querySelector(".start-screen");
let startButton = document.querySelector(".start-button");
let startBody = document.querySelector(".start-body");

let skeletonBody = document.querySelector(".body-layers .skeleton-body");
let organBody = document.querySelector(".body-layers .organ-body");
let muscleBody = document.querySelector(".body-layers .muscle-body");

Draggable.create(".change-height-slider", {		//.start-body-sizer
	type:"y", 
	bounds:".start-screen", 
	onDrag: function() {
		console.log((1920 - this.endY)/1920);
		let bodyHeight =((1920 - this.endY)/1920) * 1.1;
		console.log(bodyHeight);
		// for (var i = bodyHeight.length - 1; i >= 0; i--) {
		// 	startBody.style.paddingBottom = bodyHeight[i]+ "%";
		// }
		startBody.style.transform = `scale(${bodyHeight})`;
		skeletonBody.style.transform = `scale(${bodyHeight})`;
		organBody.style.transform = `scale(${bodyHeight})`;
		muscleBody.style.transform = `scale(${bodyHeight})`;


			
	}
});


TweenMax.to(startButton, 1, {scale: 1.2, repeat: -1, yoyo: true }); 
TweenMax.fromTo(".start-title", 1, { ease: Bounce.easeOut, y:-300, delay: 1}, {opacity: 1, ease: Bounce.easeOut, y: 20, delay: 1});
TweenMax.to(".start-title", 1, {scale: 1.2, yoyo: true, repeat: 1, delay: 2});


startButton.addEventListener("click", function (){
	console.log("click");
	startButton.style.backgroundImage = "url(dist/img/Go_selected_button.svg)";


	var timeline = new TimelineMax();
	timeline.to(".start-button", 0.3, {opacity: 0})
	timeline.to(".start-layers .skeleton-body", 0, {display: "block"})
	timeline.staggerFrom(".start-layers .skeleton-body div", 0.8, {y: "-50", opacity: 0, yoyo: true, repeat: 1}, 0.05);
	timeline.to(".start-layers .skeleton-body div", 0.1, {opacity: 0});
	timeline.to(".start-layers .organ-body", 0, {display: "block"})
	timeline.staggerFrom(".start-layers .organ-body div", 0.8, {y: "-50", opacity: 0, yoyo: true, repeat: 1}, 0.05);
	timeline.to(".start-layers .organ-body div", 0.1, {opacity: 0});
	timeline.to(".start-layers .muscle-body", 0, {display: "block"})
	timeline.staggerFrom(".start-layers .muscle-body div", 0.8, {y: "-50", opacity: 0, yoyo: true, repeat: 1}, 0.05);
	timeline.to(".start-layers .muscle-body div", 0.1, {opacity: 0});
	timeline.to(startScreen, 1, {opacity: 0, zIndex: 0});

	if (FASTMODE) {
		timeline.timeScale(5);
	}
}); 

let skull = document.querySelector(".body-layers .skull-original");
skull.addEventListener("click", function (){
	console.log("click");
	skull.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedSkull.png)";
	skull.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".skull-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".skull-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let spine = document.querySelector(".body-layers .spine-original");
spine.addEventListener("click", function (){
	spine.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedSpine.png)";
	spine.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".spine-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".spine-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftCollarbone = document.querySelector(".body-layers .left-collarbone-original");
leftCollarbone.addEventListener("click", function (){
	leftCollarbone.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Collarbone.png)";
	rightCollarbone.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Collarbone.png)";
	leftCollarbone.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-collarbone-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-collarbone-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightCollarbone = document.querySelector(".body-layers .right-collarbone-original");
rightCollarbone.addEventListener("click", function (){
	rightCollarbone.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Collarbone.png)";
	leftCollarbone.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Collarbone.png)";
	rightCollarbone.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-collarbone-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-collarbone-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftHumerus = document.querySelector(".body-layers .left-humerus-original");
leftHumerus.addEventListener("click", function (){
	leftHumerus.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Humerus.png)";
	rightHumerus.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Humerus.png)";
	leftHumerus.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-humerus-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-humerus-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightHumerus = document.querySelector(".body-layers .right-humerus-original");
rightHumerus.addEventListener("click", function (){
	rightHumerus.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Humerus.png)";
	leftHumerus.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Humerus.png)";
	rightHumerus.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-humerus-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-humerus-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftForearm = document.querySelector(".body-layers .left-forearm-original");
leftForearm.addEventListener("click", function (){
	leftForearm.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Forearm.png)";
	rightForearm.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Forearm.png)";
	leftForearm.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-forearm-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-forearm-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightForearm = document.querySelector(".body-layers .right-forearm-original");
rightForearm.addEventListener("click", function (){
	rightForearm.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Forearm.png)";
	leftForearm.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Forearm.png)";
	rightForearm.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-forearm-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-forearm-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftWrist = document.querySelector(".body-layers .left-wrist-original");
leftWrist.addEventListener("click", function (){
	leftWrist.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Wristbone.png)";
	rightWrist.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Wristbone.png)";
	leftWrist.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-wrist-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-wrist-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightWrist = document.querySelector(".body-layers .right-wrist-original");
rightWrist.addEventListener("click", function (){
	rightWrist.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Wristbone.png)";
	leftWrist.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Wristbone.png)";
	rightWrist.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-wrist-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-wrist-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftFingers = document.querySelector(".body-layers .left-fingers-original");
leftFingers.addEventListener("click", function (){
	leftFingers.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Fingerbones.png)";
	rightFingers.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Fingerbones.png)";
	leftFingers.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-fingers-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-fingers-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightFingers = document.querySelector(".body-layers .right-fingers-original");
rightFingers.addEventListener("click", function (){
	rightFingers.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Fingerbones.png)";
	leftFingers.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Fingerbones.png)";
	rightFingers.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-fingers-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-fingers-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let ribcage = document.querySelector(".body-layers .ribcage-original");
ribcage.addEventListener("click", function (){
	ribcage.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedRibcage.png)";
	ribcage.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".ribcage-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".ribcage-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let hipbone = document.querySelector(".body-layers .hipbone-original");
	hipbone.addEventListener("click", function (){
	hipbone.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedHipbone.png)";
	hipbone.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".hipbone-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".hipbone-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftFemur = document.querySelector(".body-layers .left-femur-original");
leftFemur.addEventListener("click", function (){
	leftFemur.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Femur.png)";
	rightFemur.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Femur.png)";
	leftFemur.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-femur-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-femur-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightFemur = document.querySelector(".body-layers .right-femur-original");
rightFemur.addEventListener("click", function (){
	rightFemur.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Femur.png)";
	leftFemur.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Femur.png)";
	rightFemur.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-femur-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-femur-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftKnee = document.querySelector(".body-layers .left-knee-original");
let leftKneeDiv = document.querySelector(".body-layers .left-knee-div");
leftKneeDiv.addEventListener("click", function (){
	leftKnee.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Kneecap.png)";
	rightKnee.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Kneecap.png)";
	leftKnee.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-knee-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-knee-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightKnee = document.querySelector(".body-layers .right-knee-original");
let rightKneeDiv = document.querySelector(".body-layers .right-knee-div");
rightKneeDiv.addEventListener("click", function (){
	rightKnee.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Kneecap.png)";
	leftKnee.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Kneecap.png)";
	rightKnee.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-knee-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-knee-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftTibia = document.querySelector(".body-layers .left-tibia-original");
	leftTibia.addEventListener("click", function (){
	leftTibia.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Tibia.png)";
	rightTibia.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Tibia.png)";
	leftTibia.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-tibia-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-tibia-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightTibia = document.querySelector(".body-layers .right-tibia-original");
rightTibia.addEventListener("click", function (){
	rightTibia.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Tibia.png)";
	leftTibia.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Tibia.png)";
	rightTibia.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-tibia-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-tibia-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftAnkle = document.querySelector(".body-layers .left-ankle-original");
leftAnkle.addEventListener("click", function (){
	leftAnkle.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Anklebone.png)";
	rightAnkle.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Anklebone.png)";
	leftAnkle.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-ankle-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-ankle-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightAnkle = document.querySelector(".body-layers .right-ankle-original");
rightAnkle.addEventListener("click", function (){
	rightAnkle.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Anklebone.png)";
	leftAnkle.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Anklebone.png)";
	rightAnkle.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-ankle-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-ankle-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftFoot = document.querySelector(".body-layers .left-foot-original");
leftFoot.addEventListener("click", function (){
	leftFoot.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Footbone.png)";
	rightFoot.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Footbone.png)";
	leftFoot.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-foot-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-foot-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightFoot = document.querySelector(".body-layers .right-foot-original");
rightFoot.addEventListener("click", function (){
	rightFoot.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedR_Footbone.png)";
	leftFoot.style.backgroundImage = "url(dist/img/Skeleton/Ghosted/GhostedL_Footbone.png)";
	rightFoot.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-foot-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-foot-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let brain = document.querySelector(".body-layers .brain-original");
brain.addEventListener("click", function (){
	brain.style.backgroundImage = "url(dist/img/Organs/Ghosted/Ghosted_Brain.png)";
	showOverlay();
	brain.classList.add("clicked-body-part");
	TweenMax.to(".brain-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".brain-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftLung = document.querySelector(".body-layers .left-lung-original");
leftLung.addEventListener("click", function (){
	leftLung.style.backgroundImage = "url(dist/img/Organs/Ghosted/GhostedL_Lung.png)";
	rightLung.style.backgroundImage = "url(dist/img/Organs/Ghosted/GhostedR_Lung.png)";
	showOverlay();
	leftLung.classList.add("clicked-body-part");
	TweenMax.to(".left-lung-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-lung-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightLung = document.querySelector(".body-layers .right-lung-original");
rightLung.addEventListener("click", function (){
	rightLung.style.backgroundImage = "url(dist/img/Organs/Ghosted/GhostedR_Lung.png)";
	leftLung.style.backgroundImage = "url(dist/img/Organs/Ghosted/GhostedL_Lung.png)";
	showOverlay();
	rightLung.classList.add("clicked-body-part");
	TweenMax.to(".right-lung-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-lung-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let heart = document.querySelector(".body-layers .heart-original");
heart.addEventListener("click", function (){
	heart.style.backgroundImage = "url(dist/img/Organs/Ghosted/Ghosted_Heart.png)";
	showOverlay();
	heart.classList.add("clicked-body-part");
	TweenMax.to(".heart-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".heart-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});	
});

let liver = document.querySelector(".body-layers .liver-original");
let liverDiv = document.querySelector(".body-layers .liver-div");
liverDiv.addEventListener("click", function (){
	liver.style.backgroundImage = "url(dist/img/Organs/Ghosted/Ghosted_Liver.png)";
	showOverlay();
	liver.classList.add("clicked-body-part");
	TweenMax.to(".liver-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".liver-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let kidney = document.querySelector(".body-layers .kidney-original");
let kidneyDiv = document.querySelector(".body-layers .kidney-div");
kidneyDiv.addEventListener("click", function (){
	kidney.style.backgroundImage = "url(dist/img/Organs/Ghosted/Ghosted_Kidney.png)";
	showOverlay();
	kidney.classList.add("clicked-body-part");
	TweenMax.to(".kidney-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".kidney-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let stomach = document.querySelector(".body-layers .stomach-original");
stomach.addEventListener("click", function (){
	stomach.style.backgroundImage = "url(dist/img/Organs/Ghosted/Ghosted_Stomach.png)";
	showOverlay();
	stomach.classList.add("clicked-body-part");
	TweenMax.to(".stomach-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".stomach-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let pancreas = document.querySelector(".body-layers .pancreas-original");
let pancreasDiv = document.querySelector(".body-layers .pancreas-div");
pancreasDiv.addEventListener("click", function (){
	pancreas.style.backgroundImage = "url(dist/img/Organs/Ghosted/Ghosted_Pancreas.png)";
	showOverlay();
	pancreas.classList.add("clicked-body-part");
	TweenMax.to(".pancreas-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".pancreas-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let largeIntestine = document.querySelector(".body-layers .large-intestine-original");
largeIntestine.addEventListener("click", function (){
	largeIntestine.style.backgroundImage = "url(dist/img/Organs/Ghosted/Ghosted_LargeIntestine.png)";
	showOverlay();
	largeIntestine.classList.add("clicked-body-part");
	TweenMax.to(".large-intestine-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".large-intestine-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let smallIntestine = document.querySelector(".body-layers .small-intestine-original");
let smallIntestineDiv = document.querySelector(".body-layers .small-intestine-div");
smallIntestineDiv.addEventListener("click", function (){
	smallIntestine.style.backgroundImage = "url(dist/img/Organs/Ghosted/Ghosted_SmallIntestine.png)";
	smallIntestine.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".small-intestine-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".small-intestine-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});

});

let leftChest = document.querySelector(".body-layers .left-chest-original");
leftChest.addEventListener("click", function (){
	leftChest.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedL_Chestmuscle.png)";
	rightChest.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedR_Chestmuscle.png)";
	leftChest.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-chest-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-chest-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightChest = document.querySelector(".body-layers .right-chest-original");
rightChest.addEventListener("click", function (){
	rightChest.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedR_Chestmuscle.png)";
	leftChest.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedL_Chestmuscle.png)";
	rightChest.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-chest-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-chest-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftDeltoid = document.querySelector(".body-layers .left-deltoid-original");
leftDeltoid.addEventListener("click", function (){
	leftDeltoid.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedL_Deltoid.png)";
	rightDeltoid.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedR_Deltoid.png)";
	leftDeltoid.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-deltoid-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-deltoid-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightDeltoid = document.querySelector(".body-layers .right-deltoid-original");
rightDeltoid.addEventListener("click", function (){
	rightDeltoid.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedR_Deltoid.png)";
	leftDeltoid.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedL_Deltoid.png)";
	rightDeltoid.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-deltoid-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-deltoid-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftBiceps = document.querySelector(".body-layers .left-biceps-original");
leftBiceps.addEventListener("click", function (){
	leftBiceps.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedL_Biceps.png)";
	rightBiceps.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedR_Biceps.png)";
	leftBiceps.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-biceps-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-biceps-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightBiceps = document.querySelector(".body-layers .right-biceps-original");
rightBiceps.addEventListener("click", function (){
	rightBiceps.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedR_Biceps.png)";
	leftBiceps.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedL_Biceps.png)";
	rightBiceps.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-biceps-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-biceps-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let abdomin = document.querySelector(".body-layers .abdomin-original");
abdomin.addEventListener("click", function (){
	abdomin.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedAbdomin.png)";
	abdomin.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".abdomin-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".abdomin-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftQuadriceps = document.querySelector(".body-layers .left-quadriceps-original");
leftQuadriceps.addEventListener("click", function (){
	leftQuadriceps.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedL_Quadriceps.png)";
	rightQuadriceps.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedR_Quadriceps.png)";
	leftQuadriceps.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-quadriceps-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-quadriceps-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightQuadriceps = document.querySelector(".body-layers .right-quadriceps-original");
rightQuadriceps.addEventListener("click", function (){
	rightQuadriceps.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedR_Quadriceps.png)";
	leftQuadriceps.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedL_Quadriceps.png)";
	rightQuadriceps.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-quadriceps-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-quadriceps-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let leftCalf = document.querySelector(".body-layers .left-calf-original");
leftCalf.addEventListener("click", function (){
	leftCalf.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedL_Calfmuscle.png)";
	rightCalf.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedR_Calfmuscle.png)";
	leftCalf.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".left-calf-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".left-calf-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let rightCalf = document.querySelector(".body-layers .right-calf-original");
rightCalf.addEventListener("click", function (){
	rightCalf.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedR_Calfmuscle.png)";
	leftCalf.style.backgroundImage = "url(dist/img/Muscles/Ghosted/GhostedL_Calfmuscle.png)";
	rightCalf.classList.add("clicked-body-part");
	showOverlay();
	TweenMax.to(".right-calf-original .speech-bubble-container", 1, {display: "block"});
	TweenMax.to(".right-calf-original .active-image", 0.4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: 0.5});
});

let overlayBK = document.querySelectorAll(".overlay");
overlayBK.forEach(function () {
	this.addEventListener("mousedown", closeInfoWindow);
})

function showOverlay () {
	let overlays = document.querySelectorAll(".overlay");
	overlays.forEach(function(overlay) {
		overlay.style.display = "block";
	})
}

function closeInfoWindow () {
	let overlays = document.querySelectorAll(".overlay");

	var clickedBodyPart = document.querySelector(".clicked-body-part")
	if (clickedBodyPart) {
		clickedBodyPart.classList.remove("clicked-body-part");
	}

	overlays.forEach(function(overlay) {
		overlay.style.display = "none";
	})

	TweenMax.to(".speech-bubble-container", 0.1, {display: "none"});
	skull.style.backgroundImage = "url(dist/img/Skeleton/Original/Skull.png)";
	spine.style.backgroundImage = "url(dist/img/Skeleton/Original/Spine.png)";
	leftCollarbone.style.backgroundImage = "url(dist/img/Skeleton/Original/L_Collarbone.png)";
	rightCollarbone.style.backgroundImage = "url(dist/img/Skeleton/Original/R_Collarbone.png)";
	leftHumerus.style.backgroundImage = "url(dist/img/Skeleton/Original/L_Humerus.png)";
	rightHumerus.style.backgroundImage = "url(dist/img/Skeleton/Original/R_Humerus.png)";
	leftForearm.style.backgroundImage = "url(dist/img/Skeleton/Original/L_Forearm.png)";
	rightForearm.style.backgroundImage = "url(dist/img/Skeleton/Original/R_Forearm.png)";
	leftWrist.style.backgroundImage = "url(dist/img/Skeleton/Original/L_Wristbone.png)";
	rightWrist.style.backgroundImage = "url(dist/img/Skeleton/Original/R_Wristbone.png)";
	leftFingers.style.backgroundImage = "url(dist/img/Skeleton/Original/L_Fingerbones.png)";
	rightFingers.style.backgroundImage = "url(dist/img/Skeleton/Original/R_Fingerbones.png)";
	ribcage.style.backgroundImage = "url(dist/img/Skeleton/Original/Ribcage.png)";
	hipbone.style.backgroundImage = "url(dist/img/Skeleton/Original/Hipbone.png)";
	leftFemur.style.backgroundImage = "url(dist/img/Skeleton/Original/L_Femur.png)";
	rightFemur.style.backgroundImage = "url(dist/img/Skeleton/Original/R_Femur.png)";
	leftKnee.style.backgroundImage = "url(dist/img/Skeleton/Original/L_Kneecap.png)";
	rightKnee.style.backgroundImage = "url(dist/img/Skeleton/Original/R_Kneecap.png)";
	leftTibia.style.backgroundImage = "url(dist/img/Skeleton/Original/L_Tibia.png)";
	rightTibia.style.backgroundImage = "url(dist/img/Skeleton/Original/R_Tibia.png)";
	leftAnkle.style.backgroundImage = "url(dist/img/Skeleton/Original/L_Anklebone.png)";
	rightAnkle.style.backgroundImage = "url(dist/img/Skeleton/Original/R_Anklebone.png)";
	leftFoot.style.backgroundImage = "url(dist/img/Skeleton/Original/L_Footbone.png)";
	rightFoot.style.backgroundImage = "url(dist/img/Skeleton/Original/R_Footbone.png)";
	brain.style.backgroundImage = "url(dist/img/Organs/Original/Brain.png)";
	leftLung.style.backgroundImage = "url(dist/img/Organs/Original/Lung_L.png)";
	rightLung.style.backgroundImage = "url(dist/img/Organs/Original/Lung_R.png)";
	heart.style.backgroundImage = "url(dist/img/Organs/Original/Heart.png)";
	liver.style.backgroundImage = "url(dist/img/Organs/Original/Liver.png)";
	kidney.style.backgroundImage = "url(dist/img/Organs/Original/Kidney.png)";
	stomach.style.backgroundImage = "url(dist/img/Organs/Original/Stomach.png)";
	pancreas.style.backgroundImage = "url(dist/img/Organs/Original/Pancreas.png)";
	largeIntestine.style.backgroundImage = "url(dist/img/Organs/Original/LargeIntestine.png)";
	smallIntestine.style.backgroundImage = "url(dist/img/Organs/Original/SmallIntestine.png)";
	leftChest.style.backgroundImage = "url(dist/img/Muscles/Original/L_Chestmuscle.png)";
	rightChest.style.backgroundImage = "url(dist/img/Muscles/Original/R_Chestmuscle.png)";
	leftDeltoid.style.backgroundImage = "url(dist/img/Muscles/Original/L_Deltoid.png)";
	rightDeltoid.style.backgroundImage = "url(dist/img/Muscles/Original/R_Deltoid.png)";
	leftBiceps.style.backgroundImage = "url(dist/img/Muscles/Original/L_Biceps.png)";
	rightBiceps.style.backgroundImage = "url(dist/img/Muscles/Original/R_Biceps.png)";
	abdomin.style.backgroundImage = "url(dist/img/Muscles/Original/Abdomin.png)";
	leftQuadriceps.style.backgroundImage = "url(dist/img/Muscles/Original/L_Quadriceps.png)";
	rightQuadriceps.style.backgroundImage = "url(dist/img/Muscles/Original/R_Quadriceps.png)";
	leftCalf.style.backgroundImage = "url(dist/img/Muscles/Original/L_Calfmuscle.png)";
	rightCalf.style.backgroundImage = "url(dist/img/Muscles/Original/R_Calfmuscle.png)";
}