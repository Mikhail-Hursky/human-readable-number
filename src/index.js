const unitsWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
    'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen',]
const dozensWord = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const units = 1;
const dozens = 10;
const weave = 100;

module.exports = function toReadable(number) {
    if (number === 0) return unitsWord[0]
    let str = ''
    let x100 = parseInt(number / weave)
    number = number % weave
    if (x100 > 0) str = unitsWord[x100] + ' hundred '
    if (number === 0) return str.trim()
    if (number < 20) {
        return str + `${unitsWord[number]}`
    } else {
        let x10 = parseInt(number / dozens)
        number %= dozens
        if (number === 0) return str + `${dozensWord[x10]}`
        let x1 = number / units;
        return str + `${dozensWord[x10]} ${unitsWord[x1]}`
    }
}
