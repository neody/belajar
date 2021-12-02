const umur = (tanya_umur, tanya_nama) => console.log(`umur ${tanya_nama} :` + tanya_umur)
umur(23, 'yadi')
umur(33, 'Adi')

class manusia {
 gender = 'wanita';

 cetakgender = () => {
  console.log("Jenis Kelamin : " + this.gender)
 }


}
class Orang extends manusia {
 gender = 'pria';
 nama = 'yadi';
 cetak_nama = () => {
  console.log(`nama : ${this.nama}`)
 }
}
const orang = new Orang();
orang.cetakgender();
orang.cetak_nama();