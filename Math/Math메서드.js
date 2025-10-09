//Math.abs
//Math.abs 메서드는 인수로 전달된 숫자의 절대값을 반환
Math.abs(-1); // 1
Math.abs(-"1"); // 1
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs(null); // 0
Math.abs(undefined); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN

//Math.round
//Math.round 메서드는 인수로 전달된 숫자의 소수점 이하를 반올림한 정수를 반환
Math.round(1.4); // 1
Math.round(1.6); //2
Math.round(-1.4); // -1
Math.round(-1.6); // -1
Math.round(1); // 1
Math.round(); // NaN

//Math.ceil
//Math.ceil 메서드는 인수로 전달된 숫자의 소수점 이하를 올림한 정수를 반환
Math.ceil(1.4); // 2
Math.ceil(1.6); // 2
Math.ceil(-1.4); // -1
Math.ceil(-1.6); // -1
Math.ceil(1); // 1
Math.ceil(); // NaN

//Math.floor
//Math.floor 메서드는 인수로 전달된 숫자의 소수점 이하를 내림한 정수를 반환
Math.floor(1.9); //1
Math.floor(9.1); //9
Math.floor(-1.9); // -2
Math.floor(-9.1); // -10
Math.floor(1); // 1
Math.floor(); // NaN

//Math.sqrt
//Math.sqrt 메서드는 인수로 전달된 숫자의 제곱근을 반환
Math.sqrt(9); // 3
Math.sqrt(-9); // NaN
Math.sqrt(2); // 1.414~
Math.sqrt(1); // 1
Math.sqrt(0); // 0
Math.sqrt(); // NaN

//Math.random
//Math.random 메서드는 임의의 난수를 반환
Math.random();
const random = Math.floor(Math.random() * 10 + 1);
console.log(random); // 1에서 10 범위의 정수

//Math.pow
// Math.pow 메서드는 첫 번째 인수를 밑으로, 두 번쨰 인수를 지수로 거듭제곱한 결과를 반환
Math.pow(2, 8); // 256
Math.pow(2, -1); // 0.5
Math.pow(2); // NaN
//지수 연산자를 사용하면 가독성이 더 좋다.
2 ** (2 ** 2); // 16

//Math.max
// Math.max 메서드는 전달받은 인수 중에서 가장 큰 수를 반환
// 인수가 전달되지 않으면 -Infinity를 반환
Math.max(1); // 1
Math.max(1, 2); // 2
Math.max(1, 2, 3); // 3
Math.max(); // -Infinity
//배열을 인수로 전달받아 배열의 요소 중에서 최대값을 구하려면
//Function.prototype.apply 메서드 또는 스프레드 문법을 사용
Math.max.apply(null, [1, 2, 3]); // 3
Math.max(...[1, 2, 3]); // 3

//Math.min
//Math.min 메서드는 전달받은 인수 중에서 가장 작은 수를 반환
// 인수가 전달되지 안흥면 Infinity를 반환
Math.min(1); // 1
Math.min(1, 2); // 1
Math.min(1, 2, 3); // 1
Math.min(); // Infinity
