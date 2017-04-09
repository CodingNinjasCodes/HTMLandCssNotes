


**CodingNinjasCodes** is an open-source repository that is created to provide open-source free code for the people or those who want to contribute or learn.

- First clone download from the repository named **HTMLandCSSNotes**.
 
- Open **index.html** for adding any additional informational or in order to contribute.

- To add a new tab apart from the given tabs, add the following..
  - <li onclick="openPage(event, 'tab_name')"><a href="javascript:void(0)" class="tablinks">tab-Name</a></li>
  - add this line on the top of the index.html inside the <ul> tag after all the <li> tags inside the closing </ul> tag.

- After that add a new <div> element and give it an id of same as the 'tabname' as mentioned above in the li tag and also give it a class name of "tabcontent".

- Inside this <div> element add a new <h3> tag and give it a class of "heading".

- Inside that <h1> element give the name of the main-heading which you want to give.

- After that add a new <div> element and give it a class of "content".

- Inside this content class div you can write the necessary information you want to provide in it.

- So now, in order to add the necessary information you can use the following classes that are mentioned below...


**class="explanationText"**-To add any information,text, paragraph include this class in the relevant HTML tag.

**class="explanationNote"**-To add any additional important note in HTML page include this class.

**class="explanationHeading"**-To add any subheading to our HTML file include this class.

**class="outputWindow"**-To show the output of the any HTML CSS code while opening in the browser include this tag.This class generally includes inline CSS whose output will be visible to the user.

**class="code"**-To show any HTML CSS code when opened in the browser.This class "code" must be included in <xmp class="code">tag.Any code inside this tag is a dead code and will not be run by the browser and will be shown as it is to the user.

**class="explanationImage"**-To add any additional image to our HTML file must include this class.


All these classes must be applied in the **index.html** file.

*To change the given layout, colors, any other kind of style open **base.css**

*In order to change any of the layouts or styles you can manipulate the CSS of the following classes...

**class="tabcontent"**-To style the tab content.

**class="heading"**-To style the heading.

**class="content"**-manipulates the content div.

**class="explanationText"**-changes the layout of any text written or any text included in the explanationText class.

**class="explanationImage"**-changes the layout of any image that must be added in the explanationImage class.

**class="output-window"**-changes the layout of the output of a particular code that outputs in the browser.

**class="explanationNote"**-changes the layout of any specific note that is included in the explanationNote class.

**class="highlightCode"**-highlights a particular area of code which is included in the highlightCode class.

**class="code-class"** includes the layout of the code that lies inside the **<xmp>** tag and given a class name of "code".

All these changes should be done inside the **base.css** file.








