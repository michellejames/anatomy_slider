// //add timeline to sliders
// TweenMax.to(document.querySelector('.middle'), 4, {delay: 5, width: 1000});
// TweenMax.to(scrollerMiddle, 4, {delay: 5, left: 1000-25});

// TweenMax.to(document.querySelector('.top'), 4, {delay: 5, width: 500});
// TweenMax.to(scrollerTop, 4, {delay: 5, left: 500-25});

//snap sliders to left and right

let skeletonLayer = document.querySelector(".body-layers .skeleton-body");
skeletonLayer.addEventListener("click", function () {
	TweenMax.to(document.querySelector('.middle'), 1, {delay: 0.4, width: 1080});
	TweenMax.to(scrollerMiddle, 1, {delay: 0.4, left: 1080-25});

	TweenMax.to(document.querySelector('.top'), 1, {delay: 0.4, width: 1080});
	TweenMax.to(scrollerTop, 1, {delay: 0.4, left: 1080-25});
});

let organLayer = document.querySelector(".body-layers .organ-body");
organLayer.addEventListener("click", function () {
	TweenMax.to(document.querySelector('.middle'), 1, {delay: 0.4, width: 1080});
	TweenMax.to(scrollerMiddle, 1, {delay: 0.4, left: 1080-25});

	TweenMax.to(document.querySelector('.top'), 1, {delay: 0.4, width: 0});
	TweenMax.to(scrollerTop, 1, {delay: 0.4, left: 0-25});
});

let muscleLayer = document.querySelector(".body-layers .muscle-body");
muscleLayer.addEventListener("click", function () {
	TweenMax.to(document.querySelector('.middle'), 1, {delay: 0.4, width: 0});
	TweenMax.to(scrollerMiddle, 1, {delay: 0.4, left: 0-25});

	TweenMax.to(document.querySelector('.top'), 1, {delay: 0.4, width: 0});
	TweenMax.to(scrollerTop, 1, {delay: 0.4, left: 0-25});
});




TweenMax.fromTo(".organ-title", 3, {width: 0, transformOrigin: "center"}, {transformOrigin: "center", width: "66.66666667%", delay: 5});


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

Draggable.create(".start-body-sizer", {
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
			
	}
	// edgeResistance:0.65, 
	// throwProps:true
});


TweenMax.to(startButton, 1, {scale: 1.2, repeat: -1, yoyo: true }); 
TweenMax.fromTo(".start-title", 1, { ease: Bounce.easeOut, y:-300, delay: 1}, {opacity: 1, ease: Bounce.easeOut, y: 20, delay: 1});
TweenMax.to(".start-title", 1, {scale: 1.2, yoyo: true, repeat: 1, delay: 2});


startButton.addEventListener("click", function (){
	console.log("click");
	startButton.style.backgroundImage = "url(../../dist/img/Go_selected_button.svg)";


	var timeline = new TimelineMax();
	timeline.to(".start-button", 0.3, {opacity: 0})
	timeline.to(".start-layers .skeleton-body", 0, {display: "block"})
	timeline.staggerFrom(".start-layers .skeleton-body div", .8, {y: "-50", opacity: 0, yoyo: true, repeat: 1}, 0.1);
	timeline.to(".start-layers .skeleton-body div", 0.1, {opacity: 0});
	timeline.to(".start-layers .organ-body", 0, {display: "block"})
	timeline.staggerFrom(".start-layers .organ-body div", .8, {y: "-50", opacity: 0, yoyo: true, repeat: 1}, 0.1);
	timeline.to(".start-layers .organ-body div", 0.1, {opacity: 0});
	timeline.to(".start-layers .muscle-body", 0, {display: "block"})
	timeline.staggerFrom(".start-layers .muscle-body div", .8, {y: "-50", opacity: 0, yoyo: true, repeat: 1}, 0.1);
	timeline.to(".start-layers .muscle-body div", 0.1, {opacity: 0});
	timeline.to(startScreen, 1, {opacity: 0, zIndex: 0});
}); 

let skull = document.querySelector(".body-layers .skull-original");
skull.addEventListener("click", function (){
	console.log("click");
	skull.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedSkull.png)";
	createInfoWindow();

	let activeSkull = document.createElement("div");
	activeSkull.classList.add("skull-active");
	speechBubbleTop.appendChild(activeSkull);

	let activeSkullText = document.createElement("p");
	activeSkullText.innerHTML = "I'm your <span class='bold-active-text'>skull</span>.<br/>I protect your brain.";
	activeSkullText.classList.add("skull-active-text");
	speechBubbleTop.appendChild(activeSkullText);

	speechBubble.style.top = 8+"%";
	speechBubble.style.left = 12+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let spine = document.querySelector(".body-layers .spine-original");
spine.addEventListener("click", function (){
	spine.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedSpine.png)";
	createInfoWindow();

	let activeSpine = document.createElement("div");
	activeSpine.classList.add("spine-active");
	speechBubbleTop.appendChild(activeSpine);

	let activeSpineText = document.createElement("p");
	activeSpineText.innerHTML = "I'm your <span class='bold-active-text'>spine</span> and I help you stand up straight!";
	activeSpineText.classList.add("spine-active-text");
	speechBubbleTop.appendChild(activeSpineText);

	speechBubble.style.top = 22+"%";
	speechBubble.style.left = 51+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let leftCollarbone = document.querySelector(".body-layers .left-collarbone-original");
leftCollarbone.addEventListener("click", function (){
	leftCollarbone.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Collarbone.png)";
	rightCollarbone.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Collarbone.png)";
	createInfoWindow();

	let activeLeftCollarbone = document.createElement("div");
	activeLeftCollarbone.classList.add("left-collarbone-active");
	speechBubbleTop.appendChild(activeLeftCollarbone);

	let activeLeftCollarboneText = document.createElement("p");
	activeLeftCollarboneText.innerHTML = "I'm your <span class='bold-active-text'>collarbone</span>. My sister and I contect your arms to your body.";
	activeLeftCollarboneText.classList.add("left-collarbone-active-text");
	speechBubbleTop.appendChild(activeLeftCollarboneText);

	speechBubble.style.top = 22+"%";
	speechBubble.style.left = 7+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let rightCollarbone = document.querySelector(".body-layers .right-collarbone-original");
rightCollarbone.addEventListener("click", function (){
	rightCollarbone.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Collarbone.png)";
	leftCollarbone.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Collarbone.png)";
	createInfoWindow();

	let activeRightCollarbone = document.createElement("div");
	activeRightCollarbone.classList.add("right-collarbone-active");
	speechBubbleTop.appendChild(activeRightCollarbone);

	let activeRightCollarboneText = document.createElement("p");
	activeRightCollarboneText.innerHTML = "I'm your <span class='bold-active-text'>collarbone</span>. My sister and I contect your arms to your body.";
	activeRightCollarboneText.classList.add("right-collarbone-active-text");
	speechBubbleTop.appendChild(activeRightCollarboneText);

	speechBubble.style.top = 22+"%";
	speechBubble.style.left = 65+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let leftHumerus = document.querySelector(".body-layers .left-humerus-original");
leftHumerus.addEventListener("click", function (){
	leftHumerus.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Humerus.png)";
	rightHumerus.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Humerus.png)";
	createInfoWindow();

	let activeLeftHumerus = document.createElement("div");
	activeLeftHumerus.classList.add("left-humerus-active");
	speechBubbleTop.appendChild(activeLeftHumerus);

	let activeLeftHumerusText = document.createElement("p");
	activeLeftHumerusText.innerHTML = "I'm your <span class='bold-active-text'>upper-arm bone</span>. I'm the largest part of your arm.";
	activeLeftHumerusText.classList.add("left-humerus-active-text");
	speechBubbleTop.appendChild(activeLeftHumerusText);

	speechBubble.style.top = 29+"%";
	speechBubble.style.left = 1+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let rightHumerus = document.querySelector(".body-layers .right-humerus-original");
rightHumerus.addEventListener("click", function (){
	rightHumerus.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Humerus.png)";
	leftHumerus.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Humerus.png)";
	createInfoWindow();

	let activeRightHumerus = document.createElement("div");
	activeRightHumerus.classList.add("right-humerus-active");
	speechBubbleTop.appendChild(activeRightHumerus);

	let activeRightHumerusText = document.createElement("p");
	activeRightHumerusText.innerHTML = "I'm your <span class='bold-active-text'>upper-arm bone</span>. I'm the largest part of your arm.";
	activeRightHumerusText.classList.add("right-humerus-active-text");
	speechBubbleTop.appendChild(activeRightHumerusText);

	speechBubble.style.top = 26+"%";
	speechBubble.style.left = 69+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let leftForearm = document.querySelector(".body-layers .left-forearm-original");
leftForearm.addEventListener("click", function (){
	leftForearm.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Forearm.png)";
	rightForearm.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Forearm.png)";
	createInfoWindow();

	let activeLeftForearem = document.createElement("div");
	activeLeftForearem.classList.add("left-forearm-active");
	speechBubbleTop.appendChild(activeLeftForearem);

	let activeLeftForearemText = document.createElement("p");
	activeLeftForearemText.innerHTML = "Hi, I'm your <span class='bold-active-text'>forearm</span>. I am the other part of your strong arm.";
	activeLeftForearemText.classList.add("left-forearm-active-text");
	speechBubbleTop.appendChild(activeLeftForearemText);

	speechBubble.style.top = 40+"%";
	speechBubble.style.left = 28+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let rightForearm = document.querySelector(".body-layers .right-forearm-original");
rightForearm.addEventListener("click", function (){
	rightForearm.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Forearm.png)";
	leftForearm.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Forearm.png)";
	createInfoWindow();

	let activeRightForearm = document.createElement("div");
	activeRightForearm.classList.add("right-forearm-active");
	speechBubbleTop.appendChild(activeRightForearm);

	let activeRightForearmText = document.createElement("p");
	activeRightForearmText.innerHTML = "Hi, I'm your <span class='bold-active-text'>forearm</span>. I am the other part of your strong arm.";
	activeRightForearmText.classList.add("right-forearm-active-text");
	speechBubbleTop.appendChild(activeRightForearmText);

	speechBubble.style.top = 40+"%";
	speechBubble.style.left = 43+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let leftWrist = document.querySelector(".body-layers .left-wrist-original");
leftWrist.addEventListener("click", function (){
	leftWrist.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Wristbone.png)";
	rightWrist.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Wristbone.png)";
	createInfoWindow();

	let activeLeftWrist = document.createElement("div");
	activeLeftWrist.classList.add("left-wrist-active");
	speechBubbleTop.appendChild(activeLeftWrist);

	let activeLeftWristText = document.createElement("p");
	activeLeftWristText.innerHTML = "Hi, I'm your <span class='bold-active-text'>wrist</span> and I help you twist and turn your hands - yay!";
	activeLeftWristText.classList.add("left-wrist-active-text");
	speechBubbleTop.appendChild(activeLeftWristText);

	speechBubble.style.top = 43+"%";
	speechBubble.style.left = 28+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let rightWrist = document.querySelector(".body-layers .right-wrist-original");
rightWrist.addEventListener("click", function (){
	rightWrist.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Wristbone.png)";
	leftWrist.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Wristbone.png)";
	createInfoWindow();

	let activeRightWrist = document.createElement("div");
	activeRightWrist.classList.add("right-wrist-active");
	speechBubbleTop.appendChild(activeRightWrist);

	let activeRightWristText = document.createElement("p");
	activeRightWristText.innerHTML = "Hi, I'm your <span class='bold-active-text'>wrist</span> and I help you twist and turn your hands - yay!";
	activeRightWristText.classList.add("right-wrist-active-text");
	speechBubbleTop.appendChild(activeRightWristText);

	speechBubble.style.top = 43+"%";
	speechBubble.style.left = 43+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let leftFingers = document.querySelector(".body-layers .left-fingers-original");
leftFingers.addEventListener("click", function (){
	leftFingers.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Fingerbones.png)";
	rightFingers.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Fingerbones.png)";
	createInfoWindow();

	let activeLeftFingers = document.createElement("div");
	activeLeftFingers.classList.add("left-fingers-active");
	speechBubbleTop.appendChild(activeLeftFingers);

	let activeLeftFingersText = document.createElement("p");
	activeLeftFingersText.innerHTML = "We are the <span class='bold-active-text'>fingerbone brothers</span>. We make your fingers move fast!";
	activeLeftFingersText.classList.add("left-fingers-active-text");
	speechBubbleTop.appendChild(activeLeftFingersText);

	speechBubble.style.top = 47+"%";
	speechBubble.style.left = 25+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let rightFingers = document.querySelector(".body-layers .right-fingers-original");
rightFingers.addEventListener("click", function (){
	rightFingers.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Fingerbones.png)";
	leftFingers.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Fingerbones.png)";
	createInfoWindow();

	let activeRightFingers = document.createElement("div");
	activeRightFingers.classList.add("right-fingers-active");
	speechBubbleTop.appendChild(activeRightFingers);

	let activeRightFingersText = document.createElement("p");
	activeRightFingersText.innerHTML = "We are the <span class='bold-active-text'>fingerbone brothers</span>. We make your fingers move fast!";
	activeRightFingersText.classList.add("right-fingers-active-text");
	speechBubbleTop.appendChild(activeRightFingersText);

	speechBubble.style.top = 47+"%";
	speechBubble.style.left = 46+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let ribcage = document.querySelector(".body-layers .ribcage-original");
ribcage.addEventListener("click", function (){
	ribcage.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedRibcage.png)";
	createInfoWindow();

	let activeRibcage = document.createElement("div");
	activeRibcage.classList.add("ribcage-active");
	speechBubbleTop.appendChild(activeRibcage);

	let activeRibcageText = document.createElement("p");
	activeRibcageText.innerHTML = "I'm your <span class='bold-active-text'>ribcage</span>.<br/>I protect all your organs!";
	activeRibcageText.classList.add("ribcage-active-text");
	speechBubbleTop.appendChild(activeRibcageText);

	speechBubble.style.top = 29+"%";
	speechBubble.style.left = 10+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let hipbone = document.querySelector(".body-layers .hipbone-original");
	hipbone.addEventListener("click", function (){
	hipbone.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedHipbone.png)";
	createInfoWindow();

	let activeHipbone = document.createElement("div");
	activeHipbone.classList.add("hipbone-active");
	speechBubbleTop.appendChild(activeHipbone);

	let activeHipboneText = document.createElement("p");
	activeHipboneText.innerHTML = "I'm your<br/><span class='bold-active-text'>hip bone</span>.<br/>I connect your legs to your body!";
	activeHipboneText.classList.add("hipbone-active-text");
	speechBubbleTop.appendChild(activeHipboneText);

	speechBubble.style.top = 43+"%";
	speechBubble.style.left = 60+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let leftFemur = document.querySelector(".body-layers .left-femur-original");
leftFemur.addEventListener("click", function (){
	leftFemur.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Femur.png)";
	rightFemur.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Femur.png)";
	createInfoWindow();

	let activeLeftFemur = document.createElement("div");
	activeLeftFemur.classList.add("left-femur-active");
	speechBubbleTop.appendChild(activeLeftFemur);

	let activeLeftFemurText = document.createElement("p");
	activeLeftFemurText.innerHTML = "Hi, I'm your <span class='bold-active-text'>thigh bone</span> and the strongest bone your whole body!";
	activeLeftFemurText.classList.add("left-femur-active-text");
	speechBubbleTop.appendChild(activeLeftFemurText);

	speechBubble.style.top = 54+"%";
	speechBubble.style.left = 10+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let rightFemur = document.querySelector(".body-layers .right-femur-original");
rightFemur.addEventListener("click", function (){
	rightFemur.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Femur.png)";
	leftFemur.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Femur.png)";
	createInfoWindow();

	let activeRightFemur = document.createElement("div");
	activeRightFemur.classList.add("right-femur-active");
	speechBubbleTop.appendChild(activeRightFemur);

	let activeRightFemurText = document.createElement("p");
	activeRightFemurText.innerHTML = "Hi, I'm your <span class='bold-active-text'>thigh bone</span> and the strongest bone your whole body!";
	activeRightFemurText.classList.add("right-femur-active-text");
	speechBubbleTop.appendChild(activeRightFemurText);

	speechBubble.style.top = 54+"%";
	speechBubble.style.left = 62+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let leftKnee = document.querySelector(".body-layers .left-knee-original");
let leftKneeDiv = document.querySelector(".left-knee-div");
leftKneeDiv.addEventListener("click", function (){
	leftKnee.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Kneecap.png)";
	rightKnee.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Kneecap.png)";
	createInfoWindow();

	let activeLeftKnee = document.createElement("div");
	activeLeftKnee.classList.add("left-knee-active");
	speechBubbleTop.appendChild(activeLeftKnee);

	let activeLeftKneeText = document.createElement("p");
	activeLeftKneeText.innerHTML = "I'm your <span class='bold-active-text'>knee bone</span> and help you bend the knee";
	activeLeftKneeText.classList.add("left-knee-active-text");
	speechBubbleTop.appendChild(activeLeftKneeText);

	speechBubble.style.top = 60+"%";
	speechBubble.style.left = 9+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let rightKnee = document.querySelector(".body-layers .right-knee-original");
let rightKneeDiv = document.querySelector(".right-knee-div");
rightKneeDiv.addEventListener("click", function (){
	rightKnee.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Kneecap.png)";
	leftKnee.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Kneecap.png)";
	createInfoWindow();

	let activeRightKnee = document.createElement("div");
	activeRightKnee.classList.add("right-knee-active");
	speechBubbleTop.appendChild(activeRightKnee);

	let activeRightKneeText = document.createElement("p");
	activeRightKneeText.innerHTML = "I'm your <span class='bold-active-text'>knee bone</span> and help you bend the knee";
	activeRightKneeText.classList.add("right-knee-active-text");
	speechBubbleTop.appendChild(activeRightKneeText);

	speechBubble.style.top = 60+"%";
	speechBubble.style.left = 63+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let leftTibia = document.querySelector(".body-layers .left-tibia-original");
	leftTibia.addEventListener("click", function (){
	leftTibia.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Tibia.png)";
	rightTibia.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Tibia.png)";
	createInfoWindow();

	let activeLeftTibia = document.createElement("div");
	activeLeftTibia.classList.add("left-tibia-active");
	speechBubbleTop.appendChild(activeLeftTibia);

	let activeLeftTibiaText = document.createElement("p");
	activeLeftTibiaText.innerHTML = "I'm your <span class='bold-active-text'>shinbone</span>.<br/>I support most of<br/>your weight.";
	activeLeftTibiaText.classList.add("left-tibia-active-text");
	speechBubbleTop.appendChild(activeLeftTibiaText);

	speechBubble.style.top = 67+"%";
	speechBubble.style.left = 10+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let rightTibia = document.querySelector(".body-layers .right-tibia-original");
rightTibia.addEventListener("click", function (){
	rightTibia.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Tibia.png)";
	leftTibia.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Tibia.png)";
	createInfoWindow();

	let activeRightTibia = document.createElement("div");
	activeRightTibia.classList.add("right-tibia-active");
	speechBubbleTop.appendChild(activeRightTibia);

	let activeRightTibiaText = document.createElement("p");
	activeRightTibiaText.innerHTML = "I'm your <span class='bold-active-text'>shinbone</span>.<br/>I support most of<br/>your weight.";
	activeRightTibiaText.classList.add("right-tibia-active-text");
	speechBubbleTop.appendChild(activeRightTibiaText);

	speechBubble.style.top = 67+"%";
	speechBubble.style.left = 62+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let leftAnkle = document.querySelector(".body-layers .left-ankle-original");
leftAnkle.addEventListener("click", function (){
	leftAnkle.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Anklebone.png)";
	rightAnkle.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Anklebone.png)";
	createInfoWindow();

	let activeLeftAnkle = document.createElement("div");
	activeLeftAnkle.classList.add("left-ankle-active");
	speechBubbleTop.appendChild(activeLeftAnkle);

	let activeLeftAnkleText = document.createElement("p");
	activeLeftAnkleText.innerHTML = "I'm your <span class='bold-active-text'>ankle</span>. I help you rotate your feet.";
	activeLeftAnkleText.classList.add("left-ankle-active-text");
	speechBubbleTop.appendChild(activeLeftAnkleText);

	speechBubble.style.top = 76+"%";
	speechBubble.style.left = 7+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let rightAnkle = document.querySelector(".body-layers .right-ankle-original");
rightAnkle.addEventListener("click", function (){
	rightAnkle.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Anklebone.png)";
	leftAnkle.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Anklebone.png)";
	createInfoWindow();

	let activeRightAnkle = document.createElement("div");
	activeRightAnkle.classList.add("right-ankle-active");
	speechBubbleTop.appendChild(activeRightAnkle);

	let activeRightAnkleText = document.createElement("p");
	activeRightAnkleText.innerHTML = "I'm your <span class='bold-active-text'>ankle</span>. I help you rotate your feet.";
	activeRightAnkleText.classList.add("right-ankle-active-text");
	speechBubbleTop.appendChild(activeRightAnkleText);

	speechBubble.style.top = 76+"%";
	speechBubble.style.left = 62+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let leftFoot = document.querySelector(".body-layers .left-foot-original");
leftFoot.addEventListener("click", function (){
	leftFoot.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Footbone.png)";
	rightFoot.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Footbone.png)";
	createInfoWindow();

	let activeLeftFoot = document.createElement("div");
	activeLeftFoot.classList.add("left-foot-active");
	speechBubbleTop.appendChild(activeLeftFoot);

	let activeLeftFootText = document.createElement("p");
	activeLeftFootText.innerHTML = "Hi, I'm your <span class='bold-active-text'>foot bone</span> and I help you walk!";
	activeLeftFootText.classList.add("left-foot-active-text");
	speechBubbleTop.appendChild(activeLeftFootText);

	speechBubble.style.top = 77+"%";
	speechBubble.style.left = 33+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let rightFoot = document.querySelector(".body-layers .right-foot-original");
rightFoot.addEventListener("click", function (){
	rightFoot.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Footbone.png)";
	leftFoot.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Footbone.png)";
	createInfoWindow();

	let activeRightFoot = document.createElement("div");
	activeRightFoot.classList.add("right-foot-active");
	speechBubbleTop.appendChild(activeRightFoot);

	let activeRightFootText = document.createElement("p");
	activeRightFootText.innerHTML = "Hi, I'm your <span class='bold-active-text'>foot bone</span> and I help you walk!";
	activeRightFootText.classList.add("right-foot-active-text");
	speechBubbleTop.appendChild(activeRightFootText);

	speechBubble.style.top = 77+"%";
	speechBubble.style.left = 39+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let brain = document.querySelector(".body-layers .brain-original");
brain.addEventListener("click", function (){
	console.log("brain-original clicked")
	brain.style.backgroundImage = "url(../../dist/img/Organs/Active/ActiveBrain.png)";

	TweenMax.to(brain, 2, {backgroundImage:'url(../../dist/img/Organs/Ghosted/Ghosted_Brain.png)'});
	createInfoWindow();


	let activeBrain = document.createElement("div");
	activeBrain.classList.add("brain-active");
	speechBubbleTop.appendChild(activeBrain);

	let activeBrainText = document.createElement("p");
	activeBrainText.innerHTML = "Hi! I am your <span class='bold-active-text'>brain</span>.<br/>I help you think fast.";
	activeBrainText.classList.add("brain-active-text");
	speechBubbleTop.appendChild(activeBrainText);

	speechBubble.style.top = 5+"%";
	speechBubble.style.left = 15+"%";
	speechBubble.style.transform = "rotateY(0deg)";

	TweenMax.to(".brain-active", .4, {ease: Power1.easeIn, y: -30, rotation: -5, yoyo: true, repeat: 3, delay: .5});
	
});

let leftLung = document.querySelector(".body-layers .left-lung-original");
leftLung.addEventListener("click", function (){
	leftLung.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/GhostedL_Lung.png)";
	rightLung.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/GhostedR_Lung.png)";

	createInfoWindow();

	let activeLeftLung = document.createElement("div");
	activeLeftLung.classList.add("left-lung-active");
	speechBubbleTop.appendChild(activeLeftLung);

	let activeLeftLungText = document.createElement("p");
	activeLeftLungText.innerHTML = "I'm your <span class='bold-active-text'>lung</span>. My twin and I help you breath easy.";
	activeLeftLungText.classList.add("left-lung-active-text");
	speechBubbleTop.appendChild(activeLeftLungText);

	speechBubble.style.top = 24+"%";
	speechBubble.style.left = 12+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let rightLung = document.querySelector(".body-layers .right-lung-original");
rightLung.addEventListener("click", function (){
	rightLung.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/GhostedR_Lung.png)";
	leftLung.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/GhostedL_Lung.png)";
	createInfoWindow();

	let activeRightLung = document.createElement("div");
	activeRightLung.classList.add("right-lung-active");
	speechBubbleTop.appendChild(activeRightLung);

	let activeRightLungText = document.createElement("p");
	activeRightLungText.innerHTML = "I'm your <span class='bold-active-text'>lung</span>. My twin and I help you breath easy.";
	activeRightLungText.classList.add("right-lung-active-text");
	speechBubbleTop.appendChild(activeRightLungText);

	speechBubble.style.top = 24+"%";
	speechBubble.style.left = 59+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let heart = document.querySelector(".body-layers .heart-original");
heart.addEventListener("click", function (){
	heart.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_Heart.png)";
	createInfoWindow();

	let activeHeart = document.createElement("div");
	activeHeart.classList.add("heart-active");
	speechBubbleTop.appendChild(activeHeart);

	let activeHeartText = document.createElement("p");
	activeHeartText.innerHTML = "Hello! I'm your <span class='bold-active-text'>heart</span>! I pump blood.";
	activeHeartText.classList.add("heart-active-text");
	speechBubbleTop.appendChild(activeHeartText);

	speechBubble.style.top = 28+"%";
	speechBubble.style.left = 53+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let liver = document.querySelector(".body-layers .liver-original");
let liverDiv = document.querySelector(".liver-div");
liverDiv.addEventListener("click", function (){
	liver.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_Liver.png)";
	createInfoWindow();

	let activeLiver = document.createElement("div");
	activeLiver.classList.add("liver-active");
	speechBubbleTop.appendChild(activeLiver);

	let activeLiverText = document.createElement("p");
	activeLiverText.innerHTML = "Hi, I'm your <span class='bold-active-text'>liver</span>. I clean your blood.";
	activeLiverText.classList.add("liver-active-text");
	speechBubbleTop.appendChild(activeLiverText);
	
	speechBubble.style.top = 32+"%";
	speechBubble.style.left = 12+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let kidney = document.querySelector(".body-layers .kidney-original");
let kidneyDiv = document.querySelector(".kidney-div");
kidneyDiv.addEventListener("click", function (){
	kidney.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_Kidney.png)";
	createInfoWindow();

	let activeKidney = document.createElement("div");
	activeKidney.classList.add("kidney-active");
	speechBubbleTop.appendChild(activeKidney);

	let activeKidneyText = document.createElement("p");
	activeKidneyText.innerHTML = "I'm one of two <span class='bold-active-text'>kidneys</span>. My brother is two shy but he is here, too!";
	activeKidneyText.classList.add("kidney-active-text");
	speechBubbleTop.appendChild(activeKidneyText);

	speechBubble.style.top = 36+"%";
	speechBubble.style.left = 12+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let stomach = document.querySelector(".body-layers .stomach-original");
stomach.addEventListener("click", function (){
	stomach.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_Stomach.png)";
	createInfoWindow();

	let activeStomach = document.createElement("div");
	activeStomach.classList.add("stomach-active");
	speechBubbleTop.appendChild(activeStomach);

	let activeStomachText = document.createElement("p");
	activeStomachText.innerHTML = "I'm your <span class='bold-active-text'>stomach</span>. I'm where your food goes to.";
	activeStomachText.classList.add("stomach-active-text");
	speechBubbleTop.appendChild(activeStomachText);

	speechBubble.style.top = 34+"%";
	speechBubble.style.left = 59+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let pancreas = document.querySelector(".body-layers .pancreas-original");
let pancreasDiv = document.querySelector(".pancreas-div");
pancreasDiv.addEventListener("click", function (){
	pancreas.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_Pancreas.png)";
	createInfoWindow();

	let activePancreas = document.createElement("div");
	activePancreas.classList.add("pancreas-active");
	speechBubbleTop.appendChild(activePancreas);

	let activePancreasText = document.createElement("p");
	activePancreasText.innerHTML = "I'm your <span class='bold-active-text'>pancreas</span>.<br/> I make helpers that break down your food.";
	activePancreasText.classList.add("pancreas-active-text");
	speechBubbleTop.appendChild(activePancreasText);

	speechBubble.style.top = 41+"%";
	speechBubble.style.left = 17+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let largeIntestine = document.querySelector(".body-layers .large-intestine-original");
largeIntestine.addEventListener("click", function (){
	largeIntestine.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_LargeIntestine.png)";
	createInfoWindow();

	let activeLargeIntestine = document.createElement("div");
	activeLargeIntestine.classList.add("large-intestine-active");
	speechBubbleTop.appendChild(activeLargeIntestine);

	let activeLargeIntestineText = document.createElement("p");
	activeLargeIntestineText.innerHTML = "Hi, I'm your <span class='bold-active-text'>large intestine</span>. I take the small intestine's leftovers.";
	activeLargeIntestineText.classList.add("large-intestine-active-text");
	speechBubbleTop.appendChild(activeLargeIntestineText);

	speechBubble.style.top = 44+"%";
	speechBubble.style.left = 10+"%";
	speechBubble.style.transform = "rotateY(0deg)";

});

let smallIntestine = document.querySelector(".body-layers .small-intestine-original");
let smallIntestineDiv = document.querySelector(".small-intestine-div");
smallIntestineDiv.addEventListener("click", function (){
	smallIntestine.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_SmallIntestine.png)";
	createInfoWindow();

	let activeSmallIntestine = document.createElement("div");
	activeSmallIntestine.classList.add("small-intestine-active");
	speechBubbleTop.appendChild(activeSmallIntestine);

	let activeSmallIntestineText = document.createElement("p");
	activeSmallIntestineText.innerHTML = "I'm your <span class='bold-active-text'>small intestine</span>. I absorb nutrients from food.";
	activeSmallIntestineText.classList.add("small-intestine-active-text");
	speechBubbleTop.appendChild(activeSmallIntestineText);

	speechBubble.style.top = 46+"%";
	speechBubble.style.left = 55+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let leftChest = document.querySelector(".body-layers .left-chest-original");
leftChest.addEventListener("click", function (){
	leftChest.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Chestmuscle.png)";
	rightChest.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Chestmuscle.png)";
	createInfoWindow();

	let activeLeftChest = document.createElement("div");
	activeLeftChest.classList.add("left-chest-active");
	speechBubbleTop.appendChild(activeLeftChest);

	let activeLeftChestText = document.createElement("p");
	activeLeftChestText.innerHTML = "Hello, I'm your <span class='bold-active-text'>chest muscle</span>.<br/>I help you move your shoulders.";
	activeLeftChestText.classList.add("left-chest-active-text");
	speechBubbleTop.appendChild(activeLeftChestText);

	speechBubble.style.top = 26+"%";
	speechBubble.style.left = 10+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let rightChest = document.querySelector(".body-layers .right-chest-original");
rightChest.addEventListener("click", function (){
	rightChest.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Chestmuscle.png)";
	leftChest.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Chestmuscle.png)";
	createInfoWindow();

	let activeRightChest = document.createElement("div");
	activeRightChest.classList.add("right-chest-active");
	speechBubbleTop.appendChild(activeRightChest);

	let activeRightChestText = document.createElement("p");
	activeRightChestText.innerHTML = "Hello, I'm your <span class='bold-active-text'>chest muscle</span>.<br/>I help you move your shoulders.";
	activeRightChestText.classList.add("right-chest-active-text");
	speechBubbleTop.appendChild(activeRightChestText);

	speechBubble.style.top = 26+"%";
	speechBubble.style.left = 60+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let leftDeltoid = document.querySelector(".body-layers .left-deltoid-original");
leftDeltoid.addEventListener("click", function (){
	leftDeltoid.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Deltoid.png)";
	rightDeltoid.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Deltoid.png)";
	createInfoWindow();

	let activeLeftDeltoid = document.createElement("div");
	activeLeftDeltoid.classList.add("left-deltoid-active");
	speechBubbleTop.appendChild(activeLeftDeltoid);

	let activeLeftDeltoidText = document.createElement("p");
	activeLeftDeltoidText.innerHTML = "I'm your <span class='bold-active-text'>deltoid</span>.<br/>I help you move your arm around.";
	activeLeftDeltoidText.classList.add("left-deltoid-active-text");
	speechBubbleTop.appendChild(activeLeftDeltoidText);

	speechBubble.style.top = 26+"%";
	speechBubble.style.left = 3+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let rightDeltoid = document.querySelector(".body-layers .right-deltoid-original");
rightDeltoid.addEventListener("click", function (){
	rightDeltoid.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Deltoid.png)";
	leftDeltoid.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Deltoid.png)";
	createInfoWindow();

	let activeRightDeltoid = document.createElement("div");
	activeRightDeltoid.classList.add("right-deltoid-active");
	speechBubbleTop.appendChild(activeRightDeltoid);

	let activeRightDeltoidText = document.createElement("p");
	activeRightDeltoidText.innerHTML = "I'm your <span class='bold-active-text'>deltoid</span>.<br/>I help you move your arm aroud.";
	activeRightDeltoidText.classList.add("right-deltoid-active-text");
	speechBubbleTop.appendChild(activeRightDeltoidText);

	speechBubble.style.top = 26+"%";
	speechBubble.style.left = 69+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let leftBiceps = document.querySelector(".body-layers .left-biceps-original");
leftBiceps.addEventListener("click", function (){
	leftBiceps.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Biceps.png)";
	rightBiceps.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Biceps.png)";
	createInfoWindow();

	let activeLeftBiceps = document.createElement("div");
	activeLeftBiceps.classList.add("left-biceps-active");
	speechBubbleTop.appendChild(activeLeftBiceps);

	let activeLeftBicepsText = document.createElement("p");
	activeLeftBicepsText.innerHTML = "Hi, I'm your <span class='bold-active-text'>biceps</span>.<br/>I help you lift heavy stuff!";
	activeLeftBicepsText.classList.add("left-biceps-active-text");
	speechBubbleTop.appendChild(activeLeftBicepsText);

	speechBubble.style.top = 32+"%";
	speechBubble.style.left = 0+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let rightBiceps = document.querySelector(".body-layers .right-biceps-original");
rightBiceps.addEventListener("click", function (){
	rightBiceps.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Biceps.png)";
			leftBiceps.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Biceps.png)";
	createInfoWindow();

	let activeRightBiceps = document.createElement("div");
	activeRightBiceps.classList.add("right-biceps-active");
	speechBubbleTop.appendChild(activeRightBiceps);

	let activeRightBicepsText = document.createElement("p");
	activeRightBicepsText.innerHTML = "Hi, I'm your <span class='bold-active-text'>biceps</span>.<br/>I help you lift heavy stuff!";
	activeRightBicepsText.classList.add("right-biceps-active-text");
	speechBubbleTop.appendChild(activeRightBicepsText);

	speechBubble.style.top = 33+"%";
	speechBubble.style.left = 71+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let abdomin = document.querySelector(".body-layers .abdomin-original");
abdomin.addEventListener("click", function (){
	abdomin.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedAbdomin.png)";
	createInfoWindow();

	let activeAbdomin = document.createElement("div");
	activeAbdomin.classList.add("abdomin-active");
	speechBubbleTop.appendChild(activeAbdomin);

	let activeAbdominText = document.createElement("p");
	activeAbdominText.innerHTML = "Hi, I'm your <span class='bold-active-text'>abdomen</span>.<br/>I protect your organs!";
	activeAbdominText.classList.add("abdomin-active-text");
	speechBubbleTop.appendChild(activeAbdominText);

	speechBubble.style.top = 36+"%";
	speechBubble.style.left = 18+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let leftQuadriceps = document.querySelector(".body-layers .left-quadriceps-original");
leftQuadriceps.addEventListener("click", function (){
	leftQuadriceps.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Quadriceps.png)";
	rightQuadriceps.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Quadriceps.png)";
	createInfoWindow();

	let activeLeftQuadriceps = document.createElement("div");
	activeLeftQuadriceps.classList.add("left-quadriceps-active");
	speechBubbleTop.appendChild(activeLeftQuadriceps);

	let activeLeftQuadricepsText = document.createElement("p");
	activeLeftQuadricepsText.innerHTML = "Hi, I'm your <span class='bold-active-text'>quad muscle</span>.<br/>I help you bend your knee and sit!";
	activeLeftQuadricepsText.classList.add("left-quadriceps-active-text");
	speechBubbleTop.appendChild(activeLeftQuadricepsText);

	speechBubble.style.top = 53+"%";
	speechBubble.style.left = 9+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let rightQuadriceps = document.querySelector(".body-layers .right-quadriceps-original");
rightQuadriceps.addEventListener("click", function (){
	rightQuadriceps.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Quadriceps.png)";
	leftQuadriceps.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Quadriceps.png)";
	createInfoWindow();

	let activeRightQuadriceps = document.createElement("div");
	activeRightQuadriceps.classList.add("right-quadriceps-active");
	speechBubbleTop.appendChild(activeRightQuadriceps);

	let activeRightQuadricepsText = document.createElement("p");
	activeRightQuadricepsText.innerHTML = "Hi, I'm your <span class='bold-active-text'>quad muscle</span>.<br/>I help you bend your knee and sit!";
	activeRightQuadricepsText.classList.add("right-quadriceps-active-text");
	speechBubbleTop.appendChild(activeRightQuadricepsText);

	speechBubble.style.top = 53+"%";
	speechBubble.style.left = 63+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let leftCalf = document.querySelector(".body-layers .left-calf-original");
leftCalf.addEventListener("click", function (){
	leftCalf.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Calfmuscle.png)";
	rightCalf.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Calfmuscle.png)";
	createInfoWindow();

	let activeLeftCalf = document.createElement("div");
	activeLeftCalf.classList.add("left-calf-active");
	speechBubbleTop.appendChild(activeLeftCalf);

	let activeLeftCalfText = document.createElement("p");
	activeLeftCalfText.innerHTML = "I'm your <span class='bold-active-text'>calf muscle</span>.<br/>I help you take steps!";
	activeLeftCalfText.classList.add("left-calf-active-text");
	speechBubbleTop.appendChild(activeLeftCalfText);

	speechBubble.style.top = 70+"%";
	speechBubble.style.left = 9+"%";
	speechBubble.style.transform = "rotateY(0deg)";
});

let rightCalf = document.querySelector(".body-layers .right-calf-original");
rightCalf.addEventListener("click", function (){
	rightCalf.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Calfmuscle.png)";
	leftCalf.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Calfmuscle.png)";
	createInfoWindow();

	let activeRightCalf = document.createElement("div");
	activeRightCalf.classList.add("right-calf-active");
	speechBubbleTop.appendChild(activeRightCalf);

	let activeRightCalfText = document.createElement("p");
	activeRightCalfText.innerHTML = "I'm your <span class='bold-active-text'>calf muscle</span>.<br/>I help you take steps!";
	activeRightCalfText.classList.add("right-calf-active-text");
	speechBubbleTop.appendChild(activeRightCalfText);

	speechBubble.style.top = 70+"%";
	speechBubble.style.left = 63+"%";
	speechBubble.style.transform = "rotateY(180deg)";
});

let overlayBK = document.querySelector(".overlay");
overlayBK.addEventListener("click", function (){
	closeInfoWindow();
});

function createInfoWindow () {
	let overlay = document.querySelector(".overlay");
	let speechBubbleTop = document.querySelector(".speech-bubble-top");
	let speechBubbleTip = document.querySelector(".speech-bubble-tip");

	overlay.style.display = "block";
	speechBubbleTop.style.display = "block";
	speechBubbleTip.style.display = "block";
}

function closeInfoWindow () {
	let overlay = document.querySelector(".overlay");
	let speechBubbleTop = document.querySelector(".speech-bubble-top");
	let speechBubbleTip = document.querySelector(".speech-bubble-tip");

	overlay.style.display = "none";
	speechBubbleTop.innerHTML = '';
	speechBubbleTop.style.display = "none";
	speechBubbleTip.style.display = "none";
	skull.style.backgroundImage = "url(../../dist/img/Skeleton/Original/Skull.png)";
	spine.style.backgroundImage = "url(../../dist/img/Skeleton/Original/Spine.png)";
	leftCollarbone.style.backgroundImage = "url(../../dist/img/Skeleton/Original/L_Collarbone.png)";
	rightCollarbone.style.backgroundImage = "url(../../dist/img/Skeleton/Original/R_Collarbone.png)";
	leftHumerus.style.backgroundImage = "url(../../dist/img/Skeleton/Original/L_Humerus.png)";
	rightHumerus.style.backgroundImage = "url(../../dist/img/Skeleton/Original/R_Humerus.png)";
	leftForearm.style.backgroundImage = "url(../../dist/img/Skeleton/Original/L_Forearm.png)";
	rightForearm.style.backgroundImage = "url(../../dist/img/Skeleton/Original/R_Forearm.png)";
	leftWrist.style.backgroundImage = "url(../../dist/img/Skeleton/Original/L_Wristbone.png)";
	rightWrist.style.backgroundImage = "url(../../dist/img/Skeleton/Original/R_Wristbone.png)";
	leftFingers.style.backgroundImage = "url(../../dist/img/Skeleton/Original/L_Fingerbones.png)";
	rightFingers.style.backgroundImage = "url(../../dist/img/Skeleton/Original/R_Fingerbones.png)";
	ribcage.style.backgroundImage = "url(../../dist/img/Skeleton/Original/Ribcage.png)";
	hipbone.style.backgroundImage = "url(../../dist/img/Skeleton/Original/Hipbone.png)";
	leftFemur.style.backgroundImage = "url(../../dist/img/Skeleton/Original/L_Femur.png)";
	rightFemur.style.backgroundImage = "url(../../dist/img/Skeleton/Original/R_Femur.png)";
	leftKnee.style.backgroundImage = "url(../../dist/img/Skeleton/Original/L_Kneecap.png)";
	rightKnee.style.backgroundImage = "url(../../dist/img/Skeleton/Original/R_Kneecap.png)";
	leftTibia.style.backgroundImage = "url(../../dist/img/Skeleton/Original/L_Tibia.png)";
	rightTibia.style.backgroundImage = "url(../../dist/img/Skeleton/Original/R_Tibia.png)";
	leftAnkle.style.backgroundImage = "url(../../dist/img/Skeleton/Original/L_Anklebone.png)";
	rightAnkle.style.backgroundImage = "url(../../dist/img/Skeleton/Original/R_Anklebone.png)";
	leftFoot.style.backgroundImage = "url(../../dist/img/Skeleton/Original/L_Footbone.png)";
	rightFoot.style.backgroundImage = "url(../../dist/img/Skeleton/Original/R_Footbone.png)";
	brain.style.backgroundImage = "url(../../dist/img/Organs/Original/Brain.png)";
	leftLung.style.backgroundImage = "url(../../dist/img/Organs/Original/Lung_L.png)";
	rightLung.style.backgroundImage = "url(../../dist/img/Organs/Original/Lung_R.png)";
	heart.style.backgroundImage = "url(../../dist/img/Organs/Original/Heart.png)";
	liver.style.backgroundImage = "url(../../dist/img/Organs/Original/Liver.png)";
	kidney.style.backgroundImage = "url(../../dist/img/Organs/Original/Kidney.png)";
	stomach.style.backgroundImage = "url(../../dist/img/Organs/Original/Stomach.png)";
	pancreas.style.backgroundImage = "url(../../dist/img/Organs/Original/Pancreas.png)";
	largeIntestine.style.backgroundImage = "url(../../dist/img/Organs/Original/LargeIntestine.png)";
	smallIntestine.style.backgroundImage = "url(../../dist/img/Organs/Original/SmallIntestine.png)";
	leftChest.style.backgroundImage = "url(../../dist/img/Muscles/Original/L_Chestmuscle.png)";
	rightChest.style.backgroundImage = "url(../../dist/img/Muscles/Original/R_Chestmuscle.png)";
	leftDeltoid.style.backgroundImage = "url(../../dist/img/Muscles/Original/L_Deltoid.png)";
	rightDeltoid.style.backgroundImage = "url(../../dist/img/Muscles/Original/R_Deltoid.png)";
	leftBiceps.style.backgroundImage = "url(../../dist/img/Muscles/Original/L_Biceps.png)";
	rightBiceps.style.backgroundImage = "url(../../dist/img/Muscles/Original/R_Biceps.png)";
	abdomin.style.backgroundImage = "url(../../dist/img/Muscles/Original/Abdomin.png)";
	leftQuadriceps.style.backgroundImage = "url(../../dist/img/Muscles/Original/L_Quadriceps.png)";
	rightQuadriceps.style.backgroundImage = "url(../../dist/img/Muscles/Original/R_Quadriceps.png)";
	leftCalf.style.backgroundImage = "url(../../dist/img/Muscles/Original/L_Calfmuscle.png)";
	rightCalf.style.backgroundImage = "url(../../dist/img/Muscles/Original/R_Calfmuscle.png)";
}