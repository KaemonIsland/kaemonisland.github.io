import axios from 'axios'

const clientId = '43585f07f1874d138fad92fc43e25663'
// const redirectUri = 'http://kaemon-jammming.surge.sh/'
const redirectUri = 'http://localhost:3000/portfolio/my-jam'

let accessToken

// prettier-ignore
const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken
    }
    const userAccessToken = window.location.href.match(/access_token=([^&]*)/)
    const expiresIn = window.location.href.match(/expires_in=([^&]*)/)

    if (userAccessToken && expiresIn) {
      [, accessToken] = userAccessToken
      const expirationTime = Number(expiresIn[1])

      window.setTimeout(() => {
        accessToken = ''
      }, expirationTime * 1000)
      window.history.pushState('Access Token', null, '/')

      return accessToken
    }
    const redirectUser = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`

    window.location = redirectUser
    return null
  },

  search(term) {
    const searchAccessToken = Spotify.getAccessToken()
    const header = { Authorization: `Bearer ${searchAccessToken}` }

    return axios(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: header,
    }).then(response => {
      const { tracks } = response.data
      return tracks === false
        ? []
        : tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          URI: track.uri,
        }))
    })
  },

  savePlaylist(playlistName, trackUri) {
    if (playlistName === 'New Playlist' || trackUri.length === 0) {
      return
    }
    const saveAccessToken = Spotify.getAccessToken()
    const header = { Authorization: `Bearer ${saveAccessToken}` }
    let userId

    axios('https://api.spotify.com/v1/me', { headers: header }).then(
      response => {
        userId = response.data.id

        return axios
          .post(
            `https://api.spotify.com/v1/users/${userId}/playlists`,
            JSON.stringify({ name: playlistName }),
            { headers: header },
          )
          .then(({ data }) => {
            const playlistId = data.id

            return axios.post(
              `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
              JSON.stringify({ uris: trackUri }),
              { headers: header },
            )
          })
      },
    )
  },
}

export default Spotify
