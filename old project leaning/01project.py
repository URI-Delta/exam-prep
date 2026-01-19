import pyttsx3

# PHASE -: 1

# #Initialize TTs engine
# engine =pyttsx3.init()


# #Speak something

# test=input("enter waht u wann hear")

# engine.say(text=test)
# engine.runAndWait()


# PHASE -: 2
    # A -: (Speed)
# engine = pyttsx3.init()
# rate =engine.getProperty('rate')
# print("current Rate :", rate)

# engine.setProperty('rate',150)
# engine.say('hi sir , this is slower than earlier one')
# engine.runAndWait()

    # B -: (volume)
# engine = pyttsx3.init()

# volume =engine.getProperty('volume')
# print('current volume : ',volume)

# engine.setProperty('volume',0.7)
# engine.say('hi sir , this is volume is slower than earlier one')
# engine.runAndWait()


    # c -: (voice)
# engine = pyttsx3.init()

# voices =engine.getProperty('voices')
# for index,voice in enumerate(voices):
#     print(f'voice {index} - : {voice.name}')

# # engine.setProperty('voice',voices[1].id)
# engine.say("Virat Kohli is an internationally acclaimed Indian cricketer, widely regarded as one of the greatest batsmen in history, known for his aggressive style, leadership, and numerous records. Born on November 5, 1988, he captained the Indian team across all formats, achieving milestones like the fastest to 25,000 ODI runs and earning accolades such as the Rajiv Gandhi Khel Ratna and Padma Shri.")
# engine.runAndWait()


# PHASE -: 4

# engine = pyttsx3.init()

# engine.save_to_file('Virat Kohli is an internationally acclaimed Indian cricketer, widely regarded as one of the greatest batsmen in history, known for his aggressive style, leadership, and numerous records. Born on November 5, 1988, he captained the Indian team across all formats, achieving milestones like the fastest to 25,000 ODI runs and earning accolades such as the Rajiv Gandhi Khel Ratna and Padma Shri.','virat.mp4')
# engine.runAndWait()

# PHASE -: 5 
# def onStart(name):
#     print('starting:',name)

# def onEnd(name,completed):
#     print('Finished:',name)


# engine =pyttsx3.init()
# engine.connect('started-utterance', onStart)
# engine.connect('finisheded-utterance',onEnd)


# engine.say('Virat Kohli is an internationally acclaimed Indian cricketer, widely regarded as one of the greatest batsmen in history,' \
# 'known for his aggressive style, leadership,')
# engine.runAndWait()


# PHASE -: 6  
# engine = pyttsx3.init()

# engine.say("Virat kohli is a best batsman . ")
# engine.say(" A B de Villiers is a best 360 batsman  ")
# engine.runAndWait()


#   PHASE -: 7

# engine = pyttsx3.init()
# engine.setProperty('rate',170)
# engine.setProperty('volume',1)

# while True:
#     text = input("Enter text (or 'exit' to quite) :")
#     if text.lower() == 'exit':
#         break

#     else:
#         engine.say(text)
#         engine.runAndWait()


engine = pyttsx3.init()

engine.say('hello sir how are u')
engine.runAndWait()