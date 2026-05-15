# Resultado dos testes realizados

## Resultado da execução completa da collection

| **Request** | **Resultado esperado** | **Resultado obtido**| **Divergência**|
|------------|-------------|---------------|-----|
|Auth - Login | Status code 200 |  Status code 200 | Não |
|Booking - Read | Status code 200 |  Status code 200 | Não |
|Booking - Update | Status code 200 |  Status code 200 | Não |
|Booking - delete | Status code 201 |  Status code 201 | Não |
|Booking - create - sem firstname| Status code 400 |  Status code 500 | Sim |
|Booking - create - sem lastname | Status code 400 |  Status code 500 | Sim |
|Booking - create - sem totalprice| Status code 400 |  Status code 500 | Sim |
|Booking - create - sem bookingdates| Status code 400 |  Status code 500 | Sim | 
|Booking - create - sem depositpaid| Status code 400 |  Status code 500 | Sim |
|Booking - create - sem additionalneeds| Status code 200 |  Status code 200 | Não |


