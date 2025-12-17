document.getElementById("goBtn").addEventListener("click", function() {

  const year = document.getElementById("yearInput").value.trim();
  const make = document.getElementById("makeInput").value.trim();
  const model = document.getElementById("modelInput").value.trim();

  if (!year || !make || !model) {
    alert("Please fill all fields.");
    return;
  }

  document.getElementById("output").style.display = "block";

  const resultText = `
    Fuse box for ${year} ${make} ${model} is usually under the dashboard.
    Fuse diagrams vary by car.
  `;

  const diagramText = `
    Diagram placeholder: Imagine a rectangle with labeled fuse slots.
  `;

  document.getElementById("resultText").innerText = resultText;
  document.getElementById("diagramText").innerText = diagramText;

});
