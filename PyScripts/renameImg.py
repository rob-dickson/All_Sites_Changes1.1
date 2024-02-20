import os
import shutil


# Function to extract and rename image files to the output folder
def extract_and_rename_images(directory, output_folder):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith((".png", ".jpg", ".jpeg")):
                # Get the "Folder 1" name
                folder_1_name = os.path.basename(
                    os.path.dirname(os.path.dirname(root)))
                # Rename the image file with the "Folder 1" name and copy to the output folder
                new_filename = os.path.join(
                    output_folder, folder_1_name + os.path.splitext(file)[1])
                original_path = os.path.join(root, file)
                shutil.copy(original_path, new_filename)


# Prompt the user for the input directory path
input_directory = input("Enter the input directory path: ")

# Prompt the user for the output folder path
output_folder = input("Enter the output folder path: ")

# Call the function with the input directory and output folder
extract_and_rename_images(input_directory, output_folder)
