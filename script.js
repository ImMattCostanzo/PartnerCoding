const arr = [2, 5, 2, 6, 7, 1, 8, 9];
const isEven = num => num % 2 === 0;
const sorter = ((a, b) => {
   if(isEven(a) && !isEven(b)){
      return -1;
   };
   if(!isEven(a) && isEven(b)){
      return 1;
   };
   return a - b;
});
const oddEvenSort = arr => {
   arr.sort(sorter);
};
oddEvenSort(arr);
console.log(arr);



