var circleMath;
(function (circleMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = circleMath.Circle || (circleMath.Circle = {}));
    function calculateCircleArea(radius) {
        return 2.99 * radius * radius;
    }
    circleMath.calculateCircleArea = calculateCircleArea;
})(circleMath || (circleMath = {}));
//# sourceMappingURL=circleMath.js.map