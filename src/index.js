//불변성 : 메모리에 있는 값을 변경할 수 없는 것

let number = 1;
let secondNumber = 1;

number = 2;

// 원시데이터 : 숫자, 문자, 불리언.. //불변성이 있다.
console.log("number와 secondNumber가 일치하나요?")
console.log(number === secondNumber)

// 원시데이터가 아닌 것 : 배열, 객체, 함수..
let obj1={
  name: 'kim',
}
obj1.name = 'park' //객체는 불변성이 없다. 객체는 메모리에서 주소값을 바라본다.

let obj2={
  name: 'kim',
}

console.log("obj1과 obj2가 일치하나요?");
console.log(obj1===obj2);

//데이터를 수정하는 경우
