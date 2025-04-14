const report = <T extends object, U extends object>(salesOld: T, salesNew: U): T & U => {
    return Object.assign({}, salesOld, salesNew)
}
  
const sales2021_2 = {
    agosto: 123,
    setembro: 1231,
    outubro: 345
}
  
const sales2022_1 = {
    janeiro: 123,
    fevereiro: 1231,
    marco: 345
}
  
console.log(report(sales2021_2, sales2022_1))