alert('Selamat Datang di game penghilang GABUT. Klik ok untuk melanjutkan')
var tanya = true;
while ( tanya ){
//menangkap pilihan player
var p = prompt('pilih gan: kertas, gunting, batu');

//menangkap pilihan komputer
//membangkitkan bilngan random
var comp = Math.random();

if(comp < 0.34 ){
  comp = 'kertas';
}else if( comp >= 0.34 && comp < 0.67 ){
  comp ='gunting';
}else{
  comp ='batu';
}

var hasil = '';
//menentukan rules
if( p == comp ){
  hasil ='seri';
}else if( p == 'kertas'){
  hasil = ( comp == 'gunting' ) ? 'KALAH!' : 'MENANG!';
}else if( p == 'gunting') {
  hasil = ( comp == 'kertas') ? 'MENANG!' : 'KALAH!';
}else if( p == 'batu'){
  hasil = ( comp == 'gunting') ? 'MENANG!' : 'KALAH!'; 
}else {
  hasil = ' Memasukan Pilihan Yang Salah Cukkk!! MAAP NGEGAS!! HEHE😅😅😅'
}
// tamplikan hasilnya
alert('Kamu memilih : ' + p + ' dan Thoriq memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil )

tanya = confirm('Kamu masih gabut? Ayo coba lagi biar ga gabut!!')
}

alert('Terima Kasih sudah mengunjungi game ga jelas ini semoga kamu tidak gabut lagi😁😁');