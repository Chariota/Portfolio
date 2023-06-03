function worldDetection(str) {
    // #1 Normalize
    let lowerStr = str.toLowerCase()

    // #2 Check
    let isMatch = lowerStr.includes("xxx") || lowerStr.includes("porn") || lowerStr.includes("sex")

    return isMatch
}

console.log(worldDetection("sex"))
console.log(worldDetection("porn"))
console.log(worldDetection("xxx"))

console.log(worldDetection("SEX"))
console.log(worldDetection("PORN"))
console.log(worldDetection("XXX"))

console.log(worldDetection("sEx"))
console.log(worldDetection("pOrN"))
console.log(worldDetection("xxX"))

console.log(worldDetection("s1x"))
console.log(worldDetection("p0rN"))
console.log(worldDetection("xx7"))

