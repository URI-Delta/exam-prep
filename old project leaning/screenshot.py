import os
from PIL import Image, ImageEnhance, ImageFilter, ImageOps
from reportlab.platypus import SimpleDocTemplate, Image as RLImage, Spacer
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch

# -------- PATHS --------
input_folder = r"C:\Users\Asus\Pictures\Screenshots\PDF"
output_pdf = os.path.join(input_folder, "enhanced_output.pdf")

processed_folder = os.path.join(input_folder, "processed_images")
os.makedirs(processed_folder, exist_ok=True)

processed_files = []

# -------- IMAGE PROCESSING --------
for filename in sorted(os.listdir(input_folder)):
    if filename.lower().endswith((".png", ".jpg", ".jpeg")):
        try:
            path = os.path.join(input_folder, filename)

            img = Image.open(path)

            # Fix camera rotation
            img = ImageOps.exif_transpose(img)

            # Convert to grayscale
            img = img.convert("L")

            # Enhance clarity
            img = ImageEnhance.Contrast(img).enhance(2.0)
            img = ImageEnhance.Sharpness(img).enhance(2.0)

            # Reduce noise
            img = img.filter(ImageFilter.MedianFilter(size=3))

            # Convert back to RGB (IMPORTANT for PDF/JPG)
            img = img.convert("RGB")

            out_path = os.path.join(processed_folder, filename)
            img.save(out_path, quality=95)

            processed_files.append(out_path)

        except Exception as e:
            print(f"❌ Error processing {filename}: {e}")

# -------- PDF CREATION --------
doc = SimpleDocTemplate(
    output_pdf,
    pagesize=A4,
    rightMargin=36,
    leftMargin=36,
    topMargin=36,
    bottomMargin=36
)

elements = []

for img_path in processed_files:
    rl_img = RLImage(img_path)
    rl_img._restrictSize(6.5 * inch, 9 * inch)  # Fit A4 safely
    elements.append(rl_img)
    elements.append(Spacer(1, 0.25 * inch))

doc.build(elements)

print("✅ PDF created successfully:")
print(output_pdf)
