function changeImageToSecond() {
    var image = document.querySelector('.main_image');
    if (image.src.match("big-batch-bolognese")) {
        image.src = "images/bolonese2.png";
    }

}
function changeImageToFirst() {
    var image = document.querySelector('.main_image');
    if (image.src.match("bolonese2")) {
        image.src = "images/big-batch-bolognese.png";
    }
}