 

//Generate data +display it

const itemsPerPage = 10;
let currentPage = 1;

function render() {
  let underwritersList = "";
  const startIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;

  underwriters.forEach((items, i) => {
    if (i >= startIndex && i < lastIndex && i < underwriters.length) {
      const { id, name, dob, joiningDate } = items;
      const html = `<div class="firstrow">${id}</div>
                <div>${name}</div>
                <div>${dob}</div>
                <div>${joiningDate}</div>`;
      underwritersList += html;
    }

    document.getElementById("currentPage").innerText = currentPage;
    document.querySelector(".js-database").innerHTML = underwritersList;
  });
}

// for(let i=startIndex;i<lastIndex && i<underwriters.length;i++){
  
//     const { id, name, dob, joiningDate } = underwriters[i];
//     const html = `<div class="firstrow">${id}</div>
//       <div>${name}</div>
//       <div>${dob}</div>
//       <div>${joiningDate}</div>`;
//       tableBody.innerHTML += html;
  
// }  --> Inside render() instead of ForEach loop;

function previous() {
  const totalPage = Math.ceil(underwriters.length / itemsPerPage);

  if (currentPage > 1) {
    currentPage--;
    render();
  }
}

function next() {
  const totalPage = Math.ceil(underwriters.length / itemsPerPage);

  if (currentPage < totalPage) {
    currentPage++;
    render();
  }
}

render();

function addInDatabase() {
  let inputId = document.querySelector("#underWriterId").value;
  let inputFName = document.querySelector("#firstName").value;
  let inputLName = document.querySelector("#lastName").value;
  let inputDOB = document.querySelector("#dob").value;
  let inputJoiningDate = document.querySelector("#joiningDate").value;

  underwriters.push({
    id: inputId,
    name: inputFName + " " + inputLName,
    dob: inputDOB,
    joiningDate: inputJoiningDate,
  });
  inputId = "";
  inputFName = "";
  inputLName = "";
  inputJoiningDate = "";
  render();
}

document.querySelector("#reg-btn").addEventListener("click", () => {
  addInDatabase();
});

