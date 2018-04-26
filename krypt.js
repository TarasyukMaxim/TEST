var val = 76521;
var baseEnc = 7;
var baseDec = 7;
var encrypt = [];

for(var i = 800000; i < 1000000; i++ ) {
    var encValue = enc(i, 1);
    console.log(encValue );
}

function enc(num, baseEnc) {
    var old = 0;
    var fib_old = 0;
    var fib = baseEnc;
    var data = [];
    var i = 0;

    var len = String(num).length;

    while (i < len) {

        fib_old = fib;
        fib = fib + old;

        var chr = (String(num))[i];

        var encVal = ( (+chr + fib) + (fib * +chr) )
        var encChr = String(encVal);

         if(encChr.length == 1) {
              encChr = '0' +encChr;
           }

        data.push(encChr);

        // var finalString = data.join('');
         
        // var zeroLength = finalString.length;
        // for(var i = 0; i < zeroLength; i++) {
        //     finalString = '0' + finalString;
        // }
       // finalString = finalString.padStart(12, '0');
        
        old = fib_old;
    
        i++;
    }
   //encrypt = data;
    return (data);
}
//console.log (enc(val, baseEnc));


function dec(enc, baseDec) {
     var data = enc;

     var len = data.length;

    var old = 0;
    var fib_old = 0;
    var fib = baseDec;
    var numbs = [];
     
     var i = 0;
     while (i < len) {        
         fib_old = fib;
         fib = fib + old;
         s = data[i];
         numbs.push (  ((s - fib)/(1 + fib))  );
         
         old = fib_old;
         
         i++;
     }
     return(numbs);
 }

//console.log (dec(encrypt, baseDec));