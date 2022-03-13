export class Message{
    //Following syntax is used to pass default parameters into const
    //if you don't pass any value default value is considered
    //If value is passed those are considered/used
    constructor(public id:number=0,public name:string="")
    {
           this.id=id;
           this.name=name;  
    }
    
}