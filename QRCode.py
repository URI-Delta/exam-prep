import qrcode

url =input("Enter your URl Here : ")

img = qrcode.make(url)
img.save ("QR-code.png")
print("QR code Created Successfully !")
