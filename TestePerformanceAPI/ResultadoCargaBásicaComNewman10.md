newman

Restful-Booker - API testing

Iteration 1/10

□ CREATE
└ Auth - Create Token
  POST https://restful-booker.herokuapp.com/auth [200 OK, 774B, 672ms]
  √  Token gerado
  √  Status code é 200

└ Booking - Create Booking
  POST https://restful-booker.herokuapp.com/booking [200 OK, 950B, 161ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ READ
└ Booking - Read
  GET https://restful-booker.herokuapp.com/booking/3490 [200 OK, 921B, 153ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read firstname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa [200 OK, 824B, 157ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read lastname
  GET https://restful-booker.herokuapp.com/booking?lastname=Aires [200 OK, 816B, 153ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkin
  GET https://restful-booker.herokuapp.com/booking?checkin=2026-05-16 [200 OK, 795B, 157ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkout
  GET https://restful-booker.herokuapp.com/booking?checkout=2026-05-20 [200 OK, 45.17kB, 310ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read first+lastname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa&lastname=Aires [200 OK, 824B, 154ms]
  √  Status code é 200
  √  Lista contém bookingId

□ UPDATE
└ Booking - Update parcial
  PATCH https://restful-booker.herokuapp.com/booking/1318 [200 OK, 896B, 157ms]
  √  Status code é 200
  √  Campos parciais atualizados
  √  Outros campos permanecem

└ Booking - Update
  PUT https://restful-booker.herokuapp.com/booking/1318 [200 OK, 918B, 159ms]
  √  Status code é 200
  ┌
  │ 'Resposta não é JSON:', '{"firstname":"Teste","lastname":"Update","totalprice":11
  │ 2,"depositpaid":true,"bookingdates":{"checkin":"2026-06-01","checkout":"2027-07-01"},"additionalneeds":"um
  │ a cama"}'
  └

□ Campos Obrigatórios
└ Booking - Create Booking sem firstname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 157ms]
  1. Status code é 400
  2. Resposta não é JSON

└ Booking - Create Booking sem lastname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 154ms]
  3. Status code é 400
  4. Resposta não é JSON

└ Booking - Create Booking sem totalprice
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 193ms]
  5. Status code é 400
  6. Resposta não é JSON

└ Booking - Create Booking sem deposit paid
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 213ms]
  7. Status code é 400
  8. Resposta não é JSON

└ Booking - Create Booking sem bookingdates
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 178ms]
  9. Status code é 400
 10. Resposta não é JSON

└ Booking - Create Booking sem additionalneeds
  POST https://restful-booker.herokuapp.com/booking [200 OK, 911B, 158ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ Testes de Segurança
└ Auth - Create Token senha errada
  POST https://restful-booker.herokuapp.com/auth [200 OK, 767B, 170ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Auth - Create Token usuário errado
  POST https://restful-booker.herokuapp.com/auth [200 OK, 767B, 188ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Booking - Create Booking sem token
  POST https://restful-booker.herokuapp.com/booking [200 OK, 942B, 153ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

└ Booking - Read verificar retorno
  GET https://restful-booker.herokuapp.com/booking/3531 [200 OK, 921B, 176ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read verificar resposta para ID inválido
  GET https://restful-booker.herokuapp.com/booking/3531 [200 OK, 921B, 167ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Delete sem Token
  DELETE https://restful-booker.herokuapp.com/booking/3531 [403 Forbidden, 755B, 157ms]
  √  Status code é 403
  √  Resposta não é JSON

□ DELETE
└ Booking - Delete
  DELETE https://restful-booker.herokuapp.com/booking/3531 [201 Created, 751B, 155ms]
  √  Status code é 201

Iteration 2/10

□ CREATE
└ Auth - Create Token
  POST https://restful-booker.herokuapp.com/auth [200 OK, 774B, 154ms]
  √  Token gerado
  √  Status code é 200

└ Booking - Create Booking
  POST https://restful-booker.herokuapp.com/booking [200 OK, 950B, 153ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ READ
└ Booking - Read
  GET https://restful-booker.herokuapp.com/booking/3547 [200 OK, 921B, 156ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read firstname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa [200 OK, 843B, 153ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read lastname
  GET https://restful-booker.herokuapp.com/booking?lastname=Aires [200 OK, 835B, 155ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkin
  GET https://restful-booker.herokuapp.com/booking?checkin=2026-05-16 [200 OK, 814B, 155ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkout
  GET https://restful-booker.herokuapp.com/booking?checkout=2026-05-20 [200 OK, 45.92kB, 172ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read first+lastname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa&lastname=Aires [200 OK, 835B, 155ms]
  √  Status code é 200
  √  Lista contém bookingId

□ UPDATE
└ Booking - Update parcial
  PATCH https://restful-booker.herokuapp.com/booking/1726 [200 OK, 919B, 155ms]
  √  Status code é 200
  √  Campos parciais atualizados
  √  Outros campos permanecem

└ Booking - Update
  PUT https://restful-booker.herokuapp.com/booking/1726 [200 OK, 910B, 153ms]
  √  Status code é 200
  ┌
  │ 'Resposta não é JSON:', '{"firstname":"Teste","lastname":"Update","totalprice":11
  │ 2,"depositpaid":true,"bookingdates":{"checkin":"2026-06-01","checkout":"2027-07-01"},"additionalneeds":"um
  │ a cama"}'
  └

□ Campos Obrigatórios
└ Booking - Create Booking sem firstname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 773B, 154ms]
 11. Status code é 400
 12. Resposta não é JSON

└ Booking - Create Booking sem lastname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 773B, 154ms]
 13. Status code é 400
 14. Resposta não é JSON

└ Booking - Create Booking sem totalprice
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 773B, 153ms]
 15. Status code é 400
 16. Resposta não é JSON

└ Booking - Create Booking sem deposit paid
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 773B, 214ms]
 17. Status code é 400
 18. Resposta não é JSON

└ Booking - Create Booking sem bookingdates
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 773B, 190ms]
 19. Status code é 400
 20. Resposta não é JSON

└ Booking - Create Booking sem additionalneeds
  POST https://restful-booker.herokuapp.com/booking [200 OK, 911B, 202ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ Testes de Segurança
└ Auth - Create Token senha errada
  POST https://restful-booker.herokuapp.com/auth [200 OK, 767B, 177ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Auth - Create Token usuário errado
  POST https://restful-booker.herokuapp.com/auth [200 OK, 767B, 173ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Booking - Create Booking sem token
  POST https://restful-booker.herokuapp.com/booking [200 OK, 942B, 153ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

└ Booking - Read verificar retorno
  GET https://restful-booker.herokuapp.com/booking/3588 [200 OK, 913B, 154ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read verificar resposta para ID inválido
  GET https://restful-booker.herokuapp.com/booking/3588 [200 OK, 917B, 153ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Delete sem Token
  DELETE https://restful-booker.herokuapp.com/booking/3588 [403 Forbidden, 751B, 154ms]
  √  Status code é 403
  √  Resposta não é JSON

□ DELETE
└ Booking - Delete
  DELETE https://restful-booker.herokuapp.com/booking/3588 [201 Created, 747B, 153ms]
  √  Status code é 201

Iteration 3/10

□ CREATE
└ Auth - Create Token
  POST https://restful-booker.herokuapp.com/auth [200 OK, 770B, 153ms]
  √  Token gerado
  √  Status code é 200

└ Booking - Create Booking
  POST https://restful-booker.herokuapp.com/booking [200 OK, 946B, 155ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ READ
└ Booking - Read
  GET https://restful-booker.herokuapp.com/booking/3595 [200 OK, 917B, 153ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read firstname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa [200 OK, 859B, 157ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read lastname
  GET https://restful-booker.herokuapp.com/booking?lastname=Aires [200 OK, 859B, 153ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkin
  GET https://restful-booker.herokuapp.com/booking?checkin=2026-05-16 [200 OK, 837B, 155ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkout
  GET https://restful-booker.herokuapp.com/booking?checkout=2026-05-20 [200 OK, 46.55kB, 158ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read first+lastname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa&lastname=Aires [200 OK, 859B, 154ms]
  √  Status code é 200
  √  Lista contém bookingId

□ UPDATE
└ Booking - Update parcial
  PATCH https://restful-booker.herokuapp.com/booking/1761 [200 OK, 892B, 172ms]
  √  Status code é 200
  √  Campos parciais atualizados
  √  Outros campos permanecem

└ Booking - Update
  PUT https://restful-booker.herokuapp.com/booking/1761 [200 OK, 914B, 153ms]
  √  Status code é 200
  ┌
  │ 'Resposta não é JSON:', '{"firstname":"Teste","lastname":"Update","totalprice":11
  │ 2,"depositpaid":true,"bookingdates":{"checkin":"2026-06-01","checkout":"2027-07-01"},"additionalneeds":"um
  │ a cama"}'
  └

□ Campos Obrigatórios
└ Booking - Create Booking sem firstname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 773B, 154ms]
 21. Status code é 400
 22. Resposta não é JSON

└ Booking - Create Booking sem lastname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 773B, 153ms]
 23. Status code é 400
 24. Resposta não é JSON

└ Booking - Create Booking sem totalprice
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 773B, 154ms]
 25. Status code é 400
 26. Resposta não é JSON

└ Booking - Create Booking sem deposit paid
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 773B, 153ms]
 27. Status code é 400
 28. Resposta não é JSON

└ Booking - Create Booking sem bookingdates
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 785B, 153ms]
 29. Status code é 400
 30. Resposta não é JSON

└ Booking - Create Booking sem additionalneeds
  POST https://restful-booker.herokuapp.com/booking [200 OK, 923B, 154ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ Testes de Segurança
└ Auth - Create Token senha errada
  POST https://restful-booker.herokuapp.com/auth [200 OK, 779B, 153ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Auth - Create Token usuário errado
  POST https://restful-booker.herokuapp.com/auth [200 OK, 779B, 156ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Booking - Create Booking sem token
  POST https://restful-booker.herokuapp.com/booking [200 OK, 946B, 152ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

└ Booking - Read verificar retorno
  GET https://restful-booker.herokuapp.com/booking/3632 [200 OK, 917B, 153ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read verificar resposta para ID inválido
  GET https://restful-booker.herokuapp.com/booking/3632 [200 OK, 917B, 154ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Delete sem Token
  DELETE https://restful-booker.herokuapp.com/booking/3632 [403 Forbidden, 751B, 153ms]
  √  Status code é 403
  √  Resposta não é JSON

□ DELETE
└ Booking - Delete
  DELETE https://restful-booker.herokuapp.com/booking/3632 [201 Created, 747B, 152ms]
  √  Status code é 201

Iteration 4/10

□ CREATE
└ Auth - Create Token
  POST https://restful-booker.herokuapp.com/auth [200 OK, 778B, 156ms]
  √  Token gerado
  √  Status code é 200

└ Booking - Create Booking
  POST https://restful-booker.herokuapp.com/booking [200 OK, 954B, 158ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ READ
└ Booking - Read
  GET https://restful-booker.herokuapp.com/booking/3641 [200 OK, 925B, 153ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read firstname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa [200 OK, 886B, 154ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read lastname
  GET https://restful-booker.herokuapp.com/booking?lastname=Aires [200 OK, 878B, 153ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkin
  GET https://restful-booker.herokuapp.com/booking?checkin=2026-05-16 [200 OK, 857B, 154ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkout
  GET https://restful-booker.herokuapp.com/booking?checkout=2026-05-20 [200 OK, 47.15kB, 159ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read first+lastname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa&lastname=Aires [200 OK, 878B, 153ms]
  √  Status code é 200
  √  Lista contém bookingId

□ UPDATE
└ Booking - Update parcial
  PATCH https://restful-booker.herokuapp.com/booking/3490 [200 OK, 927B, 155ms]
  √  Status code é 200
  √  Campos parciais atualizados
  √  Outros campos permanecem

└ Booking - Update
  PUT https://restful-booker.herokuapp.com/booking/3490 [200 OK, 918B, 157ms]
  √  Status code é 200
  ┌
  │ 'Resposta não é JSON:', '{"firstname":"Teste","lastname":"Update","totalprice":11
  │ 2,"depositpaid":true,"bookingdates":{"checkin":"2026-06-01","checkout":"2027-07-01"},"additionalneeds":"um
  │ a cama"}'
  └

□ Campos Obrigatórios
└ Booking - Create Booking sem firstname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 159ms]
 31. Status code é 400
 32. Resposta não é JSON

└ Booking - Create Booking sem lastname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 153ms]
 33. Status code é 400
 34. Resposta não é JSON

└ Booking - Create Booking sem totalprice
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 153ms]
 35. Status code é 400
 36. Resposta não é JSON

└ Booking - Create Booking sem deposit paid
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 153ms]
 37. Status code é 400
 38. Resposta não é JSON

└ Booking - Create Booking sem bookingdates
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 154ms]
 39. Status code é 400
 40. Resposta não é JSON

└ Booking - Create Booking sem additionalneeds
  POST https://restful-booker.herokuapp.com/booking [200 OK, 919B, 157ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ Testes de Segurança
└ Auth - Create Token senha errada
  POST https://restful-booker.herokuapp.com/auth [200 OK, 775B, 153ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Auth - Create Token usuário errado
  POST https://restful-booker.herokuapp.com/auth [200 OK, 771B, 154ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Booking - Create Booking sem token
  POST https://restful-booker.herokuapp.com/booking [200 OK, 946B, 156ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

└ Booking - Read verificar retorno
  GET https://restful-booker.herokuapp.com/booking/3679 [200 OK, 917B, 153ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read verificar resposta para ID inválido
  GET https://restful-booker.herokuapp.com/booking/3679 [200 OK, 917B, 153ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Delete sem Token
  DELETE https://restful-booker.herokuapp.com/booking/3679 [403 Forbidden, 751B, 154ms]
  √  Status code é 403
  √  Resposta não é JSON

□ DELETE
└ Booking - Delete
  DELETE https://restful-booker.herokuapp.com/booking/3679 [201 Created, 747B, 157ms]
  √  Status code é 201

Iteration 5/10

□ CREATE
└ Auth - Create Token
  POST https://restful-booker.herokuapp.com/auth [200 OK, 770B, 156ms]
  √  Token gerado
  √  Status code é 200

└ Booking - Create Booking
  POST https://restful-booker.herokuapp.com/booking [200 OK, 946B, 155ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ READ
└ Booking - Read
  GET https://restful-booker.herokuapp.com/booking/3692 [200 OK, 925B, 155ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read firstname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa [200 OK, 905B, 153ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read lastname
  GET https://restful-booker.herokuapp.com/booking?lastname=Aires [200 OK, 905B, 153ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkin
  GET https://restful-booker.herokuapp.com/booking?checkin=2026-05-16 [200 OK, 884B, 154ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkout
  GET https://restful-booker.herokuapp.com/booking?checkout=2026-05-20 [200 OK, 47.83kB, 177ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read first+lastname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa&lastname=Aires [200 OK, 897B, 316ms]
  √  Status code é 200
  √  Lista contém bookingId

□ UPDATE
└ Booking - Update parcial
  PATCH https://restful-booker.herokuapp.com/booking/3523 [200 OK, 892B, 211ms]
  √  Status code é 200
  √  Campos parciais atualizados
  √  Outros campos permanecem

└ Booking - Update
  PUT https://restful-booker.herokuapp.com/booking/3523 [200 OK, 914B, 163ms]
  √  Status code é 200
  ┌
  │ 'Resposta não é JSON:', '{"firstname":"Teste","lastname":"Update","totalprice":11
  │ 2,"depositpaid":true,"bookingdates":{"checkin":"2026-06-01","checkout":"2027-07-01"},"additionalneeds":"um
  │ a cama"}'
  └

□ Campos Obrigatórios
└ Booking - Create Booking sem firstname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 199ms]
 41. Status code é 400
 42. Resposta não é JSON

└ Booking - Create Booking sem lastname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 177ms]
 43. Status code é 400
 44. Resposta não é JSON

└ Booking - Create Booking sem totalprice
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 154ms]
 45. Status code é 400
 46. Resposta não é JSON

└ Booking - Create Booking sem deposit paid
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 154ms]
 47. Status code é 400
 48. Resposta não é JSON

└ Booking - Create Booking sem bookingdates
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 153ms]
 49. Status code é 400
 50. Resposta não é JSON

└ Booking - Create Booking sem additionalneeds
  POST https://restful-booker.herokuapp.com/booking [200 OK, 915B, 153ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ Testes de Segurança
└ Auth - Create Token senha errada
  POST https://restful-booker.herokuapp.com/auth [200 OK, 771B, 154ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Auth - Create Token usuário errado
  POST https://restful-booker.herokuapp.com/auth [200 OK, 771B, 157ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Booking - Create Booking sem token
  POST https://restful-booker.herokuapp.com/booking [200 OK, 946B, 158ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

└ Booking - Read verificar retorno
  GET https://restful-booker.herokuapp.com/booking/3732 [200 OK, 917B, 156ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read verificar resposta para ID inválido
  GET https://restful-booker.herokuapp.com/booking/3732 [200 OK, 917B, 153ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Delete sem Token
  DELETE https://restful-booker.herokuapp.com/booking/3732 [403 Forbidden, 751B, 153ms]
  √  Status code é 403
  √  Resposta não é JSON

□ DELETE
└ Booking - Delete
  DELETE https://restful-booker.herokuapp.com/booking/3732 [201 Created, 747B, 153ms]
  √  Status code é 201

Iteration 6/10

□ CREATE
└ Auth - Create Token
  POST https://restful-booker.herokuapp.com/auth [200 OK, 770B, 153ms]
  √  Token gerado
  √  Status code é 200

└ Booking - Create Booking
  POST https://restful-booker.herokuapp.com/booking [200 OK, 946B, 154ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ READ
└ Booking - Read
  GET https://restful-booker.herokuapp.com/booking/3746 [200 OK, 917B, 154ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read firstname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa [200 OK, 916B, 152ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read lastname
  GET https://restful-booker.herokuapp.com/booking?lastname=Aires [200 OK, 928B, 154ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkin
  GET https://restful-booker.herokuapp.com/booking?checkin=2026-05-16 [200 OK, 907B, 170ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkout
  GET https://restful-booker.herokuapp.com/booking?checkout=2026-05-20 [200 OK, 48.48kB, 164ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read first+lastname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa&lastname=Aires [200 OK, 928B, 153ms]
  √  Status code é 200
  √  Lista contém bookingId

□ UPDATE
└ Booking - Update parcial
  PATCH https://restful-booker.herokuapp.com/booking/3547 [200 OK, 923B, 157ms]
  √  Status code é 200
  √  Campos parciais atualizados
  √  Outros campos permanecem

└ Booking - Update
  PUT https://restful-booker.herokuapp.com/booking/3547 [200 OK, 914B, 154ms]
  √  Status code é 200
  ┌
  │ 'Resposta não é JSON:', '{"firstname":"Teste","lastname":"Update","totalprice":11
  │ 2,"depositpaid":true,"bookingdates":{"checkin":"2026-06-01","checkout":"2027-07-01"},"additionalneeds":"um
  │ a cama"}'
  └

□ Campos Obrigatórios
└ Booking - Create Booking sem firstname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 153ms]
 51. Status code é 400
 52. Resposta não é JSON

└ Booking - Create Booking sem lastname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 154ms]
 53. Status code é 400
 54. Resposta não é JSON

└ Booking - Create Booking sem totalprice
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 181ms]
 55. Status code é 400
 56. Resposta não é JSON

└ Booking - Create Booking sem deposit paid
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 153ms]
 57. Status code é 400
 58. Resposta não é JSON

└ Booking - Create Booking sem bookingdates
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 153ms]
 59. Status code é 400
 60. Resposta não é JSON

└ Booking - Create Booking sem additionalneeds
  POST https://restful-booker.herokuapp.com/booking [200 OK, 919B, 153ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ Testes de Segurança
└ Auth - Create Token senha errada
  POST https://restful-booker.herokuapp.com/auth [200 OK, 775B, 153ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Auth - Create Token usuário errado
  POST https://restful-booker.herokuapp.com/auth [200 OK, 771B, 153ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Booking - Create Booking sem token
  POST https://restful-booker.herokuapp.com/booking [200 OK, 946B, 153ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

└ Booking - Read verificar retorno
  GET https://restful-booker.herokuapp.com/booking/3783 [200 OK, 917B, 155ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read verificar resposta para ID inválido
  GET https://restful-booker.herokuapp.com/booking/3783 [200 OK, 917B, 156ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Delete sem Token
  DELETE https://restful-booker.herokuapp.com/booking/3783 [403 Forbidden, 751B, 154ms]
  √  Status code é 403
  √  Resposta não é JSON

□ DELETE
└ Booking - Delete
  DELETE https://restful-booker.herokuapp.com/booking/3783 [201 Created, 747B, 158ms]
  √  Status code é 201

Iteration 7/10

□ CREATE
└ Auth - Create Token
  POST https://restful-booker.herokuapp.com/auth [200 OK, 770B, 155ms]
  √  Token gerado
  √  Status code é 200

└ Booking - Create Booking
  POST https://restful-booker.herokuapp.com/booking [200 OK, 946B, 162ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ READ
└ Booking - Read
  GET https://restful-booker.herokuapp.com/booking/3794 [200 OK, 917B, 160ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read firstname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa [200 OK, 943B, 153ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read lastname
  GET https://restful-booker.herokuapp.com/booking?lastname=Aires [200 OK, 943B, 154ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkin
  GET https://restful-booker.herokuapp.com/booking?checkin=2026-05-16 [200 OK, 922B, 154ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkout
  GET https://restful-booker.herokuapp.com/booking?checkout=2026-05-20 [200 OK, 49.08kB, 158ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read first+lastname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa&lastname=Aires [200 OK, 935B, 159ms]
  √  Status code é 200
  √  Lista contém bookingId

□ UPDATE
└ Booking - Update parcial
  PATCH https://restful-booker.herokuapp.com/booking/3581 [200 OK, 892B, 153ms]
  √  Status code é 200
  √  Campos parciais atualizados
  √  Outros campos permanecem

└ Booking - Update
  PUT https://restful-booker.herokuapp.com/booking/3581 [200 OK, 914B, 155ms]
  √  Status code é 200
  ┌
  │ 'Resposta não é JSON:', '{"firstname":"Teste","lastname":"Update","totalprice":11
  │ 2,"depositpaid":true,"bookingdates":{"checkin":"2026-06-01","checkout":"2027-07-01"},"additionalneeds":"um
  │ a cama"}'
  └

□ Campos Obrigatórios
└ Booking - Create Booking sem firstname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 154ms]
 61. Status code é 400
 62. Resposta não é JSON

└ Booking - Create Booking sem lastname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 154ms]
 63. Status code é 400
 64. Resposta não é JSON

└ Booking - Create Booking sem totalprice
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 154ms]
 65. Status code é 400
 66. Resposta não é JSON

└ Booking - Create Booking sem deposit paid
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 158ms]
 67. Status code é 400
 68. Resposta não é JSON

└ Booking - Create Booking sem bookingdates
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 157ms]
 69. Status code é 400
 70. Resposta não é JSON

└ Booking - Create Booking sem additionalneeds
  POST https://restful-booker.herokuapp.com/booking [200 OK, 919B, 158ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ Testes de Segurança
└ Auth - Create Token senha errada
  POST https://restful-booker.herokuapp.com/auth [200 OK, 775B, 153ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Auth - Create Token usuário errado
  POST https://restful-booker.herokuapp.com/auth [200 OK, 775B, 163ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Booking - Create Booking sem token
  POST https://restful-booker.herokuapp.com/booking [200 OK, 950B, 154ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

└ Booking - Read verificar retorno
  GET https://restful-booker.herokuapp.com/booking/3824 [200 OK, 921B, 155ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read verificar resposta para ID inválido
  GET https://restful-booker.herokuapp.com/booking/3824 [200 OK, 913B, 158ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Delete sem Token
  DELETE https://restful-booker.herokuapp.com/booking/3824 [403 Forbidden, 747B, 185ms]
  √  Status code é 403
  √  Resposta não é JSON

□ DELETE
└ Booking - Delete
  DELETE https://restful-booker.herokuapp.com/booking/3824 [201 Created, 743B, 155ms]
  √  Status code é 201

Iteration 8/10

□ CREATE
└ Auth - Create Token
  POST https://restful-booker.herokuapp.com/auth [200 OK, 766B, 155ms]
  √  Token gerado
  √  Status code é 200

└ Booking - Create Booking
  POST https://restful-booker.herokuapp.com/booking [200 OK, 942B, 154ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ READ
└ Booking - Read
  GET https://restful-booker.herokuapp.com/booking/3841 [200 OK, 913B, 152ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read firstname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa [200 OK, 950B, 157ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read lastname
  GET https://restful-booker.herokuapp.com/booking?lastname=Aires [200 OK, 950B, 153ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkin
  GET https://restful-booker.herokuapp.com/booking?checkin=2026-05-16 [200 OK, 933B, 156ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkout
  GET https://restful-booker.herokuapp.com/booking?checkout=2026-05-20 [200 OK, 49.62kB, 170ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read first+lastname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa&lastname=Aires [200 OK, 954B, 153ms]
  √  Status code é 200
  √  Lista contém bookingId

□ UPDATE
└ Booking - Update parcial
  PATCH https://restful-booker.herokuapp.com/booking/3595 [200 OK, 923B, 155ms]
  √  Status code é 200
  √  Campos parciais atualizados
  √  Outros campos permanecem

└ Booking - Update
  PUT https://restful-booker.herokuapp.com/booking/3595 [200 OK, 914B, 155ms]
  √  Status code é 200
  ┌
  │ 'Resposta não é JSON:', '{"firstname":"Teste","lastname":"Update","totalprice":11
  │ 2,"depositpaid":true,"bookingdates":{"checkin":"2026-06-01","checkout":"2027-07-01"},"additionalneeds":"um
  │ a cama"}'
  └

□ Campos Obrigatórios
└ Booking - Create Booking sem firstname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 154ms]
 71. Status code é 400
 72. Resposta não é JSON

└ Booking - Create Booking sem lastname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 154ms]
 73. Status code é 400
 74. Resposta não é JSON

└ Booking - Create Booking sem totalprice
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 154ms]
 75. Status code é 400
 76. Resposta não é JSON

└ Booking - Create Booking sem deposit paid
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 153ms]
 77. Status code é 400
 78. Resposta não é JSON

└ Booking - Create Booking sem bookingdates
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 773B, 154ms]
 79. Status code é 400
 80. Resposta não é JSON

└ Booking - Create Booking sem additionalneeds
  POST https://restful-booker.herokuapp.com/booking [200 OK, 911B, 160ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ Testes de Segurança
└ Auth - Create Token senha errada
  POST https://restful-booker.herokuapp.com/auth [200 OK, 767B, 169ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Auth - Create Token usuário errado
  POST https://restful-booker.herokuapp.com/auth [200 OK, 767B, 154ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Booking - Create Booking sem token
  POST https://restful-booker.herokuapp.com/booking [200 OK, 942B, 156ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

└ Booking - Read verificar retorno
  GET https://restful-booker.herokuapp.com/booking/3873 [200 OK, 913B, 154ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read verificar resposta para ID inválido
  GET https://restful-booker.herokuapp.com/booking/3873 [200 OK, 913B, 155ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Delete sem Token
  DELETE https://restful-booker.herokuapp.com/booking/3873 [403 Forbidden, 747B, 152ms]
  √  Status code é 403
  √  Resposta não é JSON

□ DELETE
└ Booking - Delete
  DELETE https://restful-booker.herokuapp.com/booking/3873 [201 Created, 743B, 154ms]
  √  Status code é 201

Iteration 9/10

□ CREATE
└ Auth - Create Token
  POST https://restful-booker.herokuapp.com/auth [200 OK, 770B, 153ms]
  √  Token gerado
  √  Status code é 200

└ Booking - Create Booking
  POST https://restful-booker.herokuapp.com/booking [200 OK, 946B, 157ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ READ
└ Booking - Read
  GET https://restful-booker.herokuapp.com/booking/3886 [200 OK, 917B, 154ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read firstname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa [200 OK, 973B, 156ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read lastname
  GET https://restful-booker.herokuapp.com/booking?lastname=Aires [200 OK, 969B, 155ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkin
  GET https://restful-booker.herokuapp.com/booking?checkin=2026-05-16 [200 OK, 948B, 155ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkout
  GET https://restful-booker.herokuapp.com/booking?checkout=2026-05-20 [200 OK, 50.19kB, 167ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read first+lastname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa&lastname=Aires [200 OK, 969B, 154ms]
  √  Status code é 200
  √  Lista contém bookingId

□ UPDATE
└ Booking - Update parcial
  PATCH https://restful-booker.herokuapp.com/booking/3627 [200 OK, 888B, 153ms]
  √  Status code é 200
  √  Campos parciais atualizados
  √  Outros campos permanecem

└ Booking - Update
  PUT https://restful-booker.herokuapp.com/booking/3627 [200 OK, 922B, 160ms]
  √  Status code é 200
  ┌
  │ 'Resposta não é JSON:', '{"firstname":"Teste","lastname":"Update","totalprice":11
  │ 2,"depositpaid":true,"bookingdates":{"checkin":"2026-06-01","checkout":"2027-07-01"},"additionalneeds":"um
  │ a cama"}'
  └

□ Campos Obrigatórios
└ Booking - Create Booking sem firstname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 785B, 154ms]
 81. Status code é 400
 82. Resposta não é JSON

└ Booking - Create Booking sem lastname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 785B, 154ms]
 83. Status code é 400
 84. Resposta não é JSON

└ Booking - Create Booking sem totalprice
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 785B, 153ms]
 85. Status code é 400
 86. Resposta não é JSON

└ Booking - Create Booking sem deposit paid
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 154ms]
 87. Status code é 400
 88. Resposta não é JSON

└ Booking - Create Booking sem bookingdates
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 153ms]
 89. Status code é 400
 90. Resposta não é JSON

└ Booking - Create Booking sem additionalneeds
  POST https://restful-booker.herokuapp.com/booking [200 OK, 919B, 155ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ Testes de Segurança
└ Auth - Create Token senha errada
  POST https://restful-booker.herokuapp.com/auth [200 OK, 775B, 153ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Auth - Create Token usuário errado
  POST https://restful-booker.herokuapp.com/auth [200 OK, 771B, 153ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Booking - Create Booking sem token
  POST https://restful-booker.herokuapp.com/booking [200 OK, 946B, 155ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

└ Booking - Read verificar retorno
  GET https://restful-booker.herokuapp.com/booking/3919 [200 OK, 917B, 153ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read verificar resposta para ID inválido
  GET https://restful-booker.herokuapp.com/booking/3919 [200 OK, 917B, 154ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Delete sem Token
  DELETE https://restful-booker.herokuapp.com/booking/3919 [403 Forbidden, 751B, 155ms]
  √  Status code é 403
  √  Resposta não é JSON

□ DELETE
└ Booking - Delete
  DELETE https://restful-booker.herokuapp.com/booking/3919 [201 Created, 747B, 153ms]
  √  Status code é 201

Iteration 10/10

□ CREATE
└ Auth - Create Token
  POST https://restful-booker.herokuapp.com/auth [200 OK, 770B, 153ms]
  √  Token gerado
  √  Status code é 200

└ Booking - Create Booking
  POST https://restful-booker.herokuapp.com/booking [200 OK, 946B, 153ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ READ
└ Booking - Read
  GET https://restful-booker.herokuapp.com/booking/3934 [200 OK, 917B, 153ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read firstname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa [200 OK, 1kB, 158ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read lastname
  GET https://restful-booker.herokuapp.com/booking?lastname=Aires [200 OK, 1kB, 153ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkin
  GET https://restful-booker.herokuapp.com/booking?checkin=2026-05-16 [200 OK, 979B, 155ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read checkout
  GET https://restful-booker.herokuapp.com/booking?checkout=2026-05-20 [200 OK, 50.75kB, 158ms]
  √  Status code é 200
  √  Lista contém bookingId

└ Booking - Read first+lastname
  GET https://restful-booker.herokuapp.com/booking?firstname=Vanessa&lastname=Aires [200 OK, 996B, 153ms]
  √  Status code é 200
  √  Lista contém bookingId

□ UPDATE
└ Booking - Update parcial
  PATCH https://restful-booker.herokuapp.com/booking/3641 [200 OK, 927B, 153ms]
  √  Status code é 200
  √  Campos parciais atualizados
  √  Outros campos permanecem

└ Booking - Update
  PUT https://restful-booker.herokuapp.com/booking/3641 [200 OK, 918B, 156ms]
  √  Status code é 200
  ┌
  │ 'Resposta não é JSON:', '{"firstname":"Teste","lastname":"Update","totalprice":11
  │ 2,"depositpaid":true,"bookingdates":{"checkin":"2026-06-01","checkout":"2027-07-01"},"additionalneeds":"um
  │ a cama"}'
  └

□ Campos Obrigatórios
└ Booking - Create Booking sem firstname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 781B, 154ms]
 91. Status code é 400
 92. Resposta não é JSON

└ Booking - Create Booking sem lastname
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 153ms]
 93. Status code é 400
 94. Resposta não é JSON

└ Booking - Create Booking sem totalprice
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 152ms]
 95. Status code é 400
 96. Resposta não é JSON

└ Booking - Create Booking sem deposit paid
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 155ms]
 97. Status code é 400
 98. Resposta não é JSON

└ Booking - Create Booking sem bookingdates
  POST https://restful-booker.herokuapp.com/booking [500 Internal Server Error, 777B, 152ms]
 99. Status code é 400
100. Resposta não é JSON

└ Booking - Create Booking sem additionalneeds
  POST https://restful-booker.herokuapp.com/booking [200 OK, 915B, 153ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

□ Testes de Segurança
└ Auth - Create Token senha errada
  POST https://restful-booker.herokuapp.com/auth [200 OK, 775B, 153ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Auth - Create Token usuário errado
  POST https://restful-booker.herokuapp.com/auth [200 OK, 775B, 152ms]
  √  Status code é 200 ou 401
  √  Resposta contém motivo de falha

└ Booking - Create Booking sem token
  POST https://restful-booker.herokuapp.com/booking [200 OK, 950B, 154ms]
  √  Status code é 200
  √  Booking ID presente
  √  Nome correto na reserva

└ Booking - Read verificar retorno
  GET https://restful-booker.herokuapp.com/booking/3965 [200 OK, 921B, 153ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Read verificar resposta para ID inválido
  GET https://restful-booker.herokuapp.com/booking/3965 [200 OK, 913B, 153ms]
  √  Status code é 200
  √  Booking ID retornado corretamente

└ Booking - Delete sem Token
  DELETE https://restful-booker.herokuapp.com/booking/3965 [403 Forbidden, 747B, 152ms]
  √  Status code é 403
  √  Resposta não é JSON

□ DELETE
└ Booking - Delete
  DELETE https://restful-booker.herokuapp.com/booking/3965 [201 Created, 743B, 154ms]
  √  Status code é 201

┌─────────────────────────┬────────────────────┬────────────────────┐
│                         │           executed │             failed │
├─────────────────────────┼────────────────────┼────────────────────┤
│              iterations │                 10 │                  0 │
├─────────────────────────┼────────────────────┼────────────────────┤
│                requests │                230 │                  0 │
├─────────────────────────┼────────────────────┼────────────────────┤
│            test-scripts │                230 │                  0 │
├─────────────────────────┼────────────────────┼────────────────────┤
│      prerequest-scripts │                 20 │                  0 │
├─────────────────────────┼────────────────────┼────────────────────┤
│              assertions │                480 │                100 │
├─────────────────────────┴────────────────────┴────────────────────┤
│ total run duration: 54.9s                                         │
├───────────────────────────────────────────────────────────────────┤
│ total data received: 495.84kB (approx)                            │
├───────────────────────────────────────────────────────────────────┤
│ average response time: 161ms [min: 152ms, max: 672ms, s.d.: 38ms] │
└───────────────────────────────────────────────────────────────────┘

    #  failure              detail

 001.  AssertionError       Status code é 400
       iteration: 1         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 002.  AssertionError       Resposta não é JSON
       iteration: 1         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 003.  AssertionError       Status code é 400
       iteration: 1         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 004.  AssertionError       Resposta não é JSON
       iteration: 1         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 005.  AssertionError       Status code é 400
       iteration: 1         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 006.  AssertionError       Resposta não é JSON
       iteration: 1         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 007.  AssertionError       Status code é 400
       iteration: 1         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 008.  AssertionError       Resposta não é JSON
       iteration: 1         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 009.  AssertionError       Status code é 400
       iteration: 1         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 010.  AssertionError       Resposta não é JSON
       iteration: 1         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 011.  AssertionError       Status code é 400
       iteration: 2         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 012.  AssertionError       Resposta não é JSON
       iteration: 2         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 013.  AssertionError       Status code é 400
       iteration: 2         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 014.  AssertionError       Resposta não é JSON
       iteration: 2         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 015.  AssertionError       Status code é 400
       iteration: 2         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 016.  AssertionError       Resposta não é JSON
       iteration: 2         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 017.  AssertionError       Status code é 400
       iteration: 2         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 018.  AssertionError       Resposta não é JSON
       iteration: 2         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 019.  AssertionError       Status code é 400
       iteration: 2         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 020.  AssertionError       Resposta não é JSON
       iteration: 2         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 021.  AssertionError       Status code é 400
       iteration: 3         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 022.  AssertionError       Resposta não é JSON
       iteration: 3         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 023.  AssertionError       Status code é 400
       iteration: 3         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 024.  AssertionError       Resposta não é JSON
       iteration: 3         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 025.  AssertionError       Status code é 400
       iteration: 3         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 026.  AssertionError       Resposta não é JSON
       iteration: 3         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 027.  AssertionError       Status code é 400
       iteration: 3         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 028.  AssertionError       Resposta não é JSON
       iteration: 3         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 029.  AssertionError       Status code é 400
       iteration: 3         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 030.  AssertionError       Resposta não é JSON
       iteration: 3         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 031.  AssertionError       Status code é 400
       iteration: 4         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 032.  AssertionError       Resposta não é JSON
       iteration: 4         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 033.  AssertionError       Status code é 400
       iteration: 4         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 034.  AssertionError       Resposta não é JSON
       iteration: 4         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 035.  AssertionError       Status code é 400
       iteration: 4         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 036.  AssertionError       Resposta não é JSON
       iteration: 4         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 037.  AssertionError       Status code é 400
       iteration: 4         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 038.  AssertionError       Resposta não é JSON
       iteration: 4         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 039.  AssertionError       Status code é 400
       iteration: 4         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 040.  AssertionError       Resposta não é JSON
       iteration: 4         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 041.  AssertionError       Status code é 400
       iteration: 5         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 042.  AssertionError       Resposta não é JSON
       iteration: 5         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 043.  AssertionError       Status code é 400
       iteration: 5         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 044.  AssertionError       Resposta não é JSON
       iteration: 5         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 045.  AssertionError       Status code é 400
       iteration: 5         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 046.  AssertionError       Resposta não é JSON
       iteration: 5         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 047.  AssertionError       Status code é 400
       iteration: 5         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 048.  AssertionError       Resposta não é JSON
       iteration: 5         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 049.  AssertionError       Status code é 400
       iteration: 5         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 050.  AssertionError       Resposta não é JSON
       iteration: 5         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 051.  AssertionError       Status code é 400
       iteration: 6         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 052.  AssertionError       Resposta não é JSON
       iteration: 6         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 053.  AssertionError       Status code é 400
       iteration: 6         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 054.  AssertionError       Resposta não é JSON
       iteration: 6         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 055.  AssertionError       Status code é 400
       iteration: 6         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 056.  AssertionError       Resposta não é JSON
       iteration: 6         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 057.  AssertionError       Status code é 400
       iteration: 6         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 058.  AssertionError       Resposta não é JSON
       iteration: 6         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 059.  AssertionError       Status code é 400
       iteration: 6         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 060.  AssertionError       Resposta não é JSON
       iteration: 6         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 061.  AssertionError       Status code é 400
       iteration: 7         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 062.  AssertionError       Resposta não é JSON
       iteration: 7         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 063.  AssertionError       Status code é 400
       iteration: 7         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 064.  AssertionError       Resposta não é JSON
       iteration: 7         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 065.  AssertionError       Status code é 400
       iteration: 7         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 066.  AssertionError       Resposta não é JSON
       iteration: 7         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 067.  AssertionError       Status code é 400
       iteration: 7         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 068.  AssertionError       Resposta não é JSON
       iteration: 7         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 069.  AssertionError       Status code é 400
       iteration: 7         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 070.  AssertionError       Resposta não é JSON
       iteration: 7         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 071.  AssertionError       Status code é 400
       iteration: 8         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 072.  AssertionError       Resposta não é JSON
       iteration: 8         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 073.  AssertionError       Status code é 400
       iteration: 8         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 074.  AssertionError       Resposta não é JSON
       iteration: 8         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 075.  AssertionError       Status code é 400
       iteration: 8         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 076.  AssertionError       Resposta não é JSON
       iteration: 8         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 077.  AssertionError       Status code é 400
       iteration: 8         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 078.  AssertionError       Resposta não é JSON
       iteration: 8         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 079.  AssertionError       Status code é 400
       iteration: 8         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 080.  AssertionError       Resposta não é JSON
       iteration: 8         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 081.  AssertionError       Status code é 400
       iteration: 9         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 082.  AssertionError       Resposta não é JSON
       iteration: 9         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 083.  AssertionError       Status code é 400
       iteration: 9         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 084.  AssertionError       Resposta não é JSON
       iteration: 9         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 085.  AssertionError       Status code é 400
       iteration: 9         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 086.  AssertionError       Resposta não é JSON
       iteration: 9         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 087.  AssertionError       Status code é 400
       iteration: 9         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 088.  AssertionError       Resposta não é JSON
       iteration: 9         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 089.  AssertionError       Status code é 400
       iteration: 9         expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 090.  AssertionError       Resposta não é JSON
       iteration: 9         expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 091.  AssertionError       Status code é 400
       iteration: 10        expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 092.  AssertionError       Resposta não é JSON
       iteration: 10        expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem firstname"

 093.  AssertionError       Status code é 400
       iteration: 10        expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 094.  AssertionError       Resposta não é JSON
       iteration: 10        expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem lastname"

 095.  AssertionError       Status code é 400
       iteration: 10        expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 096.  AssertionError       Resposta não é JSON
       iteration: 10        expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem totalprice"

 097.  AssertionError       Status code é 400
       iteration: 10        expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 098.  AssertionError       Resposta não é JSON
       iteration: 10        expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem deposit paid"

 099.  AssertionError       Status code é 400
       iteration: 10        expected response to have status code 400 but got 500
                            at assertion:0 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"

 100.  AssertionError       Resposta não é JSON
       iteration: 10        expected 'Internal Server Error' to include 'Bad Request'
                            at assertion:1 in test-script
                            inside "Campos Obrigatórios / Booking - Create Booking sem bookingdates"