class Calc{
    constructor(taxableIncome, taxFreeAllowance){
        
        this.basicBand = 37500;
        this.higherBand = 100000;
        this.additionalLimit = 150000;
        this.basicRate = 0.2;
        this.higherRate = 0.4;
        this.additionalRate = 0.45;

        this.userBasicAmount;
        this.userHigherAmount;
        this.userAdditionalAmount;
        
        
        this.lowerEarningsLimit = 9500;
        this.lowerEarningsRate = 0.12
        this.upperEarningsLimit = 50000;
        this.upperEarningsRate = 0.02
       
        this.userLEA=0;
        this.userUEA=0;
        this.userNI=0;

        this.taxableIncome = taxableIncome;
        this.taxFreeAllowance = taxFreeAllowance;
        this.taxFreeAllowanceStandard = 12500;
        this.totalTaxable;
        this.totaldeductions;
        this.totalIncomeTax;
        this.takeHome;
    }

incomeTaxCalc(){

    this.totalTaxable = this.taxableIncome - this.taxFreeAllowance;
// No tax
        if (this.totalTaxable <= 0){
        this.userBasicAmount = 0;
        this.userHigherAmount =0;
        this.userAdditionalAmount =0;
//basic rate payer
    }else if(this.totalTaxable < this.basicBand){
        this.userBasicAmount = this.totalTaxable * this.basicRate;
        this.userHigherAmount =0;
        this.userAdditionalAmount =0;
//higher rate payer
    }else if(this.totalTaxable < this.additionalLimit){
        this.userBasicAmount = this.basicBand * this.basicRate;
        this.userHigherAmount =(this.totalTaxable - this.basicBand) *this.higherRate; 
        this.userAdditionalAmount =0;
//additional rate payer
    }else if(this.totalTaxable >= (this.additionalLimit)){
      
        this.userBasicAmount = this.basicBand * this.basicRate;
        this.userHigherAmount = (this.totalTaxable-this.basicBand - (this.totalTaxable- this.additionalLimit))  * this.higherRate;
        this.userAdditionalAmount =(this.totalTaxable - this.additionalLimit) * this.additionalRate;
        }
        
    }

    nICalc(){
    // No tax
            if (this.taxableIncome <= this.lowerEarningsLimit){
            this.userNI = 0;
    //LEL Payer
        }else if(this.taxableIncome <= this.upperEarningsLimit){
            this.userNI = (this.taxableIncome-this.lowerEarningsLimit) * this.lowerEarningsRate;
    //UEL Payer
        }else if(this.taxableIncome > this.upperEarningsLimit){
           this.userLEA = (this.upperEarningsLimit - this.lowerEarningsLimit) * this.lowerEarningsRate;
           this.userUEA = (this.taxableIncome - this.upperEarningsLimit)* this.upperEarningsRate;
           this.userNI = this.userLEA + this.userUEA;
        }else{
            console.log("error");
        }
    }
    totals(){
        this.totalIncomeTax = this.userBasicAmount +this.userHigherAmount+ this.userAdditionalAmount;
        this.totalDeductions = this.userNI + this.totalIncomeTax;
        this.takeHome = this.taxableIncome -this.totalDeductions;
    }

    returnValues(){
        this.incomeTaxCalc();
        this.nICalc();
        this.totals();
    }
}