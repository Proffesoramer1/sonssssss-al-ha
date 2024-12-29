from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/process", methods=["POST"])
def process():
    data = request.form["data"]
    result = f"مرحبًا، {data}"
    return result

if __name__ == "__main__":
    app.run(debug=True)
