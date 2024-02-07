function checkName(Nam) {
    if (typeof Nam !=='string') {
        return "Its not a name";
    }
    var lastletter = Nam[Nam.length - 1].toLocaleLowerCase();
    if (lastletter === 'a' || lastletter === 'y' || lastletter === 'i' || lastletter === 'e' || lastletter === 'o' || lastletter === 'u' || lastletter === 'w'||) {
        return "Bad Name";
    } else {
        return "Good Name";
    }
}
console.log(checkName("Jhankar"));