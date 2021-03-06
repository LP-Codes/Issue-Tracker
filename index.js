document.getElementById("myform1").addEventListener("submit", saveIssue);

// to display-add issues on page
function saveIssue(e) {
  // let localStorage
  // localStorage = window.localStorage
  // to prevent default form action
  e.preventDefault();
  console.log("Add Button Clicked");
  const issue_list = document.getElementById("issuesList");
  //  store inputs
  const title = document.getElementById("inpt1").value;
  const isssuedecp = document.getElementById("inpt2").value;
  const testname = document.getElementById("inpt3").value;
  const sevrty = document.getElementById("issueSeverityInput").value;

  if (title === "" || isssuedecp === "" || testname === "") {
    alert("Please fill all fields ");
  } else {
    //   create body & add input value
    const li = document.createElement("tbody");

    li.innerHTML += `<table id="issuesList"  >
  <thead class="bg-secondary text-light">
      <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Tester</th>
          <th>Severity</th>
          <th>Action</th>
      </tr>
  </thead>
<tbody>
    <tr>
    <td>${title}</td>
    <td>${isssuedecp}</td>
    <td>${testname}</td>
    <td>${sevrty}</td>
    <td><button  class="btn btndel btn-warning text-center"  id="pp" onclick="deleteRow(this)">Delete <i class="fas fa-trash-alt"></i></button></td>
    </tr>
    </tbody></table>`;
    //   append for displaying on html
    issue_list.appendChild(li);
    //   creating object req for local storage

    const inputs = {
      title1: title,
      isssuedecp: isssuedecp,
      testname1: testname,
      sevrty1: sevrty,
    };

    // if firsttime page loads save to locak storage
    if (localStorage.getItem("issueslist") === null) {
      const issues = [];

      issues.push(inputs);
      localStorage.setItem("issueslist", JSON.stringify(issues));
    } else {
      // if already  a local stoarge save parse & push so dont overwrites its value
      const issues = JSON.parse(localStorage.getItem("issueslist"));
      issues.push(inputs);
      localStorage.setItem("issueslist", JSON.stringify(issues));
    }

    // reseting the form input tabs
    document.getElementById("myform1").reset();
  }
}

function oldf() {
  const issues = JSON.parse(localStorage.getItem("issueslist"));
  const issue_list = document.getElementById("issuesList");
  issue_list.innerHTML = "";

  for (let index = 0; index < issues.length; index++) {
    const titleold = issues[index].title1;
    const issold = issues[index].isssuedecp;
    const testnameold = issues[index].testname1;
    const svrtold = issues[index].sevrty1;

    const li = document.createElement("tbody");
    li.innerHTML += ` <table class="table table-bordered"><thead class="bg-secondary text-light">
      <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Tester</th>
          <th>Severity</th>
          <th>Action</th>
      </tr>
  </thead><tbody>
              <tr>
              <td>${titleold}</td>
              <td>${issold}</td>
              <td>${testnameold}</td>
              <td>${svrtold}</td>
              <td><button class="btn  btndel btn-warning text-center"  id="pp" onclick="deleteRow(this)" >Delete <i class="fas fa-trash-alt"></i></button></td>
              </tr>
              </tbody></table>`;
    //   append for displaying on html
    issue_list.appendChild(li);
    //   for clearing input
    // document.getElementById("myform1").reset();
  }
}

function deleteIssue() {
  if (confirm("Are You Sure This Will Delete All ?")) {
    console.warn("Deleting All");
    const issue_listall = document.getElementById("issuesList");
    localStorage.clear();
    issue_listall.innerHTML = "";
  }
}

function deleteRow() {
  // this.closest("tbody").remove();
  // const issues2 = JSON.parse(localStorage.getItem("issueslist"));
  // var i = r.parentNode.rowIndex;
  // document.getElementById("issuesList").deleteRow(i);

  $(".btndel").click(function (e) {
    // confirm("Are You Sure")

    $(this).closest("tbody").remove();

    e.preventDefault();
  });

  // localStorage.removeItem(issues2[this.i])
}

// $(document).ready(function () {
//   $(".btndel").click(function (e) {
//     // confirm("Are You Sure")

//     $(this).closest("tbody").remove();

//     e.preventDefault();
//   });
// });
