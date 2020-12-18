/*
function melanger() {

    const randomAnswer = [
            data.results[0].correct_answer,
    
            data.results[0].incorrect_answers[0],
        
            data.results[0].incorrect_answers[1],
        
            data.results[0].incorrect_answers[2],
        
    ]

    const button = document.querySelector('.allButton')

    const random = randomAnswer[Math.floor(Math.random()*randomAnswer.length)]
    document.querySelector("#answer1").innerHTML = random
}
*/

window.onload = sendApiRequest

async function sendApiRequest() {
    let reponse = await fetch(`https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple`)
    console.log(reponse);
    let data = await reponse.json()
    console.log(data);
    useApiData(data);

}

function useApiData(data) {
    document.querySelector("#category").innerHTML = `Category: ${data.results[0].category}`
    document.querySelector("#difficulty").innerHTML = `Difficulty: ${data.results[0].difficulty}`
    document.querySelector("#question").innerHTML = `Question: ${data.results[0].question}`

    document.querySelector("#answer1").innerHTML = data.results[0].correct_answer
    document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers[0]
    document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answers[1]
    document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answers[2]

    //melanger()

}

let correctButton = document.querySelector("#answer1")
let score = 0 ;

console.log("yo");


correctButton.addEventListener("click", () => {
    score = score + 1 ;
    document.querySelector("#score").innerHTML = "Score = "+ score
    // alert("Bonne réponse")
    sendApiRequest()

})