var mainRandomNumber;
var wins=0;
var loses=0;
var random1;
var random2;
var random3;
var random4;
var count=0;
var array=[];


function randomMain(){
	mainRandomNumber=Math.floor(Math.random()*(120-19+1)+19);
	$("#mainrandomnumber").text(mainRandomNumber);
}

function randomCrystal(){
	random1=Math.floor(Math.random()*12)+1;
	 random2=Math.floor(Math.random()*12)+1;
	 random3=Math.floor(Math.random()*12)+1;
	 random4=Math.floor(Math.random()*12);+1;
	
}
function reset(){
	 count=0;
	$("#score").text(count);
}
function validateScores(){
	if(count===mainRandomNumber){
  	wins=wins+1;
  	$("#wins").text(wins);
  	randomMain();
  	randomCrystal();
  	reset();
  	
  }
  else if(count>mainRandomNumber){
  	loses=loses+1;
  	$("#loses").text(loses);
  	randomMain();
  	randomCrystal();
  	reset();
  }
}



$(document).ready(function(){
	randomMain();
	randomCrystal();

  $("#button-1").on("click",function(){
  	count=count+random1;
  	$("#score").text(count);
  	console.log("count "+count)
  	validateScores();
  	
  })
  $("#button-2").on("click",function(){
  	count=count+random2;
  	$("#score").text(count);
  	validateScores();
  	
  })
  $("#button-3").on("click",function(){
  	count=count+random3;
  	$("#score").text(count);
  	validateScores();
  	
  })
  $("#button-4").on("click",function(){
  	count=count+random4;
  	$("#score").text(count);
  	validateScores();
  	
  })

  

  
  

});



