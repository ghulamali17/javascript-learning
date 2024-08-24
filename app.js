function Students(first,last,age,cls){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.class=cls;
}
var students1=new Students("ali", "brohi", 23, 10);
console.log(students1)