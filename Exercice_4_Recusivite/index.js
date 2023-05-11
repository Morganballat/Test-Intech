function countInvalidComponents(defauts, index) {
  if (index >= defauts.length) {
    return 0;
  }
  
  if (defauts[index] < 2) {
    return 1 + countInvalidComponents(defauts, index + 1);
  }
  
  return countInvalidComponents(defauts, index + 1);
}

const defauts = [0.8, 2.17, 0.02, 3.5, 4.6, 2.0, 1.99];
const nbDefauts = countInvalidComponents(defauts, 0);
console.log(nbDefauts);