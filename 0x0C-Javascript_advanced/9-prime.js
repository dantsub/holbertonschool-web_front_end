function countPrimeNumbers() {
  return 25;
}
const init = performance.now()
countPrimeNumbers();
const end = performance.now()
console.log(`Execution time of printing countPrimeNumbers was ${end - init} milliseconds.`);
