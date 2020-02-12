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
for (let i = 51; i < 452; i += 50) {
  const scale = new Path();
  scale.add(new Point(i, 256), new Point(i, 246));
  scale.strokeColor = "black";
  const text = new PointText(i, 265);
  text.justification = "center";
  text.fillColor = "black";
  text.fontSize = 10;
  text.content = i - 251;
}

const yAxis = new Path();
yAxis.add(new Point(251, 0), new Point(251, 502));
yAxis.strokeColor = "black";
for (let i = 51; i < 452; i += 50) {
  const scale = new Path();
  scale.add(new Point(256, i), new Point(246, i));
  scale.strokeColor = "black";
  const text = new PointText(265, i + 5);
  text.justification = "left";
  text.fillColor = "black";
  text.fontSize = 10;
  text.content = 251 - i;
}

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
