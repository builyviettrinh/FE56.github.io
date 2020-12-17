var taskList = new TaskList();

getId("addItem").addEventListener("click", function () {
  var task = getId("newTask").value;

  // check validation
  var isValid = true;

  var id = Math.randum().toString().slice(2, 4);
});

function createTable(arr) {
  var content = "";
  arr.map(function (item, i) {
    content += `
            <ul>
                <li>
                    <span>${item.id} ${item.status} ${item.task}</span>
                    <div class="buttons">
                        <button class="remove" onclick=""> <i class="fa fa-trash-alt"></i></button>
                        <button class="complete" onclick=""><i class="far fa-check-circle"></i>
                </li>
            </ul>
        `;
  });
  getId("todo").innerHTML = content;
}

function getId(id) {
  return document.getElementById(id);
}
