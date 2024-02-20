# import os
# import shutil


# # Function to extract and rename image files to the output folder
# def extract_and_rename_images(directory, output_folder):
#     for root, _, files in os.walk(directory):
#         for file in files:
#             if file.lower().endswith((".png", ".jpg", ".jpeg")):
#                 # Get the "Folder 1" name
#                 folder_1_name = os.path.basename(
#                     os.path.dirname(os.path.dirname(root)))

#                 # Check if the file name already exists in the output folder
#                 new_filename_base = folder_1_name + os.path.splitext(file)[1]
#                 new_filename = new_filename_base
#                 counter = 1
#                 while os.path.exists(os.path.join(output_folder, new_filename)):
#                     new_filename = f"{new_filename_base}_page{counter}{os.path.splitext(file)[1]}"
#                     counter += 1

#                 # Copy the image to the output folder with the new filename
#                 original_path = os.path.join(root, file)
#                 shutil.copy(original_path, os.path.join(
#                     output_folder, new_filename))
#                 # shutil.copy(original_path, new_filename)


# input_directory = input("Please enter the input directory path: ")

# output_folder = input("Please enter the output folder path: ")

# extract_and_rename_images(input_directory, output_folder)


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

                # Check if the file name already exists in the output folder
                new_filename_base = os.path.splitext(file)[0]
                new_filename = folder_1_name + os.path.splitext(file)[1]
                counter = 1
                while os.path.exists(os.path.join(output_folder, new_filename)):
                    new_filename = f"{folder_1_name}_{new_filename_base}_page{counter}{os.path.splitext(file)[1]}"
                    counter += 1

                # Copy the image to the output folder with the new filename
                original_path = os.path.join(root, file)
                new_file_path = os.path.join(output_folder, new_filename)

                try:
                    shutil.copy(original_path, new_file_path)
                    print(f"Successfully copied {file} to {new_file_path}")
                except Exception as e:
                    print(f"Error copying {file}: {str(e)}")


# Prompt the user for the input directory path
input_directory = input("Enter the input directory path: ")

# Prompt the user for the output folder path
output_folder = input("Enter the output folder path: ")

# Call the function with the input directory and output folder
extract_and_rename_images(input_directory, output_folder)
