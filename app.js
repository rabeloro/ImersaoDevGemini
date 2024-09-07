function pesquisar() {
    // Busca a seção onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se campoPesquisa for uma string vazia
    if(!campoPesquisa){
    section.innerHTML = "<p>Nenhuma palavra pesquisada<p>"
     return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

     // Itera sobre cada dado da lista de dados e constrói o HTML dos resultados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
            //cria um novo elemento
            resultados += `
              <div class = 'item-resultado'>
                <h2> <a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class = "descrição-meta">${dado.descricao}</p>
                <a href=${dado.link} target = "_blank"> Mais informações</a>
              </div>
            `;
        }  
        if(!resultados){
            resultados = "<p>Nenhum tópico encontrado<p>"
        }
        // Atribui o HTML construído à seção de resultados.
        section.innerHTML = resultados;
   
    }
      
  }



