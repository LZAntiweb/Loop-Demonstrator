// ===== Utility =====
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// ===== Track running timers =====
let forInterval, whileTimeout, forEachTimeout;

// ===== Phase 1: For Loop =====
function runForLoop() {
  const output = document.getElementById("for-output");
  output.innerHTML = "";

  if (forInterval) clearInterval(forInterval);

  let i = 1;
  forInterval = setInterval(() => {
    const span = document.createElement("span");
    span.textContent = i + " ";
    span.style.opacity = 0;
    span.style.transition = "opacity 0.5s, color 0.5s";
    span.style.color = getRandomColor();
    output.appendChild(span);

    setTimeout(() => { span.style.opacity = 1; }, 50);

    i++;
    if (i > 10) clearInterval(forInterval);
  }, 500);
}

// ===== Phase 2: While Loop =====
function runWhileLoop() {
  const output = document.getElementById("while-output");
  output.innerHTML = "";

  if (whileTimeout) clearTimeout(whileTimeout);

  let total = 0;

  function addRandom() {
    let num = Math.floor(Math.random() * 10) + 1;
    total += num;

    const div = document.createElement("div");
    div.textContent = `+ ${num} → Total: ${total}`;
    div.style.backgroundColor = getRandomColor();
    div.style.color = "#fff";
    div.style.opacity = 0;
    div.style.padding = "5px";
    div.style.margin = "3px 0";
    div.style.borderRadius = "5px";
    div.style.transition = "opacity 0.5s, transform 0.3s";
    output.appendChild(div);

    setTimeout(() => { 
      div.style.opacity = 1;
      div.style.transform = "scale(1.05)";
    }, 50);

    if (total <= 30) whileTimeout = setTimeout(addRandom, 600);
  }
  addRandom();
}

// ===== Phase 3: forEach Loop =====
function runForEachLoop() {
  const output = document.getElementById("foreach-output");
  output.innerHTML = "";

  if (forEachTimeout) clearTimeout(forEachTimeout);

  const colors = ["red", "green", "blue", "orange", "purple", "pink"];
  let index = 0;

  function showColor() {
    if (index < colors.length) {
      const color = colors[index];
      const div = document.createElement("div");
      div.textContent = color;
      div.style.backgroundColor = color;
      div.style.color = "white";
      div.style.padding = "8px";
      div.style.margin = "4px 0";
      div.style.borderRadius = "8px";
      div.style.opacity = 0;
      div.style.transform = "scale(0.8)";
      div.style.transition = "opacity 0.5s, transform 0.5s";
      output.appendChild(div);

      setTimeout(() => {
        div.style.opacity = 1;
        div.style.transform = "scale(1)";
      }, 50);

      index++;
      forEachTimeout = setTimeout(showColor, 600);
    }
  }
  showColor();
}
