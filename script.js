let count = 1;
document.getElementById("radio1").ckecked = true;

setInterval ( function() {
    nextImage();
}, 2000)

function nextImage (){
    count ++;
    if(count>4){
        count =1;
    }

    document.getElementById("radio"+count).ckecked = true

}
