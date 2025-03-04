function doPost(e) {
    var data = JSON.parse(e.postData.contents);
    var options = {
        'method': 'post',
        'contentType': 'application/json',
        'payload': JSON.stringify(data)
    };

    var response = UrlFetchApp.fetch('https://your-api-endpoint.com/inquiries', options);

    return ContentService.createTextOutput(response.getContentText()).setMimeType(ContentService.MimeType.JSON);
}