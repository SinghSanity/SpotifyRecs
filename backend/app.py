from flask import Flask
import random

from data import get_info

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'How did you find this page?'

@app.route('/info')
def info():

    ids = ['66CXWjxzNUsdJxJ2JdwvnR', '6M2wZ9GZgrQXHCFfjv46we', '5WUlDfRSoLAfcVSX1WnrxN']
    index = random.randint(0, len(ids) - 1)

    info = get_info(ids[index])

    return {
        "title": info[0], 
        "artists": info[1], 
        "image": info[2], 
        "preview": info[3], 
        "spotify": info[4]
    }



if __name__ == '__main__':
    app.run(debug=True)