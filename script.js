let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// Remove navlist when an item is clicked
navlist.addEventListener("click", () => {
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
});

// Rotate text animation
let text = document.querySelector(".text p");
text.innerHTML = text.innerHTML.split("").map((char) => `${char}`).join("");
document.getElementById('hireMeButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Create a thank you image
    const thankYouImage = document.createElement('div');
    thankYouImage.innerHTML = `
        <div class="thank-you-image">
            <img src="images/thanks.webp" />
            <p>Thank You! I will get back to you soon!</p>
        </div>
    `;
    document.body.appendChild(thankYouImage);

    // Style the thank you image container
    thankYouImage.style.position = 'fixed';
    thankYouImage.style.top = '50%';
    thankYouImage.style.left = '50%';
    thankYouImage.style.transform = 'translate(-50%, -50%)';
    thankYouImage.style.backgroundColor = '#fff';
    thankYouImage.style.padding = '20px';
    thankYouImage.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    thankYouImage.style.zIndex = '200';
    thankYouImage.style.textAlign = 'center';
    thankYouImage.style.borderRadius = '8px';

    // Add styles for the image
    const img = thankYouImage.querySelector('img');
    img.style.width = '150px'; // Adjust as needed
    img.style.height = 'auto'; // Maintain aspect ratio

    // Remove the image after a few seconds
    setTimeout(() => {
        thankYouImage.remove();
    }, 5000);
});
function showEmail() {
    alert("Contact me on whatsapp : 7559227187");
}
