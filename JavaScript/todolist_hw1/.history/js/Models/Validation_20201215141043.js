function Validation() {
  this.checkNull = function (input) {
    if (input === "") {
      window.alert("Vui long dien activity");
      return false;
    }
  };
  this.timViTri = function(input){
      return this.arr.findIndex(function(item){
          return id === item.id;
      });
  };
  this.checkDuplicate = function (input) {
    var viTri = -1;

}
