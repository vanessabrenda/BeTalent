# BeTalent - Teste prático - UI + API Testing

## Índice
  1. Descrição;
  2. Premissas assumidas;
  3. Estrutura dos arquivos;
  4. Requisitos para execução;
  5. Instalação das ferramentas UI Testing;
  6. Instalação das ferramentas para Teste de acessibilidade - UI Testing;
  7. Instalação das ferramentas - API Testing;
  8. Recomendações;
  9. Como executar os testes realizados;
  10. Considerações finais.
     
### Descrição 
  1. Validação da plataforma Sauce Demo
  2. Validação da API Restful-Booker.

### Premissas assumidas

  As execuções dos testes são realizadas no sistema operacional Windows x64.  
  
### Estrutura dos arquivos

**Repositório:**    
  
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
  10. WAVE;
  11. NVDA;
  12. k6;
  13. Mozilla Firefox;
  14. Microsoft Edge.
     
      
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
  6. Faça o download do git pelo site: https://git-scm.com/install/, após o download completar, execute o arquivo e siga o passo a passo da instalação.

### Instalação das ferramentas para Teste de acessibilidade - UI Testing

  1. Instalação do WAVE no chrome: [WAVE](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh), abra o site e clique em 'Usar no Chrome';
  2. Faça o download do NVDA pelo site [NVDA](https://www.nvaccess.org/download/), faça a instalação abrindo o arquivo e seguindo os passos que são exibidos.

### Instalação das ferramentas - API Testing
   Baixe o Postman através do site: [Postman](https://www.postman.com/downloads/), depois do download abra o arquivo e siga as orientações da tela para instalar o postman.
### Instalação das ferramentas - Teste de responsividade
  Baixe e instale o Mozilla Firefox através do site: https://www.firefox.com/pt-BR/

### Recomendações
  1. Sempre utilizar a opção "Abrir em uma nova aba" ou "Abrir num novo separador", utilizando o botão direito do mouse nos links, principalmente nos vídeos anexados aos documentos.
### Como executar os testes realizados:
#### Como executar os testes manuais do Sauce Demo:
Utilize o documento [1. Cenários de teste - Restful Booker.md](https://github.com/vanessabrenda/BeTalent/blob/main/Restful-Booker%20-%20API%20testing/1.%20Cen%C3%A1rios%20de%20teste%20-%20Restful%20Booker.md) como base para os testes, siga os cenários criteriosamente no ambiente [Sauce Demo](https://www.saucedemo.com/).
#### Como executar os testes de responsividade do Sauce Demo:
Instale o Mozilla Firefox e o Microsoft Edge e abra o ambiente [Sauce Demo](https://www.saucedemo.com/) neles.
Dentro do ambiente [Sauce Demo](https://www.saucedemo.com/), utilize a ferramenta do navegador pressionando a tecla 'f12' para visualizar o console, depois clique no item destacado em vermelho na imagem abaixo:
<img width="1916" height="1079" alt="image" src="https://github.com/user-attachments/assets/73329f95-569b-4f18-bb10-2c1d96fe2b1a" />

Dessa forma poderá escolher as dimensões desejadas para teste. 
#### Como executar os testes de Acessibilidade do Sauce Demo:
  Utilize o NVDA instalado para ler o ambiente e a extensão WAVE para fazer a análise.
#### Como executar os testes de API do Restful-Booker e executar a automação:
  1. Abra o cmd, pesquise por cmd no menu iniciar, e digite o comando: 'cd/':         
     <img width="971" height="513" alt="image" src="https://github.com/user-attachments/assets/f46cc3da-51a0-49be-91f6-edcd8b523534" />
  2. Clonar repositório, com o cmd (prompt de comando) aberto, digite sem as aspas:                   
        'git clone https://github.com/vanessabrenda/BeTalent.git'          
     e pressione a tecla 'enter'.                  
  4. Instale o newman, ainda num prompt de comando, digite:               
       'npm install -g newman'      
      e pressione a tecla 'enter'
  5. Na tela inicial do postman, localize o botão 'Import':                
    <img width="1918" height="1077" alt="image" src="https://github.com/user-attachments/assets/9d65dd02-eabd-475d-a5d5-0d55823df956" />
  6. Clique em 'folders' e acesse a pasta C:\BeTalent\Collection_API:       
    <img width="1913" height="1079" alt="image" src="https://github.com/user-attachments/assets/7c3c1833-bfdf-43c3-8895-906e362c93f6" />
  7. Clique em fazer updaload dentro da pasta collection_API:             
     <img width="1918" height="1079" alt="image" src="https://github.com/user-attachments/assets/7b4fe597-f86a-46db-b096-7b28ac8dca7e" />        
  8. Deixe ambos selecionados e clique em 'Import':            
  <img width="1898" height="1079" alt="image" src="https://github.com/user-attachments/assets/60106082-6de6-4dd4-933e-38635235709c" />          
  9. Após a importação, clique em cima da pasta 'Restful-Booker - API Testing' e localize o ambiente (Environment) selecione o 'Restful Booker':                     
     <img width="1911" height="1079" alt="image" src="https://github.com/user-attachments/assets/fec4d069-f23c-4202-8907-dc5a0fea2057" />         
  10. Quando chegar nessa configuração, a automação estará pronta para ser executada:                      
    <img width="1908" height="1021" alt="image" src="https://github.com/user-attachments/assets/99a8e50e-598f-43a1-af75-43fc49fdf0c0" />           

**As execuções sem utilizar a automação é só clicar em 'send' em cada request.**
      
  **Para executar a automação, consultar o documento [5. Automação de API Testing.md](https://github.com/vanessabrenda/BeTalent/blob/main/Restful-Booker%20-%20API%20testing/5.%20Automa%C3%A7%C3%A3o%20de%20API%20Testing.md?plain=1).**

#### Como executar os testes de segurança da API do Restful-Booker:

Consultar o documento [4. Testes de segurança.md](https://github.com/vanessabrenda/BeTalent/blob/main/Restful-Booker%20-%20API%20testing/4.%20Testes%20de%20seguran%C3%A7a.md).

#### Como executar os testes de performance da API do Restful-Booker:

Consultar o documento [6. Testes de performance.md](https://github.com/vanessabrenda/BeTalent/blob/main/Restful-Booker%20-%20API%20testing/6.%20Testes%20de%20performance.md)

