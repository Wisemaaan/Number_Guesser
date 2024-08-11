let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};


const compareGuesses = (human, computer, example) => {
    const value_1 = Math.abs(human - example);
    const value_2 = Math.abs(computer - example);

    if (value_1 === value_2) {
        return true;
    } else if (value_1 > value_2) {
        return true;
    } else if (value_1 < value_2) {
        return false;
    }

 };  


 const updateScore = (winner) => {
    if (winner === 'human' ) {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
 };


 const advanceRound = () => {
    currentRoundNumber =+ 1;
 }