from flask import Flask
app = Flask(__name__)


@app.route('/')
def response():
  return "hello world from flask container"

if __name__ == '__main__':
  app.run(host='0.0.0.0',port=80)


