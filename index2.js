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

  let inputs = {
    title1: title,
    isssuedecp: isssuedecp,
    testname1: testname,
    sevrty1: sevrty,
  };
  let issues = [];
  issues.push(inputs);
  console.log(issues);
  localStorage.setItem("issueslist", JSON.stringify(issues));
  //   for clearing input
  document.getElementById("myform1").reset();

  // if (localStorage.getItem("issueslist") === null) {
  //   //   issue object is inserted into the issues object in Local Storage
  //   var issues = [];
  //   issues.push(inputs);
  //   localStorage.setItem("issues", JSON.stringify(issues));
  // } else {
  //   var issues = JSON.parse(localStorage.getItem("issueslist"));
  //   issues.push(inputs);
  //   localStorage.setItem("issues", JSON.stringify(issues));
  // }
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
