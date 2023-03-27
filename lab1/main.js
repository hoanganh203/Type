function selectionSort(arr, callback) {
    var _a;
    for (var i = 0; i < arr.length; i++) {
        var temp = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[j], arr[temp]) < 0) {
                temp = j;
            }
        }
        _a = [arr[temp], arr[i]], arr[i] = _a[0], arr[temp] = _a[1];
    }
    return arr;
}
Usage: var nums = [5, 2, 4, 1, 3];
var sortedNums = selectionSort(nums, function (a, b) { return a - b; });
console.log(sortedNums);
var strings = ["c", "b", "a"];
var sortedStrings = selectionSort(strings, function (a, b) { return a.localeCompare(b); });
// sortedStrings is ["a", "b", "c"]
