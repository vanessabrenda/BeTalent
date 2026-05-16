# Cenários de teste - API Testing
## Ambiente        
[Restful Booker](https://restful-booker.herokuapp.com/apidoc/index.html)
## Dados do documento:
### Analista responsável: Vanessa Brenda Silva Sobrinho Aires
### Data: 15/05/2026


## Cenários Restful Booker

### Autenticação
  Envia os seguintes dados:
       
     {
     "username": "{{username}}",
     "password": "{{password}}"
     }     
  Retorna token para ser usado nos requests protegidos.    

Requisição enviada: 

<img width="1251" height="794" alt="image" src="https://github.com/user-attachments/assets/1fecfbfb-074d-4ba2-af81-abe9595c57c8" />

### CRUD de Reservas
#### Create - cria reserva e retorna 'bookingId'

Dados enviados:

     {
      "firstname" : "Vanessa",
      "lastname" : "Aires",
      "totalprice" : 150,
      "depositpaid" : true,
      "bookingdates" : {
          "checkin" : "2026-05-16",
          "checkout" : "2026-05-20"
      },
      "additionalneeds" : "duas camas"
    }
E a reserva é criada.
Evidência da requisição enviada:

<img width="1263" height="790" alt="image" src="https://github.com/user-attachments/assets/c094bdb9-580e-4858-8a01-7b00b7ed4358" />

#### Read - consulta reserva pelo 'bookingId'.

O retorno é o json com os dados da reserva.
Evidência da requisição enviada:

<img width="1579" height="988" alt="image" src="https://github.com/user-attachments/assets/f14976ef-2f93-414f-84c5-82ec7f8c9661" />

#### Read - Consulta reserva pelo 'firstname'.

A reserva é consultada pelo campo 'firstname' e retorna o(s) ID(s) das reservas que possuem o nome.
Evidência: 

<img width="1577" height="986" alt="image" src="https://github.com/user-attachments/assets/63ac9186-e0d6-4bc1-8557-b047abb1edd2" />

#### Read - Consulta reserva pelo 'lastname'.
A reserva é consultada pelo campo 'lastname' e retorna o(s) ID(s) das reservas que possuem o nome.
Evidência: 

<img width="1583" height="988" alt="image" src="https://github.com/user-attachments/assets/807eb7d9-d85e-49a0-b48a-b4c699632755" />

#### Read - Consulta reserva pelo 'checkin'.
A reserva é consultada pelo campo 'checkin' e retorna o(s) ID(s) das reservas que possuem o nome.
Evidência: 

<img width="1582" height="985" alt="image" src="https://github.com/user-attachments/assets/caac250a-b2ee-49eb-9871-706663459594" />

#### Read - Consulta reserva pelo 'checkout'.
A reserva é consultada pelo campo 'checkout' e retorna o(s) ID(s) das reservas que possuem o nome.
Evidência: 
<img width="1580" height="986" alt="image" src="https://github.com/user-attachments/assets/43ed0ce3-8a25-474d-85e9-ea405073d793" />

#### Read - Consulta reserva pelo 'firstname' e pelo 'lastname'.
A reserva é consultada pelos campos 'firstname' e 'lastname' e retorna o(s) ID(s) das reservas que possuem os dois nomes

Evidência: 

<img width="1587" height="992" alt="image" src="https://github.com/user-attachments/assets/6ef95fe6-697c-4e84-b71a-859b4f649a9f" />

#### Update Parcial - atualiza parcialmente os dados da reserva

Envia o body com apenas algumas informações de atualização e modifica uma reserva:
    
      {
          "firstname": "Teste",
          "lastname": "Updateparcial"
      }

Evidência:

<img width="1575" height="982" alt="image" src="https://github.com/user-attachments/assets/d679ac51-ac02-45c2-ba26-52b0f9748ca4" />

#### Update - atualiza dados da reserva

Envia o body com todas as informações obrigatórias e a reserva é modificada:

      {
          "firstname" : "Teste",
          "lastname" : "Update",
          "totalprice" : 112,
          "depositpaid" : true,
          "bookingdates" : {
              "checkin" : "2026-06-01",
              "checkout" : "2027-07-01"
          },
          "additionalneeds" : "uma cama"
      }

Evidência:
<img width="1584" height="998" alt="image" src="https://github.com/user-attachments/assets/068e0c4d-fb0c-499c-9167-7cb0111f24c6" />

#### Delete - exclui reserva usando token.

Envia o ID que deseja excluir e a reserva é deletada.
Evidência:
<img width="1579" height="986" alt="image" src="https://github.com/user-attachments/assets/91d960ca-0a5e-49a8-9c46-e5838424f052" />

### Validações de Campos Obrigatórios

#### Create - Envio de body sem campo 'firstname'

É feito o envio de um body sem um campo obrigatório para verificar o retorno da API:      
 
    {
      "lastname" : "Aires",
      "totalprice" : 150,
      "depositpaid" : true,
      "bookingdates" : {
          "checkin" : "2026-05-16",
          "checkout" : "2026-05-20"
      },
      "additionalneeds" : "duas camas"
    }      
    
Evidência:
<img width="1577" height="992" alt="image" src="https://github.com/user-attachments/assets/b2ea9067-0a56-4ce3-a82a-277dc840a446" />

#### Create - Envio de body sem campo 'lastname'

É feito o envio de um body sem um campo obrigatório para verificar o retorno da API:         

    {
      "firstname" : "Vanessa",
      "totalprice" : 150,
      "depositpaid" : true,
      "bookingdates" : {
          "checkin" : "2026-05-16",
          "checkout" : "2026-05-20"
      },
      "additionalneeds" : "duas camas"
    }
            
Evidência:
<img width="1579" height="994" alt="image" src="https://github.com/user-attachments/assets/d9d769d6-e62f-42da-a58c-0d0f8a297457" />

#### Create - Envio de body sem campo 'totalprice'
É feito o envio de um body sem um campo obrigatório para verificar o retorno da API:         

    {
      "firstname" : "Vanessa",
      "lastname" : "Aires",
      "depositpaid" : true,
      "bookingdates" : {
          "checkin" : "2026-05-16",
          "checkout" : "2026-05-20"
      },
      "additionalneeds" : "duas camas"
    }       
    
Evidência:
<img width="1582" height="992" alt="image" src="https://github.com/user-attachments/assets/3e6dd65b-27d7-4cf7-b3bf-fa35b0b8d370" />

#### Create - Envio de body sem campo 'depositpaid'
É feito o envio de um body sem um campo obrigatório para verificar o retorno da API:
     
    {
      "firstname" : "Vanessa",
      "lastname" : "Aires",
      "totalprice" : 150,
      "bookingdates" : {
          "checkin" : "2026-05-16",
          "checkout" : "2026-05-20"
      },
      "additionalneeds" : "duas camas"
    }      
    
Evidência:
<img width="1584" height="996" alt="image" src="https://github.com/user-attachments/assets/c34d05ce-4188-4e2e-8f6d-4f4cd1ea5c97" />

#### Create - Envio de body sem campo 'bookingdates'
É feito o envio de um body sem um campo obrigatório para verificar o retorno da API:      

    {
      "firstname" : "Vanessa",
      "lastname" : "Aires",
      "totalprice" : 150,
      "depositpaid" : true,
      "additionalneeds" : "duas camas"
    }      
    
Evidência:
<img width="1578" height="994" alt="image" src="https://github.com/user-attachments/assets/57bfaaa0-0bfa-4afc-9e98-7c00eeedeaf8" />

#### Create - Envio de body sem campo 'additionalneeds'
É feito o envio de um body sem um campo não obrigatório para verificar se a API cria a reserva:    

    {
      "firstname" : "Vanessa",
      "lastname" : "Aires",
      "totalprice" : 150,
      "depositpaid" : true,
      "additionalneeds" : "duas camas"
    }
              
Evidência:
<img width="1575" height="988" alt="image" src="https://github.com/user-attachments/assets/0d51526c-d5d0-4fe4-9b0c-eae6b8319dbe" />

## Para consultar os resultados analisados dos cenários, consulta o documento: [Resultado dos testes](https://github.com/vanessabrenda/BeTalent/blob/main/Restful-Booker%20-%20API%20testing/Resultado%20dos%20testes.md).

