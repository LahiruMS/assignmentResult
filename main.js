function result() {
    
    var students= {
        
        AMAL : {
            Assignment1: "65",
            Assignment2: "75",
            Assignment3: "85"
        },
        KAMAL : {
            Assignment1: "45",
            Assignment2: "65",
            Assignment3: "95"
        },
        SAMAN : {
            Assignment1: "55",
            Assignment2: "85",
            Assignment3: "35"
        }
    }

    var studentname=document.getElementById('studentname').value;
    var input=studentname.toUpperCase();
    var definition=students[input];
    var output=document.getElementById("output");

    if (definition==undefined) {
        output.innerHTML=`<hr> There is no information about this students. <hr>`;
    
    }
    else {
        output.innerHTML=`<hr> Assignment_1 score is ${definition.Assignment1}. <hr> Assignment_2 score is ${definition.Assignment2}. <hr> Assignment_3 score is ${definition.Assignment3}.`
    }
}