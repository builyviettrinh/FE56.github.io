var taskList = new TaskList();

getId("addItem").addEventListener("click", function () {
  var task = getId("newTask").value;

  // check validation
  var isValid = true;
});

function createTable(arr) {
  var content = "";
  arr.map(function (item, i) {
    content += `
            <ul>
            <li>
            <span>${item.id} ${item.status} ${item.task}</span>
                        <div class="buttons">
            <button class="remove" onclick="deleteTask(${item.id})"> <i class="fa fa-trash-alt"></i></button>
            <button class="complete" onclick="">
        <i class="far fa-check-circle"></i>
            </li>
            </ul>
        `;
  });
}

function getId(id) {
  return document.getElementById(id);
}
