
const mostra = (data)=>{
    let dadosHTML = '';
    let dadosFilmes = JSON.parse(data.target.response);
    localStorage.setItem('db_filmes', data.target.response);
    for(let i = 0; i < dadosFilmes.results.length-dadosFilmes.results.length+16; i++){
        let filme = dadosFilmes.results[i];
        dadosHTML += `
        <div class="filmeitem">
            <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="">
            <p class="nomefilmepop">${filme.title} - ${filme.vote_average}/10</p>

        </div>
        `
    }
   
    document.getElementById("filmes").innerHTML = dadosHTML;
    
}
const init = () => {
    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=74e3b05f7bbcf14179a7337b534e8072&language=pt-BR";
    xhr.onload = mostra;
    xhr.open('GET', url,true);
    xhr.send();
    
}


document.body.onload = init;

