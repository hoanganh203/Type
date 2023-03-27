function selectionSort<T>(arr: T[], callback: (a: T, b: T) => number): T[] {
    for (let i = 0; i < arr.length; i++) {
        let temp = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (callback(arr[j], arr[temp]) < 0) {
                temp = j;
            }
        }
        [arr[i], arr[temp]] = [arr[temp], arr[i]];
    }
    return arr;
}

Usage:
let nums = [5, 2, 4, 1, 3];
let sortedNums = selectionSort(nums, (a, b) => a - b);
console.log(sortedNums);


let strings = ["c", "b", "a"];
let sortedStrings = selectionSort(strings, (a, b) => a.localeCompare(b));
    // sortedStrings is ["a", "b", "c"]