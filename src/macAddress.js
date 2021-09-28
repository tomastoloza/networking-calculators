const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const toDec = hexString => parseInt(hexString, 16);

readline.question('Address?\n', input => {
    let data = input.replace(/\s/g, '').split(":");
    if (data.length !== 6){
        console.log("Not 6 pairs!!")
    }
    let firstOct = toDec(data[0]);
    if (firstOct === 255 && new Set(data).size === 1) {
        console.log("Multicast Broadcast")
    }
    if (firstOct % 2 ===0){
        console.log("Unicast")
    }else{
        console.log("Multicast")
    }
    readline.close();
});


