
/**
 * 大数相加
 * 思路: 竖直相加法(想一下小学怎么在草纸上做运算的)
 * 注意:
 *  1. 进位处理
 *  2. 补位(两个数字位数不一样怎么办？)
 * @param num1
 * @param num2
 */
function addString(num1 = "", num2 = "") {
    // 将两个数作为数组来处理
    let n1Index = num1.length - 1;
    let n2Index = num2.length - 1;

    // 保存进位
    let add = 0;
    // 保存计算结果
    let ans = [];

    while (n1Index >= 0 || n2Index >= 0 || add > 0 ) {
        // 补位
        let x = n1Index >= 0 ? num1.charAt(n1Index) - '0' : 0;
        let y = n2Index >= 0 ? num2.charAt(n2Index) - '0' : 0;

        let result = x + y + add

        // 保存计算结果
        ans.push(result % 10);

        // 进位
        add = Math.floor(result / 10);

        n1Index -= 1
        n2Index -= 1
    }


    if (ans.length === 0) {
        return "0"
    } else {
        // 随着push操作，最先被计算的结果放在了数组头部，需要反转一下顺序
        return ans.reverse().join("")
    }

}


module.exports = {
    addString
}
