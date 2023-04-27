
const mostra = (data)=>{
    let dadosHTML = '';
    let dadosFilmes = JSON.parse(data.target.response);
    localStorage.setItem('db_filmes', data.target.response);
    for(let i = 0; i < 1; i++){
        let filme = dadosFilmes.results[i];
        dadosHTML += `
        <div class="carousel-item active">
                <div class="itemlanc">
                    <div>
                      <img  height="350" src="https://image.tmdb.org/t/p/w780/${filme.backdrop_path}" </img>                    </div>
                    <div>
                        <h2 id="nomefilme">${filme.title}</h2>
                        <p id="sinopse">${filme.overview}</p>
                        <p><span class="topico"><strong>Estreia:</strong></span> <span id="estreia">${filme.release_date}</span></p>
                        <p><span class="topico"><strong>Avaliação dos espectadores:</strong></span> <span id="avaliacao">${filme.vote_average}/10</span></p>
                    </div>
                    </div>    
                </div>
        </div>
        `
    }
    for(let i = 1; i < dadosFilmes.results.length-dadosFilmes.results.length+9; i++){
        let filme = dadosFilmes.results[i];
        dadosHTML += `
        <div class="carousel-item ">
                <div class="itemlanc">
                    <div>
                      <img  height="350" src="https://image.tmdb.org/t/p/w780/${filme.backdrop_path}" </img>                    </div>
                    <div>
                        <h2 id="nomefilme">${filme.title}</h2>
                        <p id="sinopse">${filme.overview}</p>
                        <p><span class="topico"><strong>Estreia:</strong></span> <span id="estreia">${filme.release_date}</span></p>
                        <p><span class="topico"><strong>Avaliação dos espectadores:</strong></span> <span id="avaliacao">${filme.vote_average}/10</span></p>
                    </div>
                    </div>    
                </div>
        </div>
        `
    }
   
    document.getElementById("carousel-inner").innerHTML = dadosHTML;
    
}
const init = () => {
    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=74e3b05f7bbcf14179a7337b534e8072&language=pt-BR";
    xhr.onload = mostra;
    xhr.open('GET', url,true);
    xhr.send();
    
}


document.body.onload = init;

