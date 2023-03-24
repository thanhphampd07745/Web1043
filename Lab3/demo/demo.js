let person= {
    lastName:"phạm",
    fistName:"Thành",
    getFullName: function(){
        let fullName = this.lastName + " " + this.fistName
        return fullName;
    }
};
console.log(person.getFullName());
class SinhVien{
    constructor(maSV, ho, ten, namsinh, email){
this.ten=ten;
this.namsinh=namsinh;
this.email=email;
    }
getAge(){
    const date = new Date();  
    let currentYear = date.getFullYear();
    let age = currentYear - this.namsinh;
    return age;
}
}
let sv1 = new SinhVien('SV001', 'Tran', 'Tong', '1989', 'trantong@gmail.com')
console.log(sv1.getFullName() + ";" + sv1.getAge() + "tuổi.");
window.open();
let w=window.innerWidth;
let h=window.innerHeight;
console.log("width:" + w +"Height" + h);
console.log("width:"+ screen.width + "\n" +
le
)