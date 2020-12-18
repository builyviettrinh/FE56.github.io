var taskList = new function();
function Validation(){
    this.checkNull = function(input){
        if(input === ""){
            window.alert("Vui lòng điền activity");
            return false;
        }
    }

    this.checkDuplicate = function(task){
        if(taskList.checkDuplicate(task) !== -1){
            window.alert("activity bị trùng");
            return false;
        }
    }
}