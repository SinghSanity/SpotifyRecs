import random
from flask import Flask, request

from data import get_info
from search import search_artist

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'How did you find this page?'

@app.route('/info')
def info():
    # Arianna Grande, Dua Lipa, and Doja Cat
    ids = ['66CXWjxzNUsdJxJ2JdwvnR', '6M2wZ9GZgrQXHCFfjv46we', '5cj0lLjcoR7YOSnhnX0Po5']
    index = random.randint(0, len(ids) - 1)

    info = get_info(ids[index])

    return {
        "title": info[0], 
        "artists": info[1], 
        "image": info[2], 
        "preview": info[3], 
        "spotify": info[4]
    }

@app.route('/search', methods=['GET'])
def search():
    artist = request.args.get('artist')
    print(artist)

    try:
        artist_id = search_artist(artist)
        info = get_info(artist_id)

        return {
            "status": "success",
            "title": info[0], 
            "artists": info[1], 
            "image": info[2], 
            "preview": info[3], 
            "spotify": info[4]
        }
    except:
        return {
            "status": "failure"
        }

if __name__ == '__main__':
    app.run(debug=True)