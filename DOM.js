
const botao_abrir_adicionar = document.querySelector(".add_itens")
const botao_fechar_adicionar = document.querySelector(".botao_fechar");


botao_abrir_adicionar.addEventListener('click', () => {modal_adicionar.showModal(); 
});
botao_fechar_adicionar.addEventListener('click', () => {modal_adicionar.close();});

