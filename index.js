let updateOradd=false;
function fetcharray(){
    let globalArray=JSON.parse(localStorage.getItem('myArray'));
    console.log(globalArray)
    if(globalArray==null||globalArray.length==0){
        const p = document.createElement('p');
        p.className="Nostudent";
        p.id="nostudent"
        p.textContent="No student Found."
        let container=document.getElementById("parenDiv");
        container.appendChild(p)
    }
    else{
        const divElements = globalArray.map((object) => {
            const div = document.createElement('div');
            div.id = `${object.id}`; // Adding ID to the div
            div.className = 'student_info'; // Adding a class to the div
            const pElement = document.createElement('p');
            pElement.textContent = `Name : ${object.name}`;
            div.appendChild(pElement);
            const pElement1 = document.createElement('p');
            pElement1.textContent = `email : ${object.E_mail}`;
            div.appendChild(pElement1);
            const pElement2 = document.createElement('p');
            pElement2.textContent = `college name : ${object.collegeName}`;
            div.appendChild(pElement2);
            const pElement3 = document.createElement('p');
            pElement3.textContent = `Number : ${object.number}`;
            div.appendChild(pElement3);
            const buttons=document.createElement("div")
            buttons.className="d-flex gap-3"
            const update=document.createElement("button");
            update.className="btn btn-primary"
            update.id=`button${object.id}`
            update.textContent="Update"
            const Delete=document.createElement("button")
            Delete.className="btn btn-secondary ml-1"
            Delete.id=`delete${object.id}`
            Delete.textContent="Delete"
            div.appendChild(buttons)
            buttons.appendChild(update)
            buttons.appendChild(Delete)
            return div;
          });
          let container=document.getElementById("parenDiv");
          divElements.forEach(element => {
            container.appendChild(element)
          });
    }
    var buttns = document.getElementsByTagName('button');
    
    // Attach a click event listener to each button
    for (var i = 0; i < buttns.length; i++) {
        buttns[i].addEventListener('click', function(event) {
        var buttonId = event.target.id;
        let pos=buttonId.substring(buttonId.length-1,buttonId.length);
        document.getElementById("name").value=globalArray[pos].name
         document.getElementById("email").value=globalArray[pos].E_mail
         document.getElementById("company").value=globalArray[pos].collegeName
         document.getElementById("phone").value=globalArray[pos].number
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          updateOradd=true;
      });
    }
}
function addStudent(){
    let globalArray=JSON.parse(localStorage.getItem('myArray'))==null?[]:JSON.parse(localStorage.getItem('myArray'));
    let confirmation=confirm("do you want to add this student?")
    if(confirmation){
            var divToRemove = document.getElementById("nostudent");
            if(divToRemove){
                divToRemove.parentNode.removeChild(divToRemove)
            }
            let object={id:0,name:"",E_mail:"",collegeName:"",number:0}
             object.name=document.getElementById("name").value;
             object.E_mail=document.getElementById("email").value;
             object.collegeName=document.getElementById("company").value;
             object.number=document.getElementById("phone").value;
             object.id=globalArray.length;
             globalArray.push(object);
             localStorage.setItem('myArray',JSON.stringify(globalArray))
             const div = document.createElement('div');
                div.id = `${object.id}`; // Adding ID to the div
                div.className = 'student_info'; // Adding a class to the div
                const pElement = document.createElement('p');
                pElement.textContent = `Name : ${object.name}`;
                div.appendChild(pElement);
                const pElement1 = document.createElement('p');
                pElement1.textContent = `email : ${object.E_mail}`;
                div.appendChild(pElement1);
                const pElement2 = document.createElement('p');
                pElement2.textContent = `College name : ${object.collegeName}`;
                div.appendChild(pElement2);
                const pElement3 = document.createElement('p');
                pElement3.textContent = `Number : ${object.number}`;
                div.appendChild(pElement3);
                const buttons=document.createElement("div")
                buttons.className="d-flex gap-3"
                const update=document.createElement("button");
                update.className="btn btn-primary"
                update.id=`button${object.id}`
                update.textContent="Update"
                const Delete=document.createElement("button")
                Delete.className="btn btn-secondary ml-1"
                Delete.id=`delete${object.id}`
                Delete.textContent="Delete"
                buttons.appendChild(update)
                buttons.appendChild(Delete)
              let container=document.getElementById("parenDiv");
              div.appendChild(buttons)
              container.appendChild(div)
             document.getElementById("name").value=""
             document.getElementById("email").value=""
             document.getElementById("company").value=""
             document.getElementById("phone").value=""
             var buttns = document.getElementsByTagName('button');
    
        // Attach a click event listener to each button
        for (var i = 0; i < buttns.length; i++) {
            buttns[i].addEventListener('click', function(event) {
            var buttonId = event.target.id;
            let pos=buttonId.substring(buttonId.length-1,buttonId.length);
            document.getElementById("name").value=globalArray[pos].name
             document.getElementById("email").value=globalArray[pos].E_mail
             document.getElementById("company").value=globalArray[pos].collegeName
             document.getElementById("phone").value=globalArray[pos].number
             window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
              updateOradd=true;
          });
        }
         alert("student added successfully")
    }   
}
function updatestudent(){
    var buttns = document.getElementsByTagName('button');
        // Attach a click event listener to each button
        for (var i = 0; i < buttns.length; i++) {
            buttns[i].addEventListener('click', function(event) {
            var buttonId = event.target.id;
            let pos=buttonId.substring(buttonId.length-1,buttonId.length);
            globalArray[pos].name=document.getElementById("name").value
             globalArray[pos].E_mail=document.getElementById("email").value
             globalArray[pos].collegeName=document.getElementById("company").value
             globalArray[pos].number=document.getElementById("phone").value
             window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
              updateOradd=false;
          });
        }
}
if(updateOradd){
    let update=document.getElementById("submit")
    update.addEventListener("click",updatestudent())
}
else{
    let update=document.getElementById("submit")   
    update.addEventListener("click",addStudent())
}
function resetarray(){
    localStorage.removeItem("myArray");
    globalArray=[]
    var container = document.getElementById("parenDiv");
    container.innerHTML = "";
    fetcharray()
}
