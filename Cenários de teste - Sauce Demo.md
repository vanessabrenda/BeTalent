# Testes funcionais
# Ambiente 
[Sauce Demo](https://www.saucedemo.com/)
## Cenários Críticos
### Esquema do cenário 01: Login com diferentes usuários
**DADO QUE** o usuário acessa o ambiente Sauce Demo,   
**QUANDO** preenche o campo 'Username' com a informação da coluna 'Usuário',    
**E** preenche o campo 'Password' com a informação da coluna 'Senha utilizada',    
**ENTÃO** o sistema retorna o resultado de acordo com a coluna 'Resultado esperado'.

#### Casos de teste 01: Login utilizando a senha correta para os usuários - Positivo

| **Caso de teste** | **Usuário** | **Senha utilizada** | **Resultado esperado** | **Resultado obtido**|
|------------|-------------|---------------|----------------|-----------|
| CT01.1 | standard_user | secret_sauce | Apresenta a Tela home | Login realizado, tela home apresentada |
| CT01.2 | locked_out_user | secret_sauce | Não é realizado login. Mensagem de erro: Epic sadface: Sorry, this user has been locked out.| Login não realizado, mensagem de erro apresentada. |
| CT01.3 | problem_user | secret_sauce | Apresenta a tela home | Login realizado, tela home apresentada. | 
| CT01.4 | performance_glitch_user | secret_sauce | Apresenta a tela home | Login realizado, tela home apresentada. |
| CT01.5 | error_user | secret_sauce | Apresenta a tela home | Login realizado, tela home apresentada. |
| CT01.6 | visual_user | secret_sauce | Apresenta a tela home | Login realizado, tela home apresentada. |
  
#### Casos de teste 02: Login utilizando a senha incorreta para os usuários - Negativo
| **Caso de teste** | **Usuário** | **Senha utilizada** | **Resultado esperado** | **Resultado obtido**|
|------------|-------------|---------------|----------------|-----------|
| CT02.1 | standard_user | teste1 | Login não é realizado, mensagem de erro apresentada: Epic sadface: Username and password do not match any user in this service| Login não realizado, mensagem de erro apresentada. |
| CT02.2 | locked_out_user | teste123 | Login não é realizado, mensagem de erro apresentada: Epic sadface: Username and password do not match any user in this service| Login não realizado, mensagem de erro apresentada. |
| CT02.3 | problem_user | teste1234 | Login não é realizado, mensagem de erro apresentada: Epic sadface: Username and password do not match any user in this service| Login não realizado, mensagem de erro apresentada. |
| CT02.4 | performance_glitch_user | teste12345 | Login não é realizado, mensagem de erro apresentada: Epic sadface: Username and password do not match any user in this service| Login não realizado, mensagem de erro apresentada. |
| CT02.5 | error_user | teste1434 | Login não é realizado, mensagem de erro apresentada: Epic sadface: Username and password do not match any user in this service| Login não realizado, mensagem de erro apresentada. |
| CT02.6 | visual_user | teste1435435 | Login não é realizado, mensagem de erro apresentada: Epic sadface: Username and password do not match any user in this service| Login não realizado, mensagem de erro apresentada. |
##### Consideração geral do cenário 
  Aprovado, o fluxo de login foi realizado, alguns erros foram encontrados em outros fluxos. Evidências dos testes no documento: 
  
### Esquema do cenário 02: Fluxo de compras
**DADO QUE** o usuário realizou o login com um dos usuários da coluna 'Usuário' na plataforma Sauce Demo,    
**QUANDO** o usuário insere um produto ou mais no carrinho,      
**E** acessa a tela do carrinho,    
**E** clica em 'Checkout',   
**E** preenche os campos,    
**E** clica em 'Continue',    
**E** clica em 'Finish',    
**ENTÃO** o sistema retorna uma mensagem de sucesso:     
Thank you for your order!    
Your order has been dispatched, and will arrive just as fast as the pony can get there!    

#### Casos de teste 1: Compra de 01 item - Positivo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido**|
|------------|--------------|----------------|-----------|
| CT01.1 | standard_user | Compra realizada, mensagem de sucesso exibida. | Compra realizada, mensagem de sucesso apresentada. |
| CT01.2 | problem_user | Compra realizada, mensagem de sucesso exibida. |  O campo 'last name' estava bloqueado para preenchimento, ao clicar em continuar uma mensagem de erro foi exibida informando que o campo é obrigatório, não foi possível completar o fluxo de compra. |
| CT01.3 | performance_glitch_user | Compra realizada, mensagem de sucesso exibida. |  Compra realizada, mensagem de sucesso apresentada. |
| CT01.4 | error_user | Compra realizada, mensagem de sucesso exibida. |  O campo 'last name' estava bloqueado para preenchimento, ao clicar em continuar a próxima tela foi exibida, mas ao clicar em 'Finish' o sistema não teve nenhuma ação. Não foi possível completar o fluxo de compra.|
| CT01.5 | visual_user | Compra realizada, mensagem de sucesso exibida. |  Compra realizada, mensagem de sucesso apresentada, porém layout fora dos padrões. |
#### Casos de teste 2: Compra de todos os itens - Positivo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido**|
|------------|--------------|----------------|-----------|
| CT02.1 | standard_user | Compra realizada, mensagem de sucesso exibida. |  Compra realizada, mensagem de sucesso apresentada. |
| CT02.2 | problem_user | Compra realizada, mensagem de sucesso exibida. | Os itens: Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket e Sauce Labs Fleece Jacket não foram adicionados ao carrinho, botão 'Add to cart' está sem ação. |
| CT02.3 | performance_glitch_user | Compra realizada, mensagem de sucesso exibida. | Compra realizada, mensagem de sucesso apresentada. |
| CT02.4 | error_user | Compra realizada, mensagem de sucesso exibida. |  Os itens: Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket e Sauce Labs Fleece Jacket não foram adicionados ao carrinho, botão 'Add to cart' está sem ação. |
| CT02.5 | visual_user | Compra realizada, mensagem de sucesso exibida. |  Compra realizada, mensagem de sucesso apresentada, porém layout fora dos padrões. |

#### Casos de teste 3: Compra de 0 item - Negativo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido**|
|------------|--------------|----------------|-----------|
| CT03.1 | standard_user | Botão de 'Checkout' bloquedo se o carrinho estiver vazio. | Botão de checkout está disponível mesmo com o carrinho vazio, fluxo de compra permitido. |
| CT03.2 | problem_user | Botão de 'Checkout' bloquedo se o carrinho estiver vazio. | Botão de checkout está disponível mesmo com o carrinho vazio, fluxo de compra permitido. |
| CT03.3 | performance_glitch_user | Botão de 'Checkout' bloquedo se o carrinho estiver vazio. | Botão de checkout está disponível mesmo com o carrinho vazio, fluxo de compra permitido. |
| CT03.4 | error_user | Botão de 'Checkout' bloquedo se o carrinho estiver vazio. | Botão de checkout está disponível mesmo com o carrinho vazio, fluxo de compra permitido. |
| CT03.5 | visual_user | Botão de 'Checkout' bloquedo se o carrinho estiver vazio. | Botão de checkout está disponível mesmo com o carrinho vazio, fluxo de compra permitido. |
##### Consideração geral do cenário 
  Reprovado, diversas inconsistências encontradas no fluxo de compras, evidências dos testes no documento: 


### Esquema do Cenário 03: Remoção de itens do carrinho
**DADO QUE** o usuário realizou o login com um dos usuários da coluna 'Usuário' na plataforma Sauce Demo,    
**QUANDO** o usuário insere um produto ou mais no carrinho,      
**E** clica em 'Remove' na tela home ou clica em 'Remove' na tela do carrinho,    
**ENTÃO** o sistema retira o item do carrinho.

#### Casos de teste 1: Remoção de itens do carrinho - Positivo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido**|
|------------|--------------|----------------|-----------|
| CT01.1 | standard_user | Item removido com sucesso. | Item removido com sucesso nas duas telas, home e do carrinho. |
| CT01.2 | problem_user | Item removido com sucesso. | Os itens: Sauce Labs Backpack, Sauce Labs Bike Light e Sauce Labs Onesie não foram adicionados ao carrinho, botão 'Remove' está sem ação na tela home, mas o 'Remove' da tela do carrinho funcionou, possibilitando a remoção.|
| CT01.3 | performance_glitch_user | Item removido com sucesso. | Item removido com sucesso. |
| CT01.4 | error_user | Item removido com sucesso. |  Os itens: Sauce Labs Backpack, Sauce Labs Bike Light e Sauce Labs Onesie não foram adicionados ao carrinho, botão 'Remove' está sem ação, mas o 'Remove' da tela do carrinho funcionou, possibilitando a remoção. |
| CT01.5 | visual_user | Item removido com sucesso. | Item removido com sucesso, layout fora dos padrões.|

##### Consideração geral do cenário 
  Reprovado, diversas inconsistências encontradas no fluxo de remoção de itens, evidências dos testes no documento: 

### Cenério 04: Logout

## Cenários Relevantes:
### Cenário 05: Permitir ordenação e filtragem de produtos
### Cenário 06: Permitir navegação entre páginas
### Cenário 07: Layout apresentado

## Cenários Opcionais:
### Cenário 08: Carregamento das telas menor que 03 segundos
### Cenário 09: Fluxo de finalização de compras em 3 cliques ao entrar no carrinho


# Testes de acessibilidade
## Cenários Opcionais - utilizando o NVDA:
### Cenário 10: Login com um usuário
### Cenário 11: Ordenação e filtragem de produtos 
### Cenário 12: Fluxo completo de compra
### Cenário 13: Remoção de itens do carrinho
### Cenário 14: Navegação entre páginas
### Cenário 15: Logout

# Testes de responsividade
## Cenários Opcionais - utilizando o DevTools do Chrome:
### Cenário 16: Site para celular
### Cenário 17: Site para tablet
### Cenário 18: Site para diferentes resoluções de tela


