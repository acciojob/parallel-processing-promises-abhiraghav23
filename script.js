 const output = document.getElementById("output");
        const btn = document.getElementById("download-images-button");

        const images = [
            { url: "https://picsum.photos/id/237/200/300" },
            { url: "https://picsum.photos/id/238/200/300" },
            { url: "https://picsum.photos/id/239/200/300" },
        ];

        btn.addEventListener("click", function() {
            // Function to download a single image
            function downloadImage(image) {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = image.url;
                    
                    img.onload = () => resolve(img);  // Image loaded successfully
                    img.onerror = () => reject(`Failed to load image's URL: ${image.url}`); // Error loading image
                });
            }

            // Clear the output div before starting to load new images
            output.innerHTML = '<p>Loading images...</p>';

            // Use Promise.all to download all images in parallel
            Promise.all(images.map(downloadImage))
                .then((loadedImages) => {
                    output.innerHTML = ''; // Clear the "Loading..." text
                    loadedImages.forEach((img) => {
                        output.appendChild(img); // Append each loaded image to the output div
                    });
                })
                .catch((error) => {
                    output.innerHTML = `<p style="color: red;">${error}</p>`; // Show error message if any image fails to load
                });
        });

