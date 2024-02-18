
function autoResize(textarea) {
        textarea.style.height = 'auto'; // Reset the height to auto
        textarea.style.height = textarea.scrollHeight + 'px'; // set the height to the scroll height
    }

    autoResize(document.getElementById('message')); // Call autoResize function initially

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

