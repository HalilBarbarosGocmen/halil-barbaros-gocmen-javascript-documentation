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


//! Ve, Veya, Değilse Kullanımı Nedir Ve Nasıl Yapılır (Mantıksal Operator) ?

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

// Yukarıda ki örnekte logger adında bir fonksiyon oluşturduk ve süslü parantezlerin içerisine çalıştırmasını istediğimiz kod satırını girdik. Alt satırda oluşturduğumuz fonksiyonun adını ve parantezi yazarsak yani 'logger();' yazar isek oluşturduğumu fonsiyonu tekrar tekrar her yazışımızda çağırabilir-çalıştırabiliriz ve böylece her çağırdığımızda oluşturduğumuz fonksiyonun içerisindeki kod çalışacaktır.
// Yukarıda ki fonksiyonun sonucunu herhangi bir değere kaydetmiyoruz, return kullanmıyoruz. Sadece tanımsız değer üretiliyor ve anlık olarak sadece bunu yakalıyoruz.

//? function fruitProcessor(apples,oranges) {
//?    const juice = `Juice with ${apples} apples and ${orages} oranges.`;
//?    return juice;
//? }

//? const appleJuice = fruitProcessor(5, 0);
//? console.log(appleJuice);

//? const appleOrangeJuice = fruitProcessor(2, 4);
//? console.log(appleOrangeJuice)

// Yukarıdaki örnekte fruitProcessor adında bir fonksiyon oluşturup içerisine 'apples, oranges' adında 2 farklı parametre giriyoruz. Sonrasında fonksiyonumuzun içerisine juice adında bir değişken tanımlayıp template literals kullanarak içerisinde yazmasını istediğimiz şeyleri yazarak tanımlıyoruz ve return juice diyerek değişkenimizi döndürüyoruz. Alt satırlarde ise yeni bir değişken oluşturup içerisine ilk baştaki fonksiyonumuzun adını yazıyoruz ve parantezlerin içine ise o fonksiyonlardaki parametrelerin hangi değerlere sahip olmasını istiyorsak onları argüman olark yazıyoruz ve böylelikle hem fonksiyonumuzu çalıştırıyor hemde içerisinde döndireceğimiz değeri de kaydediyor-yakalıyor-tutuyor ve altında console.log ile gösteriyoruz.

//! JavaScript'te 3 Çeşit Fonksiyon Vardır. Bu Fonskiyonlar Nelerdir Ve Nasıl Kullanılır ?

// JavaScript'te 'Function Declaration' , 'Function Expression' ve 'Arrow Function' adında 3 farklı fonskiyon türü vardır.

//? function calcAge1 (birthYear) {
//?    return 2037 - birthYear;
//? }

//? const age1 = calcAge1(1991);

// Yukarıda 'Function Declaration' fonksiyon türünün örneği verilmiştir.

//? const calcAge2 = function (birthYear) {
//?     return 2037 - birthYear;
//? }

//? const age2 = calcAge2(1991);
//? console.log(age1, age2);

// Yukarıda 'Function Expression' adında fonksiyon türü örneği verilmiştir ve sonrasında ise console.log(age1, age2) ile her iki fonksiyonuda konsola yazdırdık.

//? const calcAge3 = birthYear => 2037 - birthYear;

// Yukarıda 'Arrow Function' adında fonksiyon türü örneği verilmiştir.

//? const calcAge = function (birthYear) {
//?    return 2037 - birthYear;
//? }
 
//? const yearsUntilRetirement = function (birthYear, firstName) {
//?    const age = calcAge(birthYear);
//?    const retirement = 65 - age;

//?    if (retirement > 0) {
//?        console.log(`${firstName} retires in ${retirement} years`);
//?        return retirement;
//?    } else {
//?        console.log(`${firstName} has already retired.`);
//?       return -1;
//?    }
//? }

//? console.log(yearsUntilRetirement(1991, 'Jonas'));
//? console.log(yearsUntilRetirement(1950, 'Mike'));

// Yukarıda Function Declaration fonksiyon türü ile fonksiyon içerisinde fonksiyon yazmak ve if else karşılaştırma parametrelerini kullandığımız örnek verilmiştir.

//? const calcAcverage = (a,b,c) => (a + b + c) / 3
//? console.log(calcAcverage(3, 4, 5));

//? let scoreDolphins = calcAverage(44, 23, 71);
//? let scoreKoalas = calcAverage(65, 54, 49);
//? console.log(scoreDolphins, scoreKoalas);

//? const checkWinner = function (avgDolphins, avgKoalas) {
//?    if (avgDolphins >= 2 * avgKoalas) {
//?        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//?    } else if (avgKoalas >= 2 * avgDolphins) {
//?        console.log(`Koalas win (${avgDolphins} vs. ${avgDolphins})`);
//?    } else {
//?        console.log('No team wins...');
//?    }
//? }

//? checkWinner(scoreDolphins, scoreKoalas);

//? checkWinner(576, 111);

//? scoreDolphins = calcAcverage(85, 54, 41);
//? scoreKoalas = calcAcverage(23, 34, 27);
//? console.log(scoreDolphins, scoreKoalas);
//? checkWinner(scoreDolphins, scoreKoalas);

// Yukarıda güzel bir fonksiyon örneği verilmiştir. Puan karşılaştırmaları yapılıp sonrasında değerleri değiştirip kazanan 2. kez kontrol edilmektedir.

//! Diziler (Arrays) Nedir Ve Nasıl Kullanılır ?

// Diziler birden fazla değerimizin olduğu ifadeleri kolay bir şekilde tanımlamamızı sağlayan faktördür.

//? const friends = ['Michael', 'Steven', 'Peter'];
// Yukarıda ki örnekte dizi kullanımı gösterilmiştir.

//? console.log(friends[0]);
//? console.log(friends[2]);
// Yukarıdaki örneklerde oluşturduğumuz dizide ki 0. ve 2. index numaralı değerleri konsola yazdırdık. Michael ve Peter.

//? console.log(friends.length);
//? console.log(friends[friends.length - 1]);
// Yukarıdaki ilk console.log'da friends dizimizin uzunluğunu yani içerisinde kaç değer olduğunu ekrana yazdırdık. 3.
// Yukarıdaki ikinci console.log'da friends dizimizin uzunluğunun -1'ini yani son değerini ekrana yazdırdık. Peter.

//? friends[2] = 'Jay'
//? console.log(friends);
// Yukarıdaki örnekte friends dizimizin 2. index numaralı değerini 'Jay'değeri ile değiştiriyoruz ve ardından konsola tekrar dizimizi yazdırıyoruz.

//? const firstName = 'Jonas'
//? const jonas = [firstName, 'Barbaros', 2037 - 1991, 'teacher', friends];
//? console.log(jonas)
// Yukarıda ki örnekte dizi içerisinde tanımladığımız firstName değişkenini, diğer değerleri ve daha önce yazmış olduğumuz diziyi ekledik ve konsola yazdırdık.

//! Dizi Metotları Nelerdir Ve Nasıl Kullanılır ?

//? const friends = ['Michael','Steven', 'Peter'];
//? friends.push('Jay');
//? console.log(friends)

// Yukarıdaki örnekte ilk başta tanımlamış olduğumuz dizinin sonuna Jay adında yeni bir eleman ekledik ve yeni dizimizi konsola yazdırdık.

//? frinds.unshift('John');
//? console.log(friends);

// Yukarıdaki örnekte oluşturmuş olduğumuz dizinin en başına John adında yeni bir eleman ekledik ve konsola yazdırdık.

//? friends.pop();
//? console.log(friends);

// Yukarıdaki örnekte oluşturmuş olduğumuz dizinin en sonundaki elemanı sildik ve konsola yeni dizimizi yazdırdık.

//? friends.shift();
//? console.log(friends);

// Yukarıdaki örnekte oluşturmuş olduğumuz dizinin en başındaki elemanı kaldırdık ve konsola yeni dizimizi yazdırdık.

//? console.log(friends.indexOf('Steven'));

// Yukarıdaki örnekte friends adlı dizimizde steven adlı elemanın kaçıncı index numarasında olduğunu konsola yazdırdık. Eğer dizide olmayan bir elemanın index numarasını bu yöntem ile aramaya çalışırsak konsolda -1 yazacaktır.

//? console.log(friends.includes('Steven'));

// Yukarıdaki örnekte friends adlı dizimizin içerisinde Steven adlı eleman var mı yok mu onu aradık ve konsola yazdırdık, var ise true değerini yok ise false değerini aldık.

//? if (friends.includes('Steven')) {
//?    console.log('You have a friend called Steven');
//? }

// Yukarıdaki örnekte includes metotunu kullanarak koşullu ifade örneği görmekteyiz.

//? const calcTip = function (bill) {
//?    return bill >= 50 && bill <= 300 ? bill * 0.15 
//?   : bill * 0.2;
//? }

//? const bills = [125, 555, 44];
//? const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
//? const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

//? console.log(bills, tips, totals);

// Yukarıdaki örnekte dizileri ve fonksiyonu kullanarak yapmış olduğumuz örnek görülmektedir.

//! Object (Nesneler) Nedir Ve Nasıl Kullanılır ?

// Objeler, içerisinde birden farklı veri türünü içeren, yazılımcı tarafından oluşturulan daha komplike veri türleridir.

//? const jonas = {
//?    firstName : 'Jonas',
//?    lastName: 'Schmedtmann',
//?    age: 2037 - 1991,
//?    job: 'teacher',
//?   friends: ['Michael', 'Peter', 'Steven']
//? };

//? const jonas = [
//?    'Jonas',
//?    'Schmedtmann',
//?    2037 - 1991,
//?    'teacher',
//?   ['Michael', 'Peter', 'Steven']
//? ];


// Yukarıdaki örneklerde object (nesne) tanımlama örneği verilmektedir.

//? console.log(jonas.lastName);

// Yukarıdaki örnekte obje içerisinde ki elemana ulaşma örneği verilmiştir.

//? const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

//? if (jonas[interestedIn]) {
//?    console.log(jonas[interestedIn]);
//? } else {
//?    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
//? }

// Yukarıdaki örnekte kullanıcıdan alınan bilgi ile objeden verileri ele alarak koşullu ifade örneği mevcuttur.

//? const jonas = {
//?    firstName : 'Jonas',
//?    lastName: 'Schmedtmann',
//?    birthYear: 1991,
//?    job: 'teacher',
//?   friends: ['Michael', 'Peter', 'Steven'],
//?   hasDriversLicense: true,
//?
//?    
//?
//?
//?   calcAge: function () {
//?    return 2037 - this.birthYear;
//? }
//?
//?
//? };

//? console.log(jonas.calcAge())

// Yukarıdaki örnekde obje içerisinde fonksiyon tanımladık ve this metodu sayesinde veriye ulaştık. This metotu fonksiyonu çalıştıran ana uzantıyı ele alarak çalışır.

//? const mark = {
//?    fullName: 'Mark Miller',
//?    mass: 78,
//?    height: 1.69,
//?    calcBMI: function () {
//?        this.bmi = this.mass / this.height ** 2;
//?        return this.bmi;
//?    }
//? };

//? const john = {
//?    fullName: 'John Smith',
//?    mass: 92,
//?    height:1.95,
//?    calcBMI: function () {
//?        this.bmi = this.mass / this.height ** 2;
//?        return this.bmi;
//?    }
//? };

//? mark.calcBMI();
//? john.calcBMI();

//? console.log(mark.bmi, john.bmi);

//? if (mark.bmi > john.bmi) {
//?   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}' BMI (${john.bmi})`)
//? } else if (john.bmi > mark.bmi) {
//?    console.log(`${john.fullName}'s BMI (${john.bmi} is higher than ${mark.fullName}'s BMI (${mark.bmi}))`)
//? }

// Yukarıda bir adet daha this metodu kullanarak verilmiş bir örnek bulunmakta.

//! Döngüler (FOR DÖNGÜSÜ) Nedir Ve Nasıl Kullanılır ?       

//? for (let rep = 1; rep <= 10; rep++) {
//?    console.log(`Lifting weights repetition ${rep}`);
//? }

// Yukarıdaki örnekte rep adlı oluşturduğumuz değişken 1'dir ve 10 olana kadar rep'i bir arttır emri verdik. Böylece konsola belirttiğimiz cümleyi 10 kez ard arda yazacak.

//? const jonas = [
//?    'Jonas',
//?     'Schmedtmann',
//?     2037 - 1991,
//?     'teacher',
//?    ['Michael', 'Peter', 'Steven']
//? ];

//? for (let i = 0; i < jonas.length; i++) {
//?    console.log(jonas[i])
//? }

// Yukarıdaki örnekte dizimizin eleman uzunluğunu ele alıp tek tek bunları ekrana for döngüsü ile yazdırdık.

//? const years = [1991, 2007, 1969, 2020];
//? const ages = []

//? for (let i= 0; i < years.length; i++) {
//?  ages.push(2037 - years[i]);
//? }
//? console.log(ages);

// Yukarıdaki örnekte yaş hesaplaması yaptık ve hesaplanan değerleri ages adlı boş dizimize aktardık ve konsolda gösterdik.
