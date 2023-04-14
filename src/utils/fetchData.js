
const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': EXERCISE_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

const youtubeExerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': YOUTUBE_API_KEY,
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	  }
};

const fetchData  = async (url, options) => {
    const response = await fetch(url,options);
    const data = await response.json();
    // console.log(data);
    return data;
}

export {fetchData,exerciseOptions,youtubeExerciseOptions}

