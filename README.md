# BeTalent - Teste prático - UI + API Testing

## Índice
1. Descrição
2. Premissas assumidas
3. Estrutura dos arquivos
4. Requisitos para execução
5. Instalação das ferramentas UI Testing
6. Instalação das ferramentas para Teste de acessibilidade - UI Testing
7. Instalação das ferramentas - API Testing
8. Instalação das ferramentas - Teste de responsividade
9. Recomendações
10. Como executar os testes realizados
11. Considerações finais

### Descrição
1. Validação da plataforma Sauce Demo  
2. Validação da API Restful-Booker

### Premissas assumidas
As execuções dos testes são realizadas no sistema operacional Windows x64.

### Estrutura dos arquivos
**Repositório:**

#### [github/workflows](https://github.com/vanessabrenda/BeTalent/tree/main/.github/workflows)
- playwright.yml – arquivo .yml que executa a automação sempre que um pull ou push é realizado no repositório.

#### [Collection_API](https://github.com/vanessabrenda/BeTalent/tree/main/Collection_API)
- Restful-Booker - API testing.postman_collection.json – Collection dos testes de API.  
- Restful Booker.postman_environment.json – Ambiente dos testes de API.

#### [Restful-Booker - API testing](https://github.com/vanessabrenda/BeTalent/tree/main/Restful-Booker%20-%20API%20testing)
1. Cenários de teste - Restful Booker.md – Registros dos cenários de teste da API.  
2. Resultados dos testes.md – Registros dos resultados dos testes da API.  
3. Análise de bugs - API testing.md – Registros da análise de bugs da API.  
4. Testes de segurança.md – Registros dos cenários e resultados dos testes de segurança da API.  
5. Automação de API Testing.md – Registros das execuções e orientações para executar a automação de API.  
6. Testes de performance.md – Registros dos testes de performance realizados com resultados e análises.  
7. Variáveis de ambiente.md – Documentação das variáveis utilizadas.

#### [Sauce Demo](https://github.com/vanessabrenda/BeTalent/tree/main/Sauce%20Demo%20-%20UI%20Testing)
1. Plano de testes - Sauce Demo.md – Documento de registro do plano de teste.  
2. Cenários de teste - Sauce Demo.md – Documento de registro de todos os cenários.  
3. Análise de bugs.md – Documento que reúne as informações dos bugs.  
4. Sugestões de melhorias.md – Documento com melhorias sugeridas.  
5. Análise de riscos.md – Documento da análise de riscos.  
6. Testes de responsividade.md – Registro dos testes de responsividade.  
7. Testes de acessibilidade.md – Cenários e análise dos testes de acessibilidade.

#### [TestePerformanceAPI](https://github.com/vanessabrenda/BeTalent/tree/main/TestePerformanceAPI)
- booking_test.js – Arquivo de teste de execução de carga usando K6.

#### [Testes automatizados - playwright](https://github.com/vanessabrenda/BeTalent/tree/main/Testes%20automatizados%20-%20playwright)
Essa pasta contém todos os scripts e arquivos necessários para executar a automação de teste do Sauce Demo.

#### [README.md](https://github.com/vanessabrenda/BeTalent/edit/main/README.md)

#### [package.json](https://github.com/vanessabrenda/BeTalent/blob/main/package.json)
Arquivo gerado a partir dos testes de automação.

### Requisitos para execução
1. Node.js  
2. Google Chrome  
3. Playwright  
4. VSCode  
5. Extensão do Playwright no VSCode  
6. Git  
7. Postman  
8. Newman  
9. WAVE  
10. NVDA  
11. k6  
12. Mozilla Firefox  
13. Microsoft Edge  
14. (opcional) outros navegadores para testes cruzados

---

### Instalação das ferramentas para automação - UI Testing
1. Faça o download do [Node.js](https://nodejs.org/pt-br) e instale.  
2. Faça o download do [Google Chrome](https://www.google.com/intl/pt-BR/chrome/) e instale.  
3. Execute o PowerShell como administrador e rode o comando:  
      `Set-ExecutionPolicy RemoteSigned`  
4. Instale o [VSCode](https://code.visualstudio.com/download).  
5. Instale a extensão **Playwright** no VSCode.  
6. Instale o [Git](https://git-scm.com/install).

---

### Instalação das ferramentas para Teste de acessibilidade - UI Testing
1. Instale a extensão [WAVE](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) no Chrome.  
2. Instale o leitor de tela [NVDA](https://www.nvaccess.org/download/).

---

### Instalação das ferramentas - API Testing
Baixe o [Postman](https://www.postman.com/downloads/) e instale.

---

### Instalação das ferramentas - Teste de responsividade
Baixe e instale o [Mozilla Firefox](https://www.firefox.com/pt-BR/).

---

### Recomendações
Sempre utilize “Abrir em nova aba” ao acessar links, principalmente em vídeos anexados.

---

### Como executar os testes realizados

#### Como executar os testes manuais do Sauce Demo:
Utilize o documento [1. Cenários de teste - Restful Booker.md](https://github.com/vanessabrenda/BeTalent/blob/main/Restful-Booker%20-%20API%20testing/1.%20Cen%C3%A1rios%20de%20teste%20-%20Restful%20Booker.md) como base para os testes, siga os cenários criteriosamente no ambiente [Sauce Demo](https://www.saucedemo.com/).

#### Como executar os testes de responsividade do Sauce Demo:
Instale o Mozilla Firefox e o Microsoft Edge e abra o ambiente [Sauce Demo](https://www.saucedemo.com/) neles.  
Dentro do ambiente, pressione a tecla **F12** para abrir o console, depois clique no item destacado em vermelho na imagem abaixo:  
<img width="1916" height="1079" alt="image" src="https://github.com/user-attachments/assets/73329f95-569b-4f18-bb10-2c1d96fe2b1a" />  
Assim poderá escolher as dimensões desejadas para teste.

#### Como executar os testes de automação do Sauce Demo:

1. Requisitos necessários para execução – Clonar repositório  
   1. Abra o cmd, pesquise por **cmd** no menu iniciar e digite:  
      `cd/`  
      <img width="971" height="513" alt="image" src="https://github.com/user-attachments/assets/f46cc3da-51a0-49be-91f6-edcd8b523534" />  
   2. Com o cmd aberto, digite:  
      `git clone https://github.com/vanessabrenda/BeTalent.git`  
      e pressione **Enter**.

2. Abra o Visual Studio Code já configurado com o Playwright  
   1. Abra o VSCode.  
   2. Clique em **Open Folder...**  
      <img width="1501" height="997" alt="image" src="https://github.com/user-attachments/assets/0ec8f3e4-5386-4c12-a012-7a6165cc798c" />  
   3. Abra o caminho `C:\BeTalent\Testes automatizados - playwright`.  
   4. Clique em **Select folder**.  
      <img width="1481" height="654" alt="image" src="https://github.com/user-attachments/assets/43b90c9a-240d-4a8a-8087-8611459aac84" />  
   5. Caso apareça a tela a seguir, clique em **Yes, I trust the authors**.  
      <img width="1498" height="1000" alt="image" src="https://github.com/user-attachments/assets/65b243cd-3d63-4cf1-b457-618fe442c285" />  
   6. Clique em **Terminal** e depois em **New Terminal**.  
      <img width="1909" height="1023" alt="image" src="https://github.com/user-attachments/assets/5e8bf508-3c30-41f6-843e-ecbd52b9e945" />  
   7. Execute no terminal:  
      `npm install @playwright/test`  
      <img width="1901" height="1011" alt="image" src="https://github.com/user-attachments/assets/e6d451a4-3ec8-4311-baa6-71311bc966fc" />  
   8. Para rodar os testes sem exibir no navegador:  
      `npx playwright test`  
   9. Para rodar os testes exibindo no navegador, configure permissões:  
      Abra o PowerShell como **administrador** e execute:  
      `Set-ExecutionPolicy RemoteSigned`  
   10. No terminal do VSCode, execute:  
       `npx playwright test --headed`  

#### Como executar os testes de Acessibilidade do Sauce Demo:
Utilize o NVDA instalado para leitura do ambiente e a extensão WAVE para análise.

#### Como executar os testes de API do Restful-Booker e executar a automação:
1. Abra o cmd e digite:  
   `cd/`  
   <img width="971" height="513" alt="image" src="https://github.com/user-attachments/assets/f46cc3da-51a0-49be-91f6-edcd8b523534" />  
2. Clone o repositório:  
   `git clone https://github.com/vanessabrenda/BeTalent.git`  
   e pressione **Enter**.  
3. Instale o newman:  
   `npm install -g newman`  
   e pressione **Enter**.  
4. No Postman, clique em **Import**:  
   <img width="1918" height="1077" alt="image" src="https://github.com/user-attachments/assets/9d65dd02-eabd-475d-a5d5-0d55823df956" />  
5. Clique em **folders** e acesse `C:\BeTalent\Collection_API`:  
   <img width="1913" height="1079" alt="image" src="https://github.com/user-attachments/assets/7c3c1833-bfdf-43c3-8895-906e362c93f6" />  
6. Clique em **Upload** dentro da pasta `collection_API`:  
   <img width="1918" height="1079" alt="image" src="https://github.com/user-attachments/assets/7b4fe597-f86a-46db-b096-7b28ac8dca7e" />  
7. Selecione ambos e clique em **Import**:  
   <img width="1898" height="1079" alt="image" src="https://github.com/user-attachments/assets/60106082-6de6-4dd4-933e-38635235709c" />  
8. Após a importação, clique na pasta **Restful-Booker - API Testing** e selecione o ambiente **Restful Booker**:  
   <img width="1911" height="1079" alt="image" src="https://github.com/user-attachments/assets/fec4d069-f23c-4202-8907-dc5a0fea2057" />  
9. Quando chegar nessa configuração, a automação estará pronta para execução:  
   <img width="1908" height="1021" alt="image" src="https://github.com/user-attachments/assets/99a8e50e-598f-43a1-af75-43fc49fdf0c0" />  
   **Execução manual:** clique em *Send* em cada request.  
   **Execução automatizada:** consulte [5. Automação de API Testing.md](https://github.com/vanessabrenda/BeTalent/blob/main/Restful-Booker%20-%20API%20testing/5.%20Automa%C3%A7%C3%A3o%20de%20API%20Testing.md?plain=1).

#### Como executar os testes de segurança da API do Restful-Booker:
Consulte [4. Testes de segurança.md](https://github.com/vanessabrenda/BeTalent/blob/main/Restful-Booker%20-%20API%20testing/4.%20Testes%20de%20seguran%C3%A7a.md).

#### Como executar os testes de performance da API do Restful-Booker:   

Consulte [6. Testes de performance.md](https://github.com/vanessabrenda/BeTalent/blob/main/Restful-Booker%20-%20API%20testing/6.%20Testes%20de%20performance.md).

---

## Considerações finais
A quantidade de testes realizados e a complexidade envolvida são relativamente altas. Para aprimorar organização, abranger mais cenários e garantir qualidade, é necessário mais tempo e uma documentação de requisitos como base para análise negocial.
