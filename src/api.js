import fetch from "node-fetch";
const url = "https://lernia-kino-cms.herokuapp.com/api";
//fetches all the movies from API
export async function fetchAllMovies() {
    const res = await fetch(url + '/movies');
    const payload = await res.json();
    return payload.data;
}

//fetches a specific movie from API
export async function fetchChosenMovie(id) {
    const res = await fetch(url + `/movies/${id}`);
    const payload = await res.json();
    return payload.data;
}
export async function fetchReviews(movieId) {
    const res = await fetch(url + '/reviews' + `?filters[movie]=${movieId}`)
    const payload = await res.json();
    return payload.data;
}

//fetches all screenings from API
export async function screeningsLoad() {
    try {
        const path = "https://lernia-kino-cms.herokuapp.com/api/screenings/";
        const response = await fetch(path + "?populate=movie&pagination[pageSize]=1000");
        const payload = await response.json();
        return payload.data;
    } catch (error) {
        console.log("oh no 😢");
    }
};

export default {
    fetchAllMovies: fetchAllMovies,
    fetchChosenMovie: fetchChosenMovie,
    fetchReviews: fetchReviews,
    screeningsLoad: screeningsLoad,
};