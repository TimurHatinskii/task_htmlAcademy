let calculateSalary = function (dirtySalary) {
    let percent
    if (dirtySalary>=100000) {
      percent=0.45
      } else {
        percent=0.35
      }
      let netSalary = Math.round(dirtySalary-(dirtySalary*percent));
      return netSalary;
  };
  
  calculateSalary(40000)