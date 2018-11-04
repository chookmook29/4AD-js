var bosses = 0;
function drawR(){
  let draw = parseInt(Math.floor(Math.random() * 11));
  draw += 2;
    if (draw === 2){
      let treasureType = parseInt(Math.floor(Math.random() * 6));
      treasureType += 1;
      if (treasureType === 1){
        let treasure = parseInt(Math.floor(Math.random() * 6));
        treasure += 1;
        document.getElementById("result").innerHTML="Treasure: " + treasure + " G";}
      else if (treasureType === 2){
          let treasure = parseInt(Math.floor(Math.random() * 11));
          treasure += 2;
          document.getElementById("result").innerHTML="Treasure: " + treasure + " G";}
      else if (treasureType === 3){
          let myArray = ['Blessing', 'Fireball', 'Lightning Bolt', 'Sleep', 'Escape', 'Protect'];
          let rand = myArray[Math.floor(Math.random() * myArray.length)];
          document.getElementById("result").innerHTML="Scroll: " + rand;}
      else if (treasureType === 4){
          let gem = parseInt(Math.floor(Math.random() * 11));
          gem += 2;
          gem *= 5;
          document.getElementById("result").innerHTML="Gem worth: " + gem + " G";}
      else if (treasureType === 5){
          let jewelry = parseInt(Math.floor(Math.random() * 15));
          jewelry += 3;
          jewelry *= 10;
          document.getElementById("result").innerHTML="Jewelry worth: " + jewelry + " G";}
      else if (treasureType === 6){
      		let magicItem = parseInt(Math.floor(Math.random() * 6));
        	magicItem += 1;
          	if (magicItem === 1){
	        document.getElementById("result").innerHTML="Wand of Sleep";
	        }
	        else if (magicItem === 2){
	        let magicW = parseInt(Math.floor(Math.random() * 6));
        	magicW += 2;
	        document.getElementById("result").innerHTML="Ring of Teleportation, " + magicW + " G after use";
	        }
	        else if (magicItem === 3){
	        document.getElementById("result").innerHTML="Fools Gold";
	        }
	        else if (magicItem === 4){
	        let magicW = parseInt(Math.floor(Math.random() * 6));
        	magicW += 1;
          	if (magicW === 1){
	        document.getElementById("result").innerHTML="Crushing Magical Light Hand Weapon";
	        }
	        else if (magicW === 2){
	        document.getElementById("result").innerHTML="Slashing Magical Light Hand Weapon";
	        }
	        else if (magicW === 3){
	        document.getElementById("result").innerHTML="Crushing Magical Hand Weapon";
	        }
	        else if (magicW === 4){
	        document.getElementById("result").innerHTML="Slashing Magical Hand Weapon";
	        }
	        else if (magicW === 5){
	        document.getElementById("result").innerHTML="Slashing Magical Hand Weapon";
	        }
	        else if (magicW === 6){
	        document.getElementById("result").innerHTML="Magical Bow";
	        }
	        }
	        else if (magicItem === 5){
	        document.getElementById("result").innerHTML="Potion of Healing";
	        }
	        else if (magicItem === 6){
	        document.getElementById("result").innerHTML="Fireball Staff";
	        }}
      }
    else if (draw === 3){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 1;
        if (trapType === 1){
        document.getElementById("result").innerHTML="Trap (dart)";
        }
        else if (trapType === 2){
        document.getElementById("result").innerHTML="Trap (poison gas)";
        }
        else if (trapType === 3){
        document.getElementById("result").innerHTML="Trap (trapdoor)";
        }
        else if (trapType === 4){
        document.getElementById("result").innerHTML="Trap (bear trap)";
        }
        else if (trapType === 5){
        document.getElementById("result").innerHTML="Trap (spears)";
        }
        else if (trapType === 6){
        document.getElementById("result").innerHTML="Trap (giant stone block)";
        }



      }
    else if (draw === 4){
      let trapType = parseInt(Math.floor(Math.random() * 6));
      trapType += 1;
      if (trapType === 1){
      document.getElementById("result").innerHTML="A Ghost";
      }
      else if (trapType === 2){
      document.getElementById("result").innerHTML="Wandering monsters";
      }
      else if (trapType === 3){
      document.getElementById("result").innerHTML="A Lady in White";
      }
      else if (trapType === 4){
      document.getElementById("result").innerHTML="Trap";
      }
      else if (trapType === 5){
      document.getElementById("result").innerHTML="Wandering Healer";
      }
      else if (trapType === 6){
      document.getElementById("result").innerHTML="Wandering Alchemist";
      }
    }
    else if (draw === 5){
      let trapType = parseInt(Math.floor(Math.random() * 6));
      trapType += 1;
      if (trapType === 1){
      document.getElementById("result").innerHTML="Fountain";
      }
      else if (trapType === 2){
      document.getElementById("result").innerHTML="Blessed Temple";
      }
      else if (trapType === 3){
      document.getElementById("result").innerHTML="Armory";
      }
      else if (trapType === 4){
      document.getElementById("result").innerHTML="Cursed Altar";
      }
      else if (trapType === 5){
      document.getElementById("result").innerHTML="Statue";
      }
      else if (trapType === 6){
      document.getElementById("result").innerHTML="Puzzle Room";
      }}






    else if (draw === 6){
      let trapType = parseInt(Math.floor(Math.random() * 6));
      trapType += 1;
      if (trapType === 1){
        let trapType = parseInt(Math.floor(Math.random() * 16));
        trapType += 3;
        document.getElementById("result").innerHTML=trapType + " Rats Lv1";
      }
      else if (trapType === 2){
        let trapType = parseInt(Math.floor(Math.random() * 16));
        trapType += 3;
        document.getElementById("result").innerHTML=trapType + " Vampire Bats Lv1";
      }
      else if (trapType === 3){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 1;
        document.getElementById("result").innerHTML=trapType + " Giant Centipede(s) Lv3";
      }
      else if (trapType === 4){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 1;
        document.getElementById("result").innerHTML=trapType + " Vampire Frog(s) Lv4";
      }
      else if (trapType === 5){
        let trapType = parseInt(Math.floor(Math.random() * 11));
        trapType += 2;
        document.getElementById("result").innerHTML=trapType + " Goblin Swarmlings Lv3";
      }
      else if (trapType === 6){
        let trapType = parseInt(Math.floor(Math.random() * 11));
        trapType += 2;
        document.getElementById("result").innerHTML=trapType + " Skeletal Rats Lv3";
      }}





    else if (draw === 7){
        let trapType = parseInt(Math.floor(Math.random() * 6));
      	trapType += 1;
      if (trapType === 1){
	      	let randomRoll = parseInt(Math.floor(Math.random() * 6));
	        randomRoll += 1;
	        if (randomRoll <= 3){
	        	let randomRoll = parseInt(Math.floor(Math.random() * 6));
	        	randomRoll += 3;
				document.getElementById("result").innerHTML=randomRoll + " Skeletons Lv3";
	        }
	        else if (randomRoll > 3){
	        	let randomRoll = parseInt(Math.floor(Math.random() * 6));
	        	randomRoll += 1;
				document.getElementById("result").innerHTML=randomRoll + " Zombie(s) Lv3";
	        }





      }
      else if (trapType === 2){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 4;
        document.getElementById("result").innerHTML=trapType + " Goblins Lv3";
      }
      else if (trapType === 3){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 1;
        document.getElementById("result").innerHTML=trapType + " Hobgoblin(s) Lv4";
      }
      else if (trapType === 4){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 2;
        document.getElementById("result").innerHTML=trapType + " Orcs Lv4";
      }
      else if (trapType === 5){
        let trapType = parseInt(Math.floor(Math.random() * 3));
        trapType += 1;
        document.getElementById("result").innerHTML=trapType + " Trolls Lv5";
      }
      else if (trapType === 6){
        let trapType = parseInt(Math.floor(Math.random() * 12));
        trapType += 2;
        document.getElementById("result").innerHTML=trapType + " Fungi Folk Lv3";
      }}






	else if (draw === 8){
        let trapType = parseInt(Math.floor(Math.random() * 6));
      	trapType += 1;
      if (trapType === 1){
	      	let randomRoll = parseInt(Math.floor(Math.random() * 6));
	        randomRoll += 1;
	  if (randomRoll >= 3){
	        	let randomRoll = parseInt(Math.floor(Math.random() * 6));
	        	randomRoll += 3;
				document.getElementById("result").innerHTML=randomRoll + " Skeletons Lv3";
	        }
	  else if (randomRoll > 3){
	        	let randomRoll = parseInt(Math.floor(Math.random() * 6));
	        	randomRoll += 1;
				document.getElementById("result").innerHTML=randomRoll + " Zombie(s) Lv3";
	        }





      }
      else if (trapType === 2){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 4;
        document.getElementById("result").innerHTML=trapType + " Goblins Lv3";
      }
      else if (trapType === 3){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 1;
        document.getElementById("result").innerHTML=trapType + " Hobgoblin(s) Lv4";
      }
      else if (trapType === 4){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 2;
        document.getElementById("result").innerHTML=trapType + " Orcs Lv4";
      }
      else if (trapType === 5){
        let trapType = parseInt(Math.floor(Math.random() * 3));
        trapType += 1;
        document.getElementById("result").innerHTML=trapType + " Trolls Lv5";
      }
      else if (trapType === 6){
        let trapType = parseInt(Math.floor(Math.random() * 12));
        trapType += 2;
        document.getElementById("result").innerHTML=trapType + " Fungi Folk Lv3";
      }}

    	else if (draw === 9){
          document.getElementById("result").innerHTML="Empty";}
		else if (draw === 10){
	      let trapType = parseInt(Math.floor(Math.random() * 6));
	      trapType += 1;
	      if (trapType === 1){
	        document.getElementById("result").innerHTML="Minotaur";
	      }
	      else if (trapType === 2){
	        document.getElementById("result").innerHTML="Iron Eater";
	      }
	      else if (trapType === 3){
	        document.getElementById("result").innerHTML="Chimera";
	      }
	      else if (trapType === 4){
	        document.getElementById("result").innerHTML="Catoblepas";
	      }
	      else if (trapType === 5){
	        document.getElementById("result").innerHTML="Giant Spider";
	      }
	      else if (trapType === 6){
	        document.getElementById("result").innerHTML="Invisible Gremlins";
	      }}

    else if (draw === 11){
    	let trapType = parseInt(Math.floor(Math.random() * 6));
      	trapType += 1;
      	trapType += bosses;
        if (trapType >= 6){
          let trapType = parseInt(Math.floor(Math.random() * 5));
	      trapType += 1;
	      if (trapType === 1){
	        document.getElementById("result").innerHTML="Final Boss: Mummy";
	      }
	      else if (trapType === 2){
	        document.getElementById("result").innerHTML="Final Boss: Orc Brute";
	      }
	      else if (trapType === 3){
	        document.getElementById("result").innerHTML="Final Boss: Ogre";
	      }
	      else if (trapType === 4){
	        document.getElementById("result").innerHTML="Final Boss: Medusa";
	      }
	      else if (trapType === 5){
	        document.getElementById("result").innerHTML="Final Boss: Chaos Lord";
	      }
		}

      	else if (trapType < 6){
        let trapType = parseInt(Math.floor(Math.random() * 5));
      	trapType += 1;
      if (trapType === 1){
        document.getElementById("result").innerHTML="Boss: Mummy (if layout complete, final boss)";
      }
      else if (trapType === 2){
        document.getElementById("result").innerHTML="Boss: Orc Brute (if layout complete, final boss)";
      }
      else if (trapType === 3){
        document.getElementById("result").innerHTML="Boss: Ogre (if layout complete, final boss)";
      }
      else if (trapType === 4){
        document.getElementById("result").innerHTML="Boss: Medusa (if layout complete, final boss)";
      }
      else if (trapType === 5){
        document.getElementById("result").innerHTML="Boss: Chaos Lord (if layout complete, final boss)";
      }
      }





    }





    else if (draw === 12){
        document.getElementById("result").innerHTML="Dragons Lair: Small Dragon";
      }




    else {
      document.getElementById("result").innerHTML=draw;}}


function drawC(){
  let draw = parseInt(Math.floor(Math.random() * 11));
  draw += 2;


    if (draw === 2){
      let treasureType = parseInt(Math.floor(Math.random() * 6));
      treasureType += 1;
      if (treasureType === 1){
        let treasure = parseInt(Math.floor(Math.random() * 6));
        treasure += 1;
        document.getElementById("result").innerHTML="Treasure: " + treasure + " G";}
      else if (treasureType === 2){
          let treasure = parseInt(Math.floor(Math.random() * 11));
          treasure += 2;
          document.getElementById("result").innerHTML="Treasure: " + treasure + " G";}
      else if (treasureType === 3){
          let myArray = ['Blessing', 'Fireball', 'Lightning Bolt', 'Sleep', 'Escape', 'Protect'];
          let rand = myArray[Math.floor(Math.random() * myArray.length)];
          document.getElementById("result").innerHTML="Scroll: " + rand;}
      else if (treasureType === 4){
          let gem = parseInt(Math.floor(Math.random() * 11));
          gem += 2;
          gem *= 5;
          document.getElementById("result").innerHTML="Gem worth: " + gem + " G";}
      else if (treasureType === 5){
          let jewelry = parseInt(Math.floor(Math.random() * 15));
          jewelry += 3;
          jewelry *= 10;
          document.getElementById("result").innerHTML="Jewelry worth: " + jewelry + " G";}
      else if (treasureType === 6){
      		let magicItem = parseInt(Math.floor(Math.random() * 6));
        	magicItem += 1;
          	if (magicItem === 1){
	        document.getElementById("result").innerHTML="Wand of Sleep";
	        }
	        else if (magicItem === 2){
	        let magicW = parseInt(Math.floor(Math.random() * 6));
        	magicW += 2;
	        document.getElementById("result").innerHTML="Ring of Teleportation, " + magicW + " G after use";
	        }
	        else if (magicItem === 3){
	        document.getElementById("result").innerHTML="Fools Gold";
	        }
	        else if (magicItem === 4){
	        let magicW = parseInt(Math.floor(Math.random() * 6));
        	magicW += 1;
          	if (magicW === 1){
	        document.getElementById("result").innerHTML="Crushing Magical Light Hand Weapon";
	        }
	        else if (magicW === 2){
	        document.getElementById("result").innerHTML="Slashing Magical Light Hand Weapon";
	        }
	        else if (magicW === 3){
	        document.getElementById("result").innerHTML="Crushing Magical Hand Weapon";
	        }
	        else if (magicW === 4){
	        document.getElementById("result").innerHTML="Slashing Magical Hand Weapon";
	        }
	        else if (magicW === 5){
	        document.getElementById("result").innerHTML="Slashing Magical Hand Weapon";
	        }
	        else if (magicW === 6){
	        document.getElementById("result").innerHTML="Magical Bow";
	        }
	        }
	        else if (magicItem === 5){
	        document.getElementById("result").innerHTML="Potion of Healing";
	        }
	        else if (magicItem === 6){
	        document.getElementById("result").innerHTML="Fireball Staff";
	        }



      }
      }
    else if (draw === 3){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 1;
        if (trapType === 1){
        document.getElementById("result").innerHTML="Trap (dart)";
        }
        else if (trapType === 2){
        document.getElementById("result").innerHTML="Trap (poison gas)";
        }
        else if (trapType === 3){
        document.getElementById("result").innerHTML="Trap (trapdoor)";
        }
        else if (trapType === 4){
        document.getElementById("result").innerHTML="Trap (bear trap)";
        }
        else if (trapType === 5){
        document.getElementById("result").innerHTML="Trap (spears)";
        }
        else if (trapType === 6){
        document.getElementById("result").innerHTML="Trap (giant stone block)";
        }



      }
    	else if (draw === 4){
          document.getElementById("result").innerHTML="Empty";}


    else if (draw === 5){
      let trapType = parseInt(Math.floor(Math.random() * 6));
      trapType += 1;
      if (trapType === 1){
      document.getElementById("result").innerHTML="Fountain";
      }
      else if (trapType === 2){
      document.getElementById("result").innerHTML="Blessed Temple";
      }
      else if (trapType === 3){
      document.getElementById("result").innerHTML="Armory";
      }
      else if (trapType === 4){
      document.getElementById("result").innerHTML="Cursed Altar";
      }
      else if (trapType === 5){
      document.getElementById("result").innerHTML="Statue";
      }
      else if (trapType === 6){
      document.getElementById("result").innerHTML="Puzzle Room";
      }}






    else if (draw === 6){
      let trapType = parseInt(Math.floor(Math.random() * 6));
      trapType += 1;
      if (trapType === 1){
        let trapType = parseInt(Math.floor(Math.random() * 16));
        trapType += 3;
        document.getElementById("result").innerHTML=trapType + " Rats Lv1";
      }
      else if (trapType === 2){
        let trapType = parseInt(Math.floor(Math.random() * 16));
        trapType += 3;
        document.getElementById("result").innerHTML=trapType + " Vampire Bats Lv1";
      }
      else if (trapType === 3){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 1;
        document.getElementById("result").innerHTML=trapType + " Giant Centipede(s) Lv3";
      }
      else if (trapType === 4){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 1;
        document.getElementById("result").innerHTML=trapType + " Vampire Frog(s) Lv4";
      }
      else if (trapType === 5){
        let trapType = parseInt(Math.floor(Math.random() * 11));
        trapType += 2;
        document.getElementById("result").innerHTML=trapType + " Goblin Swarmlings Lv3";
      }
      else if (trapType === 6){
        let trapType = parseInt(Math.floor(Math.random() * 11));
        trapType += 2;
        document.getElementById("result").innerHTML=trapType + " Skeletal Rats Lv3";
      }}





    else if (draw === 7){
        let trapType = parseInt(Math.floor(Math.random() * 6));
      	trapType += 1;
      if (trapType === 1){
	      	let randomRoll = parseInt(Math.floor(Math.random() * 6));
	        randomRoll += 1;
	        if (randomRoll <= 3){
	        	let randomRoll = parseInt(Math.floor(Math.random() * 6));
	        	randomRoll += 3;
				document.getElementById("result").innerHTML=randomRoll + " Skeletons Lv3";
	        }
	        else if (randomRoll > 3){
	        	let randomRoll = parseInt(Math.floor(Math.random() * 6));
	        	randomRoll += 1;
				document.getElementById("result").innerHTML=randomRoll + " Zombie(s) Lv3";
	        }





      }
      else if (trapType === 2){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 4;
        document.getElementById("result").innerHTML=trapType + " Goblins Lv3";
      }
      else if (trapType === 3){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 1;
        document.getElementById("result").innerHTML=trapType + " Hobgoblin(s) Lv4";
      }
      else if (trapType === 4){
        let trapType = parseInt(Math.floor(Math.random() * 6));
        trapType += 2;
        document.getElementById("result").innerHTML=trapType + " Orcs Lv4";
      }
      else if (trapType === 5){
        let trapType = parseInt(Math.floor(Math.random() * 3));
        trapType += 1;
        document.getElementById("result").innerHTML=trapType + " Trolls Lv5";
      }
      else if (trapType === 6){
        let trapType = parseInt(Math.floor(Math.random() * 12));
        trapType += 2;
        document.getElementById("result").innerHTML=trapType + " Fungi Folk Lv3";
      }}






    	else if (draw === 8){
          document.getElementById("result").innerHTML="Empty";}



    	else if (draw === 9){
          document.getElementById("result").innerHTML="Empty";}


    	else if (draw === 10){
          document.getElementById("result").innerHTML="Empty";}



    else if (draw === 11){
    	let trapType = parseInt(Math.floor(Math.random() * 6));
      	trapType += 1;
      if (trapType === 1){
        document.getElementById("result").innerHTML="Mummy";
      }
      else if (trapType === 2){
        document.getElementById("result").innerHTML="Orc Brute";
      }
      else if (trapType === 3){
        document.getElementById("result").innerHTML="Ogre";
      }
      else if (trapType === 4){
        document.getElementById("result").innerHTML="Medusa";
      }
      else if (trapType === 5){
        document.getElementById("result").innerHTML="Chaos Lord";
      }
      else if (trapType === 6){
        document.getElementById("result").innerHTML="Small Dragon";
      }
      





    }





    	else if (draw === 12){
          document.getElementById("result").innerHTML="Empty";}




    else {
      document.getElementById("result").innerHTML=draw;}}



function drawT(){
  let treasureType = parseInt(Math.floor(Math.random() * 6));
      treasureType += 1;
      if (treasureType === 1){
        let treasure = parseInt(Math.floor(Math.random() * 6));
        treasure += 1;
        document.getElementById("result").innerHTML="Treasure: " + treasure + " G";}
      else if (treasureType === 2){
          let treasure = parseInt(Math.floor(Math.random() * 11));
          treasure += 2;
          document.getElementById("result").innerHTML="Treasure: " + treasure + " G";}
      else if (treasureType === 3){
          let myArray = ['Blessing', 'Fireball', 'Lightning Bolt', 'Sleep', 'Escape', 'Protect'];
          let rand = myArray[Math.floor(Math.random() * myArray.length)];
          document.getElementById("result").innerHTML="Scroll: " + rand;}
      else if (treasureType === 4){
          let gem = parseInt(Math.floor(Math.random() * 11));
          gem += 2;
          gem *= 5;
          document.getElementById("result").innerHTML="Gem worth: " + gem + " G";}
      else if (treasureType === 5){
          let jewelry = parseInt(Math.floor(Math.random() * 15));
          jewelry += 3;
          jewelry *= 10;
          document.getElementById("result").innerHTML="Jewelry worth: " + jewelry + " G";}
      else if (treasureType === 6){
      		let magicItem = parseInt(Math.floor(Math.random() * 6));
        	magicItem += 1;
          	if (magicItem === 1){
	        document.getElementById("result").innerHTML="Wand of Sleep";
	        }
	        else if (magicItem === 2){
	        let magicW = parseInt(Math.floor(Math.random() * 6));
        	magicW += 2;
	        document.getElementById("result").innerHTML="Ring of Teleportation, " + magicW + " G after use";
	        }
	        else if (magicItem === 3){
	        document.getElementById("result").innerHTML="Fools Gold";
	        }
	        else if (magicItem === 4){
	        let magicW = parseInt(Math.floor(Math.random() * 6));
        	magicW += 1;
          	if (magicW === 1){
	        document.getElementById("result").innerHTML="Crushing Magical Light Hand Weapon";
	        }
	        else if (magicW === 2){
	        document.getElementById("result").innerHTML="Slashing Magical Light Hand Weapon";
	        }
	        else if (magicW === 3){
	        document.getElementById("result").innerHTML="Crushing Magical Hand Weapon";
	        }
	        else if (magicW === 4){
	        document.getElementById("result").innerHTML="Slashing Magical Hand Weapon";
	        }
	        else if (magicW === 5){
	        document.getElementById("result").innerHTML="Slashing Magical Hand Weapon";
	        }
	        else if (magicW === 6){
	        document.getElementById("result").innerHTML="Magical Bow";
	        }
	        }
	        else if (magicItem === 5){
	        document.getElementById("result").innerHTML="Potion of Healing";
	        }
	        else if (magicItem === 6){
	        document.getElementById("result").innerHTML="Fireball Staff";
	        }}
      }

function drawTplusOne(){
  let treasureType = parseInt(Math.floor(Math.random() * 6));
      treasureType += 2;
      if (treasureType === 1){
        let treasure = parseInt(Math.floor(Math.random() * 6));
        treasure += 1;
        document.getElementById("result").innerHTML="Treasure: " + treasure + " G";}
      else if (treasureType === 2){
          let treasure = parseInt(Math.floor(Math.random() * 11));
          treasure += 2;
          document.getElementById("result").innerHTML="Treasure: " + treasure + " G";}
      else if (treasureType === 3){
          let myArray = ['Blessing', 'Fireball', 'Lightning Bolt', 'Sleep', 'Escape', 'Protect'];
          let rand = myArray[Math.floor(Math.random() * myArray.length)];
          document.getElementById("result").innerHTML="Scroll: " + rand;}
      else if (treasureType === 4){
          let gem = parseInt(Math.floor(Math.random() * 11));
          gem += 2;
          gem *= 5;
          document.getElementById("result").innerHTML="Gem worth: " + gem + " G";}
      else if (treasureType === 5){
          let jewelry = parseInt(Math.floor(Math.random() * 15));
          jewelry += 3;
          jewelry *= 10;
          document.getElementById("result").innerHTML="Jewelry worth: " + jewelry + " G";}
      else if (treasureType === 6){
      		let magicItem = parseInt(Math.floor(Math.random() * 6));
        	magicItem += 1;
          	if (magicItem === 1){
	        document.getElementById("result").innerHTML="Wand of Sleep";
	        }
	        else if (magicItem === 2){
	        let magicW = parseInt(Math.floor(Math.random() * 6));
        	magicW += 2;
	        document.getElementById("result").innerHTML="Ring of Teleportation, " + magicW + " G after use";
	        }
	        else if (magicItem === 3){
	        document.getElementById("result").innerHTML="Fools Gold";
	        }
	        else if (magicItem === 4){
	        let magicW = parseInt(Math.floor(Math.random() * 6));
        	magicW += 1;
          	if (magicW === 1){
	        document.getElementById("result").innerHTML="Crushing Magical Light Hand Weapon";
	        }
	        else if (magicW === 2){
	        document.getElementById("result").innerHTML="Slashing Magical Light Hand Weapon";
	        }
	        else if (magicW === 3){
	        document.getElementById("result").innerHTML="Crushing Magical Hand Weapon";
	        }
	        else if (magicW === 4){
	        document.getElementById("result").innerHTML="Slashing Magical Hand Weapon";
	        }
	        else if (magicW === 5){
	        document.getElementById("result").innerHTML="Slashing Magical Hand Weapon";
	        }
	        else if (magicW === 6){
	        document.getElementById("result").innerHTML="Magical Bow";
	        }
	        }
	        else if (magicItem === 5){
	        document.getElementById("result").innerHTML="Potion of Healing";
	        }
	        else if (magicItem >= 6){
	        document.getElementById("result").innerHTML="Fireball Staff";
	        }}
      }
function drawTminusOne(){
  let treasureType = parseInt(Math.floor(Math.random() * 6));
      treasureType += 0;
      if (treasureType <= 1){
        let treasure = parseInt(Math.floor(Math.random() * 6));
        treasure += 1;
        document.getElementById("result").innerHTML="Treasure: " + treasure + " G";}
      else if (treasureType === 2){
          let treasure = parseInt(Math.floor(Math.random() * 11));
          treasure += 2;
          document.getElementById("result").innerHTML="Treasure: " + treasure + " G";}
      else if (treasureType === 3){
          let myArray = ['Blessing', 'Fireball', 'Lightning Bolt', 'Sleep', 'Escape', 'Protect'];
          let rand = myArray[Math.floor(Math.random() * myArray.length)];
          document.getElementById("result").innerHTML="Scroll: " + rand;}
      else if (treasureType === 4){
          let gem = parseInt(Math.floor(Math.random() * 11));
          gem += 2;
          gem *= 5;
          document.getElementById("result").innerHTML="Gem worth: " + gem + " G";}
      else if (treasureType === 5){
          let jewelry = parseInt(Math.floor(Math.random() * 15));
          jewelry += 3;
          jewelry *= 10;
          document.getElementById("result").innerHTML="Jewelry worth: " + jewelry + " G";}
      else if (treasureType === 6){
      		let magicItem = parseInt(Math.floor(Math.random() * 6));
        	magicItem += 1;
          	if (magicItem === 1){
	        document.getElementById("result").innerHTML="Wand of Sleep";
	        }
	        else if (magicItem === 2){
	        let magicW = parseInt(Math.floor(Math.random() * 6));
        	magicW += 2;
	        document.getElementById("result").innerHTML="Ring of Teleportation, " + magicW + " G after use";
	        }
	        else if (magicItem === 3){
	        document.getElementById("result").innerHTML="Fools Gold";
	        }
	        else if (magicItem === 4){
	        let magicW = parseInt(Math.floor(Math.random() * 6));
        	magicW += 1;
          	if (magicW === 1){
	        document.getElementById("result").innerHTML="Crushing Magical Light Hand Weapon";
	        }
	        else if (magicW === 2){
	        document.getElementById("result").innerHTML="Slashing Magical Light Hand Weapon";
	        }
	        else if (magicW === 3){
	        document.getElementById("result").innerHTML="Crushing Magical Hand Weapon";
	        }
	        else if (magicW === 4){
	        document.getElementById("result").innerHTML="Slashing Magical Hand Weapon";
	        }
	        else if (magicW === 5){
	        document.getElementById("result").innerHTML="Slashing Magical Hand Weapon";
	        }
	        else if (magicW === 6){
	        document.getElementById("result").innerHTML="Magical Bow";
	        }
	        }
	        else if (magicItem === 5){
	        document.getElementById("result").innerHTML="Potion of Healing";
	        }
	        else if (magicItem === 6){
	        document.getElementById("result").innerHTML="Fireball Staff";
	        }}
      }

      

function addBoss(){
	bosses += 1;
	document.getElementById("bosses").innerHTML="Bosses beaten so far: " + bosses;
}
function roomType() {
	let draw = parseInt(Math.floor(Math.random() * 56));
  	draw += 11;
  	document.getElementById("result").innerHTML=draw;
	}




    
