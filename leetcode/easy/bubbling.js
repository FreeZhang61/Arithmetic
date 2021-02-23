/**
 * 冒泡
 * 思路: 每次置换相邻位置的元素
 * 随着迭代，最后方的数据越来越有序
 * @param arr
 */
function bubbling(arr = []) {
    len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

module.exports = {
    bubbling
}
