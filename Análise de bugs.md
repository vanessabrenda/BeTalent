# Análise de bugs

## Bugs Críticos

|ID| Nome do defeito | Descrição | Função afetada | Usuário afetado| Passos para reprodução | Como deveria funcionar| Estado|        
|--|-----------------|-----------|------------|-----------|------------------------|----------------------|-------|           
| BC01 | Campo 'Last name' bloqueado para preenchimento. | O campo 'Last name' não é preenchido, ao digitar nele o dado é reproduzido no campo 'First Name', mas ele não preenche. | Fluxo de compras | problem_user |1. Logar com o usuário problem_user. 2. Adicionar um item ao carrinho. 3. Acessar a tela de carrinho. 4. Clicar em Checkout. 5. Preencher campo 'Last name' | Permitir cada preenchimento de forma separada em todos os campos. | Pendente. |
#### Evidência do erro:
 
[BC01](https://github.com/user-attachments/assets/643c22b4-63df-44e5-863e-299c5aa97cee)

|ID| Nome do defeito | Descrição | Função afetada | Usuário afetado| Passos para reprodução | Como deveria funcionar| Estado|        
|--|-----------------|-----------|------------|-----------|------------------------|----------------------|-------|           
|BC02| Campo 'Last name' bloqueado para preenchimento. | O campo 'Last name' não é preenchido, ao digitar nele nenhum dado é inserido, porém ao clicar em checkout, o sistema permite continuar o fluxo, mas não permite finalizar| Fluxo de compras | error_user |1. Logar com o usuário error_user . 2. Adicionar um item ao carrinho. 3. Acessar a tela de carrinho. 4. Clicar em Checkout. 5. Preencher campo 'Last name' 6. Clicar em checkout. 7. Clicar em 'Finish' | Permitir cada preenchimento de forma separada em todos os campos. Bloquear o checkout quando o 'Last name' não foi preenchido. | Pendente. |

#### Evidência do erro:
https://github.com/user-attachments/assets/2382f6a5-debe-4d1b-a89b-9a46fb942f64

|ID| Nome do defeito | Descrição | Função afetada | Usuário afetado| Passos para reprodução | Como deveria funcionar| Estado|        
|--|-----------------|-----------|------------|-----------|------------------------|----------------------|-------|           
|BC03| Itens com valores errados na tela home. | O itens são apresentados com valores incorretos na tela home, mas aparece o valor correto no carrinho.| Fluxo de compras | visual_user |1. Logar com o usuário visual_user . 2. Visualizar os preços da home. 3. Acessar a tela de carrinho. 4. Verificar os preços exibidos no carrinho | Ajustar exibição dos preços. | Pendente. |

#### Evidência do erro:

https://github.com/user-attachments/assets/53f685df-472c-4337-a8f1-909182c131e9

|ID| Nome do defeito | Descrição | Função afetada | Usuário afetado| Passos para reprodução | Como deveria funcionar| Estado|        
|--|-----------------|-----------|------------|-----------|------------------------|----------------------|-------|           
|BC04| Botão 'Add to cart' sem ação na tela home. | Os itens: Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket e Sauce Labs Fleece Jacket não podem ser adicionados no carrinho, botão 'Add to cart' está sem ação.| Fluxo de compras | problem_user |1. Logar com o usuário problem_user . 2. Clicar em 'Add to cart' nos itens  Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket e Sauce Labs Fleece Jacket. | Ajustar funcionalidade 'Add to cart'. | Pendente. |

#### Evidência do erro:
https://github.com/user-attachments/assets/59c3d785-1527-4509-aee5-8679a442c37d

|ID| Nome do defeito | Descrição | Função afetada | Usuário afetado| Passos para reprodução | Como deveria funcionar| Estado|        
|--|-----------------|-----------|------------|-----------|------------------------|----------------------|-------|           
|BC05| Botão 'Add to cart' sem ação na tela home. | Os itens: Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket e Sauce Labs Fleece Jacket não podem ser adicionados no carrinho, botão 'Add to cart' está sem ação.| Fluxo de compras | error_user |1. Logar com o usuário error_user . 2. Clicar em 'Add to cart' nos itens  Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket e Sauce Labs Fleece Jacket. | Ajustar funcionalidade 'Add to cart'. | Pendente. |

#### Evidência do erro:
https://github.com/user-attachments/assets/e065d915-3d88-4c6f-9f0d-78262e19d4d7

|ID| Nome do defeito | Descrição | Função afetada | Usuário afetado| Passos para reprodução | Como deveria funcionar| Estado|        
|--|-----------------|-----------|------------|-----------|------------------------|----------------------|-------|           
|BC06| O carrinho aparece preenchido com os itens inseridos por outro usuário. | Após realizar login, o carrinho está com itens que outro usuário preencheu. O carrinho está comum para todos os usuários, as remoções e adições estão vinculadas em todos os usuários. | Fluxo de compras | Todos | 1. Logar com algum usuário. 2. Adicionar algum item no carrinho 3. Realizar logout. 4. Realizar login com um usuário diferente. 5. Verificar carrinho. | Ajustar para que o carrinho fique vinculado ao usuário logado e não a todos com login. | Pendente. |

#### Evidência do erro:
https://github.com/user-attachments/assets/6aa61d67-7380-401a-98e5-b87e4f4ffbb0

## Bugs Altos

|ID| Nome do defeito | Descrição | Função afetada | Usuário afetado| Passos para reprodução | Como deveria funcionar| Estado|        
|--|-----------------|-----------|------------|-----------|------------------------|----------------------|-------|           
|BA01| Botão de checkout está disponível mesmo com o carrinho vazio. | Botão de checkout está disponível mesmo com o carrinho vazio, fluxo de compra permitido com item vazio. | Fluxo de compras | Todos |1. Logar com qualquer usuário. 2. Acessar a tela de carrinho sem itens. 3. Prosseguir com a compra através do checkout. | Bloquear botão de checkout na tela de carrinho caso ele esteja vazio. | Pendente. |

#### Evidência do erro:
https://github.com/user-attachments/assets/020f0f79-a93b-4535-b1f4-70f35a4b800b

|ID| Nome do defeito | Descrição | Função afetada | Usuário afetado| Passos para reprodução | Como deveria funcionar| Estado|        
|--|-----------------|-----------|------------|-----------|------------------------|----------------------|-------|           
|BA02| Botão 'remove' não funciona em alguns itens. | Botão 'remove' não tem ação nos seguintes itens Sauce Labs Backpack, Sauce Labs Bike Light e Sauce Labs Onesie da tela home, a remoção foi feita na tela de carrinho, onde é possível removê=los. | Fluxo de compras | problem_user e error_user | 1. Logar com os usuários problem_user ou error_user. 2. Acessar a tela home. 3. Clicar em 'remove' nos itens mencionados na descrição. | Ajustar o botão 'Remove' para os usuários problem_user e error_user . | Pendente. |

#### Evidência do erro do problem_user:
https://github.com/user-attachments/assets/ba876995-2b6b-467a-b5ff-42c306ba9697
#### Evidência do erro do error_user:
https://github.com/user-attachments/assets/9c6d5f39-329b-442c-a3f6-591f52df762c



