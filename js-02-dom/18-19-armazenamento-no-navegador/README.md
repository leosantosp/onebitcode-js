# RECURSO DE ARMAZENAMENTO DE NAVEGADOR

Até agora trabalhamos com as aplicações apenas em uma pagina evitando trocá-la, pq já reparamos que ao trocar de pagina perdemos as informações
dinamicas que utilizamos.

Normal termos sites com várias páginas e navegar entre elas e como podemos não perder estes dados? Hoje, possuimos recursos no navegador que servem
para armazenar as informações.

**SESSION STORAGE** -> É o armazenamento de sessão, ele é uma forma simples de armazenar dados no navegador durante a navegação.
                       Persistem mesmo após mudar de página em um mesmo site enquanto a aba/janela estiver aberta.
                       Existem somente enquanto a aba daquele site estiver aberta, ao fechar o sessionStorage é limpo.

**LOCAL STORAGE** -> Armazenamento local, ele são os dados armazenados no navegador que persistem mesmo após fechar a aba/janela do navegador
                     Existem 'para sempre' até serem removidos, não possuem data de expiração.
                     Imagina se ele quer marcar que a opção para a sessão ficar ativa, você poderia salvar as informações do usuário dentro do LocalStorage, caso
                     contrário, ele marcasse que não, você salvaria dentro do sessionStorage

**COOKIES** -> São dados armazenados em pequenos arquivos de texto no computador do cliente
               Podem possuir uma data de expiração
               A forma mais tradicional de permitir "lembrar" de informações mesmo depois de fechar o navegador
               São enviados nas requisições e podem existir no servidor, sendo desenvolvidos quando uma página HTML for solicitada.
               É o unico que pode existir no back-end/servidor