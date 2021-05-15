const participationApp = () => {
  let students = JSON.parse(localStorage.getItem("students"));
  if (!students) {
    students = [
      { name: "Aric", points: 0 },
      { name: "Ashlee", points: 0 },
      { name: "Austin", points: 0 },
      { name: "Brady", points: 0 },
      { name: "Chris B", points: 0 },
      { name: "Chris H", points: 0 },
      { name: "D", points: 0 },
      { name: "David J", points: 0 },
      { name: "David M", points: 0 },
      { name: "Greg", points: 0 },
      { name: "Jenna", points: 0 },
      { name: "Jeremiah", points: 0 },
      { name: "Jimmy", points: 0 },
      { name: "John", points: 0 },
      { name: "Josue", points: 0 },
      { name: "Justin", points: 0 },
      { name: "Kevin", points: 0 },
      { name: "Lance", points: 0 },
      { name: "Leon", points: 0 },
      { name: "Leslie", points: 0 },
      { name: "Peter", points: 0 },
      { name: "Riley", points: 0 },
      { name: "Tyler", points: 0 },
      { name: "Wesley", points: 0 },
    ];
  }

  const updateStudents = () => {
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
  };

  const addPoint = (e) => {
    const name = e.target.getAttribute("name");
    const foundStudent = students.filter((student) => student.name === name)[0];
    foundStudent.points = foundStudent.points + 1;
    updateStudents();
  };

  const displayStudents = () => {
    const body = document.querySelector("body");
    const oldUl = document.querySelector("ul");
    if (oldUl && oldUl.id === "students") {
      body.removeChild(oldUl);
    }
    const ul = document.createElement("ul");
    ul.setAttribute("id", "students");

    ul.style.padding = "0px";
    students.sort((a, b) => a.points - b.points);
    for (student of students) {
      const div = document.createElement("div");
      const button = document.createElement("button");
      div.appendChild(button);
      const studentName = document.createElement("div");
      studentName.textContent = student.name;
      const star = document.createElement("div");
      star.textContent = " ⭐";
      button.innerHTML =
        student.name +
        "<strong style='float:right'>" +
        student.points +
        "⭐" +
        "</strong>";
      button.style.width = "125px";
      button.style.fontSize = "15px";
      button.style.cursor = "pointer";
      button.setAttribute("name", student.name);
      div.style.marginBottom = "4px";
      button.addEventListener("click", addPoint);
      ul.appendChild(div);
    }
    body.prepend(ul);
  };

  displayStudents();
};

participationApp();
