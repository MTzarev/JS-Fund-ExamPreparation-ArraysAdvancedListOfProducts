function listOfProducts(input){
 let sorted = input.sort()
for (let i=0; i<sorted.length; i++){
    let product = sorted[i]
    console.log(`${i+1}.${product}`);
}
    console.log();
}
listOfProducts(['Watermelon', 'Banana', 'Apples']);