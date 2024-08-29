# Gerenciador de Contatos

Este projeto é uma aplicação simples de gerenciamento de contatos, desenvolvida em **JavaScript**, **HTML** e **CSS**. Ele permite ao usuário adicionar, visualizar e remover contatos com facilidade, mantendo uma lista dinâmica de informações.

![image](https://github.com/user-attachments/assets/9ed9cf2d-d114-4526-b8b9-1fb4b19cdb5f)

![image](https://github.com/user-attachments/assets/eb9bd8b8-74ac-423b-9dd1-5e2b38181172)


## Funcionalidades

- **Adicionar Contato**: Os usuários podem adicionar novos contatos fornecendo nome e número de telefone.
- **Remover Contato**: É possível remover contatos da lista por meio de um ícone de remoção ao lado de cada contato.
- **Exibição Dinâmica**: A lista de contatos é atualizada automaticamente no DOM ao adicionar ou remover contatos.
- **Alerta de Remoção**: Ao remover um contato, um alerta temporário é exibido na interface, confirmando a ação.

## Estrutura do Código

- **Classe `Contato`**: Define um objeto `Contato` com propriedades `id`, `nome` e `telefone`. O `id` é gerado automaticamente usando a função `uuidv4()` para garantir unicidade.
- **Classe `GerenciadorContatos`**: Gerencia a lista de contatos, contendo métodos para adicionar e remover contatos, além de atualizar a interface sempre que a lista é modificada.
  - `adicionarContato(nome, telefone)`: Adiciona um novo contato à lista.
  - `removerContato(id)`: Remove um contato da lista com base no `id`.
  - `atualizarLista()`: Atualiza a exibição da lista de contatos no DOM.
- **Funções Auxiliares**: 
  - `adicionar()`: Manipula o input do usuário para adicionar um novo contato.
  - `alertaRemover()`: Exibe um alerta temporário ao remover um contato.
  - `exibirLista()`: Alterna a visibilidade da lista de contatos.
  - `formatarTelefone(input)`: Formata o número de telefone inserido.

## Tecnologias Utilizadas

- **JavaScript**: Lógica de negócios e manipulação do DOM.
- **HTML**: Estruturação da interface do usuário.
- **CSS**: Estilização da interface, incluindo ícones e responsividade.

## Como Usar

1. Clone este repositório para o seu ambiente local.
2. Abra o arquivo `index.html` em seu navegador.
3. Adicione e remova contatos utilizando a interface da aplicação.

## Melhorias Futuras

- Implementação de persistência de dados usando `localStorage` para que os contatos sejam mantidos após o fechamento do navegador.
- Validação aprimorada de números de telefone e nomes.
- Design responsivo para dispositivos móveis.
