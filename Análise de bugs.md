# Análise de bugs
## Detalhamento dos bugs encontrados

### Bugs críticos

|ID| Nome do defeito | Descrição | Função afetada | Usuário afetado| Passos para reprodução | Como deveria funcionar| Estado|        
|--|-----------------|-----------|------------|-----------|------------------------|----------------------|-------|           
| BC01 | Campo 'Last name' bloqueado para preenchimento | O campo 'Last name' não é preenchido, ao digitar nele o dado é reproduzido no campo 'First Name', mas ele não preenche. | Fluxo de compras | problem_user |1. Logar com o usuário problem_user. 2. Adicionar um item ao carrinho. 3. Acessar a tela de carrinho. 4. Clicar em Checkout. 5. Preencher campo 'Last name' | Permitir cada preenchimento de forma separada em todos os campos. | Pendente. |
#### Evidência do erro:
 
[BC01](https://github.com/user-attachments/assets/643c22b4-63df-44e5-863e-299c5aa97cee)

|ID| Nome do defeito | Descrição | Função afetada | Usuário afetado| Passos para reprodução | Como deveria funcionar| Estado|        
|--|-----------------|-----------|------------|-----------|------------------------|----------------------|-------|           
|BC02| Campo 'Last name' bloqueado para preenchimento | O campo 'Last name' não é preenchido, ao digitar nele nenhum dado é inserido, porém ao clicar em checkout, o sistema permite continuar o fluxo, mas não permite finalizar| Fluxo de compras | error_user |1. Logar com o usuário error_user . 2. Adicionar um item ao carrinho. 3. Acessar a tela de carrinho. 4. Clicar em Checkout. 5. Preencher campo 'Last name' 6. Clicar em checkout. 7. Clicar em 'Finish' | Permitir cada preenchimento de forma separada em todos os campos. Bloquear o checkout quando o 'Last name' não foi preenchido. | Pendente. |

#### Evidência do erro:
https://github.com/user-attachments/assets/2382f6a5-debe-4d1b-a89b-9a46fb942f64

|ID| Nome do defeito | Descrição | Função afetada | Usuário afetado| Passos para reprodução | Como deveria funcionar| Estado|        
|--|-----------------|-----------|------------|-----------|------------------------|----------------------|-------|           
|BC03| Itens com valores errados na tela home| O itens são apresentados com valores incorretos na tela home, mas aparece o valor correto no carrinho.| Fluxo de compras | visual_user |1. Logar com o usuário visual_user . 2. Visualizar os preços da home. 3. Acessar a tela de carrinho. 4. Verificar os preços exibidos no carrinho | Ajustar exibição dos preços. | Pendente. |

#### Evidência do erro:

https://github.com/user-attachments/assets/53f685df-472c-4337-a8f1-909182c131e9

|ID| Nome do defeito | Descrição | Função afetada | Usuário afetado| Passos para reprodução | Como deveria funcionar| Estado|        
|--|-----------------|-----------|------------|-----------|------------------------|----------------------|-------|           
|BC04| Botão 'Add to cart' sem ação na tela home| Os itens: Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket e Sauce Labs Fleece Jacket não podem ser adicionados no carrinho, botão 'Add to cart' está sem ação.| Fluxo de compras | problem_user |1. Logar com o usuário problem_user . 2. Clicar em 'Add to cart' nos itens  Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket e Sauce Labs Fleece Jacket. | Ajustar funcionalidade 'Add to cart' | Pendente. |

#### Evidência do erro:
https://github.com/user-attachments/assets/59c3d785-1527-4509-aee5-8679a442c37d
