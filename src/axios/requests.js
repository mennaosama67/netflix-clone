export const API_KEY = process.env.REACT_APP_API_KEY;
const LANG = "en-US";

export const fallbackImg='https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI'
const requests={
   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=${LANG}`,
   //movies
   fetchTrendingMovies: `/trending/movies/week?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
   fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
   fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&sort_by=popularity.desc&language=${LANG}`,
	fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=${LANG}`,
   fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12&sort_by=popularity.desc&language=${LANG}`,
   fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=${LANG}`,
   // series
   discoverSeries: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchTrendingSeries: `/trending/tv/week?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchActionAdventureSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10759&sort_by=popularity.desc&language=${LANG}`,
	fetchAnimationSeries: `/discover/tv?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=${LANG}`,
	fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=${LANG}`,
	fetchCrimeSeries: `/discover/tv?api_key=${API_KEY}&with_genres=80&sort_by=popularity.desc&language=${LANG}`,
	fetchDocumentarySeries: `/discover/tv?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc&language=${LANG}`,
	fetchFamilySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10751&sort_by=popularity.desc&language=${LANG}`,
	fetchKidsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10762&sort_by=popularity.desc&language=${LANG}`,
	fetchSciFiFantasySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10765&sort_by=popularity.desc&language=${LANG}`,
}

export default requests;