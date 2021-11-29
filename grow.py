from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route('/')
def root():
	return render_template('index.html'), 200

@app.route('/gallery/')
def gallery():
	return render_template('gallery.html'), 200

@app.route('/about/')
def about():
        return render_template('about.html'), 200

@app.route('/contact/')
def contact():
        return render_template('contact.html'), 200

@app.route('/menu/')
def menu():
        return render_template('menu.html'), 200

if __name__ == "__main__":
	app.run(host='0.0.0.0', debug=True)
