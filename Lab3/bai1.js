//----------- nhập điểm và tính điểm trung bình---------//
let a = prompt("Mời bạn nhập điểm môn Toán");
a=parseFloat(a,10);
let b = prompt("mời bạn nhập điểm môn Lý");
b=parseFloat(b,10);
let c= prompt("Mời bạn nhập điểm môn Hóa");
c=parseFloat(c,10);
let d= prompt("Mời bạn nhập điểm môn Sinh");
d=parseFloat(d,10);
var diemTB=(a+b+c+d)/4;
console.log(diemTB)
//--------kiểm tra điểm có thuộc khoảng từ 0-10----------//
if(a>10 || b>10 || c>10 || d>10 || a<0 || b<0 || c<0 || d<0){
    alert("điểm nằm trong khoản từ 0-10");
}
//--------------tạo menu lựa chọn bằng switch_case------------//
do {
    var menu=prompt("1. Tính điểm trung bình (switch case)\n2. Tính điểm trung bình (if else)\n0. Thoát\nMời bạn chọn");
    menu=parseInt(menu,10);
    var kt;
        kt = false
        switch (menu) {
            case 0:
                break;
            case 1:
                diemTB_switchcase();
                break;
            case 2:
                //----------tính điểm TB bằng if_else---------//
                if(diemTB<=10){
                    console.log("Giỏi");
                }
                else if(diemTB<8){
                    console.log("Khá");
                }
                else if(diemTB<7){
                    console.log("Trung bình");
                }
                else if(diemTB<5){
                    console.log("Yếu");
                }
                break;
            default:
                alert("Vui lòng nhập 1 hoặc 2");
                kt = true;
                break;
        }
    } while (kt != false);
    //------------tính điểm TB bằng switch_case------//
    function diemTB_switchcase(){
        switch (diemTB) {
            case 1:
            case 2:
            case 3:    
            case 4:
                console.log("Học lực: Yếu");
                break;
            case 5:
            case 6:
                console.log("Học lực: Trung Bình");
                break;
            case 7:
            case 8:
                console.log("Học lực: Khá");
                break;
            default:
                console.log("Học lực: Giỏi");
                break;
        }
    }
    