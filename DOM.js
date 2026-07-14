let lista_de_compras = [];

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

function atualizar_telas() {
    ul_edicao.innerHTML = "";
    lista_principal.innerHTML = "";
    
    contador_itens.innerText = lista_de_compras.length;

    if (lista_de_compras.length === 0) {     // Esconde a tela principal
        estado_vazio.style.display = "flex"; 
        lista_principal.style.display = "none";
    } else {
        estado_vazio.style.display = "none";
        lista_principal.style.display = "flex"; 
    }

    for (let i = 0; i < lista_de_compras.length; i++) {
        let item = lista_de_compras[i];

        let linha_principal = `
            <li class="item_verde">
                <span class="nome_produto">• ${item.nome}</span>
                ${item.quantidade !== "" ? `<span class="badge_qtd_principal">${item.quantidade}</span>` : ""}
            </li>
        `;
        lista_principal.innerHTML += linha_principal;

        let linha_edicao = `
            <li class="item_edicao">
                <div class="info_produto">
                    <span class="bolinha"></span>
                    <span class="nome_produto">${item.nome}</span>
                </div>
                <div class="acoes_produto">
                    ${item.quantidade !== "" ? `<span class="qtd_item_edicao">${item.quantidade}</span>` : ""}
                    <button class="botao_excluir" onclick="remover_item(${i})">
                        <img src="/assets/lixo.svg" alt="Excluir">
                    </button>
                </div>
            </li>
        `;
        ul_edicao.innerHTML += linha_edicao;
    }
}

botao_confirmar_adicao.addEventListener('click', (event) => {
    event.preventDefault();

    let nome_digitado = input_nome.value.trim();
    let qtd_digitada = input_qtd.value.trim();

    if (nome_digitado !== "") {
        lista_de_compras.push({
            nome: nome_digitado,
            quantidade: qtd_digitada
        });

        input_nome.value = "";
        input_qtd.value = "";

        modal_adicionar.close();
        atualizar_telas();
    } else {
        alert("Digite o nome do item");
    }
});

window.remover_item = function(index) {
    lista_de_compras.splice(index, 1);
    atualizar_telas(); 
}

atualizar_telas();


