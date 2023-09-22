import os
from pdf2image import convert_from_path

# Function to convert a PDF to PNG
def pdf_to_png(pdf_file, output_folder):
    # Create output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    # Convert PDF to a list of PIL (Pillow) images
    images = convert_from_path(pdf_file)

    # Save each image as a PNG file
    for i, image in enumerate(images):
        image.save(os.path.join(output_folder, f'page_{i + 1}.png'), 'PNG')

# Input directory containing PDF files
input_directory = r'C:\Users\Rob D\Downloads\Swig'

# Output directory to save PNG files
output_directory = r'C:\Users\Rob D\Downloads\SwigImg'

# List all PDF files in the input directory
pdf_files = [os.path.join(input_directory, filename) for filename in os.listdir(input_directory) if filename.lower().endswith('.pdf')]

# Loop through each PDF file and convert it to PNGs
for pdf_file in pdf_files:
    pdf_to_png(pdf_file, output_directory)

print("Conversion completed.")
