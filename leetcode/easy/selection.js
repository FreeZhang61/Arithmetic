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
    selection
}
