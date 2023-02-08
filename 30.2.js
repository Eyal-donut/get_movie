// const data = {
//   Title: "Alice in Wonderland",
//   Year: "2010",
//   Rated: "PG",
//   Released: "05 Mar 2010",
//   Runtime: "108 min",
//   Genre: "Adventure, Family, Fantasy",
//   Director: "Tim Burton",
//   Writer: "Linda Woolverton, Lewis Carroll",
//   Actors: "Mia Wasikowska, Johnny Depp, Helena Bonham Carter",
//   Plot: "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
//   Language: "English",
//   Country: "United States",
//   Awards: "Won 2 Oscars. 35 wins & 63 nominations total",
//   Poster:
//     "https:m.media-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_SX300.jpg",
//   Ratings: [
//     {
//       Source: "Internet Movie Database",
//       Value: "6.4/10",
//     },
//     {
//       Source: "Rotten Tomatoes",
//       Value: "51%",
//     },
//     {
//       Source: "Metacritic",
//       Value: "53/100",
//     },
//   ],
//   Metascore: "53",
//   imdbRating: "6.4",
//   imdbVotes: "420,283",
//   imdbID: "tt1014759",
//   Type: "movie",
//   DVD: "09 Mar 2010",
//   BoxOffice: "$334,191,110",
//   Production: "N/A",
//   Website: "N/A",
//   Response: "True",
// };
const button = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector('ul')
const nestedUl = document.querySelector('#nested-ul') 

function searchToLink(searchInput) {
  const key = "c4174cd";
  return `http://www.omdbapi.com/?t=${searchInput}&apikey=${key}`;
}


button.addEventListener("click", async function (e) {
  e.preventDefault();
     const link = searchToLink(input.value);
  try {
     const response = await fetch(link);
     const data = await response.json();
    const poster = document.getElementById('poster')
    poster.style.background = `url(${data.Poster}) no-repeat center center/cover`;

    const title = document.getElementById('title')
    title.innerHTML = `<strong>Movie title:</strong><br>${data.Title}`
    
    const genre = document.getElementById('genre')
    genre.innerHTML = `<strong>Genre:</strong><br>${data.Genre}`
    
    const year = document.getElementById('year')
    year.innerHTML = `<strong>year:</strong><br>${data.Year}`
    
    const plot = document.getElementById('plot')
    plot.innerHTML = `<strong>plot:</strong><br>${data.Plot}`
    
    const director = document.getElementById('director')
    director.innerHTML = `<strong>director:</strong><br>${data.Director}`
    
    const actors = document.getElementById('actors')
    actors.innerHTML = `<strong>actors:</strong><br>${data.Actors}`
    
    const imdb = document.getElementById('imdb')
    imdb.innerHTML = `<strong>imdb:</strong><br>${data.imdbRating}`
    
    const tomatoes = document.getElementById('tomatoes')
    tomatoes.innerHTML = `<strong>rotten tomatoes:</strong><br>${data.Ratings[1].Value}`

    const metacritic = document.getElementById('metacritic')
    metacritic.innerHTML = `<strong>metacritic:</strong><br>${data.Metascore}`

    ul.classList.add('visible')
    nestedUl.classList.add('visible')

  } catch (err) {
    console.log(err);
  }
});
