


var firstCard = null;
var secondCard = null;
var  attempts = 0;
var hits = 0;
var totalMatches = 9;
var flag = true;


$(document).ready(loadPage);




function loadPage() {
    addClickHandlersToElements();


}



function resetModal() {
    resetMemoryGame()
    closeModal()
}

function closeModal() {
    console.log('testing my stuff')
    $(".winnerModal").css('display','none');
}

function addClickHandlersToElements(){
    $('.card').click(cardClicker);
    $('.playAgain').on('click',resetModal)


}


function cardClicker() {


    if( this !==firstCard && flag===true){
        $(this).addClass('hideCard');
        console.log(' look here', this);



        console.log('test1', totalMatches);
        console.log('card click handler');

        if (firstCard === null) {
            firstCard = this;
            console.log('first');
        }  else {
            flag=false;
            console.log('second');
            secondCard = this;

            var firstCardBackground = $(firstCard).find('.front').css('background-image');
            var secondCardBackground = $(secondCard).find('.front').css('background-image');


            if (secondCardBackground === firstCardBackground && firstCard !== secondCard) {
                firstCard = null;
                secondCard = null;
                flag=true;
                hits++;
                attempts++;
                console.log('they are the same');
                console.log('hits:', hits);
                gameStats();



            } else {
                setTimeout(function () {
                    $(firstCard).removeClass('hideCard');
                    firstCard = null;
                    // secondCard = null;

                }, 1000);

                setTimeout(function () {
                    $(secondCard).removeClass('hideCard');
                    secondCard = null;
                    flag=true;
                }, 1000)
                attempts++;
                console.log('they are not the same');
                gameStats();

            }

        }

    }


}


function gameStats(){
    console.log("attempts", attempts);
    console.log("total2", totalMatches );
    var accuracyPercentage = hits/attempts *100;
    accuracyPercentage = accuracyPercentage.toFixed(2);
    if ( hits === 0){
        accuracyPercentage = 0;
    }
    if(hits === totalMatches) {
        $(".winnerModal").css('display','block');

    }
    $('.accuracy').text("Accuracy: "+ accuracyPercentage + '%');
    $('.attempts').text('Attempts: ' + attempts);


}

function  resetMemoryGame(){
    console.log('reset button');
    attempts =  0;
    hits  =  0;
    gameStats();
    $('.card').removeClass('flipCard');
}


