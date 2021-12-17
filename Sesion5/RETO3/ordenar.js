

function random(min, max, decimals){
    let presition = Math.pow(10, decimals)
    min = min * presition
    max = max * presition
    return Math.floor(Math.random() * (max - min + 1) + min) / presition;
}

/*function Burbuja() {
    var lista = new Array;
    for (var p = 1; p<20; p++){
        lista.push(random(1,40,0))
    } 
    var n, i, k, aux;
    n = lista.length;
    console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }

    console.log(lista); // Mostramos, por consola, la lista ya ordenada
}

Burbuja()*/

/*const insertionSort = arr => {
    const l = arr.length;
    let j, temp;
  
    for ( let i = 1; i < l; i++ ) {
      j = i;
      temp = arr[ i ];
      while ( j > 0 && arr[ j - 1 ] > temp ) {
        arr[ j ] = arr[ j - 1 ];
        j--;
      }
      arr[ j ] = temp;
    }
  
    return arr;
  };
  
  const arr = new Array;
  for (var p = 1; p<20; p++){
    arr.push(random(1,40,0))
} 
console.log(arr);
console.log(insertionSort(arr));*/

const selectionSort = arr => {
    for ( let j = 0; j < arr.length; ++j ) {
      let i = iMin = j;
      for ( ++i; i < arr.length; ++i ) {
        ( arr[ i ] < arr[ iMin ] ) && ( iMin = i );
      }
      [ arr[ j ], arr[ iMin ] ] = [ arr[ iMin ], arr[ j ] ];
    }
  
    return arr;
  }

const arr = new Array;
for (var p = 1; p<20; p++){
    arr.push(random(1,40,0))
} 

console.log(arr);
console.log(selectionSort(arr));