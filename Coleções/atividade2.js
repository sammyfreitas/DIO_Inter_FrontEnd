const meuArray = [30,30,40,5,5,223,2049,3034,6,7,8,8,13,13];

function valoresUnicos(arr) {
  const mySet = new Set(arr);

  return [...mySet];
}

console.log(valoresUnicos(meuArray));