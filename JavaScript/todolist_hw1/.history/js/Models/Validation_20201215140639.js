function Validation() {
  this.checkNull = function (input) {
    if (input === "") {
      window.alert("Vui long dien activity");
      return false;
    }
  };
  this.checkDuplicate = function (input) {
    return this.arr.findIndex(function (input) {
      return inputData === input.inputData;
    });
  };
}
