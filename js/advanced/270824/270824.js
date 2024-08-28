const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const nums3 = [7, 8, 9];

console.log("spread array", ...nums1);
console.log("spread string", ..."ciao come stai");

const nums = [...nums1, ...nums2, ...nums3];
//const nums = [0, ...nums1, ...nums2, "sono in mezzo", ...nums3, 10];
//const nums = [...nums1, ...(nums2.length >= 5 ? nums2 : [])];

const newArray = nums1.concat(nums2);
console.log("newArray concat", newArray);

/*
nums1.forEach((num) => {
  nums.push(num);
});
nums2.forEach((num) => {
  nums.push(num);
});
*/

console.log("nums", nums);

const studentAngraphic = { name: "Mario", age: 22 };
const studentAddress = { street: "via Milano", country: "IT" };
const studentContacts = { mail: "mario@gmail.com", phone: "3334445556" };

const student = {
  id: "12324",
  ...studentAngraphic,
  classroom: "4F",
  ...studentAddress,
  ...studentContacts,
  language: "Italian",
};

console.log("student", student);

console.log("object into array", [{...student}]);
console.log("array into object", {...nums});
