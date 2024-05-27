// main.js
function searchMovies() {
    const query = document.getElementById('searchInput').value;
    const apiKey = API_KEY;
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const movies = data.Search;
        const movieList = document.getElementById('movieList');
        movieList.innerHTML = '';
  
        movies.forEach(movie => {
          const movieElement = document.createElement('div');
          movieElement.innerHTML = `
            <h2>${movie.Title}</h2>
            <p>${movie.Year}</p>
            <img src="${movie.Poster}" alt="${movie.Title}">
          `;
          movieList.appendChild(movieElement);
        });
      })
      .catch(error => console.error('Error:', error));
  }
  
  document.getElementById('searchButton').addEventListener('click', function() {
    searchMovies();
  });
  
  document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      searchMovies();
    }
  });