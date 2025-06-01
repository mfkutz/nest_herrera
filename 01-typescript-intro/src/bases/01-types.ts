export let name: string = "Martin";
export const age: number = 30;
export const isValid: boolean = true;

name = "Friedrich";
// name = 123; //error
// name = true; //error

export const templateString = ` Esto es un string multilinea
puede tener " dobles ' simple 
inyectar valores ${name}
expresiones ${1 + 1}
numeros: ${age}
boolean: ${isValid}
`