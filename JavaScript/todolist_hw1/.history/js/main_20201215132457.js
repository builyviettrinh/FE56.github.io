getId("addItem").addEventListener("click", function () {
  var task = getId("newTask").value;
  console.log(task);
});

// ham dung chung cho gon
function getId(id) {
  return document.getElementById(id);
}
