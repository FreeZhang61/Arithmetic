/**
 * 二分搜索
 */
function binarySearch(arr=[], ele) {
    let high = arr.length
    let low = 0
    while (low <= high) {
        let mid = low +  (high - low) / 2
        mid = Math.floor(mid)
        if (arr[mid] > ele) {
            high = mid - 1
        } else if (arr[mid] < ele) {
            low = mid + 1
        } else {
            return mid
        }
    }

    return -1
}

module.exports = {
    binarySearch
}
