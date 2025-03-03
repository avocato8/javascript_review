//프로퍼티 값이 함수일 경우 메서드라고 불린다.
// this 키워드는 객체 자신을 가리키는 참조변수수
var circle = {
  radius: 5,

  getDiameter: function () {
    return 2 * this.radius;
  },
};

console.log(circle.getDiameter());
