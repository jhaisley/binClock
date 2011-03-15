// JavaScript Document
	activecolor = '#F00';
	inactivecolor = '#CCC';

function updateClock(){
    var time= new Date();
    hours = time.getHours();
    mins = time.getMinutes();
    hoursM = hours%10
	minsM = mins%10


	if (hoursM%2 == 0){
	  document.getElementById("H01").style.backgroundColor = inactivecolor;
	}else{
	  document.getElementById("H01").style.backgroundColor = activecolor;
	}
    if (hoursM == 2 || hoursM == 3 || hoursM == 6 || hoursM ==7){
     document.getElementById("H02").style.backgroundColor = activecolor;
	}else{
	 document.getElementById("H02").style.backgroundColor = inactivecolor;
	}
	if (hoursM <= 7 && hoursM >= 4){
     document.getElementById("H04").style.backgroundColor = activecolor;
	}else{
	 document.getElementById("H04").style.backgroundColor = inactivecolor;
	}
	if (hoursM >= 8){
     document.getElementById("H08").style.backgroundColor = activecolor;
	}else{
	 document.getElementById("H08").style.backgroundColor = inactivecolor;
	}
	if (hours >= 10 && hours < 20){
	  document.getElementById("H10").style.backgroundColor = activecolor;
	}else{
	 document.getElementById("H10").style.backgroundColor = inactivecolor;
    };
	if (hours > 20){
	  document.getElementById("H20").style.backgroundColor = activecolor;
	}else{
	 document.getElementById("H20").style.backgroundColor = inactivecolor;
	};
	 
	 if (minsM%2 == 0){
	  document.getElementById("M01").style.backgroundColor = inactivecolor;
	}else{
	  document.getElementById("M01").style.backgroundColor = activecolor;
	}
    if (minsM == 2 || minsM == 3 || minsM == 6 || minsM ==7){
     document.getElementById("M02").style.backgroundColor = activecolor;
	}else{
	 document.getElementById("M02").style.backgroundColor = inactivecolor;
	}
	if (minsM <= 7 && minsM >= 4){
     document.getElementById("M04").style.backgroundColor = activecolor;
	}else{
	 document.getElementById("M04").style.backgroundColor = inactivecolor;
	}
	if (minsM >= 8){
     document.getElementById("M08").style.backgroundColor = activecolor;
	}else{
	 document.getElementById("M08").style.backgroundColor = inactivecolor;
	}
	
	if (mins%40 > 10){
	  document.getElementById("M10").style.backgroundColor = activecolor;
	}else{
	 document.getElementById("M10").style.backgroundColor = inactivecolor;
    };
	
	if (mins > 20 && mins < 40){
	  document.getElementById("M20").style.backgroundColor = activecolor;
	}else{
	 document.getElementById("M20").style.backgroundColor = inactivecolor;
	};
	if (mins > 40){
	  document.getElementById("M40").style.backgroundColor = activecolor;
	}else{
	 document.getElementById("M40").style.backgroundColor = inactivecolor;
	};
	 
   setTimeout("updateClock()",2000);
   updateClock();
}