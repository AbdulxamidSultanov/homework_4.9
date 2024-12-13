// ============
// 1-masala:
//  Massivning oxiridan berilgan indeksga nisbatan qiymatni topuvchi funksiyani yozing. (Masalan, -1 indeksdan ikkinchi elementni toping.)
const finderAtEnd = (index, arr) => {
  return arr.at(index - arr.length);
};

// ============
// 2-masala:
//  Berilgan massivdagi barcha juft indeksdagi elementlarni yangi massivga yig'uvchi funksiyani yarating.
const sendNumberNewArr = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
// ============
// 3-masala:
//  Massivning ixtiyoriy indeksidagi qiymatni o'zgartirib, yangi massiv qaytaruvchi funksiyani yarating.
const deleteAndUpdate = (arr, index) => {
  arr[index] = "";
  return arr;
};
// ============
// 4-masala:
//  Massivning barcha elementlarini berilgan biriktiruvchi belgi bilan birlashtirib, umumiy uzunligini qaytaruvchi funksiyani yozing.
const joinNewDiveder = (divider, arr) => {
  let res = arr.join(divider);
  return res.length;
};

// ============
// 5-masala:
//  Berilgan massiv elementlarini teskari tartibda qo'shuvchi va belgi bilan birlashtiruvchi funksiyani yarating.
const reverseElementsAndDivider = (arr, divider) => {
  arr.reverse();
  let res = arr.join(divider);
  return res;
};

// ============
// 6-masala:
//  Berilgan massivning faqat toq sonli elementlarini ajratib, ularni biriktiruvchi funksiyani yarating.
const finderOddNumbers = (arr, divider) => {
  const newArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  let res = newArr.join(divider);
  return res;
};
// ============
// 7-masala:
//  Massiv elementlarini stringga aylantirib, har bir elementning uzunligini qaytaruvchi funksiyani yarating.
const toStringAndCOuntLength = (arr) => {
  const res = arr.toString();
  return res;
};

// ============
// 8-masala:
//  Massiv elementlarini string shaklida birlashtiring.
const combineElementsIsString = (arr) => {
  let res = arr.toString();
  return res;
};
// ============
// 9-masala:
//  Massivni stringga aylantirgandan so'ng, oxiridan boshlab bir elementni olib tashlaydigan funksiyani yarating.
const doStringArrDeleteLast = (arr) => {
  const res = arr.toString();
  const newRes = res.split(",");
  newRes.pop();
  const stringArr = newRes.join(",");
  return stringArr;
};
// ============
// 10-masala:
//  Ikki massivni birlashtirib, oxirgi elementni olib tashlaydigan funksiyani yozing.
const combineArrayAndDeleteLast = (arr, arr1) => {
  let res = arr.concat(arr1);
  res.pop();
  return res;
};
// ============
// 11-masala:
//  Bir nechta massivlarni birlashtirib, faqat unikal qiymatlarni saqlaydigan funksiyani yarating.
const combineArraysEndSave = (arr1, arr2, arr3) => {
  const res = arr1.concat(arr2, arr3);
  const result = [];
  for (const iterator of res) {
    if (!result.includes(iterator)) {
      result.push(iterator);
    }
  }
  return result;
};
// ============
// 12-masala:
//  Bir nechta massivlarni birlashtirib, faqat musbat sonlarni o'z ichiga olgan yangi massiv qaytaruvchi funksiyani yozing.
const combineArraysEndSaveNumbers = (arr1, arr2, arr3) => {
  let combineArr = arr1.concat(arr2, arr3);
  const res = [];
  for (let i = 0; i < combineArr.length; i++) {
    if (combineArr[i] > 0) {
      res.push(combineArr[i]);
    }
  }
};
// ============
// 13-masala:
//  Berilgan massivning elementlarini ko'chirish orqali faqat oxirgi uch elementni boshiga o'tkazuvchi funksiyani yozing.
const moveElememtToStart = (arr) => {
  let moveLastThree = arr.length - 3;
  arr.copyWithin(0, moveLastThree);
  return arr;
};
// ============
// 14-masala:
//  Massivning bir qismini ko'chirish orqali oxirgi bo'lakni juft indekslarga qo'yuvchi funksiyani yarating.
const pushMoveElement = (arr) => {
  const length = arr.length;

  let lastPartIndex = Math.trunc(length / 2);

  for (let i = 0; i < lastPartIndex; i++) {
    if (i * 2 < length) {
      arr[i * 2] = arr[lastPartIndex + i];
    }
  }

  return arr;
};
// ============
// 15-masala:
//  Massivning biror qismini boshqa indeksga ko'chirgan holda yangi massiv qaytaruvchi funksiyani yarating.
const createNewArrFromPush = (arr, startToPick, endToPick) => {
  const arr1 = [];
  arr1.push(arr.splice(startToPick, endToPick));
  return arr1;
};

// ============
// 16-masala:
//  Ichma-ich massivlardan iborat massivni tekis qilib, faqat toq sonlarni o'z ichiga oluvchi yangi massiv yaratuvchi funksiyani yozing.
const openArrWithFlat = (arr) => {
  const arr1 = [];
  const arr2 = arr.flat(Infinity);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 == 1) {
      arr1.push(arr2[i]);
    }
  }
  return arr1;
};
// ============
// 17-masala:
//  3 darajadan chuqur bo'lgan massivni faqat 2 darajagacha tekislovchi funksiyani yarating.
const openArrwithFlatTwoTimes = (arr) => {
  const arr1 = arr.flat(2);
  return arr1;
};
// ============
// 18-masala:
//  Ichma-ich massivlarning faqat elementlari yig'indisini qaytaruvchi funksiyani yozing.
const outputElementsWithOpening = (arr) => {
  const arr1 = arr.flat(Infinity);
  console.log(arr1);
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  return sum;
};
// ============
// 19-masala:
//  Massivdan ixtiyoriy indeksdagi 3 ta elementni olib tashlaydigan va yangi massiv qaytaradigan funksiyani yozing.
const deleteSelectedElementsAndPush = (arr, selectElement) => {
  const arr1 = arr.toSpliced(selectElement, 3)
  return arr1
}
// ============
// 20-masala:
//  Massivning boshiga yangi elementlar qo'shib, asl massivni o'zgartiruvchi funksiyani yarating.
const addElementsToStart = (arr, addElement) =>  arr.splice(0, 0, addElement)
// ============
// 21-masala:
//  Massivning o'rtasidan elementlarni qo'shish yoki olib tashlash orqali yangi massiv yaratadigan funksiyani yozing.
const addOrDeleteElementsOfCenter = (arr, deleteElement, createElement) => {
  let center = Math.trunc(arr / 2)
  const arr2 = arr.toSpliced(center, deleteElement, createElement)
  return arr2
}
// ============
// 22-masala:
//  Massivning faqat o'rtadagi elementlarini ajratib oluvchi funksiyani yozing.
const copyElementsCenterOfArr = (arr) => {
  let center = Math.trunc(arr.length / 2)
  let center1 = center + 2
  let center2 = center - 1
  const arr1 = arr.slice(center2, center1)
  return arr1
}
// ============
// 23-masala:
//  Massivning oxirgi qismidan belgilangan uzunlikda yangi massiv qaytaruvchi funksiyani yarating.
const returnNewArr = (arr, selectFromChoose) => {
  const arr1 = arr.slice(-1, selectFromChoose)
  return arr1
}
// ============
// 24-masala:
//  Massivning faqat juft indekslaridagi elementlardan yangi massiv yaratadigan funksiyani yozing.
const createNewArrNotOddElements = (arr) => {
  const arr1 = []
  for(let i = 2; i < arr.length; i += 2){
    arr1.push(arr[i])
  }
  return arr1
}
// ============
// 25-masala:
//  Massivda berilgan elementni qidirib, uning indekslari yig'indisini qaytaruvchi funksiyani yozing.
const sumIndexEmptyElements = (arr, element) => {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === element){
      sum += i
    }
  }
  return sum
}

const sumIndexEmptyElementsTwo = (arr, element) => {
  let sum = 0
  let index = arr.lastIndexOf(element)
  do{
    sum += index
    index = arr.lastIndexOf(element, index - 1)
  }while(index !== -1)
    return sum
}
// ============
// 26-masala:
//  Massivdagi eng oxirgi va birinchi elementlarning indekslari orasidagi masofani topuvchi funksiyani yarating.
const findDistanceStartAndEnd = (arr, endElement) => {
  let end = arr.lastIndexOf(endElement)
  let counter = 0
  for(let i = 0; i < end; i++){
    counter++
  }
  return counter
}
// ============
// 27-masala:
//  Massivdagi qidirilayotgan elementni birinchi va oxirgi ko'rinishini almashtirib qo'yadigan funksiyani yozing.

// ============
// 28-masala:
//  Massivning faqat musbat sonlardan iboratligini tekshiruvchi funksiyani yozing.

// ============
// 29-masala:
//  Massivda berilgan qiymat mavjudligini tekshirib, mavjud bo'lsa, massivga yana qo'shmaydigan funksiyani yarating.

// ============
// 30-masala:
// Massivda ketma-ketligi bo'yicha elementlar mavjudligini tekshiruvchi funksiyani yarating.

// ============
// 31-masala:
// Berilgan massivni kamayish tartibida saralab, faqat oxirgi uch elementni qaytaruvchi funksiyani yozing.

// ============
// 32-masala:
//  Sonlar massivini musbat va manfiy qiymatlarga ajratib, ularni alohida saralovchi funksiyani yarating.

// ============
// 33-masala:
//  Massivning faqat birinchi uch elementini saralab, natijani qaytaruvchi funksiyani yozing.

// ============
// 34-masala:
//  Massivni teskari tartibda o'zgartirib, faqat oxirgi elementni birinchi o'ringa qo'ymaydigan funksiyani yozing.

// ============
// 35-masala:
// Massivni teskari aylantirib, o'rtadagi qiymatlarni olib tashlaydigan funksiyani yarating.

// ============
// 36-masala:
//  Massivni ikki marta teskari aylantirgan holda yangi massiv qaytaruvchi funksiyani yozing.

// ============
// 37-masala:
// for...of yordamida massivdagi barcha juft sonlarni yig'ib, ularning o'rtacha qiymatini qaytaruvchi funksiyani yozing.

// ============
// 38-masala:
//  for...of yordamida massivning har bir elementiga berilgan qiymatni qo'shib, yangi massiv yaratadigan funksiyani yozing.

// ============
// 39-masala:
//  for...of yordamida massivdagi manfiy sonlarni ajratib, yangi massiv qaytaruvchi funksiyani yozing.

// ============
// 40-masala:
//  for...in yordamida massivning indekslari yig'indisini hisoblovchi funksiyani yozing.

// ============
// 41-masala:
// for...in yordamida massiv elementlarining indekslari bo'yicha qiymatlarni almashtiruvchi funksiyani yozing.

// ============
// 42-masala:
// for...in yordamida massivda qaysi indekslar faqat musbat sonlarni o'z ichiga olishini aniqlaydigan funksiyani yozing.
