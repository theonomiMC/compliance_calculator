const useConvertToRoman = (n) => {
    const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let numToRoman = "";
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (var i = 0; i < numbers.length; i++) {
        while (n >= numbers[i]) {
            numToRoman += romans[i];
            n -= numbers[i];
        }
    }
    return numToRoman;
}
export default useConvertToRoman