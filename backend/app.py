from flask import Flask, request, jsonify, make_response
from tinydb import TinyDB, Query
from geopy.distance import vincenty
import statistics
app = Flask(__name__)             # create an app instance
db = TinyDB("db.json")


def variance_data(dataset):
    mean = statistics.mean(dataset)

    total = 0

    for data in dataset:
        total += (data - mean) ** 2

    return (total / len(dataset))


def validate_mouse_data(mouse_data):
    return variance_data([y[1] for y in mouse_data])


def validate_gyroscope(gyroscope_data):
    return variance_data([x[0] for x in gyroscope_data]) + \
        variance_data([y[1] for y in gyroscope_data]) + \
        variance_data([z[2] for z in gyroscope_data])


def validate_position(position):

    match_count = 0
    for other_position in db:
        if vincenty(position, (other_position['0'], other_position['1'])).km <= 2.5:
            match_count += 1

    return min(match_count, 10) / 10


def corsify(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


def _build_cors_prelight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response


@app.route('/validate', methods=['POST', 'OPTIONS'])
def validate():
    if request.method == 'OPTIONS':
        return _build_cors_prelight_response()
    elif request.method == 'POST':
        print(request.json)

        mouse_score = validate_mouse_data(request.json['mouse'])

        gyroscope_score = 1
        if "gyroscope" in request.json:
            gyroscope_score = validate_gyroscope(request.json['gyroscope'])

        position_score = 1
        if "position" in request.json:
            position_score = validate_position(request.json['position'])

        zombie_chance = mouse_score + gyroscope_score + position_score

        if (zombie_chance > 2.5):
            print("ZOMBIE at ", request.json['position'])
            db.insert({'0': request.json['position'][0],
                       '1': request.json['position'][1]})

        return corsify(jsonify({
            "mouse": mouse_score,
            "gyroscope": gyroscope_score,
            "position": position_score,

            "zombie": zombie_chance
        }))


if __name__ == "__main__":        # on running python app.py
    app.run()                     # run the flask app
