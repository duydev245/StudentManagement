//  Import data from form
function importData() {
  var id = document.getElementById("txtId").value;
  var name = document.getElementById("txtName").value;
  var email = document.getElementById("txtEmail").value;
  var password = document.getElementById("txtPass").value;
  var math = document.getElementById("txtMathMark").value * 1;
  var physics = document.getElementById("txtPhysicsMark").value * 1;
  var chemis = document.getElementById("txtChemisMark").value * 1;

  var std = new Student(id, name, email, password, math, physics, chemis);

  return std;
}

// Render arr to table
function renderStdList(stdArr) {
  var contentHTML = '';

  for (var i = 0; i < stdArr.length; i++) {
    var std = stdArr[i];
    var trString = ` <tr>
                              <td>${std.id}</td>
                              <td>${std.name}</td>
                              <td>${std.email}</td>
                              <td>${std.avg()}</td>
                              <td>
                              <button
                              onclick="delStd(${std.id})"
                              class='btn btn-danger'>Delete</button>
                              <button
                              onclick="modifyStd(${std.id})"
                              class='btn btn-dark'>Modify</button>
                              </td>
                         </tr>`;
    contentHTML += trString;
  }

  document.getElementById("tbodyStudent").innerHTML = contentHTML;
}
