const zeroesToEnd = (arr) => {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[counter++] = arr[i];
    }
  }

  while (counter < arr.length) {
    arr[counter++] = 0;
  }
};

let arr = [5, 7, 0, 3, 0, 1, 2, 7, 3, 0, 2, 1, 1, 0];

zeroesToEnd(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.
// Examples
// zeroesToEnd ([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]
// zeroesToEnd ([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]
// zeroesToEnd ([4, 4, 5]) ➞ [4, 4, 5]
// zeroesToEnd ([0, 0]) ➞ [0, 0]
