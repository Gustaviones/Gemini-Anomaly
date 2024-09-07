function pesquisar() {

    let section = document.getElementById("resultados-pesquisa")

let campoPesquisa = document.getElementById ("campo-pesquisa").value

if (campoPesquisa == "") {
    section.innerHTML = "<p> Pesquise pela palavra: Saudações </p>"
    return

}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let Nome = "";
let Aparência_física = "";
let Tamanho = "";
let Habilidades = "";
let Fraquezas = "";
let Nível_de_inteligência = "";
let Alimentação = "";
let Observações = "";
let Possíveis_Encontros = "";

// para cada dado dentro da lista de dados

for (let dado of dados) {

Nome = dado.Nome.toLowerCase()
Aparência_física = dado.Aparência_física.toLowerCase()
Tamanho = dado.Tamanho.toLowerCase()
Habilidades = dado.Habilidades.toLowerCase()
Fraquezas = dado.Fraquezas.toLowerCase()
Nível_de_inteligência = dado.Nível_de_inteligência.toLowerCase()
Alimentação = dado.Alimentação.toLowerCase()
Observações = dado.Observações.toLowerCase()
Possíveis_Encontros = dado.Possíveis_Encontros.toLowerCase()


if (Nome.includes(campoPesquisa) || Aparência_física.includes(campoPesquisa) || Tamanho.includes(campoPesquisa) || Habilidades.includes(campoPesquisa) || Fraquezas.includes(campoPesquisa) || Nível_de_inteligência.includes(campoPesquisa) || Alimentação.includes(campoPesquisa) || Observações.includes(campoPesquisa) || Possíveis_Encontros.includes(campoPesquisa) ) {
    
    resultados += 
    `
         <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank" >${dado.Nome}</a>
                </h2>
                <p class="descricao-meta">${dado.Aparência_física} </p>
                <p class="descricao-meta">${dado.Tamanho} </p>
                <p class="descricao-meta">${dado.Habilidades} </p>
                <p class="descricao-meta">${dado.Fraquezas} </p>
                <p class="descricao-meta">${dado.Nível_de_inteligência} </p>
                <p class="descricao-meta">${dado.Alimentação} </p>
                <p class="descricao-meta">${dado.Observações} </p>
                <p class="descricao-meta">${dado.Possíveis_Encontros} </p>
             </div>
    `
    
    }

}

if (!resultados) {
    resultados = "<p>Você digitou algo errado, tente novamente humano, caso queira voltar do inicio apenas aperte em pesquisar sem escrever nada. </p>"
}


section.innerHTML = resultados

}

//console.log (dados);

