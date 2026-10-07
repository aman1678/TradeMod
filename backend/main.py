from flask import Flask, jsonify


def create_app():
    app = Flask(__name__)

    @app.route("/")
    def home():
        return "<h1>Welcome to the Home Page</h1>"
    
    @app.route("/about")
    def about():
        return "<h1>About</h1>"

    @app.route("/contact")
    def contact():
        return "<h1>Feel free to contact me below!</h1>"

    return app

if __name__ == "__main__":
    create_app().run()