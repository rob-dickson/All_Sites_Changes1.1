
function generateSignature() {
    // Get form inputs
    const logoFile = document.querySelector('input[name="logo"]').files[0];
    const name = document.querySelector('input[name="name"]').value;
    const title = document.querySelector('input[name="title"]').value;
    const address1 = document.querySelector('input[name="address1"]').value;
    const address2 = document.querySelector('input[name="address2"]').value;
    const city = document.querySelector('input[name="city"]').value; // Added City field
    const state = document.querySelector('input[name="state"]').value;
    const zip = document.querySelector('input[name="zip"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const cell = document.querySelector('input[name="cell"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const website = document.querySelector('input[name="website"]').value;

    // Create the email signature structure
    const emailSignature = document.createElement('div');
    emailSignature.classList.add('email-signature');

    const logoColumn = document.createElement('div');
    logoColumn.classList.add('column', 'logo-column');

    const logoUpload = document.createElement('div');
    logoUpload.classList.add('logo-upload');

    const logoImg = document.createElement('img');
    logoImg.src = URL.createObjectURL(logoFile);
    logoImg.alt = "User Logo";
    logoUpload.appendChild(logoImg);
    logoColumn.appendChild(logoUpload);
    emailSignature.appendChild(logoColumn);

    const infoColumn = document.createElement('div');
    infoColumn.classList.add('column', 'info-column');

    const infoSection1 = document.createElement('div');
    infoSection1.classList.add('info-section');

    const nameElement = document.createElement('p');
    nameElement.classList.add('name');
    nameElement.textContent = name;

    const titleElement = document.createElement('p');
    titleElement.classList.add('italic');
    titleElement.textContent = title;

    const addressElement1 = document.createElement('p');
    addressElement1.classList.add('title');
    addressElement1.textContent = address1;

    const addressElement2 = document.createElement('p');
    addressElement2.classList.add('title');
    if (address2) {
        addressElement2.textContent = address2;
    }

    const cityElement = document.createElement('p'); // Added City element
    cityElement.classList.add('title');
    cityElement.textContent = city;

    const stateZipElement = document.createElement('p');
    stateZipElement.classList.add('title');
    stateZipElement.textContent = `${state} ${zip}`;

    const phoneElement = document.createElement('p');
    phoneElement.classList.add('title');
    phoneElement.textContent = `Phone: ${phone}`;

    const cellElement = document.createElement('p');
    cellElement.classList.add('title');
    if (cell) {
        cellElement.textContent = `Cell: ${cell}`;
    }

    const emailElement = document.createElement('p');
    emailElement.classList.add('title');
    emailElement.textContent = `Email: ${email}`;

    const websiteElement = document.createElement('p');
    websiteElement.classList.add('title');
    if (website) {
        websiteElement.textContent = `Website: ${website}`;
    }

    infoSection1.appendChild(nameElement);
    infoSection1.appendChild(titleElement);
    infoSection1.appendChild(addressElement1);
    if (address2) {
        infoSection1.appendChild(addressElement2);
    }
    infoSection1.appendChild(cityElement); // Append City element
    infoSection1.appendChild(stateZipElement);
    infoSection1.appendChild(phoneElement);
    if (cell) {
        infoSection1.appendChild(cellElement);
    }
    infoSection1.appendChild(emailElement);
    if (website) {
        infoSection1.appendChild(websiteElement);
    }

    infoColumn.appendChild(infoSection1);

    emailSignature.appendChild(infoColumn);

    // Append the generated email signature to the preview area
    const previewArea = document.getElementById("preview-area");
    previewArea.innerHTML = '';
    previewArea.appendChild(emailSignature);

    // Make the download link visible and set the image as the download link href
    const downloadLink = document.getElementById("download-link");
    downloadLink.style.display = "inline-block";
    downloadLink.style.marginTop = "10px"; // Adjust the margin if needed

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = emailSignature.offsetWidth;
    canvas.height = emailSignature.offsetHeight;

    const emailSignatureImg = new Image();
    emailSignatureImg.src = `data:image/svg+xml;base64,${btoa(new XMLSerializer().serializeToString(emailSignature))}`;

    emailSignatureImg.onload = function () {
        ctx.drawImage(emailSignatureImg, 0, 0);
        downloadLink.href = canvas.toDataURL("image/png");
    };
}

var node = document.getElementsByClassName('email-signature');

domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });