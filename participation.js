const participationApp = () => {
  let students = JSON.parse(localStorage.getItem("students"));
  if (!students) {
    students = [
      { name: "Aric", points: 0, isPresent: true },
      { name: "Ashlee", points: 0, isPresent: true },
      { name: "Austin", points: 0, isPresent: true },
      { name: "Brady", points: 0, isPresent: true },
      { name: "Chris B", points: 0, isPresent: true },
      { name: "Chris H", points: 0, isPresent: true },
      { name: "D", points: 0, isPresent: true },
      { name: "David J", points: 0, isPresent: true },
      { name: "David M", points: 0, isPresent: true },
      { name: "Greg", points: 0, isPresent: true },
      { name: "Jenna", points: 0, isPresent: true },
      { name: "Jeremiah", points: 0, isPresent: true },
      { name: "Jimmy", points: 0, isPresent: true },
      { name: "John", points: 0, isPresent: true },
      { name: "Josue", points: 0, isPresent: true },
      { name: "Justin", points: 0, isPresent: true },
      { name: "Kevin", points: 0, isPresent: true },
      { name: "Lance", points: 0, isPresent: true },
      { name: "Leon", points: 0, isPresent: true },
      { name: "Leslie", points: 0, isPresent: true },
      { name: "Peter", points: 0, isPresent: true },
      { name: "Riley", points: 0, isPresent: true },
      { name: "Tyler", points: 0, isPresent: true },
      { name: "Wesley", points: 0, isPresent: true },
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

  const togglePresent = (e) => {
    const name = e.target.getAttribute("name");
    const foundStudent = students.filter((student) => student.name === name)[0];
    foundStudent.isPresent = !foundStudent.isPresent;
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
    students.sort((a, b) => b.isPresent - a.isPresent);
    for (student of students) {
      const div = document.createElement("div");
      const button = document.createElement("button");
      const span = document.createElement("span");
      const check = document.createElement("input");
      check.setAttribute("type", "checkbox");
      check.setAttribute("name", student.name);
      if (student.isPresent) {
        check.setAttribute("checked", true);
      }
      span.appendChild(check);
      span.addEventListener("click", togglePresent);
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
      button.style.width = "115px";
      button.style.fontSize = "15px";
      button.style.cursor = "pointer";
      !student.isPresent ? (button.style.backgroundColor = "#b90e2b") : null;
      button.setAttribute("name", student.name);
      div.style.marginBottom = "4px";
      button.addEventListener("click", addPoint);
      ul.append(span);
      ul.appendChild(div);
    }
    body.prepend(ul);
  };

  displayStudents();
};

participationApp();
