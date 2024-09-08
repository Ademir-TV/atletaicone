function pesquisar() {
    // Busca o elemento HTML com o ID "resultados-pesquisa" e armazena em uma variável chamada "section".
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    // se o campoPesquisa for vazio não apresenta nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Sem informação.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada elemento do array "dados" (não mostrado no código).
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se a condição é satisfatória em campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
        resultado += `
        <div class="item-resultado">
            <p class="descricao-meta">${dado.modalidade}</p>
            <h3>${dado.titulo}</h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais sobre a carreira do atleta.</a>
        </div>
      `;   
        }  
    }

    if (!resultado) {
        resultado = "<p>Sem informação.</p>"
    }
  
    // Atribui o conteúdo da string "resultado" ao elemento HTML "section".
    section.innerHTML = resultado;
}