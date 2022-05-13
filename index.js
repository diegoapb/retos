function solution(inputArray) {
    let maxAdjacentPrduct = inputArray[0]*inputArray[1];
    for (let i = 0; i<inputArray.length-1; i++){
        let adjacentProduct= inputArray[i]*inputArray[i+1]
        console.log(inputArray[i]," x ",inputArray[i+1]," = ",adjacentProduct)
        if(adjacentProduct>maxAdjacentPrduct)
            maxAdjacentPrduct=adjacentProduct
    }
    return (maxAdjacentPrduct)
}

solution([3, 6, -2, -5, 7, 3])
console.log("---------------------")
solution([-23, 4, -3, 8, -12])