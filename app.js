// ============================ Questions to Determine Character ============================

const questions = [
    {
        question: "1/12: You wake up in a cottage in the woods. A beastly creature with dark scales, wings, and talons BURSTS through the door.",
        image: "img/1Question.png",
        answers: {
            E: {
                text: "WHAT! Ok let me try to talk to this...thing.",
                scores: { I: 0, E: +1 },
            },
            I: {
                text: "If I don't move maybe he won't see me.",
                scores: { I: +1, E: 0 },
            },
        },
    },
    {
        question: "2/12: The beast claims that it is going to take you away to a place called Prythian.",
        image: "img/2Question.png",
        answers: {
            P: {
                text: "Cool let's go. I'll follow you!",
                scores: { J: 0, P: +1 },
            },
            J: {
                text: "Hold on...let me pack my bags. And call out of work!",
                scores: { J: +1, P: 0 },
            },
        },
    },
    {
        question: "3/12: You are swept away into the air and land at the foot of steps leading up to a beautiful castle.",
        image: "img/3Question.png",
        answers: {
            T: {
                text: "How is this possible? I need to know more about this place.",
                scores: { T: +1, F: 0 },
            },
            F: {
                text: "I'm so overwhelmed. WATS GOING ON?!",
                scores: { T: 0, F: +1 },
            },
        },
    },
    {
        question: "4/12: You enter the castle and the beast turns into a beautiful male with pointy ears. He looks elegant and there are dark shadows swirling around him.",
        image: "img/4Question.png",
        answers: {
            S: {
                text: "He is dressed nicely. But why are those shadows doing that.",
                scores: { N: 0, S: +1 },
            },
            N: {
                text: "This guy looks like he would have all the answers.",
                scores: { N: +1, S: 0 },
            },
        },
    },
    {
        question: "5/12: The male introduces himself as Rhysand, High Lord of the Night Court. He tells you that your father was High Fae and highly respected in the Night Court as a general.",
        image: "img/5Question.png",
        answers: {
            E: {
                text: "Wha- tell me more! Let's talk about this! Can you show me more of this place?",
                scores: { E: +1, I: 0 },
            },
            I: {
                text: "Sorry Rhy-whatever your name is, I need a moment to digest this. Is there somewhere I can sit?",
                scores: { E: 0, I: +1 },
            },
        },
    },
    {
        question: "6/12: After some time with the High Lord, you learn that you have inherited hidden powers valuable for the war against an evil Queen.",
        image: "img/6Question.png",
        answers: {
            P: {
                text: "If I'm here long enough, maybe the powers will come to me.",
                scores: { P: +1, J: 0 },
            },
            J: {
                text: "I need to get to work tomorrow and train to use my powers.",
                scores: { P: 0, J: +1 },
            },
        },
    },
    {
        question: "7/12: Rhysand tells you that the future of Prythian rests on your shoulders. He will enlist his inner circle to train you starting tomorrow.",
        image: "img/7Question.png",
        answers: {
            F: {
                text: "AHH I need to save everyone here?! I can't let them down!",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "If I master my powers, I can potentially defeat this evil Queen.",
                scores: { T: +1, F: 0 }
            },
        },
    },
    {
        question: "8/12: It's the next day and you are led by a maid to the courtyard of the castle. You see a group of people laughing together.",
        image: "img/8Question.png",
        answers: {
            N: {
                text: "I wouldn't be surprised if they've been through a lot together.",
                scores: { N: +1, S: 0 },
            },
            S: {
                text: "They seem like a really close bunch - an attractive bunch at that.",
                scores: { N: 0, S: +1 },
            },
        },
    },
    {
        question: "9/12: During training, a pretty female named Feyre demonstrates a move that conjures shadows that you can't seem to get right.",
        image: "img/9Question.png",
        answers: {
            T: {
                text: "HM. This doesn't make sense. I am doing the exact movement she is doing.",
                scores: { T: +1, F: 0 },
            },
            F: {
                text: "AGH. Maybe if I just try a little harder it will work.",
                scores: { T: 0, F: +1 },
            },
        },
    },
    {
        question: "10/12: You finally manifest a shadow out of your hand. The group cheers and Feyre says that you're done with training for the day.",
        image: "img/10Question.png",
        answers: {
            E: {
                text: "You guys hungry? Let's get something to eat.",
                scores: { I: 0, E: +1 },
            },
            I: {
                text: "I'm tired. See you guys later for dinner!",
                scores: { I: +1, E: 0 },
            },
        },

    },
    {
        question: "11/12: At night, Rhysand and Feyre bring you to the castle balcony and reveal that you have one month to prepare yourself for war and master your powers.",
        image: "img/11Question.png",
        answers: {
            J: {
                text: "One month? You better have a training plan prepped for me.",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "Wuht. I guess I'll figure it out eventually.",
                scores: { J: 0, P: +1 },
            },
        },
    },
    {
        question: "12/12: Suddenly, Rhysand pushes you off the balcony and shouts at you to use your wings!",
        image: "img/12Question.png",
        answers: {
            N: {
                text: "If I can somehow fly, I'm going to push HIM off this balcony.",
                scores: { S: 0, N: +1 },
            },
            S: {
                text: "I have wings? I have WINGS! I have WINGSSSSSSSS!",
                scores: { S: +1, N: 0 },
            },
        },
    },
    {
        question: "13/12: You are falling...falling...falling...and you wake up in your bed with a JOLT.",
        image: "img/13Question.png",
        answers: {
            Y: {
                text: "Aww mannnnnn...I was just getting to the good part.",
            },
            Z: {
                text: "Oh thank goodness, it was just a dream.",
            },
        },
    },
];

// ============================ Personality and Character Match Up ===========================

const resultOptions = {
    "INTJ": { image: "1Nesta.png" },
    "INTP": { image: "2Amren.png" },
    "ENTJ": { image: "3Amarantha.png" },
    "ENTP": { image: "4Eris.png" },
    "INFJ": { image: "5Suriel.png" },
    "INFP": { image: "6Elain.png" },
    "ENFJ": { image: "7Rhysand.png" },
    "ENFP": { image: "8Mor.png" },
    "ISTJ": { image: "9Azriel.png", },
    "ISFJ": { image: "10Tamlin.png" },
    "ESTJ": { image: "11Ianthe.png" },
    "ESFJ": { image: "12Lucien.png" },
    "ISTP": { image: "13Thesan.png" },
    "ISFP": { image: "14Feyre.png" },
    "ESTP": { image: "15Helion.png" },
    "ESFP": { image: "16Cassian.png" },
};

// ============================ Global Variables ============================

let questionIndex = 0;
let answerScores = {};

// ============================ Start Button Event Listener ============================

document.getElementById('begin-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    questionIndex = 0;
    answerScores = {};
    updateProgressBar(); // Reset progress to 0% when quiz starts
    renderNextQuestion(); 
});

// ============================ Render Next Question Function ============================

function updateProgressBar() {
    const progress = ((questionIndex + 1) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
}

function renderNextQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[questionIndex];

    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${questionIndex + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="answers-button" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
        updateProgressBar(); // Update progress bar here
    }
}

// ============================ Attach Button Click Handlers ============================

function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.answers-button');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}

// ============================ Handle Answer Function ============================

function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[questionIndex];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        answerScores[dimension] = (answerScores[dimension] || 0) + answer.scores[dimension];
    }

    if (questionIndex < questions.length - 1) {
        questionIndex++;
        renderNextQuestion();
    } else {
        showResult();
    }
}

// ============================ Show Result Function ============================

function showResult() {
    const resultElement = document.getElementById('result');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => answerScores[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    const result = pairs.map(pair => topLetters[pair]).join('');

    const characterMatch = resultOptions[result];
    
    if (characterMatch) {
        resultImage.src = "img/"+characterMatch.image;
    }

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}