import pyttsx3
engine = pyttsx3.init()

with open('note1.txt','r') as note:
    content = note.read()

engine.setProperty('rate',160)

engine.say(content)
engine.runAndWait()