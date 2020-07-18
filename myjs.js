/**
 * Funtion 1 : feetToMile
 */

function feetToMile(feet){
    if(feet < 0){
        return 'Please give a valid feet input';
    }
    else{
        var mile = 0.000189394 * feet;
        return mile.toFixed(9) +' Mile(s)';
    }
}

var resultInMile = feetToMile(8);
console.log(resultInMile);

/**
 * Function 2 : woodCalculator
 * input: koyta chair banaite chai
 * 1 ta chair, table, bed banaite 1,3,5 cubic feet kath lage
 * output: total wood needed
 */

function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0 || bed < 0){
        return 'Please give a valid quantity';
    }
    else{
        woodNeeded = chair * 1 + table * 3 + bed * 5;
        return woodNeeded + ' cubic feet';
    }
}

var totalWood = woodCalculator(2, 5, 8);
console.log(totalWood);

/**
 * Function 3 : brickCalculator
 * input: How many floors
 * For floor 1-10 : 15 feet height each
 * For floor 11-20 : 12 feet height each
 * For above : 10 feet height each
 * 1000 bricks for each feet
 */

function brickCalculator(numberOfFloors){
    if(numberOfFloors <= 0){
        return 'Please give a valid floor count';
    }
    else{
        if(numberOfFloors<=10){
            var brickNeeded = numberOfFloors * 15 * 1000;
        }
        else if(numberOfFloors <= 20){
            var brickNeeded = 10 * 15 * 1000 + (numberOfFloors-10) * 12 * 1000;
        }
        else{
            var brickNeeded = 10 * 15 * 1000 + 10 * 12 * 1000 + (numberOfFloors-20) * 10 * 1000; 
        }
        return brickNeeded + ' bricks';
    }
}

var totalBrick = brickCalculator(55);
console.log(totalBrick);

/**
 * Function 4 : tinyFriend
 */

 function tinyFriend(friends){
     if(friends.length == 0){
         return 'Please enter at least one name';
     }
     else{
        var smallest = friends[0]; 
        for(var i=0; i<friends.length; i++){
             if(friends[i].length==0){
                 return('Please enter each name correctly');
             }
             else if(smallest.length > friends[i].length){
                 smallest = friends[i];
             }
         }
         return smallest;
     }
 }

 friendsList = ['Messi','Ronaldo', 'Mbappe', 'Kaka', 'Neymar', 'Maradona'];
 var smallestName = tinyFriend(friendsList);
 console.log(smallestName);