# Testes funcionais e não funcionais
# Ambiente 
[Sauce Demo](https://www.saucedemo.com/)
## Cenários Críticos
### Esquema do cenário 01: Login com diferentes usuários
**DADO QUE** o usuário acessa o ambiente Sauce Demo,   
**QUANDO** preenche o campo 'Username' com a informação da coluna 'Usuário',    
**E** preenche o campo 'Password' com a informação da coluna 'Senha utilizada',    
**ENTÃO** o sistema retorna o resultado de acordo com a coluna 'Resultado esperado'.

#### Casos de teste 01: Login utilizando a senha correta para os usuários - Positivo

| **Caso de teste** | **Usuário** | **Senha utilizada** | **Resultado esperado** | **Resultado obtido**| **Evidência**|
|------------|-------------|---------------|----------------|-----------|-----------|
| CT01.1 | standard_user | secret_sauce | Apresenta a Tela home | Login realizado, tela home apresentada | [CT01.1](https://github.com/user-attachments/assets/646aee7b-d291-4da4-a316-4e17cb940ac9) |
| CT01.2 | locked_out_user | secret_sauce | Não é realizado login. Mensagem de erro: Epic sadface: Sorry, this user has been locked out.| Login não realizado, mensagem de erro apresentada. |[CT01.2](https://github.com/user-attachments/assets/88688346-f51c-4326-901f-cccba699a07c)|
| CT01.3 | problem_user | secret_sauce | Apresenta a tela home | Login realizado, tela home apresentada. |[CT01.3](https://github.com/user-attachments/assets/db0d7cde-27cc-4358-852a-520c9465bc47)|
| CT01.4 | performance_glitch_user | secret_sauce | Apresenta a tela home | Login realizado, tela home apresentada. |[CT01.4](https://github.com/user-attachments/assets/28b1831b-a44b-402b-bedb-01abbac0b98c)|
| CT01.5 | error_user | secret_sauce | Apresenta a tela home | Login realizado, tela home apresentada. |[CT01.5](https://github.com/user-attachments/assets/8263084b-3e9d-488f-9509-edc6845d76ed)|
| CT01.6 | visual_user | secret_sauce | Apresenta a tela home | Login realizado, tela home apresentada. |[CT01.6](https://github.com/user-attachments/assets/64a5c198-97e7-4db4-9cce-9cd8ea22d23d)|
  
#### Casos de teste 02: Login utilizando a senha incorreta para os usuários - Negativo
| **Caso de teste** | **Usuário** | **Senha utilizada** | **Resultado esperado** | **Resultado obtido** | **Evidência**|
|------------|-------------|---------------|----------------|-----------|-----------|
| CT02.1 | standard_user | teste1 | Login não é realizado, mensagem de erro apresentada: Epic sadface: Username and password do not match any user in this service| Login não realizado, mensagem de erro apresentada. | [CT02.1](https://github.com/user-attachments/assets/5153c82d-6685-4d6a-b20f-fcde277537cf) |
| CT02.2 | locked_out_user | teste123 | Login não é realizado, mensagem de erro apresentada: Epic sadface: Username and password do not match any user in this service| Login não realizado, mensagem de erro apresentada. | [CT02.2](https://github.com/user-attachments/assets/9a5ee1a3-64e8-42f8-bf2e-70da3f65483f)|
| CT02.3 | problem_user | teste1234 | Login não é realizado, mensagem de erro apresentada: Epic sadface: Username and password do not match any user in this service| Login não realizado, mensagem de erro apresentada. | [CT02.3](https://github.com/user-attachments/assets/948848bf-7f6d-433b-9a59-1d14148193e4)|
| CT02.4 | performance_glitch_user | teste12345 | Login não é realizado, mensagem de erro apresentada: Epic sadface: Username and password do not match any user in this service| Login não realizado, mensagem de erro apresentada. | [CT02.4](https://github.com/user-attachments/assets/d6c26db1-90dd-49ac-aa73-069020a78861)|
| CT02.5 | error_user | teste1434 | Login não é realizado, mensagem de erro apresentada: Epic sadface: Username and password do not match any user in this service| Login não realizado, mensagem de erro apresentada. | [CT02.5](https://github.com/user-attachments/assets/068e92e8-264c-45b7-bbfe-18af11e53a14)|
| CT02.6 | visual_user | teste1435435 | Login não é realizado, mensagem de erro apresentada: Epic sadface: Username and password do not match any user in this service| Login não realizado, mensagem de erro apresentada. | [CT02.6](https://github.com/user-attachments/assets/77a59052-84c6-4394-9b05-98c0bfff90c3)|
##### Consideração geral do cenário 
  Aprovado, o fluxo de login foi realizado, alguns erros foram encontrados em outros fluxos.
  
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

#### Casos de teste 1: Compra de item - Positivo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido**| **Evidência**|
|------------|--------------|----------------|-----------|-----------|
| CT01.1 | standard_user           | Compra realizada, mensagem de sucesso exibida. | Compra realizada, mensagem de sucesso apresentada. | [CT01.1](https://github.com/user-attachments/assets/99607cce-5f7f-4c6d-ad16-62aa37c63019) |
| CT01.2 | problem_user            | Compra realizada, mensagem de sucesso exibida. | O campo 'last name' estava bloqueado para preenchimento, ao clicar em continuar uma mensagem de erro foi exibida informando que o campo é obrigatório, não foi possível completar o fluxo de compra. | [CT01.2](https://github.com/user-attachments/assets/643c22b4-63df-44e5-863e-299c5aa97cee) |
| CT01.3 | performance_glitch_user | Compra realizada, mensagem de sucesso exibida. | Compra realizada, mensagem de sucesso apresentada. | [CT01.3](https://github.com/user-attachments/assets/13a136b2-74fa-4d1c-8af1-c1f262e17bc7) |
| CT01.4 | error_user              | Compra realizada, mensagem de sucesso exibida. | O campo 'last name' estava bloqueado para preenchimento, ao clicar em continuar a próxima tela foi exibida, mas ao clicar em 'Finish' o sistema não teve nenhuma ação. Não foi possível completar o fluxo de compra. | [CT01.4](https://github.com/user-attachments/assets/2382f6a5-debe-4d1b-a89b-9a46fb942f64) |
| CT01.5 | visual_user             | Compra realizada, mensagem de sucesso exibida. | Compra realizada, porém o usuário apresenta o preço errado na tela home. mensagem de sucesso apresentada, layout fora dos padrões. | [CT01.5](https://github.com/user-attachments/assets/53f685df-472c-4337-a8f1-909182c131e9) |
#### Casos de teste 2: Compra de todos os itens - Positivo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido**| **Evidência**|
|------------|--------------|----------------|-----------|-----------|
| CT02.1 | standard_user | Compra realizada, mensagem de sucesso exibida. |  Compra realizada, mensagem de sucesso apresentada. | [CT02.1](https://github.com/user-attachments/assets/33ffae67-af13-40a8-92f2-057c997bec52) |
| CT02.2 | problem_user | Compra realizada, mensagem de sucesso exibida. | Os itens: Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket e Sauce Labs Fleece Jacket não foram adicionados ao carrinho, botão 'Add to cart' está sem ação. | [CT02.2](https://github.com/user-attachments/assets/59c3d785-1527-4509-aee5-8679a442c37d) |
| CT02.3 | performance_glitch_user | Compra realizada, mensagem de sucesso exibida. | Compra realizada, mensagem de sucesso apresentada. | [CT02.3](https://github.com/user-attachments/assets/3651429e-f2f1-4f25-aef5-345e251f49fd) |
| CT02.4 | error_user | Compra realizada, mensagem de sucesso exibida. |  Os itens: Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket e Sauce Labs Fleece Jacket não foram adicionados ao carrinho, botão 'Add to cart' está sem ação. | [CT02.4](https://github.com/user-attachments/assets/e065d915-3d88-4c6f-9f0d-78262e19d4d7) |
| CT02.5 | visual_user | Compra realizada, mensagem de sucesso exibida. |  Compra realizada, mensagem de sucesso apresentada, porém layout fora dos padrões. | [CT02.5](https://github.com/user-attachments/assets/8a33cb6c-fa2e-42b2-a233-957100704235) |

#### Casos de teste 3: Compra de 0 item - Negativo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido**| **Evidência**|
|------------|--------------|----------------|-----------|-----------|
| CT03.1 | standard_user | Botão de 'Checkout' bloquedo se o carrinho estiver vazio. | Botão de checkout está disponível mesmo com o carrinho vazio, fluxo de compra permitido. | Todas as evidências foram realizadas no [CT03](https://github.com/user-attachments/assets/020f0f79-a93b-4535-b1f4-70f35a4b800b). |
| CT03.2 | problem_user | Botão de 'Checkout' bloquedo se o carrinho estiver vazio. | Botão de checkout está disponível mesmo com o carrinho vazio, fluxo de compra permitido. | Todas as evidências foram realizadas no [CT03](https://github.com/user-attachments/assets/020f0f79-a93b-4535-b1f4-70f35a4b800b). |
| CT03.3 | performance_glitch_user | Botão de 'Checkout' bloquedo se o carrinho estiver vazio. | Botão de checkout está disponível mesmo com o carrinho vazio, fluxo de compra permitido. | Todas as evidências foram realizadas no [CT03](https://github.com/user-attachments/assets/020f0f79-a93b-4535-b1f4-70f35a4b800b). |
| CT03.4 | error_user | Botão de 'Checkout' bloquedo se o carrinho estiver vazio. | Botão de checkout está disponível mesmo com o carrinho vazio, fluxo de compra permitido. |Todas as evidências foram realizadas no [CT03](https://github.com/user-attachments/assets/020f0f79-a93b-4535-b1f4-70f35a4b800b). |
| CT03.5 | visual_user | Botão de 'Checkout' bloquedo se o carrinho estiver vazio. | Botão de checkout está disponível mesmo com o carrinho vazio, fluxo de compra permitido. | Todas as evidências foram realizadas no [CT03](https://github.com/user-attachments/assets/020f0f79-a93b-4535-b1f4-70f35a4b800b). |

##### Consideração geral do cenário 
  Reprovado, diversas inconsistências encontradas no fluxo de compras, evidências dos testes no documento: 


### Esquema do Cenário 03: Remoção de itens do carrinho

**DADO QUE** o usuário realizou o login com um dos usuários da coluna 'Usuário' na plataforma Sauce Demo,          
**QUANDO** o usuário insere um produto ou mais no carrinho,        
**E** clica em 'Remove' na tela home ou clica em 'Remove' na tela do carrinho,         
**ENTÃO** o sistema retira o item do carrinho.        

#### Casos de teste 1: Remoção de itens do carrinho - Positivo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido**|**Evidência**|
|------------|--------------|----------------|-----------|-----------|
| CT01.1 | standard_user | Item removido com sucesso. | Item removido com sucesso em ambas as telas, home e do carrinho. | [CT01.1](https://github.com/user-attachments/assets/728340ad-cddc-4f5f-b5a5-cc7350acd0a8) |
| CT01.2 | problem_user | Item removido com sucesso. | Os itens: Sauce Labs Backpack, Sauce Labs Bike Light e Sauce Labs Onesie não foram adicionados ao carrinho, botão 'Remove' está sem ação na tela home, mas o 'Remove' da tela do carrinho funcionou, possibilitando a remoção. | [CT01.2](https://github.com/user-attachments/assets/ba876995-2b6b-467a-b5ff-42c306ba9697) |
| CT01.3 | performance_glitch_user | Item removido com sucesso. | Item removido com sucesso em ambas as telas, home e do carrinho. | [CT01.3](https://github.com/user-attachments/assets/b9f745f3-f2ce-459e-9535-d93d86e43b09) |
| CT01.4 | error_user | Item removido com sucesso. |  Os itens: Sauce Labs Backpack, Sauce Labs Bike Light e Sauce Labs Onesie não foram adicionados ao carrinho, botão 'Remove' está sem ação, mas o 'Remove' da tela do carrinho funcionou, possibilitando a remoção. | [CT01.4](https://github.com/user-attachments/assets/9c6d5f39-329b-442c-a3f6-591f52df762c) |
| CT01.5 | visual_user | Item removido com sucesso. | Item removido com sucesso em ambas as telas, home e do carrinho. Layout fora dos padrões. | [CT01.5](https://github.com/user-attachments/assets/f3e93005-083e-4d56-9cec-700647711adf) |

##### Consideração geral do cenário 
  Aprovado com ressalvas, as inconsistências encontradas no fluxo de remoção de itens não impede a remoção por outra tela, mas atrapalha a usabilidade.

### Esquema do Cenário 04: Logout do sistema
**DADO QUE** o usuário realizou o login com um dos usuários da coluna 'Usuário' na plataforma Sauce Demo,    
**QUANDO** o usuário acessa o menu lateral esquerdo,          
**E** clica em 'Logout',           
**ENTÃO** o sistema encerra a sessão e redireciona para a tela de login.              

#### Casos de teste 1: Realizar logout - Positivo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido**| **Evidência**|
|------------|--------------|----------------|-----------|-----------|
| CT01.1 | standard_user | Logout realizado, apresenta tela de login. | Logout realizado, apresenta tela de login. | [CT01.1](https://github.com/user-attachments/assets/39ec6899-70d8-48ca-b270-ecb0e5367105) |
| CT01.2 | problem_user  | Logout realizado, apresenta tela de login. | Logout realizado, apresenta tela de login. | [CT01.2](https://github.com/user-attachments/assets/1aba696c-9e6f-4a9b-b47c-97c422e9f32f) |
| CT01.3 | performance_glitch_user  | Logout realizado, apresenta tela de login. | ILogout realizado, apresenta tela de login. | [CT01.3](https://github.com/user-attachments/assets/aa56321f-02a2-41c7-ad6a-cb214294ea97) |
| CT01.4 | error_user  | Logout realizado, apresenta tela de login. | Logout realizado, apresenta tela de login. | [CT01.4](https://github.com/user-attachments/assets/f0bc5e29-e215-4f90-8408-27766ee2a5b0) |
| CT01.5 | visual_user | Logout realizado, apresenta tela de login. | Logout realizado, apresenta tela de login. | [CT01.5](https://github.com/user-attachments/assets/85af7c1e-1af1-4fb4-88a3-7821d1ac9fb6) |

#### Casos de teste 2: Realizar login após realizar um logout de outro usuário - Positivo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido**| **Evidência**|
|------------|--------------|----------------|-----------|-----------|
| CT02.1 | standard_user | Login realizado, apresenta tela home. | Login realizado, porém o carrinho está com itens que outro usuário preencheu. O carrinho está comum para todos os usuários, as remoções e adições estão vinculadas em todos os usuários. | O caso de teste foi reproduzido em conjunto, as evidências estão no vídeo: [CT02](https://github.com/user-attachments/assets/6aa61d67-7380-401a-98e5-b87e4f4ffbb0) |
| CT02.2 | problem_user  | Logout realizado, apresenta tela de login. | Login realizado, porém o carrinho está com itens que outro usuário preencheu. O carrinho está comum para todos os usuários, as remoções e adições estão vinculadas a todos os usuários.  | O caso de teste foi reproduzido em conjunto, as evidências estão no vídeo: [CT02](https://github.com/user-attachments/assets/6aa61d67-7380-401a-98e5-b87e4f4ffbb0) |
| CT02.3 | performance_glitch_user  | Logout realizado, apresenta tela de login. | Login realizado, porém o carrinho está com itens que outro usuário preencheu. O carrinho está comum para todos os usuários, as remoções e adições estão vinculadas em todos os usuários. | O caso de teste foi reproduzido em conjunto, as evidências estão no vídeo: [CT02](https://github.com/user-attachments/assets/6aa61d67-7380-401a-98e5-b87e4f4ffbb0) || 
| CT02.4 | error_user  | Logout realizado, apresenta tela de login. | Login realizado, porém o carrinho está com itens que outro usuário preencheu. O carrinho está comum para todos os usuários, as remoções e adições estão vinculadas em todos os usuários. | O caso de teste foi reproduzido em conjunto, as evidências estão no vídeo: [CT02](https://github.com/user-attachments/assets/6aa61d67-7380-401a-98e5-b87e4f4ffbb0) ||
| CT02.5 | visual_user | Logout realizado, apresenta tela de login. | Login realizado, porém o carrinho está com itens que outro usuário preencheu. O carrinho está comum para todos os usuários, as remoções e adições estão vinculadas em todos os usuários. | O caso de teste foi reproduzido em conjunto, as evidências estão no vídeo: [CT02](https://github.com/user-attachments/assets/6aa61d67-7380-401a-98e5-b87e4f4ffbb0) ||

##### Consideração geral do cenário: 
  Reprovado, diversas inconsistências encontradas no fluxo de Logout, evidências dos testes no documento: 
### Esquema do Cenário 05: Detalhe dos produtos

**DADO QUE** o usuário realizou o login com um dos usuários da coluna 'Usuário' na plataforma Sauce Demo,    
**QUANDO** o usuário acessa o detalhe dos produtos,         
**ENTÃO** o sistema exibe o detalhe do produto escolhido.           
#### Casos de teste 1: Acessar o detalhe dos produtos - Positivo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido**|**Evidência**|
|------------|--------------|----------------|-----------|-----------|
| CT01.1 | standard_user | Detalhe do produto apresentado corretamente. | Detalhe do produto apresentado corretamente. | [CT01.1](https://github.com/user-attachments/assets/571affe4-9fcd-4bf6-939b-182e4d2527ac) |
| CT01.2 | problem_user | Detalhe do produto apresentado corretamente. | Nenhum item foi apresentado corretamente na tela home e nos detalhes, na tela home a imagem está incorreta, no detalhe apresenta um item diferente ou não apresentou item. | [CT01.2](https://github.com/user-attachments/assets/dbec0946-4039-4c8d-ad48-3a3f9375e70f) |
| CT01.3 | performance_glitch_user  | Detalhe do produto apresentado corretamente. | Detalhe do produto apresentado corretamente. | [CT01.3](https://github.com/user-attachments/assets/5eff7ef2-ae4e-4921-9da5-c7ea5751faee) |
| CT01.4 | error_user | Detalhe do produto apresentado corretamente. | Detalhe do produto apresentado corretamente. | [CT01.4](https://github.com/user-attachments/assets/4f29a55a-2e43-44cb-9a34-e5dc416e47a8) |
| CT01.5 | visual_user | Detalhe do produto apresentado corretamente. | Detalhe do produto apresentado corretamente, mas a imagem da tela home está incorreta para o primeiro item da tela (mesmo que a ordenação mude o primeiro item, a imagem está fixa, sempre aparece a mesma), a imagem do detalhe está correta.| [CT01.5](https://github.com/user-attachments/assets/40c3c937-300e-4d43-b3ab-65c73ad764b4) |
##### Consideração geral do cenário 
  Reprovado, diversas inconsistências encontradas no detalhe dos produtos.

## Cenários Relevantes:

### Esquema do Cenário 06: Permitir ordenação e filtragem de produtos
**DADO QUE** o usuário realizou o login com um dos usuários da coluna 'Usuário' na plataforma Sauce Demo,    
**QUANDO** o usuário acessa o detalhe dos produtos,           
**ENTÃO** o sistema exibe o detalhe do produto escolhido.      

#### Casos de teste 1: ordenar os produtos por ordem alfabética - Positivo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido** | **Evidência** |
|------------|--------------|----------------|-----------|-----------|
| CT01.1 | standard_user | Produtos ordenados em ordem alfabética de A-Z ou Z-A | Ambas as ordenações por ordem alfabética efetuadas com sucesso. | [CT01.1](https://github.com/user-attachments/assets/9d07b5e3-9063-4f8c-be0f-2c18371d9e88) |
| CT01.2 | problem_user | Produtos ordenados em ordem alfabética de A-Z ou Z-A | Ordenação Z-A não está funcionando. | [CT01.2](https://github.com/user-attachments/assets/72773547-5b05-4b12-a704-c6907e336fa4) |
| CT01.3 | performance_glitch_user | Produtos ordenados em ordem alfabética de A-Z ou Z-A | Ambas as ordenações por ordem alfabética efetuadas com sucesso. | [CT01.3](https://github.com/user-attachments/assets/05674d42-78dc-4ea4-8507-76ab5178933b) |
| CT01.4 | error_user | Produtos ordenados em ordem alfabética de A-Z ou Z-A | Não foi possível ordenar de Z-A, mensagem de erro exibida: Sorting is broken! This error has been reported to Backtrace. | [CT01.4](https://github.com/user-attachments/assets/c27617a9-345e-4836-ad52-129b26204b52) |
| CT01.5 | visual_user | Produtos ordenados em ordem alfabética de A-Z ou Z-A | Ambas as ordenações por ordem alfabética efetuadas com sucesso. | [CT01.5](https://github.com/user-attachments/assets/6824c7f4-b078-4b2f-bb8f-0f6c15db0b6a) |

#### Casos de teste 2: ordenar os produtos por preço - Positivo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido** | **Evidência** |
|------------|--------------|----------------|-----------|-----------|
| CT02.1 | standard_user | Produtos ordenados por preço, maior para menor ou menor para maior. | Ambas as ordenações por preço efetuadas com sucesso. | [CT02.1](https://github.com/user-attachments/assets/fa1999db-9dd1-4be2-b14d-d618b4e6c8be) |
| CT02.2 | problem_user | Produtos ordenados por preço, maior para menor ou menor para maior. | Nenhuma ordenação por preço funcionou, o sistema não teve nenhuma ação. | [CT02.2](https://github.com/user-attachments/assets/5362d9d9-055c-4fcb-9849-f3c6af95d952) |
| CT02.3 | performance_glitch_user | Produtos ordenados por preço, maior para menor ou menor para maior. | Ambas as ordenações por preço efetuadas com sucesso.| [CT02.3](https://github.com/user-attachments/assets/6de79bd9-bbaf-4c2d-b1f9-3766ade3b7c9) |
| CT02.4 | error_user | Produtos ordenados por preço, maior para menor ou menor para maior. | Nenhuma ordenação por preço funcionou, mensagem de erro exibida: Sorting is broken! This error has been reported to Backtrace. | [CT02.4](https://github.com/user-attachments/assets/e5ee81df-30af-4841-9da3-1d4d99e0deaa) |
| CT02.5 | visual_user | Produtos ordenados por preço, maior para menor ou menor para maior. | As ordenações alteraram a ordem dos produtos, mas não apresentou corretamente os itens, além disso, o preço exibido na home está incorreto. | [CT02.5](https://github.com/user-attachments/assets/8208a6cd-7d7c-432e-94a7-f334d8e77d7b) |

#### Casos de teste 3: filtrar produtos - Positivo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido** | **Evidência** |
|------------|--------------|----------------|-----------|-----------|
| CT03.1 | standard_user | Possibilidade de filtrar os produtos | Filtragem de produto indisponível. | O caso de teste foi reproduzido em conjunto, as evidências estão no vídeo: [CT03](https://github.com/user-attachments/assets/1627e32a-82a0-4670-835f-8ebda01e344a) |
| CT03.2 | problem_user | Possibilidade de filtrar os produtos | Filtragem de produto indisponível. | O caso de teste foi reproduzido em conjunto, as evidências estão no vídeo: [CT03](https://github.com/user-attachments/assets/1627e32a-82a0-4670-835f-8ebda01e344a) |
| CT03.3 | performance_glitch_user | Possibilidade de filtrar os produtos | Filtragem de produto indisponível. | O caso de teste foi reproduzido em conjunto, as evidências estão no vídeo: [CT03](https://github.com/user-attachments/assets/1627e32a-82a0-4670-835f-8ebda01e344a) |
| CT03.4 | error_user | Possibilidade de filtrar os produtos | Filtragem de produto indisponível. | O caso de teste foi reproduzido em conjunto, as evidências estão no vídeo: [CT03](https://github.com/user-attachments/assets/1627e32a-82a0-4670-835f-8ebda01e344a) |
| CT03.5 | visual_user | Possibilidade de filtrar os produtos | Filtragem de produto indisponível. | O caso de teste foi reproduzido em conjunto, as evidências estão no vídeo: [CT03](https://github.com/user-attachments/assets/1627e32a-82a0-4670-835f-8ebda01e344a) |

##### Consideração geral do cenário 
  Reprovado, diversas inconsistências encontradas no fluxo de ordenação.

### Esquema do Cenário 07: Tempo de carregamento entre as telas
**DADO QUE** o usuário realizou o login com um dos usuários da coluna 'Usuário' na plataforma Sauce Demo,    
**QUANDO** o usuário navega entre as telas,         
**ENTÃO** o sistema exibe a nova tela em menos de 3 segundos.           

#### Casos de teste 1: Navegar pelo sistema - Positivo 
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido** | **Evidência** |
|------------|--------------|----------------|-----------|-----------|
| CT01.1 | standard_user | As telas do sistema são carregadas em menos de 3 segundos. | As telas do sistema foram carregadas instanteneamente. | As evidências dos outros cenários mostram o baixo tempo de carregamento para esse usuário. |
| CT01.2 | problem_user | As telas do sistema são carregadas em menos de 3 segundos. | As telas do sistema foram carregadas instanteneamente.|  As evidências dos outros cenários mostram o baixo tempo de carregamento para esse usuário. |
| CT01.3 | performance_glitch_user | As telas do sistema são carregadas em menos de 3 segundos. | A tela home do sistema leva entre 5 a 7 segundos para ser carregada, qualquer ação na tela home leva esse tempo de carregamento. | [CT01.3](https://github.com/user-attachments/assets/e2b4f71c-c6f3-4267-bb77-197e3ae343a9) |
| CT01.4 | error_user | As telas do sistema são carregadas em menos de 3 segundos. | As telas do sistema foram carregadas instanteneamente. |  As evidências dos outros cenários mostram o baixo tempo de carregamento para esse usuário. |
| CT01.5 | visual_user | As telas do sistema são carregadas em menos de 3 segundos. | As telas do sistema foram carregadas instanteneamente. |  As evidências dos outros cenários mostram o baixo tempo de carregamento para esse usuário. |
##### Consideração geral do cenário 
  Aprovado com ressalva, necessário ajustar o usuário performance_glitch_user.

### Esquema do Cenário 08: Interface apresentada para o usuário
**DADO QUE** o usuário realizou o login com um dos usuários da coluna 'Usuário' na plataforma Sauce Demo,    
**QUANDO** o usuário navega entre as telas,         
**ENTÃO** o sistema exibe as telas com interface apropriada para o usuário, com as mensagens claras e apresentadas por inteiro na tela.           

#### Inconsistências de interface: Itens em comum para todos os usuários

| **Identificador** | **Inconsistência** | **Correção** | 
|------------|--------------|----------------|
|ID01| Na tela de login, a mensagem de erro apresentada quando digita uma senha incorreta está sendo cortada. | Redimensionar a mensagem para encaixar no campo designado. |
|ID02| O item: Sauce Labs Backpack. possui o seguinte fragmento de código na descrição: carry.allTheThings(). | Ajustar código para que o frontend apresente a mensagem correta sobre a descrição do item e não resquício de código. |
|ID03| O item Test.allTheThings() T-Shirt (Red) possui fragmento de código em seu nome. | Ajustar código para que o frontend apresente a mensagem correta do nome do item e não resquício de código. |
|ID04| O ícone do carrinho deveria ser apresentado como clicável pelo cursor do mouse, conforme padrão do sistema. | Ajustava tipo de clique do carrinho, apresentando o ícone padrão de links. |
|ID05| Na última tela de checkout, onde finaliza a compra, quando há 5 itens no carrinho, o Preço exibido no Checkout aparece mais caracteres na casa dos centavos: Item total: $113.94999999999999. | Ajustar o sistema para calcular o preço corretamente quando há 5 itens no carrinho. |
##### Evidências das inconsistências de interface em comum a todos os usuários: [Cenário08]()



##### Consideração geral do cenário         
  O Layout não é impeditivo para entrega, porém está apresentando diversas falhas, por isso é de alta prioridade para ajuste. 

### Esquema do Cenário 09: Permitir navegação entre páginas
**DADO QUE** o usuário realizou o login com um dos usuários da coluna 'Usuário' na plataforma Sauce Demo,    
**QUANDO** o usuário navega entre as telas usando os botões de navegação localizados na parte inferior da tela: 'Continue Shopping', 'Checkout', 'Cancel', 'Continue', 'Finish' e 'Back Home',         
**ENTÃO** o sistema redireciona o usuário para a tela correspondente ao botão clicado.           

#### Casos de teste 1: Navegar pelo sistema usando os botões da parte inferior da tela - Positivo
| **Caso de teste** | **Usuário** | **Resultado esperado** | **Resultado obtido** | **Evidência** |
|------------|--------------|----------------|-----------|-----------|
| CT01.1 | standard_user | A tela é redirecionada para a tela correspondente. | Os botões redirecionaram corretamente, mas foi possível notar que o botão 'Cancel' da tela 'Checkout: Overview' teve um comportamento diferente (Retorna para a tela home) do botão 'Cancel' da tela 'Checkout: Your Information' (Retorna para a tela anterior). | [CT01.1]() |
| CT01.2 | problem_user | A tela é redirecionada para a tela correspondente. | Não foi possível completar o fluxo devido ao erro de não poder inserir o Last Name no Checkout. | [CT01.2]() |
| CT01.3 | performance_glitch_user | A tela é redirecionada para a tela correspondente. | Os botões redirecionaram corretamente, mas foi possível notar que o botão 'Cancel' da tela 'Checkout: Overview' teve um comportamento diferente (retorna para a tela home) do botão 'Cancel' da tela 'Checkout: Your Information' (retorna para a tela anterior). | [CT01.3]() |
| CT01.4 | error_user | A tela é redirecionada para a tela correspondente. | Os botões redirecionaram corretamente, mas foi possível notar que o botão 'Cancel' da tela 'Checkout: Overview' teve um comportamento diferente (retorna para a tela home) do botão 'Cancel' da tela 'Checkout: Your Information' (retorna para a tela anterior). | [CT01.4]() |
| CT01.5 | visual_user | A tela é redirecionada para a tela correspondente. | Os botões redirecionaram corretamente, mas foi possível notar que o botão 'Cancel' da tela 'Checkout: Overview' teve um comportamento diferente (retorna para a tela home) do botão 'Cancel' da tela 'Checkout: Your Information' (retorna para a tela anterior). | [CT01.5]() |

##### Consideração geral do cenário 
  Aprovado, apenas um botão funciona fora do padrão, verificar possibilidade de ajuste.


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


