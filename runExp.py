from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def main():
	return render_template('p_info.html')
    
    
@app.route('/insBeep_z', methods=['POST'])
def insBeep_z():
    rollno = request.form['rno']
    age = request.form['age']
    sex = request.form['sex']
    hand = request.form['hand']
    data = [rollno, age, sex, hand]
    
    fil = open("log.txt", mode = "a")
    fil.write('\t'.join(data))
    fil.write('\n')
    
    return render_template('ins_beepz.htm')
    
@app.route('/beepTrials_z', methods=['POST'])
def trialBeep_z():
    return render_template('trial_beepz.htm')
    
@app.route('/insBeep_m', methods=['POST'])
def insBeep_m():
    fil = open("log.txt", mode = "a")
    event_data = request.form['see_data']
    fil.write(event_data)
    return render_template('ins_beepm.htm')
    
@app.route('/beepTrials_m', methods=['POST'])
def trialBeep_m():
    return render_template('trial_beepm.htm')
    
@app.route('/insLocal', methods=['POST'])
def insLocal():
    fil = open("log.txt", mode = "a")
    event_data = request.form['see_data']
    fil.write(event_data)
    return render_template('ins_local.htm')
    
@app.route('/localTrials', methods=['POST'])
def trialLocal():
    return render_template('trial_local.htm')
    
@app.route('/insGlobal', methods=['POST'])
def insGlobal():
    fil = open("log.txt", mode = "a")
    event_data = request.form['see_data']
    fil.write(event_data)
    return render_template('ins_global.htm')
    
@app.route('/globalTrials', methods=['POST'])
def trialGlobal():
    return render_template('trial_global.htm')
    
@app.route('/thanks', methods=['POST'])
def thanks():
    fil = open("log.txt", mode = "a")
    event_data = request.form['see_data']
    fil.write(event_data)
    fil.close()
    return render_template('thank_you.htm')
    
if __name__ == '__main__':
    app.run(debug = True)