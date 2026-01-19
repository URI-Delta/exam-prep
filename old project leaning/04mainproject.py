import pyautogui
import pyttsx3
import speech_recognition as sr
import time

# 🔊 Initialize Text-to-Speech
engine = pyttsx3.init()
engine.setProperty("rate", 170)

def speak(text):
    engine.say(text)
    engine.runAndWait()

# 🎤 Listen for Command
def listen():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)
    try: 
        query = r.recognize_google(audio, language="en-in")
        
        print("You said:", query)
        return query.lower()
    except:
        speak("Sorry, I didn't catch that.")
        return ""

# 🤖 Main Assistant Loop
speak("Hello, I am your assistant. What can I do?")
while True:
    command = listen()

    if "type" in command:
        speak("What should I type?")
        text_to_type = listen()
        pyautogui.write(text_to_type, interval=0.1)
        speak("Done typing!")

    elif "screenshot" in command:
        ss = pyautogui.screenshot()
        filename = f"screenshot_{int(time.time())}.png"
        ss.save(filename)
        speak("Screenshot taken and saved!")

    elif "scroll down" in command:
        pyautogui.scroll(-500)
        speak("Scrolled down")

    elif "scroll up" in command:
        pyautogui.scroll(500)
        speak("Scrolled up")

    elif "exit" in command or "quit" in command:
        speak("Goodbye! Have a nice day.")
        break

    else:
        speak("Sorry, I don't know that command.")
