paper.install(window);
paper.setup(document.getElementById("graph-canvas"));

function makeFormula(selectedFunc) {
  switch (selectedFunc) {
    case "quadratic-equation":
      return "<span>y = a x(x + b) + c</span>";
    case "sin":
      return "<span>y = a sin (bx + c) + d</span>";
    case "cos":
      return "<span>y = a cos (bx + c) + d</span>";
    case "tan":
      return "<span>y = a tan (bx + c) + d</span>";
    case "arcsin":
      return "<span>y = a arcsin (bx + c) + d</span>";
    case "arccos":
      return "<span>y = a arccos (bx + c) + d</span>";
    case "arctan":
      return "<span>y = a arctan (bx + c) + d</span>";
  }
}

function func(selectedFunc, x, a, b, c, d) {
  switch (selectedFunc) {
    case "quadratic-equation":
      a = a || 0.1;
      b = b || 0.1;
      c = c || 0;
      return x * (a * x + b) + c;
    case "sin":
      a = a || 100;
      b = b || 0.1;
      c = c || 0;
      d = d || 0;
      return a * Math.sin(b * x + c) + d;
    case "cos":
      a = a || 100;
      b = b || 0.1;
      c = c || 0;
      d = d || 0;
      return a * Math.cos(b * x + c) + d;
    case "tan":
      a = a || 100;
      b = b || 0.01;
      c = c || 0;
      d = d || 0;
      return a * Math.tan(b * x + c) + d;
    case "arcsin":
      a = a || 100;
      b = b || 0.1;
      c = c || 0;
      d = d || 0;
      return a * Math.asin(b * x + c) + d;
    case "arccos":
      a = a || 100;
      b = b || 0.1;
      c = c || 0;
      d = d || 0;
      return a * Math.acos(b * x + c) + d;
    case "arctan":
      a = a || 100;
      b = b || 0.1;
      c = c || 0;
      d = d || 0;
      return a * Math.atan(b * x + c) + d;
  }
}
let currentFunc = document.getElementById("displayed-func");

function drawAxis() {
  const xAxis = new Path();
  const yAxis = new Path();

  xAxis.add(new Point(0, 251), new Point(502, 251));
  xAxis.strokeColor = "black";
  for (let i = 51; i < 452; i += 50) {
    const scale = new Path();
    const text = new PointText(i, 265);
    scale.add(new Point(i, 256), new Point(i, 246));
    scale.strokeColor = "black";
    text.justification = "center";
    text.fillColor = "black";
    text.fontSize = 10;
    text.content = i - 251;
  }
  yAxis.add(new Point(251, 0), new Point(251, 502));
  yAxis.strokeColor = "black";
  for (let i = 51; i < 452; i += 50) {
    const scale = new Path();
    const text = new PointText(265, i + 5);
    scale.add(new Point(256, i), new Point(246, i));
    scale.strokeColor = "black";
    text.justification = "left";
    text.fillColor = "black";
    text.fontSize = 10;
    text.content = 251 - i;
  }
}

drawAxis();


document.getElementById("drawButton").onclick = () => {
  const selectedFunc = document.functionForm._select.value;
  const path = new Path();
  let previousPoint;
  currentFunc.innerHTML = makeFormula(selectedFunc);
  let a = document.setCoefficients.aValue.value;
  let b = document.setCoefficients.bValue.value;
  let c = document.setCoefficients.cValue.value;
  let d = document.setCoefficients.dValue.value;

  for (let x = -250; x < 251; x += 1) {
    const y = func(selectedFunc, x, a, b, c, d);
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
