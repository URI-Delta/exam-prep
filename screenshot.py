import os
from PIL import Image, ImageEnhance, ImageFilter
from reportlab.platypus import SimpleDocTemplate, Image as RLImage, Spacer
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch

# Input & Output paths
input_folder = r"C:\Users\Asus\Pictures\Screenshots\PDF"

output_pdf = "enhanced_output.pdf"

# Processed image save folder
processed_folder = "processed_images"
os.makedirs(processed_folder, exist_ok=True)

processed_files = []

# Step 1: Process each image for clarity
for filename in sorted(os.listdir(input_folder)):
    if filename.lower().endswith((".png", ".jpg", ".jpeg")):
        path = os.path.join(input_folder, filename)
        img = Image.open(path)

        # Convert to grayscale
        img = img.convert("L")

        # Enhance contrast
        img = ImageEnhance.Contrast(img).enhance(2.0)

        # Enhance sharpness
        img = ImageEnhance.Sharpness(img).enhance(2.0)

        # Optional: smooth noise
        img = img.filter(ImageFilter.MedianFilter(size=3))

        # Save processed
        out_path = os.path.join(processed_folder, filename)
        img.save(out_path)
        processed_files.append(out_path)

# Step 2: Create PDF with processed images
doc = SimpleDocTemplate(output_pdf, pagesize=A4)
elements = []

for img_path in processed_files:
    rl_img = RLImage(img_path)
    rl_img._restrictSize(6.5*inch, 9*inch)  # fit to A4
    elements.append(rl_img)
    elements.append(Spacer(1, 0.2*inch))

doc.build(elements)
print("✅ PDF created:", output_pdf)
