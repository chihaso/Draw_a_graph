paper.install(window);
paper.setup(document.getElementById("graph_canvas"));

let a, b, c;
let x, y;

function func(selected_func, x) {
  switch (selected_func) {
    case "quadratic_equation":
      a = 0.1;
      b = 1;
      c = 0;
      return a * x * x + b * x + c;
    case "sin":
      a = 1;
      b = 1;
      c = 0;
      return a * 100 * Math.sin(b * 0.1 * x + c);
    case "cos":
      a = 1;
      b = 1;
      c = 0;
      return a * 100 * Math.cos(b * 0.1 * x + c);
    case "tan":
      a = 1;
      b = 0.1;
      c = 0;
      return a * 100 * Math.tan(b * 0.1 * x + c);
    case "arcsin":
      a = 1;
      b = 1;
      c = 0;
      return a * 100 * Math.asin(b * 0.1 * x + c);
    case "arccos":
      a = 1;
      b = 1;
      c = 0;
      return a * 100 * Math.acos(b * 0.1 * x + c);
    case "arctan":
      a = 1;
      b = 0.1;
      c = 0;
      return a * 100 * Math.atan(b * 0.1 * x + c);
  }
}

let current_func = document.getElementById("displayed_func");

document.getElementById("button").onclick = function() {
  const selected_func = document.functionForm._select.value;
  current_func.textContent = selected_func;
  const path = new Path();
  let dot;
  let previous_point;
  let current_point;
  for (x = -250; x < 251; ++x) {
    y = func(selected_func, x);
    current_point = new Point(x + 250, 250 - y);
    dot = Shape.Circle(x + 250, 250 - y, 2);
    dot.fillColor = "black";
    path.strokeColor = "black";
    if (!!previous_point) {
      path.add(previous_point, current_point);
    }
    previous_point = current_point;
  }
};
