# -*- coding: utf-8 -*-
import os
import zipfile
from pdf2image import convert_from_path

# Config
PDF_FILE = "SMEW 2025 13.10.2025.pdf"
OUTPUT_ZIP = "SMEW_2025_Slides_PNG.zip"
OUTPUT_DIR = "slides_png"
DPI = 200

def main():
    if not os.path.exists(PDF_FILE):
        print(f"File not found: {PDF_FILE}")
        return

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print(f"Converting {PDF_FILE} to PNG...")

    images = convert_from_path(PDF_FILE, dpi=DPI)

    print(f"Found {len(images)} pages")

    png_files = []
    for i, image in enumerate(images, start=1):
        filename = f"{OUTPUT_DIR}/slide_{i:03d}.png"
        image.save(filename, "PNG")
        png_files.append(filename)
        print(f"  Saved: {filename}")

    print(f"\nCreating {OUTPUT_ZIP}...")
    with zipfile.ZipFile(OUTPUT_ZIP, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for png_file in png_files:
            arcname = os.path.basename(png_file)
            zipf.write(png_file, arcname)

    print(f"\nDone! ZIP file: {OUTPUT_ZIP}")
    print(f"Size: {os.path.getsize(OUTPUT_ZIP) / (1024*1024):.2f} MB")

if __name__ == "__main__":
    main()
