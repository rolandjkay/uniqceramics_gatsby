import os
import json

def generate_json(directory):
    products = []

    for product_id in os.listdir(directory):
        product_path = os.path.join(directory, product_id)
        
        # Only consider directories
        if os.path.isdir(product_path):
            gallery = []
            for i in range(1, 5):  # Assuming 4 images per product
                image_file = f"{i}.jpg"
                image_path = os.path.join(product_path, image_file)
                
                if os.path.exists(image_path):
                    gallery.append({
                        "image": f"/products/{product_id}/{image_file}",
                        "alt": "Product Image" if product_id != "default" else "Image coming soon"
                    })

            product = {
                "productId": product_id,
                "gallery": gallery
            }
            products.append(product)

    return products


# Define the directory where your products are stored
directory = "../../static/products"

# Generate the JSON structure
product_data = generate_json(directory)

# Save the JSON to a file
with open("product_images.json", "w") as json_file:
    json.dump(product_data, json_file, indent=2)

print("JSON file created successfully.")
