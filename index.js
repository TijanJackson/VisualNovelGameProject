let start = document.getElementById("start");
let music = document.getElementById("music");
let title = document.getElementById("novelTitle");
let textDiv = document.getElementById("textDiv");
let text = document.getElementById("text");
let nameAndLacking = document.getElementById("nameAndLackDiv");

let name;
let nameHtml = document.getElementById("name");
name = nameHtml.value;


let nameDiv = document.getElementById("nameDiv");
let cName;
let charName = document.getElementById("charName");

let stranger = "Man";
let daniel = "Daniel";


let lacking = document.getElementById("lack");


// DECISIONS BEGIN


// DECISION IF AND ELSE STATEMENT START

// if (firstD1.style.background === "black") {

// }
// else if (firstD2.style.background === "black") {
    
// }

// DECISION IF AND ELSE STATEMENT BEGIN

let firstDecision = document.getElementById("firstDecision");

// DECIDE 1

let firstD1 = document.getElementById("stay");
let firstD2 = document.getElementById("go");

firstD1.addEventListener("click", function() {
    firstD1.style.background = "black";
    firstD1.style.border = "black";
    firstD2.style.display = "none";
    firstDecision.style.display = 'none';
})


firstD2.addEventListener("click", function() {
    firstD2.style.background = "black";
    firstD2.style.border = "black";
    firstD1.style.display = "none";
    firstDecision.style.display = 'none';
})


// DECISIONS END

let noClickText = true;
let firstClick = false;
let secondClick = false;
let thirdClick = false;
let fourClick = false;
let fiveClick = false;
let sixClick = false;
let sevenClick = false;
let eightClick = false;
let nineClick = false;
let tenClick = false;

let elevenClick = false;
let twelveClick = false;
let thirteenClick = false;
let fourteenClick = false;
let fifteenClick = false;
let sixteenClick = false;
let seventeenClick = false;
let eighteenClick = false;
let nineteenClick = false;

let twentyClick = false;
let twentyoneClick = false;
let twentytwoClick = false;
let twentythreeClick = false;
let twentyfourClick = false;
let twentyfiveClick = false;
let twentysixClick = false;
let twentysevenClick = false;
let twentyeightClick = false;
let twentynineClick = false;

let thirtyClick = false;
let thirtyoneClick = false;
let thirtytwoClick = false;
let thirtythreeClick = false;
let thirtyfourClick = false;
let thirtyfiveClick = false;
let thirtysixClick = false;
let thirtysevenClick = false;
let thirtyeightClick = false;
let thirtynineClick = false;

let fortyClick = false;
let fortyoneClick = false;
let fortytwoClick = false;
let fortythreeClick = false;
let fortyfourClick = false;
let fortyfiveClick = false;
let fortysixClick = false;
let fortysevenClick = false;
let fortyeightClick = false;
let fortynineClick = false;

let fiftyClick = false;
let fiftyoneClick = false;
let fiftytwoClick = false;
let fiftythreeClick = false;
let fiftyfourClick = false;
let fiftyfiveClick = false;
let fiftysixClick =  false;
let fiftysevenClick = false;
let fiftyeightClick = false;
let fiftynineClick = false;

let sixtyClick = false;
let sixtyoneClick = false;
let sixtytwoClick = false;
let sixtythreeClick = false;
let sixtyfourClick = false;
let sixtyfiveClick = false;
let sixtysixClick = false;
let sixtysevenClick = false;
let sixtyeightClick = false;
let sixtynineClick = false;

let seventyClick = false;
let seventyoneClick = false;
let seventytwoClick = false;
let seventythreeClick = false;
let seventyfourClick = false;
let seventyfiveClick = false;
let seventysixClick = false;
let seventysevenClick = false;
let seventyeightClick = false;
let seventynineClick = false;

let eightyClick = false;
let eightyoneClick = false;
let eightytwoClick = false;
let eightythreeClick = false;
let eightyfourClick = false;
let eightyfiveClick = false;
let eightysixClick = false;
let eightysevenClick = false;
let eightyeightClick = false;
let eightynineClick = false;

let ninetyClick = false;
let ninetyoneClick = false;
let ninetytwoClick = false;
let ninetythreeClick = false;
let ninetyfourClick = false;
let ninetyfiveClick = false;
let ninetysixClick = false;
let ninetysevenClick = false;
let ninetyeightClick = false;
let ninetynineClick = false;

let oneHundredClick = false;
















// Functions



function playEmailNotif () {
    let audio = new Audio('Windows Notify Email.wav');
    audio.play();
}

function playClick () {
    let clickAudio = new Audio('ClickSound.mp3');
    clickAudio.play();
}




// Variables


let background = document.getElementById("background");







let textOne = () => {
    text.innerHTML = "Why am I always alone?";
    noClickText = false;
    firstClick = true;
}

let textTwo = () => {
    text.innerHTML = "Why is it always like this?";
    firstClick = false;
    secondClick = true;
}

let textThree = () => {
    text.innerHTML = "I wish things could be different just once...";
    secondClick = false;
    thirdClick = true;
}

let textFour = () => {
    text.innerHTML = "*Beep*";
    playEmailNotif();
    thirdClick = false;
    fourClick = true;

}

let textFive = () => {
    text.innerHTML = "Huh...?";
    fourClick =  false;
    fiveClick = true;
}

let textSix = () => {
    text.innerHTML = "I... got an email...?";
    fiveClick =  false;
    sixClick = true;
}

let textSeven = () => {
    text.innerHTML = "Guess I'll check it out.";
    sixClick = false;
    sevenClick = true;
}

let textEight = () => {
    playClick();
    text.innerHTML = "*Click*";
    sevenClick = false;
    eightClick = true;
};

let textNine = () => {
    // FIRST DECISION
    let stringOne = `Time for a change. If you're interested in changing your life, reply with your name and what your life is lacking.`;
    text.innerHTML = stringOne.italics();
    eightClick = false;
    nineClick = true;
}

let textTen = () =>{
    // ADD TEXT HERE
    text.innerHTML = "Sure. It's not like my life could get any worse.";
    nineClick = false;
    tenClick = true;
}

let textEleven = () => {
    nameAndLacking.style.display = "initial";
    text.innerHTML = "Huh... Lacking is already filled in. Well it's not wrong, so I'll just leave it as is.";
    tenClick = false;
    elevenClick = true;
}

let textTwelve = () => {
    // ADD TEXT HERE
    if (name != nameHtml.value) {
        name = nameHtml.value;
        nameAndLacking.style.display = "none";
        cName = name;
        nameDiv.style.display = "initial";
        charName.innerHTML = cName;
        text.innerHTML = `There we go. ${name} is my name.`;
        elevenClick = false;
        twelveClick = true;
    }
    else {
        elevenClick = true;
        text.innerHTML = "I'm going to have to write my name.";
    }
    
}

let textThirteen = () => {
    // ADD Text HERE
    text.innerHTML = 'And... send.';
    twelveClick = false;
    thirteenClick = true;
}

let textFourteen = () => {
    // ADD TEXT HERE
    text.innerHTML = 'Now I guess I wait on a response...';
    thirteenClick = false;
    fourteenClick = true;
}

let textFifteen = () => {
    // ADD TEXT HERE
    background.src = "MainProtagsaiEdit1_0.png"
    text.innerHTML = 'Huh...?';
    fourteenClick = false;
    fifteenClick = true;
}


let textSixteen = () => {
    // ADD TEXT HERE
    background.src = "MainProtagsaiEdit2_0.png"
    text.innerHTML= `Why's the light getting brighter?`;
    fifteenClick = false;
    sixteenClick = true;
}

let textSeventeen = () => {
    // ADD TEXT HERE
    background.src = "MainProtagsaiEdit3_0.png";
    text.innerHTML = `What's going on?`;
    sixteenClick = false;
    seventeenClick = true;
}

let textEighteen = () => {
    // ADD TEXT HERE
    background.src = "MainProtagsaiEdit4_0.png";
    text.innerHTML = "Why does my body feel lighter???";
    seventeenClick = false;
    eighteenClick = true;
}


let textNineteen = () => {
    // ADD TEXT HERE
    background.src = "MainProtagsaiEdit5_0.png";
    text.innerHTML = "What's happening to me!?";
    eighteenClick = false;
    nineteenClick = true;
}

let textTwenty = () => {
    // ADD TEXT HERE
    background.src = "MainProtagsaiEdit6_0.png";
    text.innerHTML = "I can't see anything!";
    nineteenClick = false;
    twentyClick = true;
}


let textTwentyOne = () => {
    // ADD TEXT HERE
    background.src = "MainProtagsaiEdit7_0.png";
    nameDiv.style.display = "none";
    text.innerHTML = " ";
    twentyClick = false;
    twentyoneClick = true;
}


// END SCENE





// START NEXT SCENE

let textTwentyTwo = () => {
    // ADD TEXT HERE
    // FADE IN
    nameDiv.style.display = "initial";
    charName.innerHTML = cName;
    background.src = "ICANTSEEcs1stEdit.png";
    text.innerHTML = `I CAN'T SEE!`;
    twentyoneClick = false;
    twentytwoClick = true;
}

let textTwentyThree = () => {
    // ADD TEXT HERE
    background.src = "ICANTSEEcs2ndEdit.png";
    text.innerHTML = `AAAAAHHH! I CAN'T SEE!`;
    twentytwoClick = false;
    twentythreeClick = true;
}

let textTwentyFour = () => {
    // ADD TEXT HERE
    
    charName.innerHTML = stranger;
    text.innerHTML = "Um...";
    twentythreeClick = false;
    twentyfourClick = true;
}

let textTwentyFive = () => {
    // ADD TEXT HERE
    background.src = "UmCSEDIT1.png";
    
    text.innerHTML = "Are... You okay?";
    twentyfourClick = false;
    twentyfiveClick = true;
}

let textTwentySix = () => {
    // ADD TEXT HERE
    background.src = "UmAreYouOkayCSEDIT2.png";
    charName.innerHTML = cName;
    text.innerHTML = "..."
    twentyfiveClick = false;
    twentysixClick = true;
}

let textTwentySeven = () => {
    // ADD Text HERE
    background.src = "Wait1.png";
    
    text.innerHTML = "...";
    twentysixClick = false;
    twentysevenClick = true;
}

let textTwentyEight = () => {
    // ADD TEXT HERE
    background.src = "Wait2.png";
    text.innerHTML = "Uh...";
    
    twentysevenClick = false;
    twentyeightClick = true;
}

let textTwentyNine = () => {
    // ADD TEXT HERE
    background.src = "WaitWaitWait3.png";
    text.innerHTML = "MMMMMMMMMMMMMMMMMMMMMM!";
    
    twentyeightClick = false;
    twentynineClick = true;
}

let textThirty = () => {
    // ADD TEXT HERE
    background.src = "DidYouSeeThat1.png";
    text.innerHTML = "Um... Did you just see that?";
    
    twentynineClick = false;
    thirtyClick = true;
}

let textThirtyOne = () => {
    //ADD TEXT HERE
    charName.innerHTML = stranger;
    background.src = 'Uhhh.png';
    text.innerHTML = "...";
    
    thirtyClick = false;
    thirtyoneClick = true;
}

let textThirtyTwo = () => {
    // ADD TEXT HERE
    background.src = 'Sure2.png';
    text.innerHTML = `No worries. I didn't see anything.`;
    thirtyoneClick = false;
    thirtytwoClick = true;
}

let textThirtyThree = () => {
    charName.innerHTML = cName;
    background.src = 'really.png';
    text.innerHTML = "R-really...?";
    thirtytwoClick = false;
    thirtythreeClick = true;
}

let textThirtyFour = () => {
    background.src = 'CanYouWalk.png';
    charName.innerHTML = stranger;
    text.innerHTML = `Yeah. Didn't see a thing.`;
    thirtythreeClick = false;
    thirtyfourClick = true;
}

let textThirtyFive = () => {
    charName.innerHTML = cName;
    text.innerHTML = "But... Then why did you ask if I was okay?";
    thirtyfourClick = false;
    thirtyfiveClick = true;
}

let textThirtySix = () => {
    charName.innerHTML = stranger;
    text.innerHTML = '...';
    thirtyfiveClick = false;
    thirtysixClick = true;
}

let textThirtySeven = () => {
    charName.innerHTML = cName;
    text.innerHTML = "...";
    thirtysixClick = false;
    thirtysevenClick = true;
}

let textThirtyEight = () => {
    text.innerHTML = `You did see, didn't you..?.`;
    thirtysevenClick = false;
    thirtyeightClick = true;
}

let textThirtyNine = () => {
    charName.innerHTML = stranger;
    text.innerHTML = "... yes.";
    thirtyeightClick = false;
    thirtynineClick = true;
}

let textForty = () => {
    charName.innerHTML = cName;
    text.innerHTML = "...";
    thirtynineClick = false;
    fortyClick = true;
}

let textFortyOne = () => {
    charName.innerHTML = stranger;
    text.innerHTML = `... I'm sorry.`;
    fortyClick = false;
    fortyoneClick = true;
}

let textFortyTwo = () => {
    charName.innerHTML = cName;
    text.innerHTML = `It's okay...`;
    fortyoneClick = false;
    fortytwoClick = true;
}

let textFortyThree = () => {
    charName.innerHTML = stranger;
    text.innerHTML = `So... Are you okay?`;
    fortytwoClick = false;
    fortythreeClick = true;
}

let textFortyFour = () => {
    charName.innerHTML = cName;
    text.innerHTML = `Yeah, I think I'm fine now.`;
    fortythreeClick = false;
    fortyfourClick = true;

}

let textFortyFive = () => {
    background.src = 'alrightGood.png';
    charName.innerHTML = stranger;
    text.innerHTML = `Alrighty. As long as you're good, I'll get going then.`;
    fortyfourClick = false;
    fortyfiveClick = true;
}

let textFortySix = () => {
    background.src = 'thumbs1.png';
    charName.innerHTML = cName;
    text.innerHTML = `W-w...`;
    firstDecision.style.display = "initial";
    fortyfiveClick = false;
    fortysixClick = true;
    
}

let textFortySeven = () => {
    if (firstD1.style.background === "black") {
        background.src = 'thumbs2.png';
        // charName.innerHTML = cName;
        text.innerHTML = `Wait... please.`;
        fortysixClick = false;
        fortysevenClick = true;
    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `Alright, bye.`
        fortysixClick = false;
        fortysevenClick = true;
    }
    else {
        text.innerHTML = `(I need to say something to him.)`;
    }
    
}
// COME BACK TO THE DECISION
let textFortyEight = () => {
    if (firstD1.style.background === "black") {
    background.src = 'thumbs3.png';
    charName.innerHTML = cName;
    text.innerHTML = `Please...`
    fortysevenClick = false;
    fortyeightClick = true;
    }
    else if (firstD2.style.background === "black") {
        background.src = `MainProtagsaiEdit7_0.png`
        nameDiv.style.display = "none";
        text.innerHTML = " ";
        fortysevenClick = false;
        fortyeightClick = true;
    }
}

let textFortyNine = () => {
    if (firstD1.style.background === "black") {
        background.src = 'thumbs2.png';
        text.innerHTML = `Don't leave...`;
        fortyeightClick = false;
        fortynineClick = true;

    }
    else if (firstD2.style.background === "black") {
        background.src = `MainProtag.png`;
        text.innerHTML = `I wished I'd asked him to stay with me. Dammit.`;
        fortyeightClick = false;
        fortynineClick = true;
    }
}

let textFifty = () => {
    if (firstD1.style.background === "black") {
        charName.innerHTML = stranger;
        background.src = 'Whywhatswrong.png';
        text.innerHTML = `Why? Is something wrong?`;
        fortynineClick = false;
        fiftyClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `Guess its back to my depression`;
        fortynineClick = false;
        fiftyClick = true;
    
    }
}

let textFiftyOne = () => {
    if (firstD1.style.background === "black") {
        charName.innerHTML = cName;
        background.src = 'thumbs3.png';
        text.innerHTML = `I... I just... don't want to be alone right now.`;
        fiftyClick = false;
        fiftyoneClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `Well that's depressing.`;
        fiftyClick = false;
        fiftyoneClick = true;
    }
    
}

let textFiftyTwo = () => {
    if (firstD1.style.background === "black") {
        charName.innerHTML = stranger;
        background.src = 'Whywhatswrong.png';
        text.innerHTML = `...`;
        fiftyoneClick = false;
        fiftytwoClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `Guess I'll go sleep.`;
        // Sleeping loading screen;
        fiftyoneClick = false;
        fiftytwoClick = true;
    
    }
    
}

let textFiftyThree = () => {
    if (firstD1.style.background === "black") {
        charName.innerHTML = cName;
        background.src = 'thumbs2.png';
        text.innerHTML = `I won't ask you to stay and stay with me for long. I'm sure you have things to do.`;
        fiftytwoClick = false;
        fiftythreeClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        fiftytwoClick = false;
        fiftythreeClick = true;
    
    }
    
}

let textFiftyFour = () => {
    if (firstD1.style.background === "black") {
        background.src = 'thumbs1.png';
        text.innerHTML = `It's okay if you can't want to though. I understand.`;
        fiftythreeClick = false;
        fiftyfourClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        fiftythreeClick = false;
        fiftyfourClick = true;
    
    }
    
}

let textFiftyFive = () => {
    if (firstD1.style.background === "black") {
        background.src = 'Whywhatswrong.png';
        charName.innerHTML = stranger;
        text.innerHTML = `...`;
        fiftyfourClick = false;
        fiftyfiveClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        fiftyfourClick = false;
        fiftyfiveClick = true;
    }
    
}

let textFiftySix = () => {
    if (firstD1.style.background === "black") {
        background.src = `Sure2.png`;
        text.innerHTML = `Sure. I don't mind staying a bit.`;
        fiftyfiveClick = false;
        fiftysixClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        fiftyfiveClick = false;
        fiftysixClick = true;
    
    }
    
}

let textFiftySeven = () => {
    if (firstD1.style.background === "black") {
        charName.innerHTML = cName;
        background.src = 'thumbs2.png';
        text.innerHTML = `Um...`;
        fiftysixClick = false;
        fiftysevenClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        fiftysixClick = false;
        fiftysevenClick = true;
    
    }
    
}

let textFiftyEight = () => {
    if (firstD1.style.background === "black") {
        charName.innerHTML = stranger;
        background.src = `alrightGood.png`;
        text.innerHTML = `Hmmm?`;
        fiftysevenClick = false;
        fiftyeightClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        fiftysevenClick = false;
        fiftyeightClick = true;
    }
    
}

let textFiftyNine = () => {
    if (firstD1.style.background === "black") {
        charName.innerHTML = cName;
        background.src = `thumbs3.png`;
        text.innerHTML = `Could you possibly... walk with me... home...?`;
        fiftyeightClick = false;
        fiftynineClick = true;


    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        fiftyeightClick = false;
        fiftynineClick = true;
    
    }
}


let textSixty = () => {
    if (firstD1.style.background === "black") {
        charName.innerHTML = stranger;
        background.src = `Sure2.png`;
        text.innerHTML = `Sure. Whenever you're ready to go, I'll walk with you.`;
        fiftynineClick = false;
        sixtyClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        fiftynineClick = false;
        sixtyClick = true;
    
    }
}

let textSixtyOne = () => {
    if (firstD1.style.background === "black") {
        charName.innerHTML = cName;
        background.src = `thumbs2.png`;
        text.innerHTML = `Th-thank you so much. I'm ready to go now.`;
        sixtyClick = false;
        sixtyoneClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        sixtyClick = false;
        sixtyoneClick = true;
    
    }
    
}

let textSixtyTwo = () => {
    if (firstD1.style.background === "black") {
        background.src = `Walk1.png`;
        text.innerHTML = `...`;
        sixtyoneClick = false;
        sixtytwoClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        sixtyoneClick = false;
        sixtytwoClick = true;
        
    }
}


let textSixtyThree = () =>{
    if (firstD1.style.background === "black") {
        background.src = `Heremyplace1.png`;
        text.innerHTML = `H-Here's my place...`;
        sixtytwoClick = false;
        sixtythreeClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        sixtytwoClick = false;
        sixtythreeClick = true;
        
    }
    
}

let textSixtyFour = () => {
    if (firstD1.style.background === "black") {
        background.src = `thankyou1.png`;
        text.innerHTML = `T-T-thank you for w-w-walking me home!`;
        sixtythreeClick = false;
        sixtyfourClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        sixtythreeClick = false;
        sixtyfourClick = true;
        
    }

}

let textSixtyFive = () => {
    if (firstD1.style.background === "black") {
        background.src = `thankyou2.png`;
        text.innerHTML = `You're a good person sir.`;
        sixtyfourClick = false;
        sixtyfiveClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        sixtyfourClick = false;
        sixtyfiveClick = true;
        
    }

}

let textSixtySix = () => {
    if (firstD1.style.background === "black") {
        charName.innerHTML = stranger;
        background.src = `Bye4.png`;
        text.innerHTML = `Sir?`;
        sixtyfiveClick = false;
        sixtysixClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        sixtyfiveClick = false;
        sixtysixClick = true;
        
    }

}

let textSixtySeven = () => {
    if (firstD1.style.background === "black") {
        background.src = `Bye4.png`;
        text.innerHTML = `I'm sure we're around the same age. But maybe I am older? Who knows.`;
        sixtysixClick = false;
        sixtysevenClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        sixtysixClick = false;
        sixtysevenClick = true;
        
    }

}

let textSixtyEight = () => {
    if (firstD1.style.background === "black") {
        background.src = `Bye3.png`;
        text.innerHTML = `Anyway, it's starting to get colder now, so maybe you should get indoors.`;
        sixtysevenClick = false;
        sixtyeightClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        sixtysevenClick = false;
        sixtyeightClick = true;
        
    }

}

let textSixtyNine = () => {
    if (firstD1.style.background === "black") {
        charName.innerHTML = cName;
        background.src = `Bye1.png`;
        text.innerHTML = `Mm. I think that's good idea.`;
        sixtyeightClick = false;
        sixtynineClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        sixtyeightClick = false;
        sixtynineClick = true;
        
    }

}


let textSeventy = () => {
    if (firstD1.style.background === "black") {
        charName.innerHTML = stranger;
        background.src = `Bye3.png`;
        text.innerHTML = `Alright then. I'll be leaving now. You have a good night miss.`;
        sixtynineClick = false;
        seventyClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        sixtynineClick = false;
        seventyClick = true;
        
    }

}

let textSeventyOne = () => {
    if (firstD1.style.background === "black") {
        charName.innerHTML = cName;
        background.src = `Bye2.png`;
        text.innerHTML = `...`;
        seventyClick = false;
        seventyoneClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        seventyClick = false;
        seventyoneClick = true;
        
    }

}

let textSeventyTwo = () => {
    if (firstD1.style.background === "black") {
        text.innerHTML = `G... G-G-Goodnight!`;
        seventyoneClick = false;
        seventytwoClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        seventyoneClick = false;
        seventytwoClick = true;
        
    }

}

let textSeventyThree = () => {
    if (firstD1.style.background === "black") {
        background.src = `MainProtagsaiEdit7_0.png`;
        seventytwoClick = false;
        seventythreeClick = true;

    }
    else if (firstD2.style.background === "black") {
        text.innerHTML = `...`;
        seventytwoClick = false;
        seventythreeClick = true;
        
    }

}

let textSeventyFour = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }

}

let textSeventyFive = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }

}

let textSeventySix = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }

}

let textSeventySeven = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }

}

let textSeventyEight = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }

}

let textSeventyNine = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }

}


let textEighty = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }

}

let textEightyOne = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textEightyTwo = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textEightyThree = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textEightyFour = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textEightyFive = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textEightySix = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textEightySeven = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textEightyEight = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textEightyNine = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}


let textNinety = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }

}

let textNinetyOne = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textNinetyTwo = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textNinetyThree = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textNinetyFour = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textNinetyFive = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textNinetySix = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textNinetySeven = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textNinetyEight = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}

let textNinetyNine = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }
    
}


let textOneHundred = () => {
    if (firstD1.style.background === "black") {

    }
    else if (firstD2.style.background === "black") {
        
    }

}




start.addEventListener('click', function(){
    start.style.display = 'none';
    music.style.display = 'none';
    title.style.display = 'none';
    background.src = "MainProtag.png";
    textDiv.style.display = 'initial';
});

// background.addEventListener('click', function() {
//     text.innerHTML = "Why am I always alone";
// })






// Actual Game Click Events

background.addEventListener('click', function() {
    if ( noClickText ) {
        textOne();
    }
    else if (firstClick) {
        textTwo();
    }
    else if (secondClick) {
        textThree();
    }
    else if (thirdClick) {
        textFour();
    }
    else if (fourClick) {
        textFive();
    }
    else if (fiveClick) {
        textSix();
    }
    else if (sixClick) {
        textSeven();
    }
    else if (sevenClick) {
        textEight();
    }
    else if (eightClick) {
        textNine();
    }
    else if (nineClick) {
        textTen();
    }
    else if (tenClick) {
        textEleven();
    }
    else if (elevenClick) {
        textTwelve();
    }
    else if (twelveClick) {
        textThirteen();
    }
    else if (thirteenClick) {
        textFourteen();
    }
    else if (fourteenClick) {
        textFifteen();
    }
    else if (fifteenClick) {
        textSixteen();
    }
    else if (sixteenClick) {
        textSeventeen();
    }
    else if (seventeenClick) {
        textEighteen();
    }
    else if (eighteenClick) {
        textNineteen();
    }
    else if (nineteenClick) {
        textTwenty();
    }
    else if (twentyClick) {
        textTwentyOne();
    }
    else if (twentyoneClick) {
        textTwentyTwo();
    }
    else if (twentytwoClick) {
        textTwentyThree();
    }
    else if (twentythreeClick) {
        textTwentyFour();
    }
    else if (twentyfourClick) {
        textTwentyFive();
    }
    else if (twentyfiveClick) {
        textTwentySix();
    }
    else if (twentysixClick) {
        textTwentySeven();
    }
    else if (twentysevenClick) {
        textTwentyEight();
    }
    else if (twentyeightClick) {
        textTwentyNine();
    }
    else if (twentynineClick) {
        textThirty();
    }
    else if (thirtyClick) {
        textThirtyOne();
    }
    else if (thirtyoneClick) {
        textThirtyTwo();
    }
    else if (thirtytwoClick) {
        textThirtyThree();
    }
    else if (thirtythreeClick) {
        textThirtyFour();
    }
    else if (thirtyfourClick) {
        textThirtyFive();
    }
    else if (thirtyfiveClick) {
        textThirtySix();
    }
    else if (thirtysixClick) {
        textThirtySeven();
    }
    else if (thirtysevenClick) {
        textThirtyEight();
    }
    else if (thirtyeightClick) {
        textThirtyNine();
    }
    else if (thirtynineClick) {
        textForty();
    }
    else if (fortyClick) {
        textFortyOne();
    }
    else if (fortyoneClick) {
        textFortyTwo();
    }
    else if (fortytwoClick) {
        textFortyThree();
    }
    else if (fortythreeClick) {
        textFortyFour();
    }
    else if (fortyfourClick) {
        textFortyFive();
    }
    else if (fortyfiveClick) {
        textFortySix();
    }
    else if (fortysixClick) {
        textFortySeven();
    }
    else if (fortysevenClick) {
        textFortyEight();
    }
    else if (fortyeightClick) {
        textFortyNine();
    }
    else if (fortynineClick) {
        textFifty();
    }
    else if (fiftyClick) {
        textFiftyOne();
    }
    else if (fiftyoneClick) {
        textFiftyTwo();
    }
    else if (fiftytwoClick) {
        textFiftyThree();
    }
    else if (fiftythreeClick) {
        textFiftyFour();
    }
    else if (fiftyfourClick) {
        textFiftyFive();
    }
    else if (fiftyfiveClick) {
        textFiftySix();
    }
    else if (fiftysixClick) {
        textFiftySeven();
    }
    else if (fiftysevenClick) {
        textFiftyEight();
    }
    else if (fiftyeightClick) {
        textFiftyNine();
    }
    else if (fiftynineClick) {
        textSixty();
    }
    else if (sixtyClick) {
        textSixtyOne();
    }
    else if (sixtyoneClick) {
        textSixtyTwo();
    }
    else if (sixtytwoClick) {
        textSixtyThree();
    }
    else if (sixtythreeClick) {
        textSixtyFour();
    }
    else if (sixtyfourClick) {
        textSixtyFive();
    }
    else if (sixtyfiveClick) {
        textSixtySix();
    }
    else if (sixtysixClick) {
        textSixtySeven();
    }
    else if (sixtysevenClick) {
        textSixtyEight();
    }
    else if (sixtyeightClick) {
        textSixtyNine();
    }
    else if (sixtynineClick) {
        textSeventy();
    }
    else if (seventyClick) {
        textSeventyOne();
    }
    else if (seventyoneClick) {
        textSeventyTwo();
    }
    else if (seventytwoClick) {
        textSeventyThree();
    }
    else if (seventythreeClick) {
        textSeventyFour();
    }
    else if (seventyfourClick) {
        textSeventyFive();
    }
    else if (seventyfiveClick) {
        textSeventySix();
    }
})