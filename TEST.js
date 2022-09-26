function plusMinus(arr) {
  // Write your code here
  let positive = 0, negative = 0, zero = 0;
  
  arr.forEach(element => {
      if (element > 0) {
          positive++;
      }
      if (element < 0) {
          negative++;
      }
      if (element === 0) {
          zero++;
      }
  })
  
  let positiveOcc = positve / arr.length
  let negativeOcc = negative / arr.length
  let zeroOcc = zero / arr.length
  
  console.log(positiveOcc);
  console.log(negativeOcc);
  console.log(zeroOcc);

}