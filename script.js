const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventLIstener('click', function(){
        const atual = document.querySelector('.ativo');
        const procimoPasso = 'passo-' + this.getAtribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})