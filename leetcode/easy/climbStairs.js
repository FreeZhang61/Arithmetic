/**
 * 爬楼梯 or 跳台阶
 * 思路: 这个主要考察归纳能力，即从第三阶开始，第N阶的跳法等于 n = f(n-1) + f(n-2)
 * 解题方法:
 *  1. 递归
 *  2. 动态规划
 * @param n
 */


var cache = {};

function climbStairs(n =  0) {
    if (cache[n]) {
        return cache[n]
    }

    if (n === 0) {
        cache[n] = 0
        return cache[n]
    }

    if (n === 1) {
        cache[n] = 1
        return cache[n]
    }

    if (n === 2) {
        cache[n] = 2
        return cache[n]
    }

    sum = climbStairs(n - 1) + climbStairs(n - 2)
    cache[n] = sum
    return cache[n]

}

module.exports = {
    climbStairs
}