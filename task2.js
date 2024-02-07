function checkName(Nam) {
    if (typeof Nam !== 'string') {
        return "Invalid";
    }
    var lastLetter = Nam[Nam.length - 1];

    if (lastLetter === 'a' || lastLetter === 'y' || lastLetter === 'i' || lastLetter === 'e' || lastLetter === 'o' || lastLetter === 'u' || lastLetter === 'w' || 
        lastLetter === 'A' || lastLetter === 'Y' || lastLetter === 'I' || lastLetter === 'E' || lastLetter === 'O' || lastLetter === 'U' || lastLetter === 'W') {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

console.log(checkName(199));
