import os
from flask import Flask, render_template
from peewee import *

app = Flask(__name__)

def runServer():
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)


if __name__ == "__main__":
    runServer()
