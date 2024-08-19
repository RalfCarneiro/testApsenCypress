# Projeto Apsen - Testes E2E com Cypress

Este repositório contém um smoke test para o site da Apsen utilizando Cypress. Este README fornece instruções sobre como configurar e executar os testes.

## Pré-requisitos

Antes de começar, certifique-se de que você tem o Node.js e o npm (ou Yarn) instalados em sua máquina.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/RalfCarneiro/testApsenCypress.git

2. Navegue até o caminho
    cd testApsenCypress

3. Instale as dependências do projeto
    npm install

4. Para executar o teste utilizando a interface gráfica execute:
    npx cypress open
    - click em:
        - E2E Testing
    Após click em:
        - Start E2E Testing in Electron
        E selecione o teste:
            - validandoElementosDeTela.cy.js

5. Para rodar em modo headless execute:
    npx cypress run
