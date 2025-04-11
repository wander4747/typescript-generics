const example = <T, U>(value: T, prm2: U): T => value

console.log(example<string, string>('ok', 'string'))
console.log(example<number, boolean>(123, true))
console.log(example<boolean, string>(true, 'string'))