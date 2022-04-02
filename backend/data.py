import requests
import random
from auth import get_auth

# get_info calls get_token and makes the API call with the artist ID provided
def get_info(artist_id):
    
    access_token = get_auth()
    
    headers = {
        'Authorization': 'Bearer {TOKEN}'.format(TOKEN=access_token)
    }

    URL = 'https://api.spotify.com/v1/artists/{id}/top-tracks'.format(id=artist_id)

    data = requests.get(URL + "?market=US", headers = headers)

    data = data.json()

    # We chose a random song from the artist's top tracks
    rand = random.randint(0, len(data['tracks']) - 1)
    
    song_name = data['tracks'][rand]['name']
    
    # Handling multiple artists for one song
    
    artist_list = []
    total = len(data['tracks'][rand]['artists'])
    for i in range(total):
        artist_list.append(data['tracks'][rand]['artists'][i]['name'])
    
    artist_string = ''
    for i in range(len(artist_list)):
        if i == len(artist_list) - 1:
            artist_string += artist_list[i]
        else:
            artist_string += artist_list[i] + ' | '
    
    song_img = data['tracks'][rand]['album']['images'][0]['url']
    song_preview = data['tracks'][rand]['preview_url']
    spotify_url = data['tracks'][rand]['external_urls']['spotify']

    info = [song_name, artist_string, song_img, song_preview, spotify_url]
    
    # Returns a list containing all the info.
    
    return info
