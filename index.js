let globalArray=[];
function addStudent(){
    let confirmation=confirm("do you want to add this student?")
    if(confirmation){
        let object={id:0,name:"",E_mail:"",collegeName:"",number:0}
         object.name=document.getElementById("name").value;
         object.E_mail=document.getElementById("email").value;
         object.collegeName=document.getElementById("company").value;
         object.number=document.getElementById("phone").value;
         object.id=globalArray.length;
         globalArray.push(object);
         localStorage.setItem('myArray',JSON.stringify(globalArray))
         alert("student added successfully")
    }   
}
function fetcharray(){
    if(globalArray.length==0){
        const p = document.createElement('p');
        p.className="Nostudent";
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
            pElement.textContent = `${object.name}`;
            div.appendChild(pElement);
            const pElement1 = document.createElement('p');
            pElement1.textContent = `${object.E_mail}`;
            div.appendChild(pElement1);
            const pElement2 = document.createElement('p');
            pElement2.textContent = `${object.collegeName}`;
            div.appendChild(pElement2);
            const pElement3 = document.createElement('p');
            pElement3.textContent = `${object.number}`;
            div.appendChild(pElement3);
            return div;
          });
          let container=document.getElementById("parenDiv");
          divElements.forEach(element => {
            container.appendChild(element)
          });
    }
}