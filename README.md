# Form Signup

Um formulário de cadastro responsivo com validação de dados em JavaScript e backend PHP.

## Descrição

Este projeto implementa um formulário de criação de conta com campos para:
- Perfil: Nome e gênero (masculino/feminino)
- Acesso: Email e senha
- Data de Nascimento: Dia, mês e ano com seletores dinâmicos

## Funcionalidades

- Interface limpa e centrada
- Design responsivo
- Validação de campos obrigatórios
- Seletores de data dinâmicos populados com JavaScript
- Estilização CSS personalizada
- Estrutura preparada para integração com PHP backend

## Tecnologias

- HTML5
- CSS3
- JavaScript
- PHP

## Estrutura do Projeto

```
form-signup/
├── index.html
├── index.php
├── script.js
├── styles.css
└── README.md
```

## Como Usar

1. Requisitos:
   - Servidor web com suporte a PHP (XAMPP, LAMP, LEMP)
   - Navegador moderno

2. Instalação:
   - Coloque os arquivos na raiz de documentos do seu servidor
   - Acesse via http://localhost/form-signup

3. Funcionamento:
   - O formulário é carregado em index.html
   - O JavaScript popula automaticamente os seletores de data
   - O envio é processado em index.php

## Detalhes Técnicos

### JavaScript
- Popula dias (1-31), meses (Janeiro-Dezembro) e anos (1905-2026)

### HTML
- Campos obrigatórios marcados com `required`
- Input de nome com `autofocus`
- Fieldsets para organização dos grupos de informações

### CSS
- Centralização de títulos
- Pronto para expansão e personalização
