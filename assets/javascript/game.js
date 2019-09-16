//Create charater profiles, stats, and global vars
var charAttackHP;
var charDefendHP;
var enemyAttackHP;
var enemyDefendHP;
var charAdjAttackHP;
var charAdjDefendHP;
var enemyAdjAttackHP;
var enemyAdjDefendHP;



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

});


//Function for hiding/unhiding unselected or dead charaters
//Create function for basicATack algorithm for basicATack and HP
//Make you lose game function
//Make you won game function