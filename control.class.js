
class Control{

    constructor(){
        this.salaryField = document.getElementById('salary');
        this.loanZero = document.getElementById('loan-0');
        this.loanOne = document.getElementById('loan-1');
        this.loanTwo = document.getElementById('loan-2');
        this.pensionField = document.getElementById('pension');
        this.salary;
        this.pension;
        this.loanType;
        }

        submitData(){
            if (this.loanZero.checked == true){
                this.loanType = 0;
            } else if(this.loanOne.checked == true){
                this.loanType = 1;
            } else if (this.loanTwo.checked ==true){
                this.loanType = 2;
            } else{
                console.log("error - no loan type selected");
            }
            this.salary = this.salaryField.value;
            this.pension = this.pensionField.value;

            console.log(this.salary + "salary");
            console.log(this.pension + "pension");
            console.log(this.loanType + "loantype");
            }

}



/*
console.log(currentUser.pension);
console.log(currentUser.loanScheme);

console.log(currentUser.loanDeduction);
console.log(currentUser.taxableIncome);
console.log(currentUser.taxFreeAllowance);
*/


