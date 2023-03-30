import sendRequest from "./send-request";
const BASE_URL = '/api/song';

export async function addSong(songData, id) {
    return sendRequest(`${BASE_URL}/${id}`, 'POST', songData)
}


