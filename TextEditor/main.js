function changeStyle(id) {
    var sel = window.getSelection(); 

    if (sel.rangeCount) {
      
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

            case '5':
                e.style.textDecoration = "underline";
                break;

            case '6':
                e.style.backgroundColor = "LightSteelBlue";
                break;

            case '7':
                window.prompt("Enter the URL of the link: ");
                e.style.color = "blue";
                e.style.textDecoration = "underline";
                break;

            default:
                break;
        }    

        e.innerHTML = sel.toString(); 

        var range = sel.getRangeAt(0);
        range.deleteContents(); 
        range.insertNode(e); 
    }

}
