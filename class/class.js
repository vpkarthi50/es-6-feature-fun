class main{
    getData(){
        console.log("Data");
    }
}

//we can display the class by creating  a new object

var data=new main();
data.getData();

// we can add a variable by using  the constructor

class main1{
    constructor(){
        this.name="js";
    }
    getData1(){
        console.log("add variable",this.name);
    }
}

// now we display the variaable declartion on it 

var constr=new main1();
constr.getData1();

// now we add a child to extend the from parent by inheritance method

class main2{
    constructor(){
        this.place="surandai";
    }
    getPlace(){
        console.log("add in child",this.place);
    }
}

class child extends main2{
    getPlace1(){
        super.getPlace();
    }
}

// for this program we dont create any object for the parent 
// we only create a objcet for child only

var child1=new child();
child1.getPlace1();
