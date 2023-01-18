const args = process.argv;
let num = args.slice(2);

const diceRoller = function(nums){
    for( let i = 1; i <= nums; i++) {
        let generatedNumber = Math.floor(Math.random()* 6) + 1;
        console.log(generatedNumber);
    }
    
}

