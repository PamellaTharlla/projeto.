
const apiKey = 'a54bf0cc17f0e300118049344cc090df';

const moviesContainer = document.getElementById('movies-container');

async function fetchmovies(){
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
        const filmes = response.data.results;
        filmes.forEach(filme => {
            const titulo = filme.title;
            const sinopse = filme.overview;
            const classificacao = filme.vote_average;
            const posterPath = filme.poster_path;
            const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
      
            
              const movieElement = document.createElement('div');
              movieElement.innerHTML = `
              <img src="${posterUrl}" alt="${titulo}">
              <h2>${titulo}</h2>
              <p><strong>Sinopse:</strong> ${sinopse}</p> 
               <p><strong>Classificação: </strong> ${classificacao}</p> 
              <hr> 
              `;
      
              moviesContainer.appendChild(movieElement)
          });
    } catch(error) {
        console.error('Ocorreu um erro:', error);
    }
}

fetchmovies();