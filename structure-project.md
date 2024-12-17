# Projeto Backend: Guia de Estrutura e Arquitetura

Este documento fornece um guia detalhado sobre a estrutura de pastas e a arquitetura do projeto backend. Ele visa auxiliar na compreensão da organização do código, facilitando a manutenção e a colaboração entre desenvolvedores.

## 1. Introdução

O projeto utiliza uma arquitetura limpa e orientada a camadas, seguindo os princípios SOLID para garantir a manutenibilidade, escalabilidade e testabilidade do código. A separação de responsabilidades em camadas distintas promove a modularidade e a clareza do código. O projeto utiliza TypeScript para tipagem estática. As mudanças no projeto são registradas no arquivo `changelog.md`.

## 2. Arquitetura em Camadas

A arquitetura do projeto é baseada em camadas, cada uma com responsabilidades específicas:

### 2.1 Camada de Aplicação (Application)

Responsável pela orquestração da lógica de negócio, coordenando a interação entre os serviços e os casos de uso.

- **`usecases`**: Implementação dos casos de uso, representando as ações do sistema. _Exemplos: `CreateUserUseCase.ts`, `GetUserUseCase.ts`_
- **`services`**: Lógica de negócio específica para cada caso de uso. _Exemplos: `UserService.ts`, `AuthService.ts`_

### 2.2 Camada de Domínio (Domain)

Define a lógica de negócio central, independente de frameworks ou infraestrutura. Esta camada contém a essência do negócio.

- **`entities`**: Entidades do domínio, representando os objetos de negócio. _Exemplos: `User.ts`, `Product.ts`_
- **`interfaces`**: Interfaces para repositórios, abstraindo o acesso a dados. _Exemplos: `UserRepository.ts`, `ProductRepository.ts`_
- **`validators`**: Regras de validação para garantir a integridade dos dados. _Exemplos: `UserValidator.ts`, `ProductValidator.ts`_

### 2.3 Camada de Infraestrutura (Infrastructure)

Responsável pela interação com frameworks, bibliotecas e serviços externos. Esta camada abstrai os detalhes de implementação.

- **`database`**: Acesso a dados (ORM ou driver de banco de dados).
  - `migrations`: Scripts para gerenciamento de esquema do banco de dados. _Exemplos: `20231027100000_create_users_table.ts`, `20231027100000_create_products_table.ts`_
  - `repositories`: Implementação dos repositórios, abstraindo o acesso a dados. _Exemplos: `UserRepository.ts`, `ProductRepository.ts`_
  - `seeds`: Dados iniciais para o banco de dados. _Exemplos: `users.ts`, `products.ts`_
- **`http`**: Comunicação HTTP (framework como Express.js).
  - `middlewares`: Middlewares para interceptação de requisições e respostas. _Exemplos: `AuthMiddleware.ts`, `ErrorMiddleware.ts`_
  - `routes`: Definição das rotas da API. _Exemplos: `userRoutes.ts`, `productRoutes.ts`_
  - `server.ts`: Configuração e inicialização do servidor HTTP.
- **`config`**: Arquivos de configuração do projeto (ex: banco de dados, variáveis de ambiente). _Exemplos: `database.ts`, `environment.ts`_
- **`logger`**: Implementação de logging. _Exemplos: `logger.ts`, `winstonConfig.ts`_

### 2.4 Camada Compartilhada (Shared)

Contém código reutilizável em diferentes partes da aplicação.

- **`utils`**: Funções utilitárias. _Exemplos: `helperFunctions.ts`, `dateUtils.ts`_
- **`constants`**: Constantes e enums. _Exemplos: `errorCodes.ts`, `statusCodes.ts`_
- **`types`**: Definições de tipos. _Exemplos: `UserType.ts`, `ProductType.ts`_

### 2.5 Camada de Testes (Tests)

Contém os testes unitários, de integração e end-to-end.

- **`unit`**: Testes unitários. _Exemplos: `User.spec.ts`, `Product.spec.ts`_
- **`integration`**: Testes de integração. _Exemplos: `UserRepository.integration.spec.ts`, `ProductService.integration.spec.ts`_
- **`e2e`**: Testes end-to-end. _Exemplos: `UserE2ETest.spec.ts`, `ProductE2ETest.spec.ts`_

## 3. Princípios SOLID

A arquitetura segue os princípios SOLID para garantir manutenibilidade e escalabilidade:

- **SRP (Single Responsibility Principle):** Cada classe tem uma única responsabilidade.
- **OCP (Open/Closed Principle):** Classes são abertas para extensão, mas fechadas para modificação.
- **LSP (Liskov Substitution Principle):** Subclasses podem substituir superclasses sem quebrar o sistema.
- **ISP (Interface Segregation Principle):** Interfaces devem ser específicas.
- **DIP (Dependency Inversion Principle):** Classes de alto nível não dependem de classes de baixo nível.

## 4. Estrutura de Pastas

A estrutura de pastas reflete a arquitetura em camadas:

```
src/
├── application/
│   ├── usecases/
│   ├── services/
│   ├── domain/
│   │   ├── entities/
│   │   ├── interfaces/
│   │   └── validators/
│   └── presentation/
│       ├── controllers/
│       └── dtos/
├── infrastructure/
│   ├── database/
│   │   ├── migrations/
│   │   ├── repositories/
│   │   └── seeds/
│   ├── http/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   └── server.ts
│   ├── config/
│   └── logger/
├── shared/
│   ├── utils/
│   ├── constants/
│   └── types/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── app.ts
└── server.ts
```

## 5. Fluxo de Dados (Exemplo)

Um exemplo de fluxo de dados para a criação de um usuário:

1. Uma requisição HTTP POST `/users` é recebida pelo `UserController` (application/presentation/controllers).
2. O `UserController` chama o `CreateUserUseCase` (application/usecases).
3. O `CreateUserUseCase` chama o `UserService` (application/services) para executar a lógica de negócio.
4. O `UserService` valida os dados usando `UserValidator` (application/domain/validators).
5. O `UserService` chama o `UserRepository` (infrastructure/database/repositories) para persistir o usuário no banco de dados.
6. O `UserRepository` interage com o banco de dados via ORM.
7. O `UserRepository` retorna o resultado para o `UserService`.
8. O `UserService` retorna o resultado para o `CreateUserUseCase`.
9. O `CreateUserUseCase` retorna o resultado para o `UserController`.
10. O `UserController` retorna uma resposta HTTP para o cliente.

## 6. Considerações Finais

Esta estrutura é um guia e pode ser adaptada de acordo com as necessidades específicas do projeto. A documentação de cada módulo deve ser mantida atualizada para garantir a clareza e a manutenibilidade do código. A utilização de ferramentas de versionamento de código (como Git) é altamente recomendada.
