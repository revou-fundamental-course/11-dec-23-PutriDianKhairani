let name = prompt("Siapakah nama anda?", "");
document.getElementById("name").innerHTML = name;

var slideIndex = 1
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += m)
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("gambar");
    if (n>imgList.length) slideIndex=1;
    else if (n<1) slideIndex=imgList.length;

    for(i=0;1<imgList.length; i++) {
        imgList(i).style.display = "none"
    }

    imgList[slideIndex-1].style.display = "block"

    setInterval(() => {
        plusDivs(1);
    }, 1000);
}