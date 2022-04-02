from re import A
import requests
from auth import get_auth

#This method will search for an artist and get their URI to send to data.py
def search_artist(artist):
    access_token = get_auth()
    headers = {
        'Authorization': 'Bearer {TOKEN}'.format(TOKEN=access_token)
    }
    URL = 'https://api.spotify.com/v1/search'
    data = requests.get(URL + "?q=" + artist + "&type=artist", headers = headers)
    data = data.json()
    
    artist_list = data['artists']['items']

    if artist_list == []:
        return None
    else:
        artist = artist_list[0]['uri']
        artist = artist.split('spotify:artist:')[1]
        return artist
