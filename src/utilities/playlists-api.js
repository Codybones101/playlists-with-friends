import sendRequest from "./send-request";
const BASE_URL = '/api/playlists';

export async function addPlayList(playList) {
    return sendRequest(BASE_URL, 'POST', playList)
}

export async function getAll() {
    return sendRequest(BASE_URL)
}
