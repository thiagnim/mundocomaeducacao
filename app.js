function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for ums string sem nada
    if (campoPesquisa == ""){
      section.innerHTML = "<p>Nada foi encontrado. Digite o que deseja para encontrar</p>"
      return
    }
    
    campoPesquisa =campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descrição-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `
      }
      console.log(dado.titulo.includes(campoPesquisa))
      
    }

    if (!resultados) {
      resultados = "<p>Nada foi encontrado<p/>"
    }
  
    // Insere os resultados na seção HTML
    section.innerHTML = resultados
  }


