function password(a) {
    if (typeof a!=="object" || !a.name || !a.birthYear || !a.siteName) {
        return "invalid";
    }

    if (typeof a.name !== 'string' || typeof a.siteName !== 'string' || typeof a.birthYear !== 'number' || a.birthYear.toString().length !== 4) {
        return "invalid";
    }

    const web = a.siteName.charAt(0).toUpperCase();
    const user = `${a.name}@${a.birthYear}`;

    return `${web}${a.siteName.substring(1)}#${user}`;
}
console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })); // Output: Google#kolimuddin@1999
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" })); // Output: Facebook#rahat@2002
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" })); // Output: invalid
console.log(password({ name: "maisha", birthYear: 2002 })); // Output: invalid