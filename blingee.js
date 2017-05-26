//Post Snoop


function postSnoop() {
    //div = 1 through 5
    
    var column = Math.floor(Math.random() * 5) + 1;     

     // Post image to div
    function post() {
        
        document.getElementById("image" + column).setAttribute("src","SNOOP.gif");
  
        
        
           //2. Display the result
 //   var diceDOM = document.querySelector('.dice');
  //  diceDOM.style.display = "block";
   // diceDOM.src = 'dice-' + dice + '.png';

        
        
        
        
        
    }   
post();
}
    
    
    
// Change Header Text
 function headerText() {
     document.querySelector('#header').innerHTML === "true";
     if (document.querySelector('#header').textContent === "HEY LADIES!") {
             document.querySelector('#header').textContent = "HEY FELLAS!";
     } else  {
            document.querySelector('#header').textContent = "HEY LADIES!";
 }
 }


// Change Background color
    function backgroundSwap(){
        if (document.body.style.backgroundColor === 'tomato') {
             document.body.style.backgroundColor = 'lightblue';
        } else {
            document.body.style.backgroundColor = 'tomato';

        }
        }
       
//End of functions
/*
function close(){
    for (i = 0; i < 5; i++) {
         document.body.style.backgroundColor = 'black';

    }
}
*/

// Activate all functions
function blingee () {
    headerText();
    backgroundSwap();
    postSnoop();
   // close();
    };
