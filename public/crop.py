from PIL import Image

def crop_image():
    img = Image.open('network wireshark.png')
    width, height = img.size
    
    # Since the green image was spilling into the right half, the actual center boundary is further to the right.
    # Let's shift the split point to the right by 40 pixels.
    split_point = (width // 2) + 40
    
    # Let's give it a 10px gap in the middle just to be safe
    # Left half for Network Scanning
    left_img = img.crop((0, 0, split_point - 5, height))
    left_img.save('network_scanning.png')
    
    # Right half for Wireshark Analysis
    right_img = img.crop((split_point + 5, 0, width, height))
    right_img.save('wireshark_analysis.png')
    
    print(f"Images cropped with split point {split_point} successfully.")

if __name__ == '__main__':
    crop_image()
