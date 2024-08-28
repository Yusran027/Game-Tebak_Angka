var sisa = 3;
var element = document.getElementById("coba");
var change = document.getElementById("change");
var kesempatan = document.getElementById("kesempatan");

// Mengecek sisa kesempatan
function updateKesempatan() {
  kesempatan.innerHTML = "Sisa Kesempatan: " + sisa;
  if (sisa == 0) {
    kesempatan.innerHTML = "GAME OVER";
  }
}
updateKesempatan();

// menampilkan text dan tombol coba lagi
function klikYa() {
  document.getElementById("ya").style.display = "none";
  document.getElementById("tidak").style.display = "none";
  element.style.display = "none";
  change.innerHTML = "Ayo Tebak Lagi";
  document.getElementById("cari").style.display = "block";
  document.getElementById("x").style.display = "block";
  sisa = 3;
  updateKesempatan();
}
function klikTidak() {
  change.innerHTML = "TERIMAKASIH SUDAH MENCOBA";
  document.getElementById("ya").style.display = "none";
  document.getElementById("tidak").style.display = "none";
  element.style.display = "none";
  document.getElementById("rule").innerHTML = "Score Anda: " + score;
  kesempatan.style.display = "none";
}
let nilai = Math.floor(Math.random() * 10) + 1; //`floor` mengambil bilangan bulat 1-10
let score = 0;
let count = 0;
let maxCount = 3;
function play() {
  sisa--;
  updateKesempatan();
  var x = document.getElementById("x").value;

  // menngecek berapa kali percobaan dilakukan
  if (count < maxCount) {
    count++;
    console.log(count + " kalicoba");

    // mengecek nilai inputan
    if (x == nilai) {
      count = 0;
      score++;
      change.innerHTML =
        "SELAMAT! anda BENAR, angka yang benar adalah " + nilai;

      cobaLagi();
      nilai = Math.floor(Math.random() * 10) + 1;
    } else if (x > nilai && x < 11) {
      change.innerHTML = "Angka terlalu tinggi";
    } else if (x < nilai && x > 0) {
      change.innerHTML = "Angka terlalu rendah";
    } else if (x < 1 || x > 10) {
      change.innerHTML = "SALAH pilihannya hanya angka 1-10";
    } else {
      change.innerHTML = "yang anda input bukan angka";
    }
  }
  if (count === maxCount && x != nilai) {
    count = 0;
    cobaLagi();
    change.innerHTML = "Anda GAGAL, angka yang anda cari adalah " + nilai;
    console.log("anda gagal mencoba");
    nilai = Math.floor(Math.random() * 10) + 1;
  }

  function cobaLagi() {
    document.getElementById("ya").style.display = "block";
    document.getElementById("tidak").style.display = "block";
    element.style.display = "block";
    document.getElementById("cari").style.display = "none";
    document.getElementById("x").style.display = "none";
  }
  console.log(nilai);
}
