fetch('https://628b2f157886bbbb37b20caa.mockapi.io/movies').
then(resp => resp.json()).then(res => displayMovies(res));

function displayMovies(movies) {
    const container = document.getElementById('container');

    for (const movie of movies) {
        console.log(movie);
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie-div');

        const movieName = document.createElement('h2');
        movieName.innerText = movie.name;
        movieDiv.appendChild(movieName);

        const genreList = document.createElement('ul');
        for (const genre of movie.genre) {
            const genreLi = document.createElement('li');
            genreLi.innerText = genre;
            genreList.appendChild(genreLi);
            movieDiv.appendChild(genreList);
        }

        const yopDiv = document.createElement('p');
        yopDiv.innerHTML = 'Pubblicato nel ' + movie.yop;
        movieDiv.appendChild(yopDiv);

        const actorTitle = document.createElement('div');
        actorTitle.innerText = 'Actors in the movie: ';
        movieDiv.appendChild(actorTitle);

        const actorsList = document.createElement('ul');
        for (const actor of movie.actors) {
            const actorLi = document.createElement('li');
            actorLi.innerText = actor;
            actorsList.appendChild(actorLi);
            movieDiv.appendChild(actorsList);
        }

        const movieImg = document.createElement('img');
        movieImg.src = movie.img;
        movieImg.classList.add('img-div');
        movieDiv.appendChild(movieImg);

        const isInStreaming = document.createElement('h3');
        isInStreaming.innerText = "Is this movie in streaming?"
        movieDiv.appendChild(isInStreaming);

        function streaming() {
            if (movie.streaming === true) {
                return 'Yes!'
            } else if (movie.streaming === false) {
                return 'No we are sorry'
            }
        }

        const answerStreaming = document.createElement('div');
        answerStreaming.innerText = streaming();
        movieDiv.appendChild(answerStreaming);

        const wStreamingTitle = document.createElement('h4');
        wStreamingTitle.innerText = 'if yes, where? '
        movieDiv.appendChild(wStreamingTitle);

        const whereStreamingList = document.createElement('ul');
        for (const streamingSite of movie.wStreaming) {
            const streamingSiteLi = document.createElement('li');
            streamingSiteLi.innerText = streamingSite;
            whereStreamingList.appendChild(streamingSiteLi);
            movieDiv.appendChild(whereStreamingList);
        }

        container.appendChild(movieDiv);
    }
}