let array = [1, 6, 3, 8, 7, 8, 10, 14, 15, 11, 15];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      let aux = array[i];
      array[i] = array[j];
      array[j] = aux;
    } else if (array[i] == array[j]) {
      array.splice(j, 1);
      j--;
    }
  }
}
console.log(array);
