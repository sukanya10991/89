function black(){
    questionerv=document.getElementById("questioner").value;
answererv=document.getElementById("answerer").value;
number_1v=document.getElementById("number1").value;
number_2v=document.getElementById("number2").value;
message="NOTE:Please fill in all the fields";
actual_ans=parseInt(number_1v)-parseInt(number_2v);
    if(questionerv==""){
        document.getElementById("hi").innerHTML=message;
    }
    else{
        localStorage.setItem("questioner",questionerv);
        localStorage.setItem("answerer",answererv);
        localStorage.setItem("number1",number_1v);
        localStorage.setItem("number2",number_2v);
        localStorage.setItem("operation",operationv);
    }
    if(answererv==""){
        document.getElementById("hi").innerHTML=message;
    }
    else{
        localStorage.setItem("questioner",questionerv);
        localStorage.setItem("answerer",answererv);
        localStorage.setItem("number1",number_1v);
        localStorage.setItem("number2",number_2v);
        localStorage.setItem("operation",operationv);
    }
    if(number_1v==""){
        document.getElementById("hi").innerHTML=message;
    }
    else{
        localStorage.setItem("questioner",questionerv);
        localStorage.setItem("answerer",answererv);
        localStorage.setItem("number1",number_1v);
        localStorage.setItem("number2",number_2v);
        localStorage.setItem("operation",operationv);
    }
    if(number_2v==""){
        document.getElementById("hi").innerHTML=message;
    }
    else{
        localStorage.setItem("questioner",questionerv);
        localStorage.setItem("answerer",answererv);
        localStorage.setItem("number1",number_1v);
        localStorage.setItem("number2",number_2v);
        localStorage.setItem("operation",operationv);
    }
    player1score=0;
    player2score=0;
    
    document.getElementById("player1_name").innerHTML = player1name + " : "; 
    document.getElementById("player2_name").innerHTML = player2name + " : ";
     document.getElementById("player1_score").innerHTML = player1score ;
     document.getElementById("player2_score").innerHTML = player2score ;
     document.getElementById("player_question").innerHTML = "Question Turn - " + player1name ;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name ;
    player1name=localStorage.getItem("player_1");
player2name=localStorage.getItem("player_2"); 
}
function check(){
    question_turn="player 1";
answer_turn="player 2";

  getans=document.getElementById("answer").value;
  if(getans==actual_ans){
    if(answer_turn=="player 1"){
      player1score=player1score+1;
    document.getElementById("player1_score").innerHTML=player1score;
    }
  else{
    player2score=player2score+1;
    document.getElementById("player2_score").innerHTML=player2score;
  }
}
  if(question_turn=="player 1"){
    question_turn="player 2";
    document.getElementById("qname").innerHTML= player2name ;
  }
  else{
    question_turn="player 1";
    document.getElementById("qname").innerHTML= player1name ;
  }
  if(answer_turn=="player 1"){
    answer_turn="player 2";
    document.getElementById("aname").innerHTML= player2name ;
  }
  else{
    answer_turn="player 1";
    document.getElementById("aname").innerHTML=player1name ;
  }
}