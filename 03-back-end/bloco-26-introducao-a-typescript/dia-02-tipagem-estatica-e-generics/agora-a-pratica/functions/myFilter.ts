type Callback<T> = (item: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: Callback<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index], index, array)) {
      newArray.push(array[index]);
    }
  }

  return newArray;
}

console.log(myFilter([1, 2, 3], (item, _index, _array) => item < 3));

console.log(
  myFilter(["a", "b", "c"], (item, _index, _array) => {
    return item !== "a";
  })
);
