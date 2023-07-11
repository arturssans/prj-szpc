const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem =>{
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top:0, behavior: 'smooth'});
        }
        
        removerSelecaodoPersonagem();

        alterarImagemPersonagemSelecionado(personagem);
        
        personagem.classList.add('selecionado');

        alterarDescriçãoPersonagemSelecionado(personagem);
        
       
    })
})

function alterarDescriçãoPersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');

    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens_2/${idPersonagem}.png`;
}

function removerSelecaodoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
