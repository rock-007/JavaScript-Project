
// saveIssue is event handler method that is once the submit is pressed saveIssue method will be exceuted
document.getElementById('issueInputForm').addEventListener('submit', saveIssue)
var issueDesc123 = document.getElementById('issueDescInput');
var issueDesc1234=issueDesc123.value;
console.log(issueDesc123)
console.log(issueDesc1234)

function saveIssue(e) {
    
console.log(e);

    var issueDesc = document.getElementById('issueDescInput').value;
    console.log(issueDesc)

    var issueSeverity = document.getElementById('issueSeverityInput').value;
    var issueAssignedTo = document.getElementById('AssignTo').value;
    var issueId = chance.guid();
    var issueStatus = 'Open';

    // create an object

    var issue = {

        id: issueId,
        description: issueDesc,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status: issueStatus

    }
    if (localStorage.getItem('issues') == null ) {

        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues))
    }
    else {
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues))

    }

    // rest input elelemts so that next person can put another cvalues too

    document.getElementById('issueInputForm').reset();
    fetchIssues();
    e.preventDefault();
}

function setStatusClosed(id) {

    var issues = JSON.parse(localStorage.getItem('issues'));

    for (var i = 0; i < issues.length; i++) {

        if (issues[i].id == id) {

            issues[i].status = 'Closed';

        }

    }
    localStorage.setItem('issues', JSON.stringify(issues));
    fetchIssues();

}

function deleteIssue(id) {


    var issues = JSON.parse(localStorage.getItem('issues'));

    for (var i = 0; i < issues.length; i++) {

        if (issues[i].id == id) {

            issues.splice(i, 1);

        }

    }
    localStorage.setItem('issues', JSON.stringify(issues));
    fetchIssues();

}


// it will fetch the list of issue savialable locally in the browser local storage
function fetchIssues() {
    // from local storage(browser) it will get the item with the name issues and parse from the json format
    // i think issues here as an collection of an object in an array 
    var issues = JSON.parse(localStorage.getItem('issues'))
    var issuesListe = document.getElementById('issuesList')
    // the below to make sure it is enpty
    issuesList.innerHTML = '';

    for (var i = 0; i < issues.length; i++) {
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;
        issuesList.innerHTML += ` <div class="well"> 

        <h6> Isssue ID  ${id}  </h6> 

        <p> <span class="label label-info">  ${status} </span></p> 

        <h3>  ${desc}  </h3> 

        <p><span class="glyphicon glyphicon-time"></span> ${severity}  </p>

        <p><span class="glyphicon glyphicon-user"></span>  ${assignedTo} </p> 

        <a href="#" onclick="setStatusClosed('${id}')" class="btn btn-warning"> close</a> 

        <a href="#" onclick="deleteIssue('${id}')"class="btn btn-danger"> Delete</a> 

        </div> `;
    }

}