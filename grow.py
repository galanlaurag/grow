from flask import Flask, render_template, url_for, request
from flask_recaptcha import ReCaptcha 
import sqlite3 as sql

app = Flask(__name__)
con = sql.connect('var/database.db')
con.execute('CREATE TABLE IF NOT EXISTS tbl_form (ID INTEGER PRIMARY KEY AUTOINCREMENT, ' + 'name TEXT, surname TEXT, email TEXT, reason TEXT, phone TEXT, date DATE, time TIME, message TEXT, comment TEXT)')

#source: https://ichi.pro/pl/jak-korzystac-z-google-recaptcha-z-flask-241719104676243
app.config['RECAPTCHA_SITE_KEY'] = '6LdBz34dAAAAAJKIZGQk7J4e5rcvrnuxphO5Y1_U'
app.config['RECAPTCHA_SECRET_KEY'] = '6LdBz34dAAAAAKeCUdcN0XOcx8_NSFSinbuuMSJM'
recaptcha = ReCaptcha(app)

@app.route('/')
def root():
	return render_template('index.html'), 200

@app.route('/gallery/')
def gallery():
	return render_template('gallery.html'), 200

@app.route('/about/')
def about():
        return render_template('about.html'), 200

#source: https://www.codegrepper.com/code-examples/python/how+to+save+form+data+to+database+in+flask%5C
@app.route('/contact/', methods=["GET", "POST"])
def contact():
	if request.method == "GET":
		return render_template('contact.html'), 200
	else:
		req = request.form
		name = req["firstname"]
		surname = req["lastname"]
		email = req["email"]
		reason = req["reason"]
		phone = req["phone"]
		date = req["date"]
		time = req["time"]
		message = req["message"]
		comment = req["comment"]
		print(name, surname, email, reason, phone, date, time, message, comment)
		try:
			con = sql.connect('var/database.db')
			c = con.cursor()
			c.execute("INSERT INTO tbl_form (name, surname, email, reason, phone, date, time, message, comment) VALUES(?,?,?,?,?,?,?,?,?)", 
				(name , surname , email , reason , phone , date , time , message , comment))				
			con.commit()
			return render_template('formsuccess.html'), 200
		except con.Error:
			return render_template('formerror.html'), 200
		finally:
			con.close()

@app.route('/menu/')
def menu():
        return render_template('menu.html'), 200

@app.route('/formsuccess/')
def success():
        return render_template('formsuccess.html'), 200

@app.route('/formerror/')
def error():
        return render_template('formerror.html'), 200

@app.errorhandler(404)
def page_not_found(error):
	return render_template('error.html'), 404


if __name__ == "__main__":
	app.run(host='0.0.0.0', debug=True)
