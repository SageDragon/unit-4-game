//Create charater profiles, stats, and global vars
var charAttackHP;
var charDefendHP;
var enemyAttackHP;
var enemyDefendHP;
var charAdjAttackHP = 0;
var charAdjDefendHP;
var hero = "";
var enemy = "";
var heroPicked = true;
var enemyPicked = true;
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
function myhero(){
    // debugger;
    
    if(hero === "char01"){
		heroNumber = 01;
		workingHero = chars.data;
		charAttackHP = workingHero.basicAT;
		charDefendHP = workingHero.HP;
		$("#char01").css({"background-color": "green"});
		$("#infoboard2").html("Your Hero is " + chars.data.charName);
    };
    if(hero === "char02"){
		heroNumber = 02;
		workingHero = chars.locutus;
		charAttackHP = workingHero.basicAT;
		charDefendHP = workingHero.HP;
		$("#char02").css({"background-color": "green"});
		$("#infoboard2").html("Your Hero is " + chars.locutus.charName);

    };
    if(hero === "char03"){
		heroNumber = 03;
		workingHero = chars.will;
		charAttackHP = workingHero.basicAT;
		charDefendHP = workingHero.HP;
		$("#char03").css({"background-color": "green"});
		$("#infoboard2").html("Your Hero is " + chars.will.charName);

    };
    if(hero === "char04"){
		heroNumber = 04;
		workingHero = chars.worf;
		charAttackHP = workingHero.basicAT;
		charDefendHP = workingHero.HP;
		$("#char04").css({"background-color": "green"});
		$("#infoboard2").html("Your Hero is " + chars.worf.charName);

    };
};
	
function myenemy(){
    // enemy = $(this).attr("id");
    if(enemy === "char01"){
		enemyNumber = 01;
		workingEnemy = chars.data;
		enemyAttackHP = workingEnemy.returnAT;
		enemyDefendHP = workingEnemy.HP;
		$("#char01").css({"background-color": "red"});
		$("#infoboard1").html(" :  Your Opponent is " + chars.data.charName);

    };
    if(enemy === "char02"){
		enemyNumber = 02;
		workingEnemy = chars.locutus;
		enemyAttackHP = workingEnemy.returnAT;
		enemyDefendHP = workingEnemy.HP;
		$("#char02").css({"background-color": "red"});
		$("#infoboard1").html(" :  Your Opponent is " + chars.locutus.charName);

    };
    if(enemy === "char03"){
		enemyNumber = 03;
		workingEnemy = chars.will;
		enemyAttackHP = workingEnemy.returnAT;
		enemyDefendHP = workingEnemy.HP;
		$("#char03").css({"background-color": "red"});
		$("#infoboard1").html(" :  Your Opponent is " + chars.will.charName);

    };
    if(enemy === "char04"){
		enemyNumber = 04;
		workingEnemy = chars.worf;
		enemyAttackHP = workingEnemy.returnAT;
		enemyDefendHP = workingEnemy.HP;
		$("#char04").css({"background-color": "red"});
		$("#infoboard1").html(" :  Your Opponent is " + chars.worf.charName);

    };
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

function reload() {
	location.reload(true)
};

//Create function for basicATack algorithm and for basicATack and HP
function attack() {
	if (charDefendHP <= 0){
		alert("You've been Defeated... GAME OVER!!!");
		reload();
	}

	else if (enemyDefendHP <= 0){
		$("#" + enemy).hide();
	}
	else if (charDefendHP > 0) {
		charAdjAttackHP = (charAttackHP + charAdjAttackHP);
		charDefendHP = (charDefendHP - enemyAttackHP);
		enemyDefendHP = (enemyDefendHP - charAdjAttackHP);
		$("#infoboard3").html("You Attacked " + workingEnemy.charName + " For " + charAdjAttackHP + " You Were Attaked For " + enemyAttackHP);
		$(".hp0" + enemyNumber).html("HP " + enemyDefendHP);
		$(".hp0" + heroNumber).html("HP " + charDefendHP);
		console.log(enemyDefendHP);
		console.log(charDefendHP);
	};
};


//Create charater selection function into page
$(document).ready(function(){
    reset();    
	$(".card").on("click", function(){
    
    	if(heroPicked){
        	hero = $(this).attr("id");
        	// $(hero).css({"background-color": "green"});
        	console.log($(this).attr("id"));
        	myhero();
        	console.log("working");
        	//use this to not allow access again
        	heroPicked = false;
    	}
    	else if(enemyPicked) {
        	enemy = $(this).attr("id");
        	console.log($(this).attr("id"));
        	myenemy();
        	console.log("working");
        	enemyPicked = false;
        
		};
		if((heroPicked == false) && (enemyPicked == false)){
			$("#infoboard3").html("Click The Attack Button To Get Started");

		};


	});

});


//Call function for attack/defense multiplier algorithm


//Function for hiding/unhiding unselected or dead charaters
//Make you lose game function
//Make you won game function