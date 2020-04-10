from flask import Flask, render_template, request
import json

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")
    
@app.route("/bio")
def bio():
    return render_template("bio.html")

@app.route("/history")
def history():
    return render_template("history.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/save_skills")
def check_selected():
    print(request.get_json(force=True))
    return 0
    
if __name__ == "__main__":
    app.run(debug=True)