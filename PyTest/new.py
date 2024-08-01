
import os
import requests

def download_images(urls, directory):
    """
    Download a list of images from URLs and save them to a directory.

    Args:
        urls (list): A list of URLs of the images to download.
        directory (str): The directory where the images will be saved.

    Returns:
        None
    """
    # Create the directory if it doesn't exist
    os.makedirs(directory, exist_ok=True)

    for url in urls:
        try:
            response = requests.get(url)
            response.raise_for_status()  # Raise an exception for bad status codes

            # Extract the filename from the URL
            filename = os.path.basename(url)

            filepath = os.path.join(directory, filename)
            with open(filepath, 'wb') as image_file:
                image_file.write(response.content)
            print(f'Downloaded {url} to {directory}')
        except requests.RequestException as e:
            print(f'Failed to download {url}: {e}')

# Example usage:
urls = [
    'https://ahprd1cdn.csgpimgs.com/i2/Cas3iQAzngKfsGzYyD4vwM1pavFeayKOX1D8A639b3Q/119/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/kfVj9V0FpWzlK6-Sz7YLcj_lKFFN8DJ2gWtwk-qNEeg/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/H2KCb_82i5W9JMaFHfb3X8JviKGdrAENoN5qYx9I1vo/111/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/-w3Ir9op-BrqGdBioclAdkdFVgjW2i93Y_traXv9Too/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/Drc6_xjjGn-4xza1WFqq9SrPBe38pq9fUq4-VwV_zSg/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/rMbkRkXO-Fm71VomT6ve7vT9Ii493pty6j7LMBkhmC8/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/mx5goOdAZJsneVO_JuM5qnPrSvAAjGO5VPVuTcR6aag/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/mAhAIkEIQqGnedv6HCFJe1D6lGVBxJGzNBq7-4ygSBM/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/MkjS7bhnOW_QIRrq10D1-Cmz_qahsV4rLZ2iFFtCuJ4/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/34Bmziw2MG9gFHQtfnDZ9p5IIk97SruPzTP5Ce4GWMw/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/4vt8ifuHdMIxq_MHoeVFH6WBxzuH96eMYRnTGuTijq0/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/8u7hTKWF5Ek017DnUC9arY61grJLgXFFCUCXPOCqzuM/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/t0BHnSGpC3Gjooc4q5xnloVpErVYQyQTsdoHKOe6dUM/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/qAGVnwleqOZDoSKLRMsmAjrLdTYo3iolIZPGXtus748/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/67xZbjos8Ve28vfvgELpcz-DqJmOb6UOSPUyfTljO9Q/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/9SReTZi2sEkIKQIovPr5DsVegI3mMB2MHMjXqv32iyo/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/l2b926PTLkhIhisFogwYENWZqgJFDaPUqimtQOKdt6E/115/image.jpg',
    'https://ahprd1cdn.csgpimgs.com/i2/_ptZ41GGnObLvbd9jlIXjhjbdjGfgTePQKe29qA8t9k/115/image.jpg'
]
directory = 'images'
download_images(urls, directory)

