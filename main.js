/////////////////////////////////////////////////////////
//  MAIN JAVASCRIPT
/////////////////////////////////////////////////////////

console.log("********************************************");
console.log("Calculating Prime Numbers\n");

Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

