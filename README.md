# BeTalent - Teste prático - UI + API Testing

## Índice
  1. Descrição
  2. Requisitos para execução
  3. Instalação das ferramentas
  4. Como executar
  5. Estruturação do repositório
  6. Considerações finais
     
### Descrição 
  1. Validação da plataforma Sauce Demo
  2. Validação da API Restful-Booker.

### Premissas assumidas

  As execuções dos testes são realizadas no sistema operacional Windows x64.  
  
### Estrutura dos arquivos

** Repositório:   **    
  
#### [github/workflows](https://github.com/vanessabrenda/BeTalent/tree/main/.github/workflows)            
- playwright.yml - arquivo .yml que executa a automação sempre que um pull e um push é realizado no repositório.                   
#### [Collection_API](https://github.com/vanessabrenda/BeTalent/tree/main/Collection_API)
- Restful-Booker - API testing.postman_collection.json - Collection dos testes de API.         
- Restful Booker.postman_environment.json - Ambiente dos testes de API.     
#### [Restful-Booker - API testing](https://github.com/vanessabrenda/BeTalent/tree/main/Restful-Booker%20-%20API%20testing)           
1. Cenários de teste - Restful Booker.md - Registros dos cenários de teste da API.                
2. Resultado dos testes.md - Registros dos resultado dos teste da API.             
3. Análise de bugs - API testing.md - Registros da análise de bugs da API.                 
4. Testes de segurança.md - Registros dos cenários e resultado dos teste de segurança da API.                 
5. Automação de API Testing.md - Registro das execuções e a orientação para executar a automação de API.            
6. Testes de performance.md - Registro dos testes de performance realizados com os resultados e as análises feitas.        
Variáveis de ambiente.md - Documentação das variáveis utilizadas.       

#### [Sauce Demo](https://github.com/vanessabrenda/BeTalent/tree/main/Sauce%20Demo%20-%20UI%20Testing)
1. Plano de testes - Sauce Demo.md - Documento de registro do plano de teste do Sauce demo.
2. Cenários de teste - Sauce Demo.md - Documento de registro de todos os cenários do Sauce demo.     
3. Análise de bugs.md - Documento que reune as informações dos bugs do Sauce demo.     
4. Sugestões de melhorias.md - Documento com as melhorias sugeridas para o Sauce demo.   
5. Análise de riscos.md - Documento da análise de riscos para o Sauce Demo.
6. Testes de responsividade.md - Documento de registro dos testes de responsividade.
7. Testes de acessibilidade.md  - Documento com os cenários e análise dos testes de acessibilidade.    
#### [TestePerformanceAPI](https://github.com/vanessabrenda/BeTalent/tree/main/TestePerformanceAPI)  
 - booking_test.js - Arquivo json do teste de execução de carga usando K6.
#### [Testes automatizados - playwright](https://github.com/vanessabrenda/BeTalent/tree/main/Testes%20automatizados%20-%20playwright)  
  Essa pasta contém todos os scripts e arquivos necesssários para executar a automação de teste do Sauce Demo.
#### [README.md](https://github.com/vanessabrenda/BeTalent/edit/main/README.md)  

#### [package.json](https://github.com/vanessabrenda/BeTalent/blob/main/package.json)  
Arquivo json gerado a partir dos testes de automação.
### Requisitos para execução
  1. Node.js;
  2. Google Chrome;
  3. Playwright;
  4. VSCode;
  5. Extensão do Playwright no VSCode;
  6. Git;
  9. Postman e newman;
  10. WAVE
  11. NVDA
  12. k6
     
      
### Instalação das ferramentas para automação - UI Testing

  1. Faça o download do Node.js pelo site: https://nodejs.org/pt-br, em seguida instale o arquivo baixado seguindo os passos apresentados em tela;
  2. Faça o download do Chrome pelo site: https://www.google.com/intl/pt-BR/chrome/, em seguida instale o arquivo baixado seguindo os passos apresentados em tela;
  3. Faça a instalação do Playwright seguindo os passos do vídeo a seguir:     
     Abra o terminal (pesquise por cmd na aba de pesquisa e abra a primeira opção);     
     Crie uma pasta (mkdir projeto-playwright);         
     Entre nela (cd projeto-playwright);               
     Execute o comando abaixo para iniciar a instalação: npm init playwright@latest, escolha a opção Javascript pressionando o botão para baixo do teclado e apertando enter, aperte enter por mais 3 vezes;              
     Verifique se a instalação deu certo usando o comando: npx playwright test, a instalação foi feita com sucesso se a seguinte mensagem aparecer:               
      Running 6 tests using 6 workers          
      6 passed (7.6s)          
      To open last HTML report run:         
  npx playwright show-report;      
  4. Faça o download do VSCode pelo site: https://code.visualstudio.com/download, em seguida instale o arquivo baixado seguindo os passos apresentados em tela;
  5. Pesquise por Playwright na aba 'Extensions' do VSCode, abra a primeira opção e clicar em 'Install';
  6. Faça o download do git pelo site: https://git-scm.com/install/

### Instalação das ferramentas para Teste de acessibilidade - UI Testing

  1. Instalação do WAVE no chrome: [WAVE](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh), abra o site e clique em 'Usar no Chrome';
  2. Faça o download do NVDA pelo site [NVDA](https://www.nvaccess.org/download/), faça a instalação abrindo o arquivo e seguindo os passos que são exibidos.

### Instalação das ferramentas - API Testing
   Baixe o Postman através do site: [Postman](https://www.postman.com/downloads/), depois do download abra o arquivo e siga as orientações da tela para instalar o postman.
   
### Recomendações
  1. Sempre utilizar a opção "Abrir em uma nova aba" ou "Abrir num novo separador", utilizando o botão direito do mouse nos links, principalmente nos vídeos anexados aos documentos.
  
