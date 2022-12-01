var itens = [5,3,7,6,2,9];
function swap(itens, esquerda, direita){
    var temp = itens[esquerda];
    itens[esquerda] = itens[direita];
    itens[direita] = temp;
}
function partition(itens, inicio, fim) {
    var pivot   = itens[Math.floor((fim + inicio) / 2)],
        i       = inicio,
        j       = fim;
    while (i <= j) {
        while (itens[i] < pivot) {
            i++;
        }
        while (itens[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(itens, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(itens, inicio, fim) {
    var index;
    if (itens.length > 1) {
        index = partition(itens, inicio, fim);
        if (inicio < index - 1) { 
            quickSort(itens, inicio, index - 1);
        }
        if (index < fim) {
            quickSort(itens, index, fim);
        }
    }
    return itens;
}

var sortedArray = quickSort(itens, 0, itens.length - 1);
console.log(sortedArray);