canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

var alphabet_key_image_path = "Alpkey.png";
var arrow_key_image_path = "Arrkey.png";
var number_key_image_path = "numkey.png";
var other_key_image_path = "otherkey.png";
var special_key_image_path = "spkey.png";
var img_width = 400;
var img_height = 250;
var img_x = 40;
var img_y = 30;

window.addEventListener("keydown", my_key_down);
function my_key_down(e){
    key_pressed = e.keyCode;
    if(key_pressed >= 65 && key_pressed <= 90 || key_pressed >= 97 && key_pressed <= 122){
        alphabet_key();
        document.getElementById("pressed_key_text").innerHTML = "You pressed an Alphabet key";
    }
    else if(key_pressed >= 48 && key_pressed <= 57){
        number_key();
        document.getElementById("pressed_key_text").innerHTML = "You pressed a Number key";
    }
    else if(key_pressed >= 37 && key_pressed <= 40){
        arrow_key();
        document.getElementById("pressed_key_text").innerHTML = "You pressed a Arrow key";
    }
    else if(key_pressed == 17 || key_pressed == 18 || key_pressed == 27){
        special_key();
        document.getElementById("pressed_key_text").innerHTML = "You pressed a Special key";
    }
    else{
        other_key();
        document.getElementById("pressed_key_text").innerHTML = "You pressed any Other key";
    }
}

function alphabet_key(){
    alphabet_declare = new Image;
    alphabet_declare.src = alphabet_key_image_path;
    alphabet_declare.onload = upload_alphabet;
}

function number_key(){
    number_declare = new Image;
    number_declare.src = number_key_image_path;
    number_declare.onload = upload_number;
}

function arrow_key(){
    arrow_declare = new Image;
    arrow_declare.src = arrow_key_image_path;
    arrow_declare.onload = upload_arrow;
}

function special_key(){
    special_declare = new Image;
    special_declare.src = special_key_image_path;
    special_declare.onload = upload_special;
}

function other_key(){
    other_declare = new Image;
    other_declare.src = other_key_image_path;
    other_declare.onload = upload_other;
}

function upload_arrow(){
    ctx.drawImage(arrow_declare, img_x, img_y, img_width, img_height);
}

function upload_alphabet(){
    ctx.drawImage(alphabet_declare, img_x, img_y, img_width, img_height);
}

function upload_number(){
    ctx.drawImage(number_declare, img_x, img_y, img_width, img_height);
}

function upload_special(){
    ctx.drawImage(special_declare, img_x, img_y, img_width, img_height);
}

function upload_other(){
    ctx.drawImage(other_declare, img_x, img_y, img_width, img_height);
}
