function openIntroductionPage(){
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    var tab = document.getElementsByClassName("tab")[0];
    var listTags = tab.getElementsByTagName("li");
    for (i = 0; i < listTags.length; i++) {
        listTags[i].className = listTags[i].className.replace(" active", "");
    }
    document.getElementById("default").style.display = "block";
}
function openPage(evt, PageName) {
    localStorage.setItem("last_visited",PageName);
    localStorage.setItem("last_visited_link",evt.currentTarget)
    if(localStorage.visit_history == undefined){
        localStorage.setItem("visit_history","");
    }
    document.getElementById("default").style.display = "none";

    var i, tabcontent, listTags, tab;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tab = document.getElementsByClassName("tab")[0];
    listTags = tab.getElementsByTagName("li");
    for (i = 0; i < listTags.length; i++) {
        listTags[i].className = listTags[i].className.replace(" active", "");
    }
    document.getElementById(PageName).style.display = "block";
    if(evt.currentTarget.className != " active") {
        evt.currentTarget.className += " active";
    }
    if(evt.currentTarget.className != " visited") {
        evt.currentTarget.className += " visited";
    }
    for (i = 0; i < listTags.length; i++) {
        if(listTags[i].className.indexOf("active")>-1){
            localStorage.setItem("last_visited_link",listTags[i].innerHTML);
            if(localStorage.visit_history.indexOf(listTags[i].innerHTML) == -1){
                localStorage.visit_history = localStorage.visit_history + listTags[i].innerHTML;
            }
        }
    }
}

function nextPage(){
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        if(tabcontent[i].style.display == "block" && i<tabcontent.length-1){
            tabcontent[i].style.display = "none";
            tabcontent[i+1].style.display = "block";
            localStorage.setItem("last_visited",tabcontent[i+1].id);
            break;
        }
    }
    var tab = document.getElementById("ID");
    var listTags = tab.getElementsByTagName("li");
    tab.style.overflow="auto";
    for (i = 0; i < listTags.length; i++) {
        if(listTags[i].className.indexOf("active") > -1  && i<listTags.length-1){
            console.log("test");
            // listTags[i].className = listTags[i].className.replace(" active", "");
            listTags[i].className = listTags[i].className.replace(" active", "");
            listTags[i+1].className += " active visited";
            if(i>4){
                listTags[i-4].scrollIntoView();
            }
            break;
        }
    }
    tab.style.overflow="hidden";

    for (i = 0; i < listTags.length; i++) {
        if(listTags[i].className.indexOf("active")>-1){
            localStorage.setItem("last_visited_link",listTags[i].innerHTML);
            if(localStorage.visit_history.indexOf(listTags[i].innerHTML) == -1){
                localStorage.visit_history = localStorage.visit_history + listTags[i].innerHTML;
            }
        }
    }
}

function previousPage(){
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        if(tabcontent[i].style.display == "block" && i>0){
            tabcontent[i].style.display = "none";
            tabcontent[i-1].style.display = "block";
            localStorage.setItem("last_visited",tabcontent[i-1].id);
        }
    }
    var tab = document.getElementById("ID");
    var listTags = tab.getElementsByTagName("li");
    tab.style.overflow="auto";
    for (i = 0; i < listTags.length; i++) {
        if(listTags[i].className.indexOf("active") > -1  && i>0){
            // listTags[i].className = listTags[i].className.replace(" active", "");
            listTags[i].className = listTags[i].className.replace(" active", "");
            listTags[i-1].className += " active visited";
            if(i>4){
                listTags[i-4].scrollIntoView();
            }
            if(i<3){
                listTags[0].scrollIntoView();
            }
        }
    }
    tab.style.overflow="hidden";

    for (i = 0; i < listTags.length; i++) {
        if(listTags[i].className.indexOf("active")>-1){
            localStorage.setItem("last_visited_link",listTags[i].innerHTML);
            if(localStorage.visit_history.indexOf(listTags[i].innerHTML) == -1){
                localStorage.visit_history = localStorage.visit_history + listTags[i].innerHTML;
            }
        }
    }
}

window.onload = function() {
    var viewPortHeight = document.documentElement.clientHeight;
    document.getElementsByClassName("tab")[0].style.height = (document.documentElement.clientHeight-20)+"px";
    // If anyone knows why the above line is required please email to manishsherawat1@gmail.com!!
    if(localStorage.last_visited !== undefined){
        //for switching the display on for the last visited page and turning off the default page
        document.getElementById("default").style.display = "none";
        last_page=document.getElementById(localStorage["last_visited"]);
        last_page.style.display = "block";
        
        //for setting the last visited page as active in the left side index.

        var i, listTags, tab;
        tab = document.getElementsByClassName("tab")[0];
        tab = document.getElementsByClassName("tab")[0];
        listTags = tab.getElementsByTagName("li");
        // overflow is set to auto for the menu in order to get the active element in the view.
        tab.style.overflow="auto";
        for(i = 0; i < listTags.length; i++){
            if(listTags[i].innerHTML == localStorage["last_visited_link"]){
                listTags[i].className += " active visited";
                if(i>4){
                    listTags[i-4].scrollIntoView();
                }
            }
        }
        tab.style.overflow="hidden";
        // tab.setAttribute("style","height:500px");


        // For setting the previous visited links to visited status
        for(i = 0; i < listTags.length; i++){
            if(localStorage.visit_history.indexOf(listTags[i].innerHTML) > -1){
                listTags[i].className += " visited";
            }
        }
    }
}