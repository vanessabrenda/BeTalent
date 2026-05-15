# Cenários de teste
## Ambiente        
[Restful Booker](https://restful-booker.herokuapp.com/apidoc/index.html)
## Dados do documento:
### Analista responsável: Vanessa Brenda Silva Sobrinho Aires
### Data: 15/05/2026


## Cenários Restful Booker

### Autenticação
  1. Envia usuário e senha padrão (`admin` / `password123`);
  2. Retorna token para ser usado nos requests protegidos.

Evidências da autenticação:

<img width="1266" height="794" alt="image" src="https://github.com/user-attachments/assets/02e99070-57bf-4d68-bec4-acdac53c6627" />


### CRUD de Reservas
#### Create - cria reserva e retorna `bookingId`
Evidência da criação:    

<img width="1285" height="798" alt="image" src="https://github.com/user-attachments/assets/341407ff-dc71-4c2e-98a7-8f82d4f691fb" />

#### Read - consulta reserva pelo `bookingId`.

Evidência da consulta:    
<img width="1282" height="802" alt="image" src="https://github.com/user-attachments/assets/448234b8-5b97-4e82-be72-55d8f5175ca3" />


#### Update - atualiza dados da reserva usando token.

Evidência da atualização:

<img width="1278" height="802" alt="image" src="https://github.com/user-attachments/assets/71da272f-2ef4-4600-bde5-4b3701661077" />


#### Delete - exclui reserva usando token.

Evidência da exclusão:

<img width="1276" height="803" alt="image" src="https://github.com/user-attachments/assets/38a4aeaf-a7f5-4c5e-bdd6-581d2437d1bc" />

O status 201, created sinaliza o sucesso na operação de exclusão.

### Validações de Campos Obrigatórios

| Campo obrigatório retirado da requisição  | Esperado           | Obtido                 | 
|---------------------|-------------------|-------------------------|
| **firstname**       | 400 Bad Request   | 500 Internal Server Error |
| **lastname**        | 400 Bad Request   | 500 Internal Server Error |
| **totalprice**      | 400 Bad Request   | 500 Internal Server Error |
| **bookingdates**    | 400 Bad Request   | 500 Internal Server Error |
| **depositpaid**     | 400 Bad Request   | 500 Internal Server Error |

Obs.: Foi verificado que o campo 'Additionalneeds' não é obrigatório.

Evidência da validação dos campos obrigatórios:


https://github.com/user-attachments/assets/43b7f0d3-1798-4379-a15f-bb5bada874f4

