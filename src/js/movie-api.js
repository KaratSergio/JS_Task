const refs = {
  movieList: document.querySelector('.js-movie-list'),
  loadMoreBtn: document.querySelector('.js-load-more '),
};

const classes = {
  loadMoreHidden: 'load-more-hidden',
};

let page = 1;

serviceMovies()
  .then(data => {
    refs.movieList.innerHTML = createMarkup(data.results);

    if (data.page < data.total_pages && data.page < 500) {
      refs.loadMoreBtn.classList.remove(classes.loadMoreHidden);
      refs.loadMoreBtn.addEventListener('click', handleLoadMore);
    }
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

function handleLoadMore(event) {
  page += 1;
  refs.loadMoreBtn.disabled = true;
  serviceMovies(page)
    .then(data => {
      refs.movieList.insertAdjacentHTML(
        'beforeend',
        createMarkup(data.results)
      );
      if (data.page >= 500) {
        refs.loadMoreBtn.classList.add(classes.loadMoreHidden);
        refs.loadMoreBtn.removeEventListener('click', handleLoadMore);
        return;
      }
      refs.loadMoreBtn.disabled = false;
    })
    .catch(err => {
      console.log(err);
    });
}

function serviceMovies(page = 1) {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const END_POINT = 'trending/movie/week';
  const API_KEY = '6167a2fbe619d64566c427d4bc6ed1cb';

  const params = new URLSearchParams({
    api_key: API_KEY,
    page,
  });
  return fetch(`${BASE_URL}/${END_POINT}?${params}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        poster_path,
        title,
        vote_average,
        release_date,
      }) => `<li class"movie-card">
    <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}">
    <div class="movie-info">
    <h2>${title}</h2>
    <p>Release date: ${release_date}</p>
    <p>Vote average: ${vote_average}</p></p>
    </div>
    
    </li>`
    )
    .join('');
}
