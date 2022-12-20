# Notification Lab
Aprendendo sobre nest.js e microservicos através de um servico de notificacoes.

# O que é um microservico?
- É um tipo de arquitetura de software que utiliza o conceito de servicos independentes, que consiste em diversos pequenos servicos que se comunicam através de APIs.
- Uma das características de um microservico é o fato deles serem  independentes, de forma com que você possa mudar alguma coisa no servico 1 sem afetar o funcionamento do servico 2.
## Como Funciona o Banco de Dados em microservicos?
- Um microservico deve ter um banco de dados pra cada servico criado, de forma com que cada banco tenha autonomia pra cada servico. Vamos colocar uma situacao em que temos UM unico servico e UM unico banco de dados, se der problema nessa aplicacao, vai afetar diversas áreas de funcionamento desse servico. Por isso é recomendado usar vários bancos pra vários servicos criados, o que ajuda na hora de dar manutencao, e escalar o projeto sem que afete o funcionamento de outros servicos. 
- Acontece bastante de ter duplicidade de dados em microservicos, pelo fato de muitas vezes um servico precisar de um dado que está salvo em outro servico. 

# Iniciando o projeto
```shell
# Instalando as dependencias de desenvolvimento
npm install

# Iniciando o projeto
npm run start:dev

# Criando uma notificacao através do Kafka producer
npm run producer

# Visualizando os dados do banco de dados
npx prisma studio
```

# Tecnologias

- [Nest.js](https://nestjs.com/)
- [Kafkajs](https://kafka.js.org/)
- [Prisma](https://www.prisma.io/)
- [Upstash](https://console.upstash.com/)
- [Typescript](https://www.typescriptlang.org/)

# Meus Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matheus-tanaka-42a833186/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/matheus__tanaka)