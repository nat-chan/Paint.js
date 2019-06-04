function exec(){
    console.log(
    IPython.notebook.kernel.execute(
    'base64_img="'
    + paint.pathCanvas.toDataURL()
    + '"'
    ));
};

function hook(e){
    var base64_img = paint.pathCanvas.toDataURL();
    base64_img = python('generate', base64_img);
    document.getElementById('result').src = base64_img;
    console.log("clicked");
};

function python(funcname, src){
    var dst = src;
    return dst;
};

//touchstart touchmove touchend
function loaded(){
    paint = document.getElementById('fence').contentWindow.paint;
    paint.effectsCanvas.addEventListener("mouseup", hook);
    paint.effectsCanvas.addEventListener("touchend", hook);
    paint.controlContainer.style.display = 'none'
    paint.coordDiv.style.display = 'none'
    console.log("loaded");
};
