function changeStyle(id) {
    var sel = window.getSelection(); 

    if (sel.rangeCount > 0 && sel.toString() != "") {
        var e = document.createElement('span');
        
        switch(id) {
            case '0':
                e.style.textTransform = "capitalize";
                break;

            case '1': 
                e.style.fontWeight = "bold";
                break;
            
            case '2':
                e.style.fontStyle = "italic";
                break;
            
            case '3':
                e.style.fontFamily = "Lucida Console";
                break;

            case '4':
                e.innerHTML = "• ";

                break;

            case '5':
                e.style.textDecoration = "underline";
                break;

            case '6':
                var d = document.createElement('div');
                var e2 = document.createElement('span');
                var size = sel.toString().length * 12 + 20;
                
                e2.style.fontSize = "xx-large";
                e2.innerHTML = "\" ";
                e.appendChild(e2);
                
                d.style.backgroundColor = "LightSteelBlue";
                d.style.width = size +"px";
                d.appendChild(e);
                e = d;

                break;

            case '7':
                var url = window.prompt("Enter the URL of the link: ");
  
                e.style.color = "blue";
                e.style.textDecoration = "underline";
                e.style.cursor = "pointer";
                e.addEventListener("click", function(){
                    window.location.replace(url);
                });

                break;

            default:
                break;
        }    

        e.innerHTML += sel.toString(); 

        var range = sel.getRangeAt(0);
        range.deleteContents(); 
        range.insertNode(e); 
    } 
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === 'Alt') {
        return;
    }
  
    if (event.altKey) {
        changeStyle(keyName);
    } 
}, false);

document.addEventListener('click', (event) => {
    changeStyle(window.event.target.getAttribute('id'));
}, false);