import os
import shutil


import os
import shutil

# Define the input and output directories
input_dir = r'C:\Users\AG\Desktop\Store138Performance\Product Files'
output_dir = r'C:\Users\AG\Desktop\Store138Performance\Static Products'

# Create the output directory if it doesn't exist
if not os.path.exists(output_dir):
    os.mkdir(output_dir)

# Search for PDF files in the input directory and subdirectories
for root, dirs, files in os.walk(input_dir):
    for file in files:
        if file.endswith('.pdf'):
            # Get the name of the containing directory
            folder_name = os.path.basename(root)

            # Add the folder name to the beginning of the file name
            new_file_name = folder_name + '_' + file

            # Copy the PDF file to the output directory with the new name
            shutil.copy2(os.path.join(root, file),
                         os.path.join(output_dir, new_file_name))
