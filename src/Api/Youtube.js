import axios from 'axios'

export const SearchVideos = (term) => {

    const KEY = 'AIzaSyAzbcQ1TyKVrX_0yX2mWMzS5H5-tt-mfx4';
    const response = axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: 'snippet',
            maxResults: 5,
            type: 'video',
            key: KEY, 
            q: term
        }
    });

    return response;

};

