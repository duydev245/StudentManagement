var stdList = [];

var dataJson = localStorage.getItem("stdList");
if (dataJson !== null) {
  var dataRaw = JSON.parse(dataJson);
  for (var i = 0; i < dataRaw.length; i++) {
    var std = new Student(
      dataRaw[i].id,
      dataRaw[i].name,
      dataRaw[i].email,
      dataRaw[i].password,
      dataRaw[i].math,
      dataRaw[i].physics,
      dataRaw[i].chemis
    );
    stdList.push(std);
  }
  renderStdList(stdList);
}

function resetForm() {
  document.getElementById("formQLSV").reset();
  document.getElementById("txtId").readOnly = false;
  document.getElementById("addBtn").disabled = false;
}

function insertStd() {
  var std = importData();

  stdList.push(std);
  console.log("stdList: ", stdList);

  var dataJson = JSON.stringify(stdList);
  localStorage.setItem("stdList", dataJson);
  renderStdList(stdList);
  resetForm();
}

function delStd(id) {
  var index = stdList.findIndex(function (item) {
    return item.id == id;
  });
  stdList.splice(index, 1);
  renderStdList(stdList);
}

function modifyStd(id) {
  var index = stdList.findIndex(function (item) {
    return item.id == id;
  });

  var updateStd = stdList[index];
  console.log("updateStd: ", updateStd);

  document.getElementById("txtId").value = updateStd.id;
  document.getElementById("txtName").value = updateStd.name;
  document.getElementById("txtEmail").value = updateStd.email;
  document.getElementById("txtPass").value = updateStd.password;
  document.getElementById("txtMathMark").value = updateStd.math;
  document.getElementById("txtPhysicsMark").value = updateStd.physics;
  document.getElementById("txtChemisMark").value = updateStd.chemis;

  document.getElementById("txtId").readOnly = true;
  document.getElementById("addBtn").disabled = true;
}

function updateStd() {
  var std = importData();
  var index = stdList.findIndex(function (item) {
    return item.id == std.id;
  });

  stdList[index] = std;
  var dataJson = JSON.stringify(stdList);
  localStorage.setItem("stdList", dataJson);
  renderStdList(stdList);
  resetForm();
}
