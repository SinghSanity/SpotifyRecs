from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, from Flask!'

@app.route('/info')
def members():
    return {
        "title": "Title", 
        "artists": ["artist", "artist2"], 
        "album": "album", 
        "preview_sound": "preview", 
        "spotify": "spotify"
    }



if __name__ == '__main__':
    app.run(debug=True)