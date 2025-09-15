from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Simple in-memory storage for items
inventory = []

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/add-item", methods=["POST"])
def add_item():
    data = request.get_json()
    item = {
        "name": data["name"],
        "quantity": data["quantity"],
        "threshold": data["threshold"]
    }
    inventory.append(item)
    return jsonify(inventory)

@app.route("/get-items")
def get_items():
    return jsonify(inventory)

if __name__ == "__main__":
    app.run(debug=True)
