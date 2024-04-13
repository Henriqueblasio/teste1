<script>
       function adicionarEfeitoTransicao(elemento) {
         elemento.classList.add('efeito-transicao');

        }

       function removerEfeitoTransicao(elemento) {
         console.log("A função exibirAlerta() foi chamada.");
         elemento.classList.remove('efeito-transicao');

       }

       function exibirAlerta() {
            alert("Bem-vindo à página do cantor Henrique Blasio!");
        }

        window.addEventListener('load', exibirAlerta);
    </script>