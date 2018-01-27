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
var tempArray = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ]

tempArray.shuffle();

for (var j = 1; j <=tempArray.length+1; j++) {
    document.write('<a-assets><img id="z'+ j + '" src="assets/' + setZodiac(tempArray[j]) + '"></a-assets>');
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
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation></a-image>');

document.write('<a-image id="cf2" src="#coin" width="5" height="5" position="2 2.3 0" rotation="-60 90 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc02" src="#z2" width="2" height="2" position="1.5 1.8 0" rotation="-60 90 0" scale="0.5 0.5 0.5">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation></a-image>');

document.write('<a-image id="cf3" src="#coin" width="5" height="5" position="0 2 1.5" rotation="-60 0 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc03" src="#z3" width="2" height="2" position="0 1.5 1" rotation="-60 0 0" scale="0.5 0.5 0.5">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation></a-image>');

document.write('<a-image id="cf4" src="#coin" width="5" height="5" position="-2 2.3 0" rotation="-60 -90 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc04" src="#z4" width="2" height="2" position="-1.5 1.8 0" rotation="-60 -90 0" scale="0.5 0.5 0.5">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation></a-image>');

//centre 4
document.write('<a-image id="cf5" src="#coin" width="5" height="5" position="0 0 -2.5" rotation="0 0 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc05" src="#z5" width="2" height="2" position="0 0 -2" rotation="0 0 0" scale="0.5 0.5 0.5">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation></a-image>');

document.write('<a-image id="cf6" src="#coin" width="5" height="5" position="2.5 0 0" rotation="0 90 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc06" src="#z6" width="2" height="2" position="2 0 0" rotation="0 90 0" scale="0.5 0.5 0.5">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation></a-image>');

document.write('<a-image id="cf7" src="#coin" width="5" height="5" position="0 0 2.5" rotation="0 180 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc07" src="#z7" width="2" height="2" position="0 0 2" rotation="0 180 0" scale="0.5 0.5 0.5">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation></a-image>');

document.write('<a-image id="cf8" src="#coin" width="5" height="5" position="-2.5 0 0" rotation="0 -90 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc08" src="#z8" width="2" height="2" position="-2 0 0" rotation="0 -90 0" scale="0.5 0.5 0.5">');
document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation></a-image>');


//Bottom 4
document.write('<a-image id="cf9" src="#coin" width="5" height="5" position="0 -2 -1.5" rotation="-60 0 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc09" src="#z9" width="2" height="2" position="0 -1.5 -1" rotation="-60 0 0" scale="0.5 0.5 0.5">');
//document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
//document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

document.write('<a-image id="cf10" src="#coin" width="5" height="5" position="2 -2.3 0" rotation="60 90 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc10" src="#z10" width="2" height="2" position="1.5 -1.8 0" rotation="60 90 0" scale="0.5 0.5 0.5">');
//document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
//document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

document.write('<a-image id="cf11" src="#coin" width="5" height="5" position="0 -2 1.5" rotation="60 0 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc11" src="#z11" width="2" height="2" position="0 -1.5 1" rotation="60 0 0" scale="0.5 0.5 0.5">');
//document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
//document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

document.write('<a-image id="cf12" src="#coin" width="5" height="5" position="-2 -2.3 0" rotation="60 -90 0" scale="0.2 0.2 0.2"></a-image>');
document.write('<a-image id="zc12" src="#z12" width="2" height="2" position="-1.5 -1.8 0" rotation="60 -90 0" scale="0.5 0.5 0.5">');
//document.write('<a-animation attribute="scale" begin="spiner" to="0.5 0.5 0.5" easing="ease-in-out-elastic"></a-animation>');
//document.write('<a-animation attribute="scale" begin="shrink" to="0 0 0" easing="ease-in-out-elastic"></a-animation>');
document.write('</a-image>');

