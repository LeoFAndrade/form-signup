# Sistema de Cadastro de Usuários

Sistema completo de cadastro de usuários com validação frontend e backend, proteção contra SQL injection e criptografia de senhas.

## Descrição

Sistema de registro de usuários implementando boas práticas de segurança e validação de dados em múltiplas camadas (HTML5, JavaScript e PHP).

## Funcionalidades

- **Prepared Statements**: Proteção total contra SQL Injection.
- **Criptografia de Senhas**: Uso de `password_hash` com algoritmo BCrypt.
- **Verificação de Disponibilidade**: Checagem de e-mail duplicado antes do cadastro.
- **Validação Dupla**: Dados validados no navegador (JS) e no servidor (PHP).
- **Inteligência de Datas**: Detecção de datas inexistentes (ex: 30 de fevereiro) e cálculo de idade.
- **Requisito de Idade**: Restrição para menores de 13 anos.

## Tecnologias

- **Frontend**: HTML5, CSS3 (Flexbox), JavaScript (ES6+).
- **Backend**: PHP 7.4+.
- **Banco de Dados**: MySQL 5.7+.

## Instalação e Configuração

1. **Banco de Dados**: 
   - Crie um banco chamado `y_social_network`.
   - Importe o arquivo `y_social_network.sql`.
   - **Nota**: Certifique-se de que a coluna `password` na tabela `users` seja do tipo `VARCHAR(255)`.

2. **Servidor**:
   - Coloque os arquivos no seu servidor local (XAMPP, WAMP, etc).
   - Configure as credenciais de acesso (host, user, pass) no topo do arquivo `register.php`.

## Estrutura do Banco de Dados (Tabela `users`)

| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| id | INT | Chave Primária (Auto Incremento) |
| name | VARCHAR(100) | Nome do usuário |
| surname | VARCHAR(255) | Sobrenome completo |
| day_of_birth | DATE | Data de nascimento (AAAA-MM-DD) |
| gender | VARCHAR(20) | Gênero (Masculino/Feminino/Outro) |
| email | VARCHAR(150) | E-mail único (Índice Unique) |
| password | VARCHAR(255) | Hash da senha criptografada |

## Validações Implementadas

### JavaScript (Frontend)
- Preenchimento obrigatório de todos os campos.
- Validação lógica de data (impede dias 31 em meses de 30 dias).
- Cálculo de idade em tempo real (mínimo 13 anos).
- Verificação de seleção de gênero.
- Comprimento mínimo de senha (**9 caracteres**).

### PHP (Backend)
- Nova sanitização de strings com `htmlspecialchars` e `trim`.
- Validação de formato de e-mail com `FILTER_VALIDATE_EMAIL`.
- Verificação rigorosa de data com `checkdate()`.
- Proteção contra e-mails duplicados via consulta `SELECT`.
- Garantia de integridade para o campo gênero.

## Segurança
- Uso de **BCrypt** para armazenamento de senhas.
- Fechamento de conexões e statements (`$stmt->close()`) para evitar vazamento de memória.
- Separação de lógica de validação e inserção.

## Licença
Uso livre para fins educacionais.