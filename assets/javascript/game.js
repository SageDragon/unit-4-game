//Create charater profiles, stats, and global vars
var charAttackHP;
var charDefendHP;
var enemyAttackHP;
var enemyDefendHP;
var charAdjAttackHP;
var charAdjDefendHP;
var hero = "";
var enemy = "";



var chars = { 

	data: {
			HP: 100,
			basicAT: 6,
			charName: "Lt Cmdr Data",
			returnAT: 12,
			},

	locutus:{
			HP: 120,
			basicAT: 8,
			charName: "Locutus of Borg",
			returnAT: 10,
			},

	will:{ 
			HP: 140,
			basicAT: 10,
			charName: "Cmdr Will Riker",
			returnAT: 8,
			},

	worf:{ 
			HP: 160,
			basicAT: 12,
			charName: "Lt Cmdr Worf",
			returnAT: 6,
			}
};


//Make reset game function
function reset() {
    //Load charater profiles into page
    $(".name01").html(chars.data.charName);
    $(".name02").html(chars.locutus.charName);
    $(".name03").html(chars.will.charName);
    $(".name04").html(chars.worf.charName);
    $(".hp01").html("HP " + chars.data.HP);
    $(".hp02").html("HP " + chars.locutus.HP);
    $(".hp03").html("HP " + chars.will.HP);
    $(".hp04").html("HP " + chars.worf.HP);

};

//Create charater selection function into page
$(document).ready(function(){
	reset();	
$(".card-body").on("click", function(){

	if(hero == ""){
		myhero()
	}
	else{
		myenemy()
	};

	function myhero(){
	if(hero == ""){
		hero = $(this).attr("id");
		// $(hero).css({"background-color": "green"});
		   console.log(hero)
	};
	if(hero == "char01"){
		$("#char01").css({"background-color": "green"});
	};
	if(hero == "char02"){
		$("#char02").css({"background-color": "green"});
	};
	if(hero == "char03"){
		$("#char03").css({"background-color": "green"});
	};
	if(hero == "char01"){
		$("#char04").css({"background-color": "green"});
	};
	};
	
	function myenemy(){
		if(enemy == ""){
			enemy = $(this).attr("id");
			   console.log(enemy)
		};
		if(enemy == "char01"){
			$("#char01").css({"background-color": "red"});
		};
		if(enemy == "char02"){
			$("#char02").css({"background-color": "red"});
		};
		if(enemy == "char03"){
			$("#char03").css({"background-color": "red"});
		};
		if(enemy == "char01"){
			$("#char04").css({"background-color": "red"});
		};
		};
	
	});

//Create function for basicATack algorithm and for basicATack and HP

//Call function for attack/defense multiplier algorithm
});


//Function for hiding/unhiding unselected or dead charaters
//Make you lose game function
//Make you won game function