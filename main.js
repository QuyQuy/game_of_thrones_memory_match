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
    // $('.container').on('click', '.card', cardClicker);

    $('.card').click(cardClicker);
    $('.playAgain').on('click',resetModal)
    // setTimeout(cardClicker, 3000);

}

function cardClicker() {
    if(this !==firstCard && flag===true){
        $(this).addClass('flipCard');



        console.log('test1', totalMatches);
        console.log('card click handler');

        if (firstCard === null) {
            firstCard = this;
            console.log('first');
            // $(this).addClass('hidden',);
        }  else {
            flag=false;
            console.log('second');
            secondCard = this;
            // $(this).addClass('hidden',);

            var firstCardBackground = $(firstCard).find('.front').css('background-image');
            var secondCardBackground = $(secondCard).find('.front').css('background-image');
            if (secondCardBackground === firstCardBackground && firstCard !==secondCard) {
                firstCard = null;
                secondCard = null;
                flag=true;
                hits++;
                attempts++;
                console.log('they are the same');
                console.log('hits:', hits);
                gameStats();



            }

            else {
                setTimeout(function () {
                    $(firstCard).removeClass('flipCard');
                    firstCard = null;

                }, 1000);

                setTimeout(function () {
                    $(secondCard).removeClass('flipCard');
                    secondCard = null;
                    flag = true;
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
        // $("header").text('won game')
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
    // cardClicker()
    $('.card').removeClass('hidden');
    // $('winnerModal').('hidden');
    // $('.card').addClass('hidden');
}











