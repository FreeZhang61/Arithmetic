/**
 * 冒泡
 * 思路: 每次置换相邻位置的元素
 * 随着迭代，最后方的数据越来越有序
 * @param arr
 */
function bubbling(arr = []) {
    let len = arr.length
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


/**
 * 选排
 * 思路: 每次置换，将最小的放到首位
 * @param arr
 * @returns {*[]}
 */
function selection(arr = []) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = i+1;  j < len;  j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}


module.exports = {
    bubbling,
    selection
}
