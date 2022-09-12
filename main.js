
function get_topColor(){
    var top_color = document.getElementById("input_top").value;

    document.getElementById("top_colortxt").innerHTML= top_color;
    document.getElementById("top").style.backgroundColor = top_color;
}

function get_isideColor(){
    var iside_color = document.getElementById("input_iside").value;

    document.getElementById("iside_colortxt").innerHTML= iside_color;
    document.getElementById("iside").style.backgroundColor = iside_color;
}