let leftBtn = document.querySelector(".left-btn"),
    rightBtn = document.querySelector(".right-btn"),
    normalModule = document.querySelector(".normal-module"),
    cycleModule = document.querySelector(".cycle-module"),
    oLi = document.querySelectorAll("li"),
    index=0;


normalModule.onclick = function(){
    normalModule.style.backgroundColor = "rgb(155, 22, 22)";
    cycleModule.style.backgroundColor = "#cccccc";
    leftBtn.onclick = function(){
        index--;
        if (index<0) {
            index=0;
        }
        oLi[index].style.display = "block";
        oLi[index+1].style.display = "none";
    }
    rightBtn.onclick = function(){
        index++;
        if (index>4) {
            index=4;
        }
        oLi[index].style.display = "block";
        oLi[index-1].style.display = "none";
        
    }
}
cycleModule.onclick = function(){
    cycleModule.style.backgroundColor = "rgb(155, 22, 22)";
    normalModule.style.backgroundColor = "#cccccc";
    leftBtn.onclick = function(){
        index--;
        if (index<0) {
            index=4;
        }
        oLi[index].style.display = "block";
        oLi[index+1].style.display = "none";
    }
    rightBtn.onclick = function(){
        index++;
        if (index>4) {
            index=0;
        }
        oLi[index].style.display = "block";
        oLi[index-1<0?4:index-1].style.display = "none";
    }
}