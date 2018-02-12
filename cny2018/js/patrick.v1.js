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
    switch(parseInt(y)) {
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

var opened = 0;
var found = 0;
var tempArray = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '11','12' ]

tempArray.shuffle();

for (var j = 0; j <= tempArray.length; j++) {
    k=j+1;
    document.write('<a-assets><img id="z'+ k + '" src="assets/' + setZodiac(tempArray[j]) + '"></a-assets>');
   }

// and the result is...alert(tempArray);
var image='coin.png';
var bkgnd='panorama.png';
document.write('<a-assets><img id="coin" src="assets/' + image + '"></a-assets>');
document.write('<a-assets><img id="pano" src="assets/' + bkgnd + '"></a-assets>');

//Top 4
document.write('<a-image id="cf1" src="#coin" width="5" height="5" position="0 2 -1.5" rotation="60 0 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc01" src="#z1" width="2" height="2" position="0 1.5 -1" rotation="60 0 0" scale="0 0 0">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

document.write('<a-image id="cf2" src="#coin" width="5" height="5" position="2 2.3 0" rotation="60 -90 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc02" src="#z2" width="2" height="2" position="1.5 1.8 0" rotation="60 -90 0" scale="0 0 0">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

document.write('<a-image id="cf3" src="#coin" width="5" height="5" position="0 2 1.5" rotation="60 180 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc03" src="#z3" width="2" height="2" position="0 1.5 1" rotation="60 180 0" scale="0 0 0">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

document.write('<a-image id="cf4" src="#coin" width="5" height="5" position="-2 2.3 0" rotation="60 90 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc04" src="#z4" width="2" height="2" position="-1.5 1.8 0" rotation="60 90 0" scale="0 0 0">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

//centre 4
document.write('<a-image id="cf5" src="#coin" width="5" height="5" position="0 0 -2.5" rotation="0 0 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc05" src="#z5" width="2" height="2" position="0 0 -2" rotation="0 0 0" scale="0 0 0">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

document.write('<a-image id="cf6" src="#coin" width="5" height="5" position="2 0 -1.5" rotation="0 -60 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc06" src="#z6" width="2" height="2" position="1.5 0 -1" rotation="0 -60 0" scale="0 0 0">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

document.write('<a-image id="cf7" src="#coin" width="5" height="5" position="1.5 0 2" rotation="0 -120 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc07" src="#z7" width="2" height="2" position="1 0 1.5"  rotation="0 -120 0" scale="0 0 0">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

document.write('<a-image id="cf8" src="#coin" width="5" height="5" position="-1.5 0 2" rotation="0 120 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc08" src="#z8" width="2" height="2" position="-1 0 1.5"  rotation="0 120 0" scale="0 0 0">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

document.write('<a-image id="cf9" src="#coin" width="5" height="5" position="-2 0 -1.5" rotation="0 60 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc09" src="#z9" width="2" height="2" position="-1.5 0 -1" rotation="0 60 0" scale="0 0 0">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');


//Bottom 4
document.write('<a-image id="cf10" src="#coin" width="5" height="5" position="0 -2 -1.5" rotation="-60 0 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc10" src="#z10" width="2" height="2" position="0 -1.5 -1" rotation="-60 0 0" scale="0 0 0">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

document.write('<a-image id="cf11" src="#coin" width="5" height="5" position="2 -2.3 0" rotation="-60 -90 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc11" src="#z11" width="2" height="2" position="1.5 -1.8 0" rotation="-60 -90 0" scale="0 0 0">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

document.write('<a-image id="cf12" src="#coin" width="5" height="5" position="0 -2 1.5" rotation="-60 180 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc12" src="#z12" width="2" height="2" position="0 -1.5 1" rotation="-60 180 0" scale="0 0 0">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

document.write('<a-image id="cf13" src="#coin" width="5" height="5" position="-2 -2.3 0" rotation="-60 90 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc13" src="#z13" width="2" height="2" position="-1.5 -1.8 0" rotation="-60 90 0" scale="0 0 0">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');


function chk(x){
    x=x-1;
    if ((found > 0) && (parseInt(tempArray[x]) != found))
    {        
        //alert("Unmatch:"+tempArray[x]+":"+found);
        found=0;
        setTimeout(fadeall, 1000)
    }
    else if (parseInt(tempArray[x]) == found)
    {
        alert("Yay! You found the doggie pair!");
    }
    else
    {
        found=parseInt(tempArray[x]);        
    }
}


var cf001 = document.querySelector('#cf1');
var zcf001 = document.querySelector('#zc01');
cf001.addEventListener('click', function () {
    zcf001.emit('spiner');    
    chk(1);
});

var cf002 = document.querySelector('#cf2');
var zcf002 = document.querySelector('#zc02');
cf002.addEventListener('click', function () {
    zcf002.emit('spiner');    
    chk(2);
});

var cf003 = document.querySelector('#cf3');
var zcf003 = document.querySelector('#zc03');
cf003.addEventListener('click', function () {
    zcf003.emit('spiner');    
    chk(3);
});

var cf004 = document.querySelector('#cf4');
var zcf004 = document.querySelector('#zc04');
cf004.addEventListener('click', function () {
    zcf004.emit('spiner');    
    chk(4);
});

var cf005 = document.querySelector('#cf5');
var zcf005 = document.querySelector('#zc05');
cf005.addEventListener('click', function () {
    zcf005.emit('spiner');    
    chk(5);
});

var cf006 = document.querySelector('#cf6');
var zcf006 = document.querySelector('#zc06');
cf006.addEventListener('click', function () {
    zcf006.emit('spiner');    
    chk(6);
});

var cf007 = document.querySelector('#cf7');
var zcf007 = document.querySelector('#zc07');
cf007.addEventListener('click', function () {
    zcf007.emit('spiner');    
    chk(7);
});

var cf008 = document.querySelector('#cf8');
var zcf008 = document.querySelector('#zc08');
cf008.addEventListener('click', function () {
    zcf008.emit('spiner');    
    chk(8);
});

var cf009 = document.querySelector('#cf9');
var zcf009 = document.querySelector('#zc09');
cf009.addEventListener('click', function () {
    zcf009.emit('spiner');    
    chk(9);
});

var cf010 = document.querySelector('#cf10');
var zcf010 = document.querySelector('#zc10');
cf010.addEventListener('click', function () {
    zcf010.emit('spiner');    
    chk(10);
});

var cf011 = document.querySelector('#cf11');
var zcf011 = document.querySelector('#zc11');
cf011.addEventListener('click', function () {
    zcf011.emit('spiner');    
    chk(11);
});

var cf012 = document.querySelector('#cf12');
var zcf012 = document.querySelector('#zc12');
cf012.addEventListener('click', function () {
    zcf012.emit('spiner');    
    chk(12);
}); 

var cf013 = document.querySelector('#cf13');
var zcf013 = document.querySelector('#zc13');
cf013.addEventListener('click', function () {
    zcf013.emit('spiner');    
    chk(13);
}); 

function fadeall() {
    zcf001.emit('shrink');
    zcf002.emit('shrink');
    zcf003.emit('shrink');
    zcf004.emit('shrink');
    zcf005.emit('shrink');
    zcf006.emit('shrink');
    zcf007.emit('shrink');
    zcf008.emit('shrink');
    zcf009.emit('shrink');
    zcf010.emit('shrink');
    zcf011.emit('shrink');
    zcf012.emit('shrink');
    zcf013.emit('shrink');
}
