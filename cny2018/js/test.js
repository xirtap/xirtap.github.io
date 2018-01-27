Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

function setZodiac(y){
    switch(y) {
        case 1:
            return 'cmF0cmF0cg==.jpg';
        case 2:
            return 'Y293Y293Yw==.jpg';
        case 3:
            return 'dGlnZXJ0aQ==.jpg';
        case 4:
            return 'cmFiYml0cg==.jpg';
        case 5:
            return 'ZHJhZ29uZA==.jpg';
        case 6:
            return 'c25ha2Vzbg==.jpg';
        case 7:
            return 'aG9yc2Vobw==.jpg';
        case 8:
            return 'c2hlZXBzaA==.jpg';
        case 9:
            return 'bW9ua2V5bQ==.jpg';
        case 10:
            return 'Q2hpY2tlbg==.jpg';
        case 11:
            return 'ZG9nZG9nZA==.jpg';
        case 12:
            return 'cGlncGlncA==.jpg';
    }
}


var copened = 0;
var cfound = 0;
var cpair = 2;
var x = 0;
var tempArray = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ]

tempArray.shuffle();

for (var j = tempArray.length-1; j >=0; j--) {
    x=x+1;    
    document.write('<img id="z'+ tempArray[j] + '" src="assets/' + setZodiac(x) + '" width="10%" height="10%">');
   }


document.write('<img id="coin" src="assets/coin.png" width="10%" height="10%">');





