import pyautogui


text = input("enter a name of song u wanna listen :")



# print(pyautogui.size())
# print(pyautogui.position())

pyautogui.moveTo(1234,1158 ,duration=2)
pyautogui.click()

pyautogui.moveTo(155,133,duration=2)
pyautogui.click()

pyautogui.moveTo(925,145,duration=2.3)
pyautogui.click()
pyautogui.hotkey("ctrl","a")
pyautogui.press("backspace")

pyautogui.write(text)
pyautogui.press("enter")

pyautogui.moveTo(703,741,duration=2)
pyautogui.click()
