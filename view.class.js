class View{

constructor(){
    this.grossPA = document.getElementById('gross-pa');
    this.grossPM = document.getElementById('gross-pm');
    
    this.taxFreePA = document.getElementById('taxfree-pa');
    this.taxFreePM = document.getElementById('taxfree-pm');
    
    this.totalTaxablePA = document.getElementById('totaltaxable-pa');
    this.totalTaxablePM = document.getElementById('totaltaxable-pm');
    
    this.taxPaid20PA = document.getElementById('taxpaid20-pa');
    this.taxPaid20PM = document.getElementById('taxpaid20-pm');
    
    this.taxPaid40PA = document.getElementById('taxpaid40-pa');
    this.taxPaid40PM = document.getElementById('taxpaid40-pm');
    
    this.taxPaid45PA = document.getElementById('taxpaid45-pa');
    this.taxPaid45PM = document.getElementById('taxpaid45-pm');
    
    this.nIPA = document.getElementById('ni-pa');
    this.nIPM = document.getElementById('ni-pm');
    
    this.totalDeductionsPA = document.getElementById('totaldeductions-pa');
    this.totalDeductionsPM = document.getElementById('totaldeductions-pm');
    
    this.takeHomePA = document.getElementById('takehome-pa');
    this.takeHomePM = document.getElementById('takehome-pm');
    
    }
    formatter (num){
      return  new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
      }).format(num);
    }
    yearToMonth(num){
      num=num/12;
      return num;
    }

    setFields(
        salary,
        taxFreeAllowance,
        totalTaxable, 
        userBasicAmount, 
        userHigherAmount, 
        userAdditionalAmount, 
        userNI,
        totalDeductions,
        takeHome
        ){
        this.grossPA.innerHTML = this.formatter(salary);
        this.grossPM.innerHTML = this.formatter(this.yearToMonth(salary));
        this.taxFreePA.innerHTML = this.formatter(taxFreeAllowance);
        this.taxFreePM.innerHTML = this.formatter(this.yearToMonth(taxFreeAllowance));

        this.totalTaxablePA.innerHTML = this.formatter(totalTaxable);
        this.totalTaxablePM.innerHTML = this.formatter(this.yearToMonth(totalTaxable));
      
   
        this.taxPaid20PA.innerHTML = this.formatter(userBasicAmount);
        this.taxPaid20PM.innerHTML = this.formatter(this.yearToMonth(userBasicAmount));
      
        this.taxPaid40PA.innerHTML = this.formatter(userHigherAmount);
        this.taxPaid40PM.innerHTML = this.formatter(this.yearToMonth(userHigherAmount));
   
        this.taxPaid45PA.innerHTML = this.formatter(userAdditionalAmount);
        this.taxPaid45PM.innerHTML = this.formatter(this.yearToMonth(userAdditionalAmount));
   
        this.nIPA.innerHTML = this.formatter(userNI);
        this.nIPM.innerHTML = this.formatter(this.yearToMonth(userNI));
        
        this.totalDeductionsPA.innerHTML = this.formatter(totalDeductions);
        this.totalDeductionsPM.innerHTML = this.formatter(this.yearToMonth(totalDeductions));

        this.takeHomePA.innerHTML = this.formatter(takeHome);
        this.takeHomePM.innerHTML = this.formatter(this.yearToMonth(takeHome));
  
      }


};

