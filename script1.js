let students = [];

const showForm = () => {
  let formContainer = document.getElementById("formContainer");
  formContainer.style.display = "block";
};

const addStudent = (event) => {
  event.preventDefault(); 
  
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let grade = document.getElementById("grade").value;
  
  if (name.trim() === '' || age.trim() === '' || grade.trim() === '') {
    alert("Please fill out all fields.");
    return;
  }

  let student = {
    name: name,
    age: age,
    grade: grade
  };
  
  students.push(student);
  
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("grade").value = "";
  
  document.getElementById("formContainer").style.display = "none";
  
  displayStudentNames();
};

const displayStudentNames = () => {
  let studentList = document.getElementById("studentList");
  studentList.innerHTML = ""; 
  
  students.forEach((student, index) => {
    let listItem = document.createElement("li");
    listItem.textContent = student.name;
    listItem.onclick = () => displayStudentDetails(student);
    studentList.appendChild(listItem);
  });
};

const displayStudentDetails = (student) => {
  let message = `Name: ${student.name}\nAge: ${student.age}\nGrade: ${student.grade}`;
  alert(message);
};

displayStudentNames();
