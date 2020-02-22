from flask import Flask, request, jsonify
import validator
import statistics
app = Flask(__name__)             # create an app instance


def variance_data(dataset):
    mean = statistics.mean(dataset)

    total = 0

    for data in dataset:
        total += data - mean

    return total / len(dataset)


def validate_mouse_data(mouse_data):
    return variance_data([y[1] for y in mouse_data])


def validate_gyroscope(gyroscope_data):
    return variance_data([x[0] for x in gyroscope_data]) + \
        variance_data([y[1] for y in gyroscope_data])

def validate_location()

@app.route('/validate', methods=['POST'])
def validate():
    print(request.json)

    mouse_score = validate_mouse_data(request.json['mouse'])

    gyroscope_score = 1
    if "gyroscope" in request.json:
        gyroscope_score = validate_gyroscope(request.json['gyroscope'])

    return jsonify({
        "mouse": mouse_score,
        "gyroscope": gyroscope_score
    })


if __name__ == "__main__":        # on running python app.py
    app.run()                     # run the flask app
