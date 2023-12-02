const e={movieList:document.querySelector(".js-movie-list"),loadMoreBtn:document.querySelector(".js-load-more ")},o={loadMoreHidden:"load-more-hidden"};let t=1;function a(d){t+=1,e.loadMoreBtn.disabled=!0,r(t).then(t=>{if(e.movieList.insertAdjacentHTML("beforeend",n(t.results)),t.page>=500){e.loadMoreBtn.classList.add(o.loadMoreHidden),e.loadMoreBtn.removeEventListener("click",a);return}e.loadMoreBtn.disabled=!1}).catch(e=>{console.log(e)})}function r(e=1){let o=new URLSearchParams({api_key:"6167a2fbe619d64566c427d4bc6ed1cb",page:e});return fetch(`https://api.themoviedb.org/3/trending/movie/week?${o}`).then(e=>{if(!e.ok)throw Error(e.statusText);return e.json()})}function n(e){return e.map(({poster_path:e,title:o,vote_average:t,release_date:a})=>`<li class"movie-card">
    <img src="https://image.tmdb.org/t/p/w500/${e}" alt="${o}">
    <div class="movie-info">
    <h2>${o}</h2>
    <p>Release date: ${a}</p>
    <p>Vote average: ${t}</p></p>
    </div>
    
    </li>`).join("")}//# sourceMappingURL=07-movie-api.50dbcd00.js.map
r().then(t=>{e.movieList.innerHTML=n(t.results),t.page<t.total_pages&&t.page<500&&(e.loadMoreBtn.classList.remove(o.loadMoreHidden),e.loadMoreBtn.addEventListener("click",a)),console.log(t)}).catch(e=>{console.log(e)});
//# sourceMappingURL=07-movie-api.50dbcd00.js.map
