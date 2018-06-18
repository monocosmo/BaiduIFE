// Solution with querySelector and querySelectorAll
function getAllListItem() {
    // 返回页面中所有li标签
    var elements = document.querySelectorAll("li");
    var output = document.getElementById("q1");
    for(var i = 0; i < elements.length; i++){
    	var para = document.createElement("p");
    	para.textContent = elements[i].firstChild.innerHTML + "(span): " + elements[i].lastChild.innerHTML;
    	output.appendChild(para);
	}
}

function findAllHtmlSpanInOneSection(sectionId) {
    // 返回某个section下所有span中内容为HTML的span标签
    var div1 = document.querySelector("div#"+sectionId);
    var elements = div1.querySelectorAll("span");
    var output = document.getElementById("q2");
    for(var i = 0; i < elements.length; i++){
    	if (elements[i].innerHTML == "HTML"){
    		var para = document.createElement("p");
    		para.textContent = elements[i].parentNode.children[1].innerHTML;
    		output.appendChild(para);
    	}
    }
}

function findListItem(sectionId, spanCont) {
    // 返回某个section下，所有所包含span内容为spanCont的LI标签
    var div1 = document.querySelector("div#"+sectionId);
    var elements = div1.querySelectorAll("span");
    var output = document.getElementById("q3");
    for(var i = 0; i < elements.length; i++){
        if (elements[i].innerHTML == spanCont){
            var para = document.createElement("p");
            para.textContent = elements[i].parentNode.children[1].innerHTML;
            output.appendChild(para);
        }
    }
}

function getActiveLinkContent(sectionId) {
    // 返回某个section下，class为active的链接中包含的文字内容
    var div1 = document.querySelector("div#"+sectionId);
    var elements = div1.querySelectorAll("a.active");
    var output = document.getElementById("q4");
    for(var i = 0; i < elements.length; i++){
    	var para = document.createElement("p");
    	para.textContent = elements[i].innerHTML;
    	output.appendChild(para);
    }
}