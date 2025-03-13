const questions = [
    {
        question: "1/12: You arrive on Inferno island with nothing but your best outfit.",
        image: "img/Velaris.webp",
        answers: {
            E: {
                text: "I’m excited to meet the other contestants.",
                scores: { I: 0, E: +1 },
            },
            I: {
                text: "I hope I have enough energy to make an impression.",
                scores: { I: +1, E: 0 },
            },
        },
    },
    {
        question: "2/12: The contestant next to you is dressed well!",
        image: "img/Velaris.webp",
        answers: {
            S: {
                text: "They have a really good sense of style.",
                scores: { N: 0, S: +1 },
            },
            N: {
                text: "They seem like they’re put together.",
                scores: { N: +1, S: 0 },
            },
        },
    },
    {
        question: "3/12: You are all told you must perform manual labor yourselves in order to eat and drink. It’s getting dark soon.",
        image: "img/Velaris.webp",
        answers: {
            T: {
                text: "I think we should separate the group and assign tasks.",
                scores: { T: +1, F: 0 },
            },
            F: {
                text: "I think we should assign tasks with everyone's preferences in mind.",
                scores: { T: 0, F: +1 },
            },
        },
    },
    {
        question: "4/12: Your job is to get water a mile away with two other contestants.",
        image: "img/Velaris.webp",
        answers: {
            J: {
                text: "I grab a map to see the quickest way to get there.",
                scores: { P: 0, J: +1 },
            },
            P: {
                text: "I start walking with the group. We will eventually find our way there...",
                scores: { P: +1, J: 0 },
            },
        },
    },
    {
        question: "5/12: The group starts cooking, what is your role?",
        image: "img/Velaris.webp",
        answers: {
            S: {
                text: "We need vegetables in our meal, so I start cutting the carrots.",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "We only have a few ingredients... I throw out a few ideas on what we can make.",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "6/12: There's two hours before lights out and it's time to get ready for bed.",
        image: "img/Velaris.webp",
        answers: {
            J: {
                text: "I immediately get ready for bed.",
                scores: { P: 0, J: +1 },
            },
            P: {
                text: "I wind down and take my time getting ready for bed.",
                scores: { P: +1, J: 0 },
            },
        },
    },
    {
        question: "7/12: It's the end of the first day. How do you process how the day went?",
        image: "img/Velaris.webp",
        answers: {
            T: {
                text: "There was someone I was interested in I didn’t get to talk to. I think I should make an effort to talk to them tomorrow.",
                scores: { T: +1, F: 0 }
            },
            F: {
                text: "There's someone that I feel like I would get along with. I hope I can talk to them tomorrow and see if they feel the same way.",
                scores: { T: 0, F: +1 },
            },
        },
    },
    {
        question: "8/12: They announce that you and the group will participate in a challenge.",
        image: "img/Velaris.webp",
        answers: {
            N: {
                text: "I’m excited for the possibility of winning and going to paradise with the person I’m interested in.",
                scores: { N: +1, S: 0 },
            },
            S: {
                text: "I need to focus in this moment so I can win the challenge and go to paradise with the person I'm interested in..",
                scores: { N: 0, S: +1 },
            },
        },
    },
    {
        question: "9/12: You won the challenge! You know you will be going to Paradise soon, how will you be spending your free time?",
        image: "img/Velaris.webp",
        answers: {
            E: {
                text: "Actively talk to others so you can make your decision on who you want to invite.",
                scores: { E: +1, I: 0 },
            },
            I: {
                text: "Briefly go back to tent regroup and determine who you want to talk to next and potentially invite to Paradise.",
                scores: { E: 0, I: +1 },
            },
        },
    },
    {
        question: "10/12: You’re in paradise with your paradise partner. There's a hot tub, dinner on a yacht, jet ski, and a carnival date. You can pick two activities to do.",
        image: "img/Velaris.webp",
        answers: {
            J: {
                text: "Let's decide what we're going to do for the evening.",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "Let’s see where the night takes us.",
                scores: { J: 0, P: +1 },
            },
        },

    },
    {
        question: "11/12: It’s dinner time and you want to get to know the person better.",
        image: "img/Velaris.webp",
        answers: {
            F: {
                text: "I ask simple intro questions to warm up the conversation and make them feel comfortable.",
                scores: { F: +1, T: 0 },
            },
            T: {
                text: "I ask questions I need to know to see if we’re a good match.",
                scores: { F: 0, T: +1 },
            },
        },
    },
    {
        question: "12/12: Back at Inferno...you think the date went well. How do you process how Paradise went?",
        image: "img/Velaris.webp",
        answers: {
            I: {
                text: "Take time to process how you feel about this person.",
                scores: { E: 0, I: +1 },
            },
            E: {
                text: "Talk through my initial thoughts with my roommates.",
                scores: { E: +1, I: 0 },
            },
        },
    },
    {
        question: "13/12: You hear an alarm and then wake up!",
        image: "img/Velaris.webp",
        answers: {
            K: {
                text: "Aww mannnnnn...I was just getting to the good part.",
            },
            U: {
                text: "Oh thank goodness, it was just a dream.",
            },
        },
    },
];

const resultOptions = {
    "ISTJ": {
        image: "9Azriel.png",
    },
    "ISFJ": {
        image: "10Tamlin.png"
    },
    "INFJ": {
        image: "5Suriel.png"
    },
    "INTJ": {
        image: "1Nesta.png"
    },
    "ISTP": {
        image: "13Thesan.png"
    },
    "ISFP": {
        image: "14Feyre.png"
    },
    "INFP": {
        image: "6Elain.png"
    },
    "INTP": {
        image: "2Amren.png"
    },
    "ESTP": {
        image: "15Helion.png"
    },
    "ESFP": {
        image: "16Cassian.png"
    },
    "ENFP": {
        image: "8Mor.png"
    },
    "ENTP": {
        image: "4Eris.png"
    },
    "ESTJ": {
        image: "11Hybern.png"
    },
    "ESFJ": {
        image: "12Lucien.png"
    },
    "ENFJ": {
        image: "7Rhysand.png"
    },
    "ENTJ": {
        image: "3Amarantha.png"
    },

};

let currentQuestion = 0;


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});



function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}


function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    // Generate the MBTI result string
    console.log("Final MBTI Result:", result); // 🔍 Check what MBTI type is generated

    // Retrieve personality data from resultOptions
    const personalityData = resultOptions[result];
    
    console.log("Personality Data:", personalityData); // 🔍 Check if we get data
    console.log("Expected Image Path:", "images/" + (personalityData?.image || "NOT_FOUND")); // 🔍 Debug image path
    
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "img/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {
        console.error("No personality data found for:", result);
    
    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();