document.addEventListener("DOMContentLoaded", function(){
    if (document.documentElement.clientWidth > 720) {
        ArrangePagination();
    } else if (document.documentElement.clientWidth <= 720) {
        ArrangeSlider();
    }
});

function ArrangeSlider(){
    let images_paths = [
        "img/IMG1@2x.png",
        "img/IMG2@2x.png",
        "img/IMG3@2x.png",
        "img/IMG4@2x.png",
        "img/IMG5@2x.png",
        "img/IMG6@2x.png"
    ];

    arrowRigthSlider = document.getElementById("arrow-right-slider");
    arrowRigthSlider.addEventListener("click", function(){
        imgToChange = document.getElementsByClassName("specs-img")[0];
        currentDot = document.getElementsByClassName("current")[0];
        currentDotNumber = +currentDot.id[10];
        if (currentDotNumber == 5){
            imgToChange.src = images_paths[0];
            nextDot = document.getElementById("indicator-"+0)
            currentDot.classList.remove("current");
            nextDot.classList.toggle("current");
        } else {
            imgNumber = currentDotNumber+1;
            imgToChange.src = images_paths[imgNumber];
            currentDot.classList.remove("current");
            nextDot = document.getElementById("indicator-"+imgNumber)
            nextDot.classList.toggle("current");
        }
    })
    
};

function ArrangePagination(){
    let images_paths = [
        "img/IMG1@2x.png",
        "img/IMG2@2x.png",
        "img/IMG3@2x.png",
        "img/IMG4@2x.png",
        "img/IMG5@2x.png",
        "img/IMG6@2x.png"
    ];

    let items = document.querySelectorAll("#pagination li");

    for (let item of items){
        item.addEventListener("click", function(){
            chosenElement = document.getElementsByClassName("chosen-spec")[0];
            chosenElement.classList.remove("chosen-spec");
            this.classList.toggle("chosen-spec");
            imgToChange = document.getElementsByClassName("specs-img")[0];

            imgNumber = +this.innerHTML - 1;
            imgToChange.src = images_paths[imgNumber];
        });
    }

    function moveToAnotherPage(direction){
        chosenElement = document.getElementsByClassName("chosen-spec")[0];
        pageNumber = +chosenElement.innerHTML;
        nextPageNumber= pageNumber + direction;
        if (nextPageNumber >=1 && nextPageNumber <=6){
            chosenElement.classList.remove("chosen-spec");
            for (let item of items) {
                if (item.innerHTML == nextPageNumber){
                    item.classList.toggle("chosen-spec");
                    imgToChange = document.getElementsByClassName("specs-img")[0];
                    imgNumber = +item.innerHTML - 1;
                    imgToChange.src = images_paths[imgNumber];
                }
            }
        }
    };

    let arrow_left = document.getElementById("arrow-left");
    let arrow_right = document.getElementById("arrow-right");
    arrow_left.addEventListener("click", function(){
        moveToAnotherPage(-1);
    });
    arrow_right.addEventListener("click", function(){
        moveToAnotherPage(1);
    });
};