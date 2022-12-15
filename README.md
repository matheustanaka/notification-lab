# ignite-nest
Aprendendo sobre nest.js e microservicos.

# O que é um microservico?
- É um tipo de arquitetura de software que utiliza o conceito de servicos independentes, que consiste em diversos pequenos servicos que se comunicam através de APIs.
- Uma das características de um microservico é o fato deles serem  independentes, de forma com que você possa mudar alguma coisa no servico 1 sem afetar o funcionamento do servico 2.
### Banco de Dados em microservicos
- Um microservico deve ter um banco de dados pra cada servico criado, de forma com que cada banco tenha autonomia pra cada servico. Vamos colocar uma situacao em que temos UM unico servico e UM unico banco de dados, se der problema nessa aplicacao, vai afetar diversas áreas de funcionamento desse servico. Por isso é recomendado usar vários bancos pra vários servicos criados, o que ajuda na hora de dar manutencao, e escalar o projeto sem que afete o funcionamento de outros servicos. 
- Acontece bastante de ter duplicidade de dados em microservicos, pelo fato de muitas vezes um servico precisar de um dado que está salvo em outro servico. 

# OOP
### O que é uma entidade ?
Uma entidade é um objeto, que possui seus atributos.
- Uma clase pode representar uma entidade, por exemplo:
```typescript
// Entidade de notificacao
export class Notification {
    private content: string;
    private category: string;

    constructor () {
        this.content = '';
    }
}
```
