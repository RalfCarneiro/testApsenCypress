describe('Dado que valido os elementos do rodapé da tela "Sobre nós"', () => {
  beforeEach(() => {

    cy.intercept(
      'GET', 
      'https://cdn.cookielaw.org/consent/190f1f12-c638-49cb-96e5-5b940358f7e2/190f1f12-c638-49cb-96e5-5b940358f7e2.json', {
      fixture: 'cookieData.json'
    }).as('getCookieData')

    cy.intercept(
      'GET', 
      'https://cdn.cookielaw.org/consent/190f1f12-c638-49cb-96e5-5b940358f7e2/0d368ff1-61bf-46a1-8f6c-ffcfba9a6cf0/pt.json', {
      fixture: 'pt.json'
    }).as('getPt')

    cy.intercept(
      'GET', 
      'https://cdn.cookielaw.org/scripttemplates/202405.2.0/assets/otFlat.json', {     
      fixture: 'otFlat.json'
    }).as('getOtFlat')

    cy.intercept(
      'GET', 
      'https://cdn.cookielaw.org/scripttemplates/202405.2.0/assets/v2/otPcTab.json', {     
      fixture: 'otPcTab.json'
    }).as('getOtPcTab')

    cy.visit('/')

    cy.wait('@getCookieData')
    cy.wait('@getPt')
    cy.wait('@getOtFlat')
    cy.wait('@getOtPcTab')
  })

  context('Quando verifico o conteúdo do footer', () => {
    beforeEach(() => {

      cy.intercept(
        'GET', 
        'https://googleads.g.doubleclick.net/pagead/id', {     
        fixture: 'id.json'
      }).as('getId')

      cy.intercept(
        'POST', 
        'https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/Create', {     
        fixture: 'create.json'
      }).as('getCreate')

      cy.intercept(
        'POST', 
        'https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT', {     
        fixture: 'generateIT.json'
      }).as('getGenerateIT')

      cy.intercept(
        'POST', 
        'https://www.youtube.com/youtubei/v1/log_event?alt=json&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8', {     
        fixture: 'youtubei.json'
      }).as('getYoutubei')

      cy.get('[href="#institucional"]')
      .trigger('mouseover')

      cy.get('.Menu_submenu__wjydo > :nth-child(1) > a')
      .click()

      cy.get('#onetrust-accept-btn-handler').click()
      
      cy.scrollTo('bottom')
    });
    it('Então no rodapé deve conter "Apsen Farmacêutica 2023. Todos os direitos reservados"', () => {
      cy.get('.Rodape_copyrightContainer__xiJdW > p')
        .then($el => {
          cy.log($el.text());
          expect($el.text().trim()).to.equal('Apsen Farmacêutica 2023. Todos os direitos reservados');
        });
    });
  });
})
