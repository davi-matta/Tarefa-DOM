
const estado_vazio = document.querySelector("#estado_vazio");
const lista_principal = document.querySelector("#lista_principal");
const contador_itens = document.querySelector("header p span");

const botao_abrir_adicionar = document.querySelector(".add_itens")
const botao_fechar_adicionar = document.querySelector(".botao_fechar");
const modal_adicionar =document.querySelector ("#modal_adicionar")
const botao_cancelar_adicionar = document.querySelector(".botao_cancelar")
const botao_confirmar_adicao = document.querySelector(".botao_adicionar");
const input_nome = document.querySelector("#nome_item");
const input_qtd = document.querySelector("#qtd_item");

const botao_abrir_editar = document.querySelector(".edit_itens");
const modal_editar = document.querySelector("#modal_editar");
const botao_fechar_editar = document.querySelector(".botao_fechar_editar");
const botao_concluir_editar = document.querySelector(".botao_concluir");
const ul_edicao = document.querySelector(".lista_edicao");


botao_abrir_adicionar.addEventListener('click', () => {modal_adicionar.showModal(); 
});
botao_fechar_adicionar.addEventListener('click', () => {modal_adicionar.close();});
botao_cancelar_adicionar.addEventListener('click', () => {modal_adicionar.close();});

botao_abrir_editar.addEventListener('click', () => modal_editar.showModal());
botao_fechar_editar.addEventListener('click', () => modal_editar.close());
botao_concluir_editar.addEventListener('click', () => modal_editar.close());


