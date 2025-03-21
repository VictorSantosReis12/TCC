# Acessibilidade do Smart KiloWatch

## Elementos não textuais

- ### Todas as imagens têm um texto alternativo (alt)
    - [✅] **Cumpre?**

- ### Os itens não textuais têm uma versão alternativa em texto
    - [✅] **Cumpre?**

- ### Não são usadas imagens que contêm blocos de texto
    - [✅] **Cumpre?**
    - **Observação:** A única imagem que possui texto é a da logo, mas como o próprio nome já diz, é uma logo, então é válido.

## Formulários

- ### Todos os campos dos formulários têm uma < label > associada
    - [❌] **Cumpre?**
    - **Por quê?:** Acredito não fazer sentido os campos de cadastro e login precisarem de um label, por conta que se não teria muita informação da tela do usuário.

- ### São usados < fieldset > e < legend > para agrupar os vários campos nos formulários
    - [❌] **Cumpre?**
    - **Por quê?:** Primeiramente, nunca utilizei esses 2 elementos, porém pelo que entendi na pesquisa, já faço isso com a div.

- ### O envio dos formulários é feito via input/button e não através de links e JavaScript
    - [❌] **Cumpre?**
    - **Por quê?:** Acredito não fazer sentido pelo simples fato de que mesmo que o botão ou o < form > possuisse um submit, no momento em que o usuário enviar, não acontecerá nada, por causa que o JavaScript faz toda a verificação e validação dos dados, assim o < form > iria simplesmente atualizar os campos.

- ### Os erros nos formulários são indicados em texto e junto do campo que contém o erro
    - [✅] **Cumpre?**

## Uso da cor e elementos que piscam

- ### Não é usada apenas a cor para transmitir informação
    - [✅] **Cumpre?**
    - **Observação:** Toda mensagem de erro e de sucesso é informada ao usuário por meio de um alert.

- ### Não há elementos que piscam ou mudam de cores repetidamente
    - [✅] **Cumpre?**

## Navegação

- ### São fornecidos atalhos para saltar links repetitivos
    - [❌] **Cumpre?**
    - **Por quê?:** Não acho que tenha necessidade pelo simples fato de ser apenas uma tela de cadastro e login.

- ### O < title > das páginas é claro, direto e percetível e está intimamente relacionado com o conteúdo da mesma
    - [✅] **Cumpre?**

- ### O site é navegável usando apenas o teclado
    - [✅] **Cumpre?**
    - **Observação:** A função :focus do CSS foi implementada durante a realização desta atividade.

## Semântica e Legibilidade

- ### O conteúdo está estruturado de forma semântica
    - [✅] **Cumpre?**

- ### O idioma da página está indicado no HTML
    - [✅] **Cumpre?**

- ### As tabelas têm headings < th > definidos
    - [✅] **Cumpre?**
    - **Observação:** Não possui tabelas.

- ### O site funciona com as imagens desativadas
    - [✅] **Cumpre?**

- ### O site é legível e navegável com o CSS desativado
    - [✅] **Cumpre?**
    - **Observação:** Por mais que as imagens fiquem enormes, se o usuário tiver paciência o site é navegável sem o CSS.

- ### O site é legível aumentando o texto 2 vezes
    - [✅] **Cumpre?**
    - **Observação:** Por mais que os textos fiquem enormes e acabe desorganizando os elementos, nenhum deles fica sobreposto ou fora da sua área determinada.