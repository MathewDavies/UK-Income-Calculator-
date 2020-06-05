class User{
    constructor(salary, pension, loanScheme){
        this.salary = salary;
        this.pension = pension;
        this.loanScheme = loanScheme;
        
        this.loanDeduction = 0;
        this.taxableIncome = 0;
        this.taxFreeAllowance = 0;
        this.taxFreeAllowanceStandard = 12500;
        
    }
    
    taxable(){
         this.taxableIncome = this.salary - this.pension;
    }
    loanDed(){
        if (this.loanScheme == 0) {
            this.loanDeduction = 0;
        }else if (this.loanScheme ==1) {
            if (this.salary>19380) {
                this.loanDeduction = Math.round((this.salary - 19380) * 0.09);
            }else{
                this.loanDeduction = 0;
            }
        }else if (this.loanScheme ==2) {
            if (this.salary>26568){
            this.loanDeduction = Math.round((this.salary - 26568) * 0.09)
            }else{
                this.loanDeduction = 0;
            }
        }
    }
    taxFreeCalc(){
        this.taxable();
        if (this.taxableIncome > 100000 && this.taxableIncome < 125000){
            this.excess = this.taxableIncome - 100000;
            this.taxFreeAllowance = this.taxFreeAllowanceStandard - (this.excess/2);            
        }else if (this.taxableIncome >125000){
            this.taxFreeAllowance = 0;
        } else{
            this.taxFreeAllowance = this.taxFreeAllowanceStandard;
        }
    }


    returnValues() {
        this.taxable();
        this.loanDed();
        this.taxFreeCalc();
    
    }
}



//check values
       