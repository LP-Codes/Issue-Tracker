  
document.getElementById("myform1").addEventListener("submit", saveIssue);

// to display-add issues on page
function saveIssue(e) {
  // to prevent default form action
  e.preventDefault();
  console.log("Add Button Clicked");
  var issue_list = document.getElementById("issuesList");
  //  store inputs
  var title = document.getElementById("inpt1").value;
  var isssuedecp = document.getElementById("inpt2").value;
  var testname = document.getElementById("inpt3").value;
  var sevrty = document.getElementById("issueSeverityInput").value;
  //   create body & add input value
  let li = document.createElement("tbody");
  li.innerHTML += ` <table class="table table-bordered"><table  id="issuesList" class="table table-bordered text-center " >
  <thead class="bg-secondary text-light">
      <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Tester</th>
          <th>Severity</th>
      </tr>
  </thead>
</table><tbody>
    <tr>
    <td>${title}</td>
    <td>${isssuedecp}</td>
    <td>${testname}</td>
    <td>${sevrty}</td>
    </tr>
    </tbody></table>`;
  //   append for displaying on html
  issue_list.appendChild(li);
  //   creating object req for local storage

  var inputs = {
    title1: title,
    isssuedecp: isssuedecp,
    testname1: testname,
    sevrty1: sevrty,
  };

  // if firsttime page loads save to locak storage
  if (localStorage.getItem("issueslist") === null) {
    var issues = [];

    issues.push(inputs);
    localStorage.setItem("issueslist", JSON.stringify(issues));
  } else {
    // if already  a local stoarge save parse & push so dont overwrites its value
    var issues = JSON.parse(localStorage.getItem("issueslist"));
    issues.push(inputs);
    localStorage.setItem("issueslist", JSON.stringify(issues));
  }

  // reseting the form input tabs
  document.getElementById("myform1").reset();
}
function oldf() {
  var issues = JSON.parse(localStorage.getItem("issueslist"));
  var issue_list = document.getElementById("issuesList");
  issue_list.innerHTML = "";

  for (let index = 0; index < issues.length; index++) {
    const titleold = issues[index].title1;
    const issold = issues[index].isssuedecp;
    const testnameold = issues[index].testname1;
    const svrtold = issues[index].sevrty1;

    let li = document.createElement("tbody");
    li.innerHTML += ` <table class="table table-bordered"><thead class="bg-secondary text-light">
      <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Tester</th>
          <th>Severity</th>
      </tr>
  </thead><tbody>
              <tr>
              <td>${titleold}</td>
              <td>${issold}</td>
              <td>${testnameold}</td>
              <td>${svrtold}</td>
              </tr>
              </tbody></table>`;
    //   append for displaying on html
    issue_list.appendChild(li);
    //   for clearing input
    // document.getElementById("myform1").reset();
  }
}