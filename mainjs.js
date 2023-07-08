$(document).ready(function(){
    window.nowwordnumber = 1;
    window.wordsinterval = {
        "a":[1,312],
        "b":[312,562],
        "c":[562,926],
        "d":[926,1128],
        "e":[1128,1276],
        "f":[1276,1462],
        "g":[1462,1567],
        "h":[1567,1704],
        "i":[1704,1798],
        "j":[1798,1832],
        "k":[1832,1858],
        "l":[1858,1974],
        "m":[1974,2152],
        "n":[2152,2240],
        "o":[2240,2333],
        "p":[2333,2619],
        "q":[2619,2635],
        "r":[2635,2828],
        "s":[2828,3307],
        "t":[3307,3541],
        "u":[3541,3606],
        "v":[3606,3659],
        "w":[3659,3808],
        "x":[3808,3809],
        "y":[3809,3826],
        "z":[3826,3835]
    };
    changeword(1);
    $("#ordermode").hide();
    $("#Ctext").hide();
    $("body").hide();
    $("body").fadeIn(500);
 });
function switchmode(){
    if (document.getElementById("switchbuttonP").checked){
        $("#ordermode").hide();
        $("#extractmode").show();
        $("#selectbox").show();
    }else{
        $("#ordermode").show();
        $("#extractmode").hide();
        $("#selectbox").hide();
    }
}
function showmean(){
    $("#Ctext").show();
}
function changeword(wordnumber){
    $("#Ctext").hide();
    document.getElementById("Etext").innerHTML = wordlist[wordnumber]["word"];
    document.getElementById("Ctext").innerHTML = wordlist[wordnumber]["mean"];
    nowwordnumber = wordnumber;
    document.getElementById("input").value = nowwordnumber;
}
function extractword(){
    var object = wordsinterval[$('#select option:selected').val()];
    changeword(Math.ceil(object[0] + (object[1] - object[0]) * Math.random() - 1));
}
function farmer(){
    if (nowwordnumber == 1){
        changeword(3834);
    }else{
        changeword(nowwordnumber - 1)
    }
}
function next(){
    if (nowwordnumber == 3834){
        changeword(1);
    }else{
        changeword(nowwordnumber +1)
    }
}
function jumptoword(){
    changeword(parseInt(document.getElementById("input").value));
}