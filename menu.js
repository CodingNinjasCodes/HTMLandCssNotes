function openPage(evt, PageName) {
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
}