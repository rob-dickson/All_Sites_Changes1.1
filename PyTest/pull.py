import requests
import os
import csv

# Directory to save the images
directory = 'images'

# Create the directory if it doesn't exist
if not os.path.exists(directory):
    os.makedirs(directory)

# CSV file containing the URLs
csv_file = 'url.csv'
#

# Read the CSV file and download the images
with open(csv_file, 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        url = row[0]
        filename = url.split('/')[-1]
        filepath = os.path.join(directory, filename)
        response = requests.get(url)
        if response.status_code == 200:
            with open(filepath, 'wb') as image_file:
                image_file.write(response.content)
            print(f'Downloaded {url} to {directory}')
        else:
            print(
                f'Failed to download {url}. Status code: {response.status_code}')
