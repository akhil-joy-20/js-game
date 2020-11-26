function instructions(){

    alert("INSTRUCTIONS\n-----------------\n\n1.You have 8 rounds in each game\n\n2.Select your lucky number\n\n3.You can see your lucky number on number textbox below\n\n4.The predecessor(number-1) and successor(number+1) are automatically generated[An exception will occur in case of \'0\' and \'10\']\n\n5.Click \"GENERATE RANDOM NUMBER\" and a random number will be generated\n\n6.If the generated number equals your lucky number you get +5 points and if it equals to it\'s predecessor or successor you get +3 points otherwise +0 points\n\n7.After 8 rounds you can submit your score and your result will be displayed\n\n8.If you press \"Submit\" button before 8 rounds your score will be lost and game will restart\n\nHAVE FUN");

}

///////////////////////////////////////////////////////////////////////////////////

function displ(val){

  if(val==0){
     document.getElementById("point5").value=val;
     document.getElementById("point32").value=val+1;
     document.getElementById("point31").value=10;
  }else if(val==10){
    document.getElementById("point5").value=val;
     document.getElementById("point32").value=0;
     document.getElementById("point31").value=val-1;
  }else{  
     document.getElementById("point5").value=val;
     document.getElementById("point32").value=val+1;
     document.getElementById("point31").value=val-1;
  }   

}

//////////////////////////////////////////////////////////////////////////////////

function randomnum(){

   if(document.getElementById("rounds").value==8){
      alert("GAME OVER!!! \nclick submit button to know the final result");
   }else if(document.getElementById("point5").value == ""){
      alert("Select a number");
   }else{
      rn = Math.floor(Math.random()*11);
      document.getElementById("random").value = rn;
      num = document.getElementById("point5").value;
      pre = document.getElementById("point31").value;
      suc = document.getElementById("point32").value;
  

          if(rn==num){
               document.getElementById("disp1").value = "congratulations!!! (+5)";
               document.getElementById("disp2").value=Number(document.getElementById("disp2").value) + 5;
               document.getElementById("rounds").value=Number(document.getElementById("rounds").value) + 1;

         }else if(rn==pre||rn==suc){
               document.getElementById("disp1").value = "yeah! near to it (+3)";
               document.getElementById("disp2").value=Number(document.getElementById("disp2").value)+3;
               document.getElementById("rounds").value=Number(document.getElementById("rounds").value) + 1;

         }else{
               document.getElementById("disp1").value = "bad choice of number (+0)"
               document.getElementById("rounds").value=Number(document.getElementById("rounds").value) + 1;
         }

         document.getElementById("point5").value="";
         document.getElementById("point32").value="";
         document.getElementById("point31").value="";

   }

}

////////////////////////////////////////////////////////////////////////////////////////

function sub(){

   var res = document.getElementById("disp2").value;
   if(document.getElementById("disp1").value==""){
      alert("Game doesn't started");
   }else if(document.getElementById("rounds").value!=8){
      b = 8 - document.getElementById("rounds").value;
      alert("Score undefined\nYou have "+b+" round(s) more\nGame will restart");
   }else{

       if(res>=25){
             alert("Hooray! What else could we say after that awesomeness? ");
       }else if(res>=15){
             alert("Congratulations! You totally nailed it! ");
       }else if(res>=10){
             alert("Congratulations on achieving such a significant milestone");   
       }else if(res>=5){
             alert("You are near!  give one more try");
       }else{
             alert("Sorry, you lose it (try again)");
       }

   }

}

/////////////////////////////////////////////////////////////////////////////////////////
