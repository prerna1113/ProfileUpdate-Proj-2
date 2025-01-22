
const EditFunction = () => {
   
    const editableElements = document.querySelectorAll("#SchoolTag, #adrsTag, #locationTag");

    
    editableElements.forEach((element) => {
        const isEditable = element.getAttribute("contenteditable");

        if (isEditable === "true") {
            
            element.setAttribute("contenteditable", "false");
            element.style.border = "none"; 

            const SaveBtn = document.createElement("Button")
        } else {
            
            element.setAttribute("contenteditable", "true");
            element.style.border = "1px solid grey";
            element.style.padding = "2px";
            element.focus(); 
        }
    });
};
