let isimler = [];
let kullaniciSayisi = Number(
  prompt("Eklemek isteğiniz kullanıcı sayısını girin:")
);

let kullaniciIsim;

function kullaniciEkle() {
  for (let i = 0; i < kullaniciSayisi; i++) {
    kullaniciIsim = prompt("Eklemek isteğiniz ismi girin:");
    isimler.push(kullaniciIsim);
  }

  console.log(isimler);
}

function kullanicilariListele() {
  for (let i = 0; i < isimler.length; i++) {
    isimler.sort();
    console.log(`${isimler[i]}`);
  }
}

kullaniciEkle();
kullanicilariListele();
