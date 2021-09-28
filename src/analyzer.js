const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const toDec = hexString => parseInt(hexString, 16);
const splitByFourChars = string => string.match(/.{1,4}/g)

readline.question('Segment?\n', segment => {
    let data = segment.replace(/\s/g, '');
    if (data.length === 16) {
        parseUdp(data)
    } else {
        console.log(splitByFourChars(data))
        parseTcp(data)
    }
    readline.close();
});


const parseUdp = (segment) => {
    let udp = splitByFourChars(segment);
    console.log("UDP:", segment)
    console.log("Source port:", toDec(udp[0]))
    console.log("Destination port:", toDec(udp[1]))
    console.log("User datagram total length:", toDec(udp[2]))
    console.log("Data length:", toDec(udp[2]) - 2)
    return udp;
}

const parseTcp = (segment) => {
    const fields = ["sourcePort",
        "destinationPort",
        "sequenceNumber",
        "ack",
        "firstUnknown",
        "windowLength",
        "checkSum",
        "urgPointer"]
    let data = {}
    let splitByFourChars1 = splitByFourChars(segment);
    console.log(splitByFourChars1)
    splitByFourChars1.forEach((s, index) => {
        data[fields[index]] = toDec(s)
        // console.log(toDec(s))
    })
    console.log(data)
}

