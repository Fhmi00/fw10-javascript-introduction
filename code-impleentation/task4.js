const divideAndSort = input => {

    const inputToString = input.toString()
    const namba = inputToString.split('0')
    const num = namba.map(x => x.split(''))
    const num2 = num.map(x => x.sort((a,b)=>{return a-b}))
    const num3 = num2.map(x => x.join(''))

    return parseInt(num3.join(''))

}
console.log(divideAndSort(BigInt(5956560159466056)));