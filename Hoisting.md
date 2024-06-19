# Hoisting

## Declaração de variável com Var, torna-a global.


```jS

console.log('existe x antes do bloco ?',x);//x existe e é undefined
{//início do bloco
	var x = 0;
}//fim do bloco
console.log('existe x depois do bloco ?',x);//x existe e tem valor 0

```
