
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();
let speechBubbleTop = document.querySelector(".speech-bubble-top");

let skull = document.querySelector(".skull-original");
skull.addEventListener("click", function (){
	console.log("click");
	skull.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedSkull.png)";
	createInfoWindow();

	let activeSkull = document.createElement("div");
	activeSkull.classList.add("skull-active");
	speechBubbleTop.appendChild(activeSkull);

	let activeSkullText = document.createElement("p");
	activeSkullText.innerHTML = "Mic Check, One Two, One Two";
	activeSkullText.classList.add("skull-active-text");
	speechBubbleTop.appendChild(activeSkullText);


});

let spine = document.querySelector(".spine-original");
spine.addEventListener("click", function (){
	spine.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedSpine.png)";
	createInfoWindow();

	let activeSpine = document.createElement("div");
	activeSpine.classList.add("spine-active");
	speechBubbleTop.appendChild(activeSpine);

	let activeSpineText = document.createElement("p");
	activeSpineText.innerHTML = "Mic Check, One Two, One Two";
	activeSpineText.classList.add("spine-active-text");
	speechBubbleTop.appendChild(activeSpineText);

});

let leftCollarbone = document.querySelector(".left-collarbone-original");
leftCollarbone.addEventListener("click", function (){
	leftCollarbone.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Collarbone.png)";
	createInfoWindow();

	let activeLeftCollarbone = document.createElement("div");
	activeLeftCollarbone.classList.add("left-collarbone-active");
	speechBubbleTop.appendChild(activeLeftCollarbone);

	let activeLeftCollarboneText = document.createElement("p");
	activeLeftCollarboneText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftCollarboneText.classList.add("left-collarbone-active-text");
	speechBubbleTop.appendChild(activeLeftCollarboneText);
});

let rightCollarbone = document.querySelector(".right-collarbone-original");
rightCollarbone.addEventListener("click", function (){
	rightCollarbone.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Collarbone.png)";
	createInfoWindow();

	let activeRightCollarbone = document.createElement("div");
	activeRightCollarbone.classList.add("right-collarbone-active");
	speechBubbleTop.appendChild(activeRightCollarbone);

	let activeRightCollarboneText = document.createElement("p");
	activeRightCollarboneText.innerHTML = "Mic Check, One Two, One Two";
	activeRightCollarboneText.classList.add("right-collarbone-active-text");
	speechBubbleTop.appendChild(activeRightCollarboneText);
});

let leftHumerus = document.querySelector(".left-humerus-original");
leftHumerus.addEventListener("click", function (){
	leftHumerus.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Humerus.png)";
	createInfoWindow();

	let activeLeftHumerus = document.createElement("div");
	activeLeftHumerus.classList.add("left-humerus-active");
	speechBubbleTop.appendChild(activeLeftHumerus);

	let activeLeftHumerusText = document.createElement("p");
	activeLeftHumerusText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftHumerusText.classList.add("left-humerus-active-text");
	speechBubbleTop.appendChild(activeLeftHumerusText);
});

let rightHumerus = document.querySelector(".right-humerus-original");
rightHumerus.addEventListener("click", function (){
	rightHumerus.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Humerus.png)";
	createInfoWindow();

	let activeRightHumerus = document.createElement("div");
	activeRightHumerus.classList.add("right-humerus-active");
	speechBubbleTop.appendChild(activeRightHumerus);

	let activeRightHumerusText = document.createElement("p");
	activeRightHumerusText.innerHTML = "Mic Check, One Two, One Two";
	activeRightHumerusText.classList.add("right-humerus-active-text");
	speechBubbleTop.appendChild(activeRightHumerusText);
});

let leftForearm = document.querySelector(".left-forearm-original");
leftForearm.addEventListener("click", function (){
	leftForearm.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Forearm.png)";
	createInfoWindow();

	let activeLeftForearem = document.createElement("div");
	activeLeftForearem.classList.add("left-forearm-active");
	speechBubbleTop.appendChild(activeLeftForearem);

	let activeLeftForearemText = document.createElement("p");
	activeLeftForearemText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftForearemText.classList.add("left-forearm-active-text");
	speechBubbleTop.appendChild(activeLeftForearemText);
});

let rightForearm = document.querySelector(".right-forearm-original");
rightForearm.addEventListener("click", function (){
	rightForearm.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Forearm.png)";
	createInfoWindow();

	let activeRightForearm = document.createElement("div");
	activeRightForearm.classList.add("right-forearm-active");
	speechBubbleTop.appendChild(activeRightForearm);

	let activeRightForearmText = document.createElement("p");
	activeRightForearmText.innerHTML = "Mic Check, One Two, One Two";
	activeRightForearmText.classList.add("right-forearm-active-text");
	speechBubbleTop.appendChild(activeRightForearmText);
});

let leftWrist = document.querySelector(".left-wrist-original");
leftWrist.addEventListener("click", function (){
	leftWrist.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Wristbone.png)";
	createInfoWindow();

	let activeLeftWrist = document.createElement("div");
	activeLeftWrist.classList.add("left-wrist-active");
	speechBubbleTop.appendChild(activeLeftWrist);

	let activeLeftWristText = document.createElement("p");
	activeLeftWristText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftWristText.classList.add("left-wrist-active-text");
	speechBubbleTop.appendChild(activeLeftWristText);
});

let rightWrist = document.querySelector(".right-wrist-original");
rightWrist.addEventListener("click", function (){
	rightWrist.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Wristbone.png)";
	createInfoWindow();

	let activeRightWrist = document.createElement("div");
	activeRightWrist.classList.add("right-wrist-active");
	speechBubbleTop.appendChild(activeRightWrist);

	let activeRightWristText = document.createElement("p");
	activeRightWristText.innerHTML = "Mic Check, One Two, One Two";
	activeRightWristText.classList.add("right-wrist-active-text");
	speechBubbleTop.appendChild(activeRightWristText);
});

let leftFingers = document.querySelector(".left-fingers-original");
leftFingers.addEventListener("click", function (){
	leftFingers.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Fingerbones.png)";
	createInfoWindow();

	let activeLeftFingers = document.createElement("div");
	activeLeftFingers.classList.add("left-fingers-active");
	speechBubbleTop.appendChild(activeLeftFingers);

	let activeLeftFingersText = document.createElement("p");
	activeLeftFingersText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftFingersText.classList.add("left-fingers-active-text");
	speechBubbleTop.appendChild(activeLeftFingersText);
});

let rightFingers = document.querySelector(".right-fingers-original");
rightFingers.addEventListener("click", function (){
	rightFingers.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Fingerbones.png)";
	createInfoWindow();

	let activeRightFingers = document.createElement("div");
	activeRightFingers.classList.add("right-fingers-active");
	speechBubbleTop.appendChild(activeRightFingers);

	let activeRightFingersText = document.createElement("p");
	activeRightFingersText.innerHTML = "Mic Check, One Two, One Two";
	activeRightFingersText.classList.add("right-fingers-active-text");
	speechBubbleTop.appendChild(activeRightFingersText);
});

let ribcage = document.querySelector(".ribcage-original");
ribcage.addEventListener("click", function (){
	ribcage.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedRibcage.png)";
	createInfoWindow();

	let activeRibcage = document.createElement("div");
	activeRibcage.classList.add("ribcage-active");
	speechBubbleTop.appendChild(activeRibcage);

	let activeRibcageText = document.createElement("p");
	activeRibcageText.innerHTML = "Mic Check, One Two, One Two";
	activeRibcageText.classList.add("ribcage-active-text");
	speechBubbleTop.appendChild(activeRibcageText);
});

let hipbone = document.querySelector(".hipbone-original");
	hipbone.addEventListener("click", function (){
	hipbone.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedHipbone.png)";
	createInfoWindow();

	let activeHipbone = document.createElement("div");
	activeHipbone.classList.add("hipbone-active");
	speechBubbleTop.appendChild(activeHipbone);

	let activeHipboneText = document.createElement("p");
	activeHipboneText.innerHTML = "Mic Check, One Two, One Two";
	activeHipboneText.classList.add("hipbone-active-text");
	speechBubbleTop.appendChild(activeHipboneText);

});

let leftFemur = document.querySelector(".left-femur-original");
leftFemur.addEventListener("click", function (){
	leftFemur.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Femur.png)";
	createInfoWindow();

	let activeLeftFemur = document.createElement("div");
	activeLeftFemur.classList.add("left-femur-active");
	speechBubbleTop.appendChild(activeLeftFemur);

	let activeLeftFemurText = document.createElement("p");
	activeLeftFemurText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftFemurText.classList.add("left-femur-active-text");
	speechBubbleTop.appendChild(activeLeftFemurText);
});

let rightFemur = document.querySelector(".right-femur-original");
rightFemur.addEventListener("click", function (){
	rightFemur.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Femur.png)";
	createInfoWindow();

	let activeRightFemur = document.createElement("div");
	activeRightFemur.classList.add("right-femur-active");
	speechBubbleTop.appendChild(activeRightFemur);

	let activeRightFemurText = document.createElement("p");
	activeRightFemurText.innerHTML = "Mic Check, One Two, One Two";
	activeRightFemurText.classList.add("right-femur-active-text");
	speechBubbleTop.appendChild(activeRightFemurText);
});

let leftKnee = document.querySelector(".left-knee-original");
let leftKneeDiv = document.querySelector(".left-knee-div");
leftKneeDiv.addEventListener("click", function (){
	leftKnee.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Kneecap.png)";
	createInfoWindow();

	let activeLeftKnee = document.createElement("div");
	activeLeftKnee.classList.add("left-knee-active");
	speechBubbleTop.appendChild(activeLeftKnee);

	let activeLeftKneeText = document.createElement("p");
	activeLeftKneeText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftKneeText.classList.add("left-knee-active-text");
	speechBubbleTop.appendChild(activeLeftKneeText);
});

let rightKnee = document.querySelector(".right-knee-original");
let rightKneeDiv = document.querySelector(".right-knee-div");
rightKneeDiv.addEventListener("click", function (){
	rightKnee.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Kneecap.png)";
	createInfoWindow();

	let activeRightKnee = document.createElement("div");
	activeRightKnee.classList.add("right-knee-active");
	speechBubbleTop.appendChild(activeRightKnee);

	let activeRightKneeText = document.createElement("p");
	activeRightKneeText.innerHTML = "Mic Check, One Two, One Two";
	activeRightKneeText.classList.add("right-knee-active-text");
	speechBubbleTop.appendChild(activeRightKneeText);
});

let leftTibia = document.querySelector(".left-tibia-original");
	leftTibia.addEventListener("click", function (){
	leftTibia.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Tibia.png)";
	createInfoWindow();

	let activeLeftTibia = document.createElement("div");
	activeLeftTibia.classList.add("left-tibia-active");
	speechBubbleTop.appendChild(activeLeftTibia);

	let activeLeftTibiaText = document.createElement("p");
	activeLeftTibiaText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftTibiaText.classList.add("left-tibia-active-text");
	speechBubbleTop.appendChild(activeLeftTibiaText);
});

let rightTibia = document.querySelector(".right-tibia-original");
rightTibia.addEventListener("click", function (){
	rightTibia.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Tibia.png)";
	createInfoWindow();

	let activeRightTibia = document.createElement("div");
	activeRightTibia.classList.add("right-tibia-active");
	speechBubbleTop.appendChild(activeRightTibia);

	let activeRightTibiaText = document.createElement("p");
	activeRightTibiaText.innerHTML = "Mic Check, One Two, One Two";
	activeRightTibiaText.classList.add("right-tibia-active-text");
	speechBubbleTop.appendChild(activeRightTibiaText);
});

let leftAnkle = document.querySelector(".left-ankle-original");
leftAnkle.addEventListener("click", function (){
	leftAnkle.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Anklebone.png)";
	createInfoWindow();

	let activeLeftAnkle = document.createElement("div");
	activeLeftAnkle.classList.add("left-ankle-active");
	speechBubbleTop.appendChild(activeLeftAnkle);

	let activeLeftAnkleText = document.createElement("p");
	activeLeftAnkleText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftAnkleText.classList.add("left-ankle-active-text");
	speechBubbleTop.appendChild(activeLeftAnkleText);
});

let rightAnkle = document.querySelector(".right-ankle-original");
rightAnkle.addEventListener("click", function (){
	rightAnkle.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Anklebone.png)";
	createInfoWindow();

	let activeRightAnkle = document.createElement("div");
	activeRightAnkle.classList.add("right-ankle-active");
	speechBubbleTop.appendChild(activeRightAnkle);

	let activeRightAnkleText = document.createElement("p");
	activeRightAnkleText.innerHTML = "Mic Check, One Two, One Two";
	activeRightAnkleText.classList.add("right-ankle-active-text");
	speechBubbleTop.appendChild(activeRightAnkleText);
});

let leftFoot = document.querySelector(".left-foot-original");
leftFoot.addEventListener("click", function (){
	leftFoot.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedL_Footbone.png)";
	createInfoWindow();

	let activeLeftFoot = document.createElement("div");
	activeLeftFoot.classList.add("left-foot-active");
	speechBubbleTop.appendChild(activeLeftFoot);

	let activeLeftFootText = document.createElement("p");
	activeLeftFootText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftFootText.classList.add("left-foot-active-text");
	speechBubbleTop.appendChild(activeLeftFootText);
});

let rightFoot = document.querySelector(".right-foot-original");
rightFoot.addEventListener("click", function (){
	rightFoot.style.backgroundImage = "url(../../dist/img/Skeleton/Ghosted/GhostedR_Footbone.png)";
	createInfoWindow();

	let activeRightFoot = document.createElement("div");
	activeRightFoot.classList.add("right-foot-active");
	speechBubbleTop.appendChild(activeRightFoot);

	let activeRightFootText = document.createElement("p");
	activeRightFootText.innerHTML = "Mic Check, One Two, One Two";
	activeRightFootText.classList.add("right-foot-active-text");
	speechBubbleTop.appendChild(activeRightFootText);
});

let brain = document.querySelector(".brain-original");
brain.addEventListener("click", function (){
	brain.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_Brain.png)";
	createInfoWindow();

	let activeBrain = document.createElement("div");
	activeBrain.classList.add("brain-active");
	speechBubbleTop.appendChild(activeBrain);

	let activeBrainText = document.createElement("p");
	activeBrainText.innerHTML = "Mic Check, One Two, One Two";
	activeBrainText.classList.add("brain-active-text");
	speechBubbleTop.appendChild(activeBrainText);
});

let leftLung = document.querySelector(".left-lung-original");
leftLung.addEventListener("click", function (){
	leftLung.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/GhostedL_Lung.png)";
	createInfoWindow();

	let activeLeftLung = document.createElement("div");
	activeLeftLung.classList.add("left-lung-active");
	speechBubbleTop.appendChild(activeLeftLung);

	let activeLeftLungText = document.createElement("p");
	activeLeftLungText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftLungText.classList.add("left-lung-active-text");
	speechBubbleTop.appendChild(activeLeftLungText);
});

let rightLung = document.querySelector(".right-lung-original");
rightLung.addEventListener("click", function (){
	rightLung.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/GhostedR_Lung.png)";
	createInfoWindow();

	let activeRightLung = document.createElement("div");
	activeRightLung.classList.add("right-lung-active");
	speechBubbleTop.appendChild(activeRightLung);

	let activeRightLungText = document.createElement("p");
	activeRightLungText.innerHTML = "Mic Check, One Two, One Two";
	activeRightLungText.classList.add("right-lung-active-text");
	speechBubbleTop.appendChild(activeRightLungText);
});

let heart = document.querySelector(".heart-original");
heart.addEventListener("click", function (){
	heart.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_Heart.png)";
	createInfoWindow();

	let activeHeart = document.createElement("div");
	activeHeart.classList.add("heart-active");
	speechBubbleTop.appendChild(activeHeart);

	let activeHeartText = document.createElement("p");
	activeHeartText.innerHTML = "Mic Check, One Two, One Two";
	activeHeartText.classList.add("heart-active-text");
	speechBubbleTop.appendChild(activeHeartText);
});

let liver = document.querySelector(".liver-original");
let liverDiv = document.querySelector(".liver-div");
liverDiv.addEventListener("click", function (){
	liver.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_Liver.png)";
	createInfoWindow();

	let activeLiver = document.createElement("div");
	activeLiver.classList.add("liver-active");
	speechBubbleTop.appendChild(activeLiver);

	let activeLiverText = document.createElement("p");
	activeLiverText.innerHTML = "Mic Check, One Two, One Two";
	activeLiverText.classList.add("liver-active-text");
	speechBubbleTop.appendChild(activeLiverText);
});

let kidney = document.querySelector(".kidney-original");
let kidneyDiv = document.querySelector(".kidney-div");
kidneyDiv.addEventListener("click", function (){
	kidney.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_Kidney.png)";
	createInfoWindow();

	let activeKidney = document.createElement("div");
	activeKidney.classList.add("kidney-active");
	speechBubbleTop.appendChild(activeKidney);

	let activeKidneyText = document.createElement("p");
	activeKidneyText.innerHTML = "Mic Check, One Two, One Two";
	activeKidneyText.classList.add("kidney-active-text");
	speechBubbleTop.appendChild(activeKidneyText);
});

let stomach = document.querySelector(".stomach-original");
stomach.addEventListener("click", function (){
	stomach.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_Stomach.png)";
	createInfoWindow();

	let activeStomach = document.createElement("div");
	activeStomach.classList.add("stomach-active");
	speechBubbleTop.appendChild(activeStomach);

	let activeStomachText = document.createElement("p");
	activeStomachText.innerHTML = "Mic Check, One Two, One Two";
	activeStomachText.classList.add("stomach-active-text");
	speechBubbleTop.appendChild(activeStomachText);
});

let pancreas = document.querySelector(".pancreas-original");
let pancreasDiv = document.querySelector(".pancreas-div");
pancreasDiv.addEventListener("click", function (){
	pancreas.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_Pancreas.png)";
	createInfoWindow();

	let activePancreas = document.createElement("div");
	activePancreas.classList.add("pancreas-active");
	speechBubbleTop.appendChild(activePancreas);

	let activePancreasText = document.createElement("p");
	activePancreasText.innerHTML = "Mic Check, One Two, One Two";
	activePancreasText.classList.add("pancreas-active-text");
	speechBubbleTop.appendChild(activePancreasText);
});

let largeIntestine = document.querySelector(".large-intestine-original");
largeIntestine.addEventListener("click", function (){
	largeIntestine.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_LargeIntestine.png)";
	createInfoWindow();

	let activeLargeIntestine = document.createElement("div");
	activeLargeIntestine.classList.add("large-intestine-active");
	speechBubbleTop.appendChild(activeLargeIntestine);

	let activeLargeIntestineText = document.createElement("p");
	activeLargeIntestineText.innerHTML = "Mic Check, One Two, One Two";
	activeLargeIntestineText.classList.add("large-intestine-active-text");
	speechBubbleTop.appendChild(activeLargeIntestineText);
});

let smallIntestine = document.querySelector(".small-intestine-original");
let smallIntestineDiv = document.querySelector(".small-intestine-div");
smallIntestineDiv.addEventListener("click", function (){
	smallIntestine.style.backgroundImage = "url(../../dist/img/Organs/Ghosted/Ghosted_SmallIntestine.png)";
	createInfoWindow();

	let activeSmallIntestine = document.createElement("div");
	activeSmallIntestine.classList.add("small-intestine-active");
	speechBubbleTop.appendChild(activeSmallIntestine);

	let activeSmallIntestineText = document.createElement("p");
	activeSmallIntestineText.innerHTML = "Mic Check, One Two, One Two";
	activeSmallIntestineText.classList.add("small-intestine-active-text");
	speechBubbleTop.appendChild(activeSmallIntestineText);
});

let leftChest = document.querySelector(".left-chest-original");
leftChest.addEventListener("click", function (){
	leftChest.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Chestmuscle.png)";
	createInfoWindow();

	let activeLeftChest = document.createElement("div");
	activeLeftChest.classList.add("left-chest-active");
	speechBubbleTop.appendChild(activeLeftChest);

	let activeLeftChestText = document.createElement("p");
	activeLeftChestText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftChestText.classList.add("left-chest-active-text");
	speechBubbleTop.appendChild(activeLeftChestText);
});

let rightChest = document.querySelector(".right-chest-original");
rightChest.addEventListener("click", function (){
	rightChest.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Chestmuscle.png)";
	createInfoWindow();

	let activeRightChest = document.createElement("div");
	activeRightChest.classList.add("right-chest-active");
	speechBubbleTop.appendChild(activeRightChest);

	let activeRightChestText = document.createElement("p");
	activeRightChestText.innerHTML = "Mic Check, One Two, One Two";
	activeRightChestText.classList.add("right-chest-active-text");
	speechBubbleTop.appendChild(activeRightChestText);
});

// let leftDeltoid = document.querySelector(".left-deltoid-original");
// leftDeltoid.addEventListener("click", function (){
// 	leftDeltoid.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Deltoid.png)";
// 	createInfoWindow();

// 	let activeLeftDeltoid = document.createElement("div");
// 	activeLeftDeltoid.classList.add("left-deltoid-active");
// 	speechBubbleTop.appendChild(activeLeftDeltoid);

// 	let activeLeftDeltoidText = document.createElement("p");
// 	activeLeftDeltoidText.innerHTML = "Mic Check, One Two, One Two";
// 	activeLeftDeltoidText.classList.add("left-deltoid-active-text");
// 	speechBubbleTop.appendChild(activeLeftDeltoidText);
// });

// let rightDeltoid = document.querySelector(".right-deltoid-original");
// rightDeltoid.addEventListener("click", function (){
// 	rightDeltoid.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Deltoid.png)";
// 	createInfoWindow();

// 	let activeRightDeltoid = document.createElement("div");
// 	activeRightDeltoid.classList.add("right-deltoid-active");
// 	speechBubbleTop.appendChild(activeRightDeltoid);

// 	let activeRightDeltoidText = document.createElement("p");
// 	activeRightDeltoidText.innerHTML = "Mic Check, One Two, One Two";
// 	activeRightDeltoidText.classList.add("right-deltoid-active-text");
// 	speechBubbleTop.appendChild(activeRightDeltoidText);
// });

let leftBiceps = document.querySelector(".left-biceps-original");
leftBiceps.addEventListener("click", function (){
	leftBiceps.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Biceps.png)";
	createInfoWindow();

	let activeLeftBiceps = document.createElement("div");
	activeLeftBiceps.classList.add("left-biceps-active");
	speechBubbleTop.appendChild(activeLeftBiceps);

	let activeLeftBicepsText = document.createElement("p");
	activeLeftBicepsText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftBicepsText.classList.add("left-biceps-active-text");
	speechBubbleTop.appendChild(activeLeftBicepsText);
});

let rightBiceps = document.querySelector(".right-biceps-original");
rightBiceps.addEventListener("click", function (){
	rightBiceps.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Biceps.png)";
	createInfoWindow();

	let activeRightBiceps = document.createElement("div");
	activeRightBiceps.classList.add("right-biceps-active");
	speechBubbleTop.appendChild(activeRightBiceps);

	let activeRightBicepsText = document.createElement("p");
	activeRightBicepsText.innerHTML = "Mic Check, One Two, One Two";
	activeRightBicepsText.classList.add("right-biceps-active-text");
	speechBubbleTop.appendChild(activeRightBicepsText);
});

let abdomin = document.querySelector(".abdomin-original");
abdomin.addEventListener("click", function (){
	abdomin.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedAbdomin.png)";
	createInfoWindow();

	let activeAbdomin = document.createElement("div");
	activeAbdomin.classList.add("abdomin-active");
	speechBubbleTop.appendChild(activeAbdomin);

	let activeAbdominText = document.createElement("p");
	activeAbdominText.innerHTML = "Mic Check, One Two, One Two";
	activeAbdominText.classList.add("abdomin-active-text");
	speechBubbleTop.appendChild(activeAbdominText);
});

let leftQuadriceps = document.querySelector(".left-quadriceps-original");
leftQuadriceps.addEventListener("click", function (){
	leftQuadriceps.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Quadriceps.png)";
	createInfoWindow();

	let activeLeftQuadriceps = document.createElement("div");
	activeLeftQuadriceps.classList.add("left-quadriceps-active");
	speechBubbleTop.appendChild(activeLeftQuadriceps);

	let activeLeftQuadricepsText = document.createElement("p");
	activeLeftQuadricepsText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftQuadricepsText.classList.add("left-quadriceps-active-text");
	speechBubbleTop.appendChild(activeLeftQuadricepsText);
});

let rightQuadriceps = document.querySelector(".right-quadriceps-original");
rightQuadriceps.addEventListener("click", function (){
	rightQuadriceps.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Quadriceps.png)";
	createInfoWindow();

	let activeRightQuadriceps = document.createElement("div");
	activeRightQuadriceps.classList.add("right-quadriceps-active");
	speechBubbleTop.appendChild(activeRightQuadriceps);

	let activeRightQuadricepsText = document.createElement("p");
	activeRightQuadricepsText.innerHTML = "Mic Check, One Two, One Two";
	activeRightQuadricepsText.classList.add("right-quadriceps-active-text");
	speechBubbleTop.appendChild(activeRightQuadricepsText);
});

let leftCalf = document.querySelector(".left-calf-original");
leftCalf.addEventListener("click", function (){
	leftCalf.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedL_Calfmuscle.png)";
	createInfoWindow();

	let activeLeftCalf = document.createElement("div");
	activeLeftCalf.classList.add("left-calf-active");
	speechBubbleTop.appendChild(activeLeftCalf);

	let activeLeftCalfText = document.createElement("p");
	activeLeftCalfText.innerHTML = "Mic Check, One Two, One Two";
	activeLeftCalfText.classList.add("left-calf-active-text");
	speechBubbleTop.appendChild(activeLeftCalfText);
});

let rightCalf = document.querySelector(".right-calf-original");
rightCalf.addEventListener("click", function (){
	rightCalf.style.backgroundImage = "url(../../dist/img/Muscles/Ghosted/GhostedR_Calfmuscle.png)";
	createInfoWindow();

	let activeRightCalf = document.createElement("div");
	activeRightCalf.classList.add("right-calf-active");
	speechBubbleTop.appendChild(activeRightCalf);

	let activeRightCalfText = document.createElement("p");
	activeRightCalfText.innerHTML = "Mic Check, One Two, One Two";
	activeRightCalfText.classList.add("right-calf-active-text");
	speechBubbleTop.appendChild(activeRightCalfText);
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
	// leftDeltoid.style.backgroundImage = "url(../../dist/img/Muscles/Original/L_Deltoid.png)";
	// rightDeltoid.style.backgroundImage = "url(../../dist/img/Muscles/Original/R_Deltoid.png)";
	leftBiceps.style.backgroundImage = "url(../../dist/img/Muscles/Original/L_Biceps.png)";
	rightBiceps.style.backgroundImage = "url(../../dist/img/Muscles/Original/R_Biceps.png)";
	abdomin.style.backgroundImage = "url(../../dist/img/Muscles/Original/Abdomin.png)";
	leftQuadriceps.style.backgroundImage = "url(../../dist/img/Muscles/Original/L_Quadriceps.png)";
	rightQuadriceps.style.backgroundImage = "url(../../dist/img/Muscles/Original/R_Quadriceps.png)";
	leftCalf.style.backgroundImage = "url(../../dist/img/Muscles/Original/L_Calfmuscle.png)";
	rightCalf.style.backgroundImage = "url(../../dist/img/Muscles/Original/R_Calfmuscle.png)";
}