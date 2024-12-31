// var keys = Object.keys(dan_theory) // get example throws
// console.log(keys)

function make_link(throw_item){
    console.log(throw_item);

    var a = document.createElement("a");
    var div = document.createElement("div");
    div.className = "card"

    // puts the throw name on the card
    var h4 = document.createElement("h4");
    h4.className = "card-title";
    var throw_name = document.createTextNode(throw_item["throw"]);
    
    var h5 = document.createElement("h5");
    var throw_translation = document.createTextNode(throw_item["translation"]);
    h5.className = "card-subtitle";

    // append everything
    h4.append(throw_name);
    h5.append(throw_translation)
    div.append(h4)
    div.append(h5)

    // add link to video
    a.href = "/dan/show_video.html?throw=" + throw_item["img"]

    a.append(div)
    return a


}

for (let i = 0; i < dan_theory.length; i++) {

    // make a link
    var div_link = make_link(dan_theory[i]);


    if (dan_theory[i]["set"] == 1){
        var container = document.getElementById("set_1")
    }
    if (dan_theory[i]["set"] == 2){
        var container = document.getElementById("set_2")
    }
    if (dan_theory[i]["set"] == 3){
        var container = document.getElementById("set_3")
    }
    if (dan_theory[i]["set"] == 4){
        var container = document.getElementById("set_4")
    }
    if (dan_theory[i]["set"] == 5){
        var container = document.getElementById("set_5")
    }
    
    if(dan_theory[i]["type"] == "Tachi-Waza"){
        var col = container.getElementsByClassName("left-column")[0];
    }
    if(dan_theory[i]["type"] == "Ne-Waza"){
        var col = container.getElementsByClassName("right-column")[0];
    }
    col.appendChild(div_link);
  }