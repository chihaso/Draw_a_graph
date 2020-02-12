paper.install(window);
paper.setup(document.getElementById("graph-canvas"));

function func(selectedFunc, x) {
  let a, b, c, d;
  switch (selectedFunc) {
    case "quadratic-equation":
      a = 0.1;
      b = 1;
      c = 0;
      return a * x * x + b * x + c;
    case "sin":
      a = 100;
      b = 0.1;
      c = 0;
      d = 0;
      return a * Math.sin(b * x + c) + d;
    case "cos":
      a = 100;
      b = 0.1;
      c = 0;
      d = 0;
      return a * Math.cos(b * x + c) + d;
    case "tan":
      a = 100;
      b = 0.01;
      c = 0;
      d = 0;
      return a * Math.tan(b * x + c) + d;
    case "arcsin":
      a = 100;
      b = 0.1;
      c = 0;
      d = 0;
      return a * Math.asin(b * x + c) + d;
    case "arccos":
      a = 100;
      b = 0.1;
      c = 0;
      d = 0;
      return a * Math.acos(b * x + c) + d;
    case "arctan":
      a = 100;
      b = 0.1;
      c = 0;
      d = 0;
      return a * Math.atan(b * x + c) + d;
  }
}

let currentFunc = document.getElementById("displayed-func");

const xAxis = new Path();
xAxis.add(new Point(0, 251), new Point(502, 251));
xAxis.strokeColor = "black";
const yAxis = new Path();
yAxis.add(new Point(251, 0), new Point(251, 502));
yAxis.strokeColor = "black";

document.getElementById("button").onclick = () => {
  const selectedFunc = document.functionForm._select.value;
  const path = new Path();
  let previousPoint;

  currentFunc.textContent = selectedFunc;

  for (let x = -250; x < 251; x += 1) {
    const y = func(selectedFunc, x);
    const currentPoint = new Point(x + 250, 250 - y);
    const dot = Shape.Circle(x + 250, 250 - y, 2);
    dot.fillColor = "black";
    path.strokeColor = "black";

    if (!!previousPoint) {
      path.add(previousPoint, currentPoint);
    }
    previousPoint = currentPoint;
  }
};
