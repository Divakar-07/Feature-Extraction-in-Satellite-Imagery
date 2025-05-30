// Image mapping for preview
const imageMapping = {
    "101.png": { "1": "/assets/media/101b.png", "2": "/assets/media/101g.png", "3": "/assets/media/101r.png" },
    "hanuman456.png": { "1": "hanuman1.jpg", "2": "hanuman2.jpg", "3": "hanuman3.jpg" },
    "krishna789.jpeg": { "1": "krishna1.jpg", "2": "krishna2.jpg", "3": "krishna3.jpg" },
    "shiva654.png": { "1": "shiva1.jpg", "2": "shiva2.jpg", "3": "shiva3.jpg" },
    "ram123.jpg": { "1": "ram1.jpg", "2": "ram2.jpg", "3": "ram3.jpg" },
    "gita321.avif": { "1": "gita1.jpg", "2": "gita2.jpg", "3": "gita3.jpg" },
    "buddha222.jpeg": { "1": "buddha1.jpg", "2": "buddha2.jpg", "3": "buddha3.jpg" },
    "ganesha333.png": { "1": "ganesha1.jpg", "2": "ganesha2.jpg", "3": "ganesha3.jpg" },
    "vishnu444.jpeg": { "1": "vishnu1.jpg", "2": "vishnu2.jpg", "3": "vishnu3.jpg" },
    "lakshmi555.avif": { "1": "lakshmi1.jpg", "2": "lakshmi2.jpg", "3": "lakshmi3.jpg" }
};

document.getElementById("optionSelector").addEventListener("change", handleSelection);
document.getElementById("imageUpload").addEventListener("change", handleSelection);

function handleSelection() {
    const fileInput = document.getElementById("imageUpload");
    const selectedOption = document.getElementById("optionSelector").value;
    const spinner = document.getElementById("loadingSpinner");
    const previewContainer = document.getElementById("previewContainer");
    const previewImage = document.getElementById("previewImage");
    const errorMessage = document.getElementById("errorMessage");

    if (fileInput.files.length > 0 && selectedOption !== "") {
        const uploadedFile = fileInput.files[0].name;

        // Show loading animation
        spinner.style.display = "block";
        previewContainer.style.display = "none";
        errorMessage.style.display = "none";

        setTimeout(() => {
            if (imageMapping[uploadedFile] && imageMapping[uploadedFile][selectedOption]) {
                // Show the correct preview image
                previewImage.src = imageMapping[uploadedFile][selectedOption];
                previewContainer.style.display = "block";
            } else {
                // Show error message for invalid images
                errorMessage.style.display = "block";
            }
            spinner.style.display = "none"; // Hide spinner after 3 seconds
        }, 3000);
    }
}