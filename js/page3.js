
//question function constructor 

function Question(Id, question, RanswerId, answers) {
    this.ID = Id;                       //number
    this.Question = question;           //string
    this.Answers = answers;             //array of answers objects
    this.RightAnswerID = RanswerId;     //number 
}

//Answer Function Constructor 

function Answer(Id, answer) {
    this.ID = Id;             //number = question id number if the answer is a right answer.
    this.Answer = answer;     //string.
}


////////Random Number Function

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + Number(1) ) + min)
}


///////////Randome Array Variables Function

var arrayVar = []
function randomArrayVar(numOfVar, min, max) {
    arrayVar = [];
    for (var x = 0; x < numOfVar; x++) {
        if (x === 0)
            arrayVar.push(randomNumber(min, max));
        else {
            var temp;
            do {
                var Unique = true;
                temp = randomNumber(min, max);

                for (var y = 0; y < x; y++) {
                    if (temp === arrayVar[y]) {
                        Unique = false;
                        temp = randomNumber(min, max);
                        // console.log('temp = ' + temp +', ' + 'arrayVar = ' + arrayVar[y]);
                    }
                }

            } while (!Unique)

            arrayVar.push(temp);
        }

    }
    return arrayVar;
}
// console.log(randomArrayVar(10,0,9));


//Answers Instance

var answer = [
    new Answer(1 , 'Cairo'      ),
    new Answer(2, 'Kiev'        ),
    new Answer(3, 'Asunción'    ),
    new Answer(4, 'Warsaw'      ),
    new Answer(5, 'Stockholm'   ),
    new Answer(6, 'Buenos Aires'),
    new Answer(7, 'Quito'       ),
    new Answer(8, 'Montevideo'  ),
    new Answer(9, 'Marigot'     ),
    new Answer(10, 'Ottawa'     ),
    new Answer(11, 'Havana'   ),
    new Answer(12, 'Willemstad'   ),
    new Answer(13, 'Stanley'   ),
    new Answer(14, 'Longyearbyen'   ),
    new Answer(15, 'Madrid'   ),
    new Answer(16, 'Ljubljana'   ),
    new Answer(17, 'Moscow'     ),
    new Answer(18, 'Monaco'   ),
    new Answer(19, 'New York'   ),
    new Answer(20, 'Amsterdam'   )
]
// console.log(answer[0]);


//question function constructor

var question = [
    new Question(1 ,'What Is The Capital Of Egypt ? '     , 1 ),
    new Question(2, 'What Is The Capital Of Ukraine ?'     , 2),
    new Question(3, 'What Is The Capital Of Paraguay ?'    , 3),
    new Question(4, 'What Is The Capital Of Poland ?'      , 4),
    new Question(5, 'What Is The Capital Of Sweden ?'      , 5),
    new Question(6, 'What Is The Capital Of Argentina ?'   , 6),
    new Question(7, 'What Is The Capital Of Ecuador ?'     , 7),
    new Question(8, 'What Is The Capital Of Uruguay ?'     , 8),
    new Question(9, 'What Is The Capital Of Saint Martin ?', 9),
    new Question(10,'What Is The Capital Of Canada ?'    , 10 )
]
// console.log(question[0].Answers);

/////////////////////////////////////////////////////////Generate Question Answers////////////////////////
var questionAnswers = [];
function generateQuestionAnswers(question) {
    questionAnswers = [];
    var rightAnswerIndex = (question.ID) - (Number(1) );
    // console.log(rightAnswerIndex);
    var tempArr = randomArrayVar(3, 10, 19);

    tempArr.push(rightAnswerIndex);
    var tempQuestionAnswer = [
        answer[rightAnswerIndex],
        answer[tempArr[0]],
        answer[tempArr[Number(1) ]],
        answer[tempArr[2]]
    ]
    tempAnswerIndex = randomArrayVar(4, 0, 3);
    for (var s = 0; s < 4; s++) {
        questionAnswers.push(tempQuestionAnswer[tempAnswerIndex[s]]);
    }
    return questionAnswers;
}
// console.log(answer[rightAnswerIndex]);

// generateQuestionAnswers(question[9]);
// console.log(questionAnswers);

//Generate Array Of Question Answers 

var QuestionsAnswersArray = []

function generateQuestionsAnswersArray() {
    QuestionsAnswersArray = [];

    for (var t = 0; t < 10; t++) {
        // generateQuestionAnswers(questio n[t]);
        QuestionsAnswersArray.push(generateQuestionAnswers(question[t]));
    }
    return QuestionsAnswersArray;
}
generateQuestionsAnswersArray(); //////////////////////////////////////////////////////////////////
var ArrayOfQuestionsAnswers = generateQuestionsAnswersArray();
// console.log(ArrayOfQuestionsAnswers);

//set Answers in questions objects

function setQuestionAnswers() {
    for (var p = 0; p < 10; p++) {
        question[p].Answers = ArrayOfQuestionsAnswers[p];
    }
}
setQuestionAnswers();
// console.log(question[randomeIndexes[o]]);

//////////// random question Array
var randomQuestions = [];
function getRandomeQuestions() {
    randomQuestions = [];
    var randomeIndexes = randomArrayVar(10, 0, 9);
    // console.log(randomeIndexes);

    for (var o = 0; o < 10; o++) {
        randomQuestions.push(question[randomeIndexes[o]]);
    }
    return randomQuestions;
}
var finalRandomQuestions = getRandomeQuestions();
// console.log(getRandomeQuestions());

//set time
var timerdiv = document.getElementById('timer');
// console.log(timerdiv);
minute = 39;
secound = 59;
function timer() {
    var timerfun = setInterval(() => {
        secound--;
        if (secound < 0) {
            minute--;
            secound = 59;
            ///////////////////////////////////////////
        }
        timerdiv.innerHTML = ` ${minute} : ${secound} `
        if (minute === 0 && secound === 0) {
            saveCurrentChecked();
            getResult();
            addResultToLocalStorage();
            changePage("../html/page5.html")
        }
    }, 1000);
}
timer();

///////////////////////////////////////////////////////////////////////////////////////////

var ques = document.getElementById('ques');
// console.log(question);
ques.innerHTML = finalRandomQuestions[0].Question;

var choises = document.getElementsByClassName('choises');
console.log(choises);

for (var x = 0; x < 4; x++) {
    choises[x].innerText = finalRandomQuestions[0].Answers[x].Answer;
}

////////////////////////////////////try

///////////////////////////////////end try

// onload = function ()
// {

// }

////////////////////////////////////////////////////////////////////////////////////////////////////
//selected function object

var studentAnswers = [

    {

        "questionNum": '1',
        "answerNumber": '',
        "questionID": '',
        "answerID": '',
        "checked": false
    },

    {

        "questionNum": '2',
        "answerNumber": '',
        "questionID": '',
        "answerID": '',
        "checked": false
    },

    {

        "questionNum": '3',
        "answerNumber": '',
        "questionID": '',
        "answerID": '',
        "checked": false
    },

    {

        "questionNum": '4',
        "answerNumber": '',
        "questionID": '',
        "answerID": '',
        "checked": false
    },

    {

        "questionNum": '5',
        "answerNumber": '',
        "questionID": '',
        "answerID": '',
        "checked": false
    },

    {

        "questionNum": '6',
        "answerNumber": '',
        "questionID": '',
        "answerID": '',
        "checked": false
    },

    {

        "questionNum": '7',
        "answerNumber": '',
        "questionID": '',
        "answerID": '',
        "checked": false
    },

    {

        "questionNum": '8',
        "answerNumber": '',
        "questionID": '',
        "answerID": '',
        "checked": false
    },

    {

        "questionNum": '9',
        "answerNumber": '',
        "questionID": '',
        "answerID": '',
        "checked": false
    },

    {

        "questionNum": '10',
        "answerNumber": '',
        "questionID": '',
        "answerID": '',
        "checked": false
    }

]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////// Function Next
var input = document.getElementsByTagName('input');

var previous = document.getElementsByClassName('btn')[0];

var questionNumber = document.getElementsByClassName('btn')[Number(1) ];

var next = document.getElementsByClassName('btn')[2];

var mark = document.getElementsByClassName('btn')[3];

var submit = document.getElementsByClassName('btn')[4];

var num = Number(questionNumber.innerText);

console.log(num);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function saveData() {
    for (var u = 0; u < 4; u++) {
        if (input[u].checked) {

            var sd = u + Number(1) ;
            console.log(' Num = ' + num + ' , Answer ID = ' + finalRandomQuestions[num - Number(1) ].Answers[u].ID + ' , Question ID = ' + finalRandomQuestions[num - Number(1) ].ID + ' , Answer Number = ' + sd);

            studentAnswers[num - Number(1) ].questionNum = num;

            studentAnswers[num - Number(1) ].answerNumber = sd;

            studentAnswers[num - Number(1) ].questionID = finalRandomQuestions[num - Number(1) ].ID;

            studentAnswers[num - Number(1) ].answerID = finalRandomQuestions[num - Number(1) ].Answers[u].ID;

            studentAnswers[num - Number(1) ].checked = true;

            // if( finalRandomQuestions[num-Number(1) ].ID === finalRandomQuestions[num-Number(1) ].Answers[u].ID )
            // {

            // }

            // finalRandomQuestions[2].Answers[2].ID
        }

        // choises[u].innerText = finalRandomQuestions[num].Answers[u].Answer;

    }
}



//////////////////////////////////////////////////////////////////


function nextCheck() {
    if (studentAnswers[num].checked) {
        for (var x = 0; x < 4; x++) {
            choises[x].innerText = finalRandomQuestions[num].Answers[x].Answer;
            console.log(num);
            if (x === (studentAnswers[num].answerNumber - Number(1) )) {
                input[x].checked = true;
            }
        }
    }
    else {
        for (var x = 0; x < 4; x++) {
            choises[x].innerText = finalRandomQuestions[num].Answers[x].Answer;
            console.log(num);
            input[x].checked = false;
        }
    }
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////


function previousCheck() {
    if (studentAnswers[num - 2].checked) {
        for (var x = 0; x < 4; x++) {
            choises[x].innerText = finalRandomQuestions[num - 2].Answers[x].Answer;
            if (x === (studentAnswers[num - 2].answerNumber - Number(1) )) {
                input[x].checked = true;
            }
        }
    }
    else {
        for (var x = 0; x < 4; x++) {
            choises[x].innerText = finalRandomQuestions[num - Number(1) ].Answers[x].Answer;
            console.log(num);
            input[x].checked = false;
        }
    }
}





next.addEventListener('click', function () {

    if (num < 10) {

        console.log('Num From next0 = ', num);
        saveData();
        console.log('Num From next1 = ', num);

        previous.style.display = "block";

        ques.innerText = finalRandomQuestions[num].Question;
        
        // console.log(finalRandomQuestions[num].Question);
        console.log('Num From next2 = ', num);
        nextCheck();
        console.log('Num From next3 = ', num);

        questionNumber.innerText = Number(num)+Number(1)  ;

        num++;

    }

    else {

        // console.log('Cant');

    }
}, false)












//////////////////////////////////////////////////////////////////////////////////////////////////////










previous.addEventListener('click', function () {

    if (num > Number(1) ) {

        saveData();


        console.log('previous Num = ' + num);

        previousCheck();


        questionNumber.innerText = --num;
        // console.log(num);

        ques.innerText = finalRandomQuestions[num - Number(1) ].Question;

        // console.log(finalRandomQuestions[num-Number(1) ].Question);

        for (var x = 0; x < 4; x++) {
            choises[x].innerText = finalRandomQuestions[num - Number(1) ].Answers[x].Answer;
        }

    }
    if (num == 1) {
        previous.style.display = "none";
    }
}, false)



// var result = [];

var submit = document.getElementById('submit');

////////////////////////////////////////////////////////////////////////////////////////////////////////////

var result = 0;

function saveCurrentChecked() {
    if (!studentAnswers[num - 1].checked) {
        saveData();
    }
}

function getResult() {
    result = 0;
    for (var g = 0; g < studentAnswers.length; g++) {
        if (studentAnswers[g].questionID === studentAnswers[g].answerID)
            result++;
    }
}

function changePage(URL) {
    location.replace(URL);
}


function addResultToLocalStorage() {
    window.localStorage.result = result;
}


///////////////////////////////////////////////////////////////////////
function mySubmit() {

    saveCurrentChecked();

    var check = confirm("Do You Want To Submit ?!");

    if (check) {
        getResult();

        addResultToLocalStorage();

        console.log(window.localStorage.result);

        changePage("../html/page4.html");
    }

}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var flagArr = [];
var flagMark = document.getElementsByClassName('flagMark');

function markOnCloick() {

    if (!flagArr.includes(questionNumber.innerText)) {

        var ele = document.createElement("div");

        ele.classList.add('flagMark');

        ele.innerText = questionNumber.innerText;

        ele.onclick = function () 
        {
            saveCurrentChecked();

            num = ele.innerText;
            
            if( num > 1)
            {
                previous.style.display = "block";
            }
            else
            {
                previous.style.display = "none";
            }

            ques.innerText = finalRandomQuestions[ num - Number(1) ].Question;

            if (studentAnswers[num - Number(1) ].checked) {
                for (var x = 0; x < 4; x++) {
                    choises[x].innerText = finalRandomQuestions[num - Number(1) ].Answers[x].Answer;
                    if (x === (studentAnswers[num - Number(1) ].answerNumber - Number(1) )) {
                        input[x].checked = true;
                    }
                }
            }
            else {
                for (var x = 0; x < 4; x++) {
                    choises[x].innerText = finalRandomQuestions[num - Number(1) ].Answers[x].Answer;
                    // console.log(num);
                    input[x].checked = false;
                }
            }
            
            
            console.log('Num From markOnClick = ', num);

            questionNumber.innerText = num ;
            console.log(' MarkOnClick Done ');
        };
        
    }
    // flag.appendChild(ele);
    flag.appendChild(ele);
    flagArr.push(questionNumber.innerText);

}
///////////////////////
var flag = document.getElementsByClassName('flag')[0];

console.log(flag);

mark.addEventListener('click', function () {

    if (!flagArr.includes(questionNumber.innerText)) {

        markOnCloick();
    }

}, false)

