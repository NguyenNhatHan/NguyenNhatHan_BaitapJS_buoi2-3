// Bài tập 1
function tinhTongLuong() {
    //input : tiền lương 1 ngày: number, số ngày làm: number
    var tienLuong = document.getElementById('tienLuong1ngay').value;
    var soGioLam = document.getElementById('soNgaylam').value;
    // kiểm tra input
    // console.log('Tổng lương', tienLuong)
    // console.log('Số giờ làm', soGioLam)
    var tongLuong = 0;
    //progress
    tongLuong = tienLuong * soGioLam;
    //output
    document.getElementById('tongLuong').innerHTML = tongLuong.toLocaleString();
}

// Bài tập 2
document.getElementById('tinhtientrungbinh').onclick = function () {
    // input
    let soThu1 = +document.getElementById('soThu1').value;
    let soThu2 = +document.getElementById('soThu2').value;
    let soThu3 = +document.getElementById('soThu3').value;
    let soThu4 = +document.getElementById('soThu4').value;
    let soThu5 = +document.getElementById('soThu5').value;
    let tongTrungbinh = 0;
    // progress
    tongTrungbinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
    //output
    document.getElementById('tongTrungbinh').innerHTML = tongTrungbinh.toLocaleString();
}
//Bài tập 3
document.getElementById('tinhtiendoiUSD').onclick = function () {
    //input
    let soTiendoi = document.getElementById('soTiendoi').value;
    let giaUSD = 23500;
    let tiendoira = 0;
    //progress
    tiendoira = soTiendoi * giaUSD
    //output
    document.getElementById('tiendoira').innerHTML = tiendoira.toLocaleString();
}
// Bài tập 4
document.getElementById('tichDtCv').onclick = function () {
    //input
    let chieuDai = +document.getElementById('chieuDai').value;
    let chieuRong = +document.getElementById('chieuRong').value;
    let tinhChuvi = 0;
    let tinhDientich = 0;
    //progress
    tinhChuvi = (chieuDai + chieuRong) * 2;
    tinhDientich = chieuDai * chieuRong;
    //output
    document.getElementById('tinhChuvi').innerHTML = tinhChuvi.toLocaleString();
    document.getElementById('tinhDientich').innerHTML = tinhDientich.toLocaleString();
}
// Bài tập 5
document.getElementById('tinhtong2kiso').onclick = function () {
    //input
    let number = +document.getElementById('so2chuso').value;
    let total = 0;
    //progess
    total += number % 10
    number = Math.floor(number / 10)
    total += number
    //output
    document.getElementById('tongla').innerHTML = total.toLocaleString();
}