document.addEventListener('DOMContentLoaded', function () {
    const choices = ['Rock', 'Paper', 'Scissor'];

    const userCard = document.getElementById('user');
    const pcCard = document.getElementById('pc');
    const yourScoreElement = document.querySelector('.yourscore');
    const compScoreElement = document.querySelector('.compscore');
    const resultBox = document.querySelector('.result_box');
    const playAgainBtn = document.querySelector('.playagain');
    const resultcont = document.querySelector('.result_container');
    const diagram = document.querySelector('.diagram');
    const nextbtn =document.querySelector('.next')
    const userindicator = document.getElementById('userindicator');
    const pcindicator = document.getElementById('pcindicator');
    let yourScore = parseInt(localStorage.getItem('yourScore')) || 0;
    let compScore = parseInt(localStorage.getItem('compScore')) || 0;
    yourScoreElement.textContent = yourScore;
    compScoreElement.textContent = compScore;



    // Function to generate random choice for computer
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    // Function to update the selected card image
    function updateCardImage(element, choice) {
        element.innerHTML = `<img src="${choice.toLowerCase()}.png" alt="${choice}">`;
        
    }

    // Function to check the result of the game
    function checkResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'Draw';
        } else if (
            (userChoice === 'Rock' && computerChoice === 'Scissor') ||
            (userChoice === 'Paper' && computerChoice === 'Rock') ||
            (userChoice === 'Scissor' && computerChoice === 'Paper')
        ) {
            return 'Win';
        } else {
            return 'Lose';
        }
    }

    // Function to update the result box
    function updateResultBox(result, userChoice, computerChoice) {
        if (result === 'Win') {
        resultBox.querySelector('.win').textContent = 'YOU WIN';
        nextbtn.style.display ='block';
        userindicator.style.display ='flex';
        pcindicator.style.display ='none';  
        resultBox.querySelector('.playagain').textContent = 'PLAY AGAIN';  

        }
        else if (result === 'Lose'){
            resultBox.querySelector('.win').textContent = 'YOU LOSE';
           pcindicator.style.display ='flex';
           userindicator.style.display ='none';
           resultBox.querySelector('.playagain').textContent = 'PLAY AGAIN';
            }
            else if (result === 'Draw'){
                resultBox.querySelector('.win').textContent = 'TIE UP';
                pcindicator.style.display ='none';
           userindicator.style.display ='none';
           resultBox.querySelector('.playagain').textContent = 'REPLAY';
            }
            localStorage.setItem('yourScore', yourScore);
            localStorage.setItem('compScore', compScore);
        resultBox.querySelector('.against').textContent = `AGAINST PC`;
        updateCardImage(resultBox.querySelector('.you #user'), userChoice);
        updateCardImage(resultBox.querySelector('.pc #pc'), computerChoice);
        resultBox.querySelector('#user').className = userChoice.toLowerCase();
        resultBox.querySelector('#pc').className = computerChoice.toLowerCase();
        resultcont.style.display = 'block';
        diagram.style.display ='none';
    }

    // Function to handle user's choice
    function handleUserChoice(userChoice) {
        const computerChoice = getComputerChoice();
        updateCardImage(userCard, userChoice);

        const result = checkResult(userChoice, computerChoice);
        if (result === 'Win') {
            yourScore++;
        } else if (result === 'Lose') {
            compScore++;
        }

        yourScoreElement.textContent = yourScore;
        compScoreElement.textContent = compScore;

        updateResultBox(result, userChoice, computerChoice);
    }

    // Event listener for user's choice
    document.querySelectorAll('.diagram div[data-value]').forEach(function (choiceElement) {
        choiceElement.addEventListener('click', function () {
            const userChoice = choiceElement.getAttribute('data-value');
            handleUserChoice(userChoice);
        });
    });

    // Event listener for play again button
    playAgainBtn.addEventListener('click', function () {
        resultcont.style.display = 'none';
        diagram.style.display = 'block'
        nextbtn.style.display ='none';
    });
});
var crossed = document.getElementsByClassName('cross')[0];
var rulebox = document.getElementsByClassName('rule_box')[0];
console.log(rulebox )
crossed.addEventListener('click',function(){
    rulebox.style.display ="none";    
})
var rule_btn = document.getElementsByClassName('rules')[0];
rule_btn.addEventListener('click',function(){
    rulebox.style.display ="block";    
})
