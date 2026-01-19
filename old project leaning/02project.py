import speech_recognition as sr

# recognizer banate hain
r = sr.Recognizer()

# microphone se input
with sr.Microphone() as source:
    print("Say something...")
    audio = r.listen(source)   # mic se suno

# speech ko text me convert karo
try:
    text = r.recognize_google(audio)
    print("You said:", text)
except sr.UnknownValueError:
    print("Sorry, I could not understand.")
except sr.RequestError:
    print("Could not request results, check internet.")
