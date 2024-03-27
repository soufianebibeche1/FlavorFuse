
//Switching betwwen login and register page
function toggleForm(formName) {
    if (formName === 'login') {
        document.getElementById('createAccountForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    } else if (formName === 'createAccount') {
        document.getElementById('createAccountForm').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
    }
}

//Upload  image to server Attach File button
//document.getElementById('attach-btn').addEventListener('click', function() {
//    document.getElementById('file-upload').click();
//});

document.getElementById('attach-btn').addEventListener('click', function() {
    document.getElementById('file-upload').click();
});

document.getElementById('file-upload').addEventListener('change', function(event) {
    var files = event.target.files;
    var uploadContainer = document.querySelector('.file-upload-container');

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();

        reader.onload = (function(file) {
            return function(event) {
                var fileType = file.type.split('/')[0];
                var uploadItem = document.createElement('div');
                uploadItem.classList.add('file-upload-item');

                if (fileType === 'image') {
                    var imgPreview = document.createElement('img');
                    imgPreview.src = event.target.result;
                    uploadItem.appendChild(imgPreview);
                } else if (fileType === 'video') {
                    var videoPreview = document.createElement('video');
                    videoPreview.src = event.target.result;
                    videoPreview.controls = true;
                    uploadItem.appendChild(videoPreview);
                }

                var removeButton = document.createElement('button');
                removeButton.textContent = 'x';
                removeButton.addEventListener('click', function() {
                    uploadItem.remove();
                });

                uploadItem.appendChild(removeButton);
                uploadContainer.appendChild(uploadItem);
            };
        })(file);

        reader.readAsDataURL(file);
    }
});

//    INDEX PAGE

// advertisement
var advertisementImages = [
    "assets/images/banner/advertise.jpg",
    "assets/images/banner/advertise1.jpg" // Path to the second image
];
var advertisementIndex = 0;
var advertisementImage = document.getElementById("advertisement-image");

function changeAdvertisementImage() {
    advertisementIndex = (advertisementIndex + 1) % advertisementImages.length;
    advertisementImage.src = advertisementImages[advertisementIndex];
}

// Change the image every 5 seconds (5000 milliseconds)
setInterval(changeAdvertisementImage, 5000);


// Modal Send A New Message