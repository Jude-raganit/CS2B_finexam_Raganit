const product = [42,25,12,63,48,10,16,5,30,78];

const sortbyprice = (arr) => {
    return arr.sort((a,b) => a-b);
}

console.log(sortbyprice(product));
