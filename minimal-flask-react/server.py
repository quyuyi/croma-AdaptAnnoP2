#!/usr/bin/env python

import os
from flask import Flask, render_template, jsonify
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')

@app.route('/api/', methods=["GET"])
def suggest_keywords():
    data = {
        "keywords": "aaa"
    }
    return jsonify(**data)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 3000), debug=True)
