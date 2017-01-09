function openPage(evt, PageName) {
    localStorage.setItem("last_visited",PageName)
    // console.log(evt)
    // localStorage.setItem("last_visited_link",evt.currentTarget)
    document.getElementById("default").style.display = "none";

    var i, tabcontent, listTags, tab;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tab = document.getElementsByClassName("tab")[0];
    listTags = tab.getElementsByTagName("li");
    for (i = 0; i < listTags.length; i++) {
        if(i==0) {
            listTags[i].className = " visited";
        }
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
        }
    }
}

window.onload = function() {
    var viewPortHeight = document.documentElement.clientHeight;
    document.getElementsByClassName("tab")[0].style.height = (document.documentElement.clientHeight-20)+"px";
    if(localStorage["last_visited"] !== undefined){
        //for switching the display on for the last visited page and turing off the default page
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
    }
}