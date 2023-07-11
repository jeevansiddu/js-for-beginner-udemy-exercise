function getgrade(marks) {
  let sum = 0;
  for (let k of marks) {
    sum += k;
  }
  sum = sum / marks.length;
  console.log(sum);
  switch (true) {
    case sum >= 90:
      console.log("A");
      break;

    case sum > 80:
      console.log("B");
      break;

    case sum > 70:
      console.log("C");
      break;

    default:
      console.log("Fail");
      break;
  }
}
let marks = [90, 90, 90];
getgrade(marks);
