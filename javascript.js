//! Bu kodda yazılanların daha anlaşılır olması için 'Better Comments' eklentisi kullanılmıştır.


//! Bu Renkte Yazılan Metinler Ana Konu Başlıklarıdır.
//* Bu Renkte Yazılan Metinler İç Konu Başlıklarıdır.
// Bu renkte Yazılan Metinler Açıklamalardır.
//? Bu Renkte Yazılan Metinler Örneklerdir.





//! JavaScript Yazmak İçin Kurulum Nasıl Yapılır !

// Node.js kur. Kurduktan sonra terminale node -v yaz ve kurulu olup olmadığını veya güncel olup olmadığını gör.

//! Tarayıcı :

// Tarayıcı olarak Google Chrome kullan.
// Mac ile command + option + + j yaparak, windows ve linux'da ise ctrl + shift + j ile tarayıcıda console'u açabiliriz.

//! Yorum Satırları Nasıl Yapılır Ve Kullanılır !

// Tek Satırlı Açıklama :

// Bu ilk yorum
// Bu ikinci yorum
// Bu üçüncü yorum

// Çok satırlı açıklama :
 
/* Bu çok satırlı bir yorumdur. 
 Çok satırlı yorumlar birden çok satır alabilir. 
 JavaScript web'in dilidir.*/

 //! Aritmetik İşlemler Nasıl Yapılır !

//? console.log(2+3); // Toplama
//? console.log(3-2); // Çıkarma
//? console.log(2*3); // Çarpma
//? console.log(3/2); // Bölme
//? console.log(3%2); // Mod Alma
//? console.log(3**2); // Üs Alma

//! Bir Web Sayfasında JavaScript Kodları Nasıl Oluşturulur ?

// Satır içi oluşturma.
// Dahili oluşturma.
// Harici oluşturma.
// Çoklu harici oluşturma.

// * SATIR İÇİ OLUŞTURMA :

//? <button onclick = "alert('BarbarosGöçmen')"> Bana Tıkla </button>

// * DAHİLİ OLUŞTURMA :

//? <body>
//?   <script>
//?     console.log("BarbarosGöçmen");
//?     </script>
//?  </body>

// * HARİCİ OLUŞTURMA :

//? <head>
//?     <title>BarbarosGöçmen</title>
//?    <script src = "introdiction.js"></script>
//?     </head>

// * ÇOKLU HARİCİ OLUŞTURMA :

// Harici oluşturma ile aynı mantığa sahiptir sadece birden fazla js dosyası ekleyebiliriz.

//! Veri Türleri Nedir Ve Ne İşe Yarar !

// JavaScript'te ve diğer programlama dillerinde farklı tiplerde veri türleri vardır. JavaScript ilkel veri tipleri şunlardır : String (Metin) - Number (Sayı) - Boolean (True-False) - Undefined (Tanımsız) - Null (Boş) ve Symbol (Sembol).


// * SAYILAR :


// Tam sayılar.
// Ondalıklı sayılar.
// 0, 1, 2, 3, -2, -3, -3.5, 0.0


// * STRİNG :


// Tek tırnak, çift tırnak, veya ters tırnak (backtick) arasında yer alan bir veya daha fazla karakterden oluşan metinsel değerlerdir.
// "Halil" , 'Barbaros' , `Göçmen`


// * BOOLEAN :


// Boolean veri türü yalnızca true veya false değer alır - dönderir.


// * UNDEFINED (TANIMSIZ) :


//  JavaScript'te bir değişkene bir değer atamaz isek değeri undefined olarak alır. Buna ek olarak bir fonksiyon hiçbir şey döndürmüyorsa, döndereceği tanım undefined'tır.
//  let ismim :
//  console.log(ismim); // Undefined, çünkü henüz değişkene bir değer atanmamış.


// * NULL (BOŞ) :


// JavaScript'te null boş bir değer anlamına gelir.
// let bosDeger = null;


// * VERİ TÜRLERİNİ KONTROL ETME :


//? console.log(typeof "Barbaros"); // String
//? console.log(typeof 5); // Number
//? console.log(typeof true); // Boolean
//? console.log(typeof null); // Object Type
//? console.log(typeof undefined); // Undefined

//! Değişkenler Nedir Ve Nasıl Kullanılır ?

// Değişkenlere veri kapsayıcılar diyebiliriz. Unutmayınıx ki değişkenler, verileri belleklerde (ram) saklar. Bir değişken atandığında belleklerde kendisi için yer ayrılır. Bir değişkene bir değer (veri) atandığında, bellek alanı bu verilerle doldurulur. Değişken tanımlamak için var, let veya const keywords'lerini kullanırız.

// Değişken değerinin kodumuzun farklı yerlerinde değiştirilmesi gerekiyorsa let kullanırız. Eğer değişken verisi hiçbir yerde değişmeyecek ise bu durumda const kullanırız.

// Geçerli bir JavaScript değişken adı aşağıdaki kurallara uymalıdır :
// JavaScript değişken adı bir sayı ile başlamaz.
// Dolar işareti ve alt çizgi dışında özel karakter olmaz.
// camelCase kuralına uyulmalı.
// Sözcükler arasında boşluklar olmamalı.

// * DEĞİŞKEN TANIMLAMA ÖRNEKLERİ :


//? let ad = "Barbaros";
//? let soyAd = 'Göçmen'
//? let yas = 23;
//? let evliMi = false
//? console.log(ad, soyAd, yas, evliMi); = Barbaros Göçmen 23 false

//? const yerCekimi = 9.81;
//? const pi = 3,14;

//? let isim = "BarbarosGöçmen",
//? is = "Yazılımcı",
//? konum = "İstanbul";
//? console.log(isim, is, konum); = BarbarosGöçmen Yazılımcı İstanbul

//! Template Literals Nedir Ve Nasıl Kullanılır ?

// Template Literals değişken tanımlama ve değer atama işlemlerinde daha özgür ve kolaylaştırılmış bir şekilde kodlama yapabilmemizi sağlayan yazım biçimidir. Normal tırnak işaretleri yerine backtick tırnak ve değerler ise ${} işareti ile kullanılır.

//? const firstName = 'Barbaros'
//? const job = 'developer'
//? const birthYear = '2001'
//? const year = '2024'

//? const Barbaros = `I'm ${firstname}, a ${years - birthYear} year old ${job}`

//? console.log(Barbaros);

//! İf Else Koşul Yapısı Nedir Ve Nasıl Kullanılır ?

// İf Else koşul yapısı karar verme işlemleri için kullanılır. Yazdığımız koşul doğru ise if alanındaki kod bloğu çalışır, yanlış ise else alanındaki kod bloğu çalışır.

//? const age = 15;

//? if (age >= 18) {
//?    console.log('Sarah can start driving  license');
//? } else {
//?    const yearsLeft = 18 - age;
//?    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
//? }

//! Karşılaştırma Operatörleri Nedir Ve Nasıl Kullanılır ?

// Karşılaştırma operatörlerini 2 farklı şekilde kullanırız bunlar '==' ve '===' 'dir. '==' olarak kullandığımız karşılaştırma operatörü sadece içeriğe bakar ve türün aynı olup olmadığını kontrol etmez. '===' karşılaştırma operatörü ise hem içeriği hem de türü kontrol eder.


//! Ve, Veya, Değilse Kullanımı Nedir Ve Nasıl Yapılır ?

// JavaScript'te '&&' işareti 've' anlamına gelir ve sunulan 2 seçenekte true değere sahip olmalıdır.
// JavaScript'te '||' işareti 'veya' anlamına gelir ve sunulan seçeneklerden en az biri true değere sahip olmalıdır.
// JavaScript'te '!' işareti 'değilse' anlamına gelir ve sunulan ifadenin tam tersini arar.

//? const hasDriverLicense = true;
//? const hasGoodVision = true;
//? const isTired = false;

//? if (hasDriversLicense && hasGoodVision && !isTired) {
//?    console.log('Barbaros is able to drive!');
//? } else {
//?    console.log('Someone else should drive...')
//? }

// Yukarıdaki örnekte ehliyetimizin olması gerektiğini, iyi bir görüşümüzün olması gerektiğini ve yorgun olmamamız gerektiğini görüyoruz. Bu değerleri sağladığımız içinde arabayı kullanabileceğimizin çıktısını alıyoruz.

//! Switch Case Nedir Ve Nasıl Kullanılır ?

// Switch case if else-if koşullu kontrol operatörünün farklı bir syntax ile yazılmış biçimidir. Koşullarımıza göre ilgili kod bloğu çalışacaktır.

//? const day = 'thursday'

//? switch (day) {
//?   case 'monday':
//?        console.log('Plan course structure');
//?        console.log('Go to coding meetup');
//?        break;
//?   case 'thursday':
//?        console.log('Prepare theory videos');
//?        break;
//?   case 'wednesday':
//?   case 'thursday':
//?       console.log('Write code examples');
//?        break;
//?   case 'friday':
//?        console.log('Record videos');
//?        break;
//?   case 'saturday':
//?   case 'sunday':
//?        console.log('Enjoy the weekend');
//?        break;
//?   default:
//?        console.log('Not a valid day')
//? }

// Yukarıda switch case karşılaştırma operatörü örneği verilmiştir, aşağıda ise if else-if koşullu kontrol operatörü örneği mevcuttur.

//? if (day === 'monday') {
//?    console.log('Plan course structure')
//?    console.log('Go to coding meetup');
//? } else if (day === 'thursday') {
//?    console.log('Prepare theory videos');
//? } else if (day === 'wednesday' || 'thursday') {
//?    console.log('Write code examples');
//? } else if (day === 'friday') {
//?    console.log('Record videos');
//? } else if (day === 'saturday' || day === 'sunday') {
//?    console.log('Enjoy the weekend');
//? } else {
//?    console.log('Not a valid day');
//? }

//! Koşullu İfadeler (Ternary Operator) Nedir Ve Nasıl Kullanılır ?

// Switch-case ve if-else ifadesine benzer içeriği tek satırda yazmamızı sağlayan koşullu kontrol operatörüdür.

//? const age = 23;
//? const drink = age >18 ? 'wine' : 'water';
//? console.log(drink);

// Yukarıda Ternary Operator örneği verilmiştir. '?' ifadesi 'ise' anlamına gelirken ':' ifadesi 'değil ise' anlamına gelmektedir.

//! Strict Mode (Katı Mod) Nedir Ve Nasıl Kullanılır ?

// Strict Mode JavaScript'te yapılan hataları ve değişken isimlerinde hali hazırda JavaScript tarafından kullanılan isimleri kullanmamamız gerektiğini bize consol üzerinden gösteren adeta bir nevi yardımcıdır. Strict Mode'u kullanabilmek için JavaScript kodumuzun başına 'use strict'; yazmamız yeterli olacaktır.

//! Fonksiyonlar (Functions) Nedir Ve Nasıl Kullanılır ?

// En basit haliyle bir fonksiyon, kodumuzda tekrar tekrar kullanabileceğimiz bir kod parçasıdır.

//? function logger() {
//?    console.log('My name is Barbaros');
//? }

//? logger();

// Yukarıda ki örnekte logger adında bir fonksiyon oluşturduk ve süslü parantezlerin içerisine çalıştırmasını istediğimiz kod satırını girdik. Alt satırda oluşturduğumuz fonksiyonun adını ve parantezi yazarsak yani 'logger();' yazar isek oluşturduğumu fonsiyonu tekrar tekrar her yazışımızda çağırabilir-çalıştırabiliriz ve böylece her çağırdığımzıda oluşturduğumuz fonksiyonun içerisindeki kod çalışacaktır.