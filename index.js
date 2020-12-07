// An empty Array to store the accounts
var accounts=[]
var Num=125600

var  accNum;
// Beginning of the class constructor for the accounts Array 
class User{
    // constructor for the user
    constructor(name,age,location,phoneNum){
        this.name=name;
        this.age=age;
        this.location=location;
        this.phoneNum=phoneNum;
        this.balance=0
         this.accountNum= Num++;
    }
    // add the account to the accounts array 
    createAccount(){
    var account = this;
   accNum= this.accountNum;
    accounts.push(account)
    
    console.log(`${this.name} your account has been created`)
    }
    // deposit Money to your account
    depositMoney(amount){
    console.log(`${this.name} you have deposited shs ${amount}`)
    return(this.balance+=amount)
    }
    mobileMoney(amount){
        console.log(`${this.name} has deposited shs ${amount} from ${this.phoneNum}`)
        return(this.balance+=amount)
        }
     // withdraw Money from your account
    withdrawMoney(amount){
        if(amount<=this.balance){
            console.log(`${this.name} you have withdrawn shs ${amount}`)
            console.log(this.balance-=amount)
        }
        else if(amount>this.balance){
            console,log(`Hey ${this.name} you have insufficient balance`)
        }
    }
     // transfer Money from one account to another
    transferMoney(){
    
    }
    // delete account from the bank's accounts
    deleteAccount(){
        var account = this;
        accounts.splice(account,1)
        console.log(`${this.name} your account has been created`) 
        this.balance=0
    }
   
}

var user1= new User("katerega Ashiraf",21,"kampala",+256750365604);
var user2= new User("nakeye Alice",12,"kibuli",+256783452190)
var user3= new User("kisekka Mathias",32,"kansanga",+25678345290)
var user4= new User("Angifo Licoln",32,"Nsambya"+25675401237)
var user5= new User("gamulisa ronald ",32,"Katwe"+2567099753)