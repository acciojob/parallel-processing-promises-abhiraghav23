const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://imgs.search.brave.com/Ow9SGbN5zlN7yG_FtgPBADyrJrE036QEuw9fCYYhz1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYzLzc0LzI2/LzM2MF9GXzQ2Mzc0/MjY2N19RYnIyQVVI/T2dyZVlpTjFwbDBi/c1o4ZzlQMnE4VUF6/ci5qcGc" },
  { url: "https://imgs.search.brave.com/Ow9SGbN5zlN7yG_FtgPBADyrJrE036QEuw9fCYYhz1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYzLzc0LzI2/LzM2MF9GXzQ2Mzc0/MjY2N19RYnIyQVVI/T2dyZVlpTjFwbDBi/c1o4ZzlQMnE4VUF6/ci5qcGc" },
  { url: "https://imgs.search.brave.com/Ow9SGbN5zlN7yG_FtgPBADyrJrE036QEuw9fCYYhz1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYzLzc0LzI2/LzM2MF9GXzQ2Mzc0/MjY2N19RYnIyQVVI/T2dyZVlpTjFwbDBi/c1o4ZzlQMnE4VUF6/ci5qcGc" },
];

btn.addEventListener("click", function() {
  // Function to download a single image
  function downloadImage(image) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = image.url;

      img.onload = () => resolve(img);
      img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
    });
  }

  // Use Promise.all to download all images in parallel
  Promise.all(images.map(downloadImage))
    .then((loadedImages) => {
      // Clear previous images
      output.innerHTML = '';

      // Display all loaded images
      loadedImages.forEach((img) => {
        output.appendChild(img);
      });
    })
    .catch((error) => {
      // Handle any failed image download
      output.innerHTML = `<p style="color: red;">${error}</p>`;
    });
});

