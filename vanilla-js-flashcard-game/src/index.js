const CARD_QUESTION_ANSWER_BANK = 
[
    {
        ques: "this is question 1",
        ans: "this is answer 1"
    },
    {
        ques: "this is question 2",
        ans: "this is answer 2"
    },
    {
        ques: "this is question 3",
        ans: "this is answer 3"
    },
    {
        ques: "this is question 4",
        ans: "this is answer 4"
    },
];

const uiCardTop = document.querySelector("#ui-wrapper #card-top");
const uiCardBottom = document.querySelector("#ui-wrapper #card-bottom");
const flashCardTextHTML = document.querySelector("#card-text");

let cardsInPlay;
let selectedQuestion = {};
let randomCard = 0;

function loadCard() {
    const noMoreCards = cardsInPlay.length === 0;
    if(noMoreCards) {
        disableUI();
        return flashCardTextHTML.textContent = "No more cards";
    }

    randomCard = Math.floor((cardsInPlay.length - 1) * Math.random());
    selectedQuestion = cardsInPlay[randomCard];

    return flashCardTextHTML.textContent = selectedQuestion.ques;
}

function revealAnswer() {
    return flashCardTextHTML.textContent = selectedQuestion.ans;
}

function discardCard() {
    const cardsStillInDeck = cardsInPlay.length > 0;
    if(cardsStillInDeck) cardsInPlay.splice(randomCard, 1);
    return loadCard();
}

function setup() {
    uiCardTop.addEventListener("mousedown", revealAnswer);
    uiCardBottom.addEventListener("mousedown", discardCard);
    cardsInPlay = [...CARD_QUESTION_ANSWER_BANK];
    return loadCard();;
}

function disableUI() {
    uiCardTop.removeEventListener("mousedown", () => "");
    uiCardBottom.removeEventListener("mousedown", () => "");
    return;
}

setup();