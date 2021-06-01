function black(){
    questionerv=document.getElementById("questioner").value;
    answererv=document.getElementById("answerer").value;
    number_1v=document.getElementById("number1").value;
    number_2v=document.getElementById("number2").value;
    message="NOTE:Please fill in all the fields";
    actual_ans=parseInt(number_1v)-parseInt(number_2v);
    localStorage.setItem("questioner", questionerv);
    localStorage.setItem("answerer", answererv);
    localStorage.setItem("number1", number_1v);
    localStorage.setItem("number2", number_2v);

    if(questionerv==""){
        document.getElementById("hi").innerHTML=message;
    }
    else{
        localStorage.setItem("questioner",questionerv);
        localStorage.setItem("answerer",answererv);
        localStorage.setItem("number1",number_1v);
        localStorage.setItem("number2",number_2v);
    }
    if(answererv==""){
        document.getElementById("hi").innerHTML=message;
    }
    else{
        localStorage.setItem("questioner",questionerv);
        localStorage.setItem("answerer",answererv);
        localStorage.setItem("number1",number_1v);
        localStorage.setItem("number2",number_2v);
    }
    if(number_1v==""){
        document.getElementById("hi").innerHTML=message;
    }
    else{
        localStorage.setItem("questioner",questionerv);
        localStorage.setItem("answerer",answererv);
        localStorage.setItem("number1",number_1v);
        localStorage.setItem("number2",number_2v);
    }
    if(number_2v==""){
        document.getElementById("hi").innerHTML=message;
    }
    else{
        localStorage.setItem("questioner",questionerv);
        localStorage.setItem("answerer",answererv);
        localStorage.setItem("number1",number_1v);
        localStorage.setItem("number2",number_2v);
    }
     player1score=0;
     player2score=0;
     player1name=localStorage.getItem("player_1");
     player2name=localStorage.getItem("player_2");
     document.getElementById("player1_name").innerHTML = player1name + " : "+player1score; 
     document.getElementById("player2_name").innerHTML = player2name + " : "+player2score;
     document.getElementById("question").innerHTML=number_1v+"-"+number_2v;
     document.getElementById("qname").innerHTML="Questioner-"+questionerv;
     document.getElementById("aname").innerHTML="Answerer-"+answererv;

}
function check(){
    question_turn="player 2";
    answer_turn="player 1";

  getans=document.getElementById("answer").value;
  if(getans==actual_ans){
    if(answer_turn=="player 2"){
      player2score=player2score+1;
    document.getElementById("player2_name").innerHTML=player2name + " : "+player2score; 
    question_turn="player 1";
    document.getElementById("qname").innerHTML="Questioner-"+player1name;
    }
  else{
    player1score=player1score+1;
    document.getElementById("player1_name").innerHTML=player1name + " : "+player1score;
    question_turn="player 2";
    document.getElementById("qname").innerHTML="Questioner-"+player2name;
  }
}
  if(question_turn=="player 1"){
    question_turn="player 2";
    document.getElementById("qname").innerHTML="Questioner-"+player2name;
  }
  else{
    question_turn="player 1";
    document.getElementById("qname").innerHTML= "Questioner-"+player1name;
  }
  if(answer_turn=="player 1"){
    answer_turn="player 2";
    document.getElementById("aname").innerHTML= "Answerer-"+player2name;
  }
  else{
    answer_turn="player 1";
    document.getElementById("aname").innerHTML="Answerer-"+player1name;
  }
}