async function solution(n){

    const impar = ((n*2)-1)
    const nullShape = (((impar ** 2)-1)/2)
    console.log((impar ** 2 )- nullShape)
    return (impar ** 2 )- nullShape

}

async function translateSolution (n){
    return ((((n*2)-1) ** 2) - ((((n*2) -1)** 2)-1)/2)
}

(async () => {
    await solution(1); //1  = 1^2 - (1-1)/2
    await solution(2); //5  = 3^2 - 4
    await solution(3); //13 = 5^2 - 12
    await solution(4); //25 = 7^2 - 24
    await solution(5); //41 = 9^2 - 40
    await solution(6); //61 = 11^2- 60

})()