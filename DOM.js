
const botao_abrir_adicionar = document.querySelector(".add_itens")
const botao_fechar_adicionar = document.querySelector(".botao_fechar");
const modal_adicionar =document.querySelector ("#modal_adicionar")
const botao_cancelar_adicionar = document.querySelector(".botao_cancelar")

botao_abrir_adicionar.addEventListener('click', () => {modal_adicionar.showModal(); 
});
botao_fechar_adicionar.addEventListener('click', () => {modal_adicionar.close();});
botao_cancelar_adicionar.addEventListener('click', () => {modal_adicionar.close();});


