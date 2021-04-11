[Voltar](/Readme.md)

# TypeScript

É um conjunto de ferramentas (superset), que inclui tipagem estática no código javascript. Sendo assim é possível definir os tipos de variáveis que serão usadas, ou seja, foram incorporadas padrões de POO (Programação Orientada a Objetos), que tem como base quatro princípios fundamentais: encapsulamento, herança, abstração e polimorfismo.

## Princípios básicos da Orientação a Objetos

Para que possamos compreender melhor as diferenças de escrita de código entre TypeScript e JavaScript “puro”, é importante que tenhamos conhecimento dos princípios básicos do paradigma da Orientação a Objetos. A seguir, veremos o conceito e exemplos de como aplicar cada princípio em TypeScript.

### Encapsulamento

O conceito de encapsulamento define uma forma de estruturar o código para que um determinado bloco tenha pontos de acesso específicos para o ambiente externo, o que garante a visibilidade e acessibilidade controladas dos elementos internos da classe.

Por meio do encapsulamento pode-se definir quais atributos da classe serão visíveis para utilizadores externos, e a forma como serão expostos ao uso por meio da interface pública do componente. No .NET Framework, por exemplo, quem trabalha com C# está acostumado a declarar atributos privados nas classes e suas respectivas propriedades públicas que os encapsulam. O exemplo a seguir mostra o equivalente a essa prática em TypeScript:

```ts
private _saldo: number;
get Saldo(): number { return this._saldo; }
```

Observe que já neste trecho podemos ver a tipagem de dados e modificadores de acesso.

### Herança

Segundo o princípio da herança, uma classe (filha) pode herdar de outra (pai) características e comportamentos já definidas nessa segunda, sem necessidade de redefinição. A sintaxe em TypeScript para implementar esse conceito é semelhante à da linguagem Java, onde se usa a palavra reservada extends após o nome da classe filha, seguida do nome da classe pai, como podemos ver no código abaixo.

```ts
module Banco {
  class Conta { ...código aqui.. }
  class ContaCorrente extends Conta { ...código aqui.. }
  class Poupanca extends Conta { ...código aqui.. }
}
```

Diferente do JavaScript tradicional, que normalmente é extenso e as classes definidas por meio da palavra reservada function, temos um código muito mais simples e compreensível quando utilizamos o TypeScript. Aqui podemos perceber de forma clara a utilização da herança. Para nós é mais fácil escrever códigos com o TypeScript e deixar que ele se encarregue de gerar o código JavaScript que nos custaria mais tempo para escrita e compreensão posterior.

### Abstração

No contexto da Orientação a Objetos, a abstração é a capacidade de destacar as características dos elementos do mundo real que serão úteis para o sistema. Essas características são reunidas na forma de classes, que representam as “coisas” reais a serem utilizadas no domínio do problema.

Dentro do conceito de classes, temos ainda as classes abstratas, que até a versão 1.8 do TypeScript, utilizada neste artigo, ainda eram suportadas diretamente, no entanto, podemos utilizar interfaces para implementar esse princípio.

```ts
export module BancoDevmedia
{
   export interface Taxa { MudarTaxa(valor: number); }
   export class ContaCorrente implements Taxa {
       MudarTaxa(valor: number) { }
   }
}
```

### Polimorfismo

Polimorfismo é um conceito a partir do qual objetos podem assumir formas diferentes em determinadas situações, mas mantendo uma relação com sua definição inicial de nível mais alto. Aliado ao conceito de herança, o polimorfismo indica que um objeto do tipo de uma classe pai pode assumir a forma de qualquer uma de suas classes filhas, mas não o inverso.

O Typescript permite a utilização de polimorfismo através de métodos, onde podemos realizar operações bancárias em classes derivadas de uma classe base. O método TrocarTaxa foi originalmente definido na classe Conta, no entanto, foi sobrescrito na classe filha ContaCorrente para apresentar um comportamento específico quando acionado.

```ts
class ContaCorrente extends Conta
{
   MudarTaxa(valor: number)
   {
       if (this.Saldo > 50000) { valor = 0; }
       else { valor += 10.00; }  
       this.Saldo =+ valor;
   }
}
```

# Links

- [web](web/start.md)
- [Mobile](mobile/start.md)
