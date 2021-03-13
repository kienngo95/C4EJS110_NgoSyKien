console.log('Ngô Sỹ Kiên');

//Bài 1
/*c1*/ console.log('let, var, const là các từ câu lệnh ở đầu mỗi biến trong js');
/*c2*/ console.log('var là một biến toàn cục, dùng được ở nhiều nơi, var có thể được cập nhật và khai báo lại');
console.log('let thì phụ thuộc vào phạm vi và là 1 khối được giới hạn, chỉ ở trong block code, let có thể được cập nhật nhưng không được khai báo lại');
/*c3*/ console.log('const là khai báo hẳng và cũng phụ thuộc vào phạm vi, chỉ ở trong block code, const không thể cập nhật và không thể khai báo lại');
/*c4*/ console.log('var, let, const được sử dụng trong các trường hợp khai báo một biến');


//Bài 2
let booLean = ('Boolean là một phép toán chỉ ra 2 giá trị kết quả');
alert(booLean);

alert('Kết quả của BooLean là ra có/không , bật/tắt , đúng/sai. Nói cách khách kết quả chỉ có true hoặc false');



//Bài 3
for (let x = 0; x < 7; x++) {console.log(x)};

var y = prompt('Nhập số bất kì');
for (let t = 0; t < y; t++) {console.log(t)};

var m = prompt('Nhập số vào');
for (let z = 3; z < m; z++) {console.log(z)};

var a1 = prompt('Nhập số lớn');
var a2 = prompt('Nhập số bé');
for (let a = a1-1; a >= a2; a--) {console.log(a)};

var m1 = Number(prompt('Nhập số lớn'));
var m2 = Number(prompt('Nhập số bé'));
for (let m = m2; m < m1; m = m + 3) {
    console.log(m);
}

var f1 = Number(prompt('nhập số lớn'));
var f2 = Number(prompt('nhập số nhỏ'));
var f3 = Number(prompt('nhập số cộng'));
for (let f = f2; f < f1; f = f + f3) {
    console.log(f);
}



//Bài 4
var c = prompt('Nhập số');
var gt = 1
for (i = 1; i <= c; i++) {gt = gt*i};
alert(`Giai thừa của  ${c} là ${gt}`);

//Bài 5
var age = prompt('Tuổi của bạn là :');
if (age < 14) {
    alert('Bạn không đủ tuổi xem film 14+');
}
else {
    alert('Đủ tuổi rồi bạn ei');
}

//BÀi 6
var handSome = prompt('Hãy tự đánh giá mức độ đẹp zai của bạn ( thang điểm từ 0-9 )');
if (handSome > 0 & handSome < 4.5) {
    alert('Bạn cũng khá đấy');
} 
else if (handSome <= 9) {
    alert('Bạn xạo vừa thôi');
}

//Bài 7
var q = prompt('Q =');
var k = prompt('K =');
if (q < k) {
    alert(` Số ${q} nhỏ hơn số ${k} ae nhỉ`);
}
else if (q > k) {
    alert(` Số ${q} lớn hơn số ${k} mà`);
}
else {alert(` Hai số bằng nhau rồi`);}

//Bài 8
var chiaHai = prompt('Mời bạn nhập số :');
if (chiaHai % 2 == 0) {
    alert('Đây là một số chia hết cho 2');
} 
else {
    alert('Không chia hết cho 2 rồi');
} 

//Bài 9
for (let hL = 1; hL <= 6; hL++) {
    if (hL <= 3) {console.log('L');}
    else {console.log('H');}
}


var hhL = prompt('Điền số vào');
for (var l1 = 1; 0 < l1 & l1 < hhL; l1++) {
    if (l1 < hhL/2) {console.log("H");}
    else {console.log('L');}
} 

for (var o1 = 1; o1 <= 8; o1++) {
    if (o1 < 5) {console.log('0');}
    else {console.log('1');}
}

var p = prompt('Viết số vào đây');
for (let p1 = 1; p1 < p; p1++) {
    if (p1 % 3 == 0) {
        console.log("1");
    }
    else {
        console.log("0");
    }
}


//Bài 10
var cN = prompt('Số cân nặng (kg) của bạn');
var cC = prompt('Chiều cao (cm) của bạn');
console.log(cN*10000/(cC*cC));

let BMI = console.log(cN*10000/(cC*cC));

if (BMI < 16) {
    alert('Bạn quá gầy');
}
else if (BMI < 18.5) {
    alert('Bạn gầy');
}
else if (BMI < 25) {
    alert('Bạn được đấy');
}
else if (BMI < 30) {
    alert('Hơi béo rồi đấy');
}
else {
    alert('Giảm câm đi')
}



