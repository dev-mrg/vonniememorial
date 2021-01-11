function box1() {

    var y = Math.floor(Math.random() * 10) * Math.floor(Math.random() * 43);
    var z = Math.floor(Math.random() * 11) * Math.floor(Math.random() * 11) * 10;

    document.getElementById("box1").style.top = y + "px";
    document.getElementById("box1").style.left = z + "px";

    document.getElementById("x-val").innerHTML = "TOP = " + y + " px";
    document.getElementById("y-val").innerHTML = "LEFT = " + z + " px";
};

box1();