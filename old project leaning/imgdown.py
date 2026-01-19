from imagedownloader import ImageDownloader

if __name__ == "__main__":
    
    image_urls = [
    'https://www.instagram.com/p/DRmiODdjFYV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    ]
    
    save_path = "./images"
    csv_path = "./test.csv"
    output_path = "./images.zip"
    folder_path = "./images"
    
    imgDownloader = ImageDownloader()
    imgDownloader.fromList(image_urls, save_path)
    imgDownloader.fromCsv(csv_path, save_path)
    imgDownloader.zipFolder(folder_path, output_path)