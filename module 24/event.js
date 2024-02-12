console.log('this is separated js file')
// option 1: directly set on html element by onclick, but aita amra korbo na usually
/* <button onclick="document.body.style.backgroundColor = 'yellow'">Make Yellow</button> <!-- aita option 1: pura body k yellow kore dibe --  */


// option 2: add on click function
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 3 
const makeBlueButton = document.getElementById('make-blue');
     makeBlueButton.onclick = makeBlue; //function k call kora jabe na, just name likbo, call korle click er sathe by default blue diye dibe

     function makeBlue(){
        document.body.style.backgroundColor = 'blue';
     }


    // option 3 another
    const purpleButton = document.getElementById('make-purple');
        purpleButton.onclick = function makePurple(){
            document.body.style.backgroundColor = 'purple';
        }
        // option 4
        const makePink = document.getElementById('make-pink');
        makePink.addEventListener('click', makePinki);/*  addEventListener a duita parameter dite hoy, prothome kon operation ta, then function  */
        function makePinki(){
            document.body.style.backgroundColor = 'pink';
        }

        // option 4 another 
        const makeGreen = document.getElementById('make-green')
        makeGreen.addEventListener('click', function makeGreen(){
            document.body.style.backgroundColor = 'green'
        })

        // option 4 final jeita amra always use korbo, aita important r 2 no option ta
        document.getElementById('make-goldenRod').addEventListener('click', function(){ //function er name na dileo problem nai
            document.body.style.backgroundColor = 'goldenRod';
           })