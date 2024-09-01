import { SET_RECENT_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get('https://swapi.dev/api/people/')
        .then(response => {
            console.log('response', response.data.results);
            dispatch({
                type: SET_RECENT_POSTS,
                payload: response.data.results
            })
        })
    }
}