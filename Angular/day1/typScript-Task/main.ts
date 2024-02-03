class Account {
    
    constructor(public Acc_no:number, public Balance: number){}

    debitAmount(){};
    creditAmount(){};
    getBalance(){};
}


interface IAccount {
    Date_of_opening: Date;

    addCustomer();
    removeCustomer();

}


class Current_Account extends Account implements IAccount {
    

    constructor(Acc_no:number,Balance: number, public Interest_rate: number, public Date_of_opening: Date ){
        super(Acc_no, Balance);
    }
    addCustomer() {
       
    }
    removeCustomer() {
        
    }
};

class Saving_Account extends Account implements IAccount {
    
    constructor( Acc_no:number, Balance: number,public min_Balance: number, public Date_of_opening: Date){
        super(Acc_no, Balance);

    }
    addCustomer() {
       
    }
    removeCustomer() {
        
    }
};


