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

<img width="1272" height="802" alt="image" src="https://github.com/user-attachments/assets/034405b7-4147-4d3f-8af7-47d92a3b48ec" />

### CRUD de Reservas
#### Create - cria reserva e retorna `bookingId`
Evidência da criação:    

<img width="1274" height="786" alt="image" src="https://github.com/user-attachments/assets/14549a8b-d44c-4026-a60f-203ab442c8ca" />

#### Read - consulta reserva pelo `bookingId`.
  3. **Update** → atualiza dados da reserva usando token.
  4. **Delete** → exclui reserva usando token.

### Validações de Campos Obrigatórios
- Cada campo obrigatório omitido gera erro.
- **Esperado:** `400 Bad Request`.
- **Obtido:** alguns casos retornam `500 Internal Server Error`.

### Comparativo Esperado vs Obtido

| Campo obrigatório   | Esperado           | Obtido                  |
|---------------------|-------------------|-------------------------|
| **firstname**       | 400 Bad Request   | 500 Internal Server Error |
| **lastname**        | 400 Bad Request   | 500 Internal Server Error |
| **totalprice**      | 400 Bad Request   | 400 Bad Request         |
| **bookingdates**    | 400 Bad Request   | 400 Bad Request         |
| **depositpaid**     | 400 Bad Request   | 400 Bad Request         |
| **additionalneeds** | 400 Bad Request   | 400 Bad Request         
