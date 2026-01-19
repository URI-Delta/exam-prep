import pyttsx3
engine = pyttsx3.init()

with open('note2.txt', 'r', encoding='utf-8') as note:
    content = note.read()

engine.setProperty('rate', 155)

engine.say(content)
engine.runAndWait()
