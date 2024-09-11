/*צור פונקציה בשם filterAndSortEvenNumbers.
הפונקציה תקבל מערך של מספרים בתור פרמטר.
סנן את המספרים כך שרק המספרים הזוגיים יישארו.
מיין את המספרים הזוגיים בסדר עולה.
החזר את המערך המסונן והממוין.
דרישות לתרגיל 2
צור פונקציה בשם removeDuplicates.הפונקציה תקבל מערך של מספרים בתור פרמטר.הפונקציה תסיר את כל המספרים הכפולים ותשמור רק מספרים ייחודיים.החזר מערך חדש שבו כל מספר מופיע רק פעם אחת, בסדר שבו הוא הופיע לראשונה.
דרישות תרגיל 3
צור פונקציה בשם capitalizeFirstLetter.הפונקציה תקבל מחרוזת בתור פרמטר.הפונקציה תעבור על כל מילה במחרוזת.אם מילה אינה מסתיימת בנקודה, הפונקציה תשנה את האות הראשונה שלה לאות גדולה.החזר את המחרוזת המעודכנת. */

let str2 = "helo world. itamar lavan is hear.";
let chancestr = (str) => {
 
  const replacedString = str.split(" ").map((word)=> {
  if (word[word.length - 1] != ".") {
    
    return word[0].toUpperCase() + word.slice(1);
  }
  return word; 
});
  return replacedString.join(" ");
};
chancestr(str2)
let numsarr2 = [1, 1, 2, 3, 4, 55, 3, 3, 2, 2, 22, , 3, 4, 4, 55, 2];
let filterdoblenums = (arr) => {
  let uniqarr = [];
  arr.forEach((e) => {
    if (!uniqarr.includes(e)) {
      uniqarr.push(e);
    }
  });
  console.log(uniqarr);

  return arr;
};
filterdoblenums(numsarr2);

let numsarr = [1, 3, 5, 67, 34, 3, 45, 3, 4, 6, 7, 8, 3, 1, 45, 66, 90];
let filterandsortarr = (arr) => {
  arr = arr.filter((e) => e % 2 == 0);
  arr = arr.sort((a, b) => a - b);
  return arr;
};
//filterandsortarr(numsarr)
//console.log(numsarr);
