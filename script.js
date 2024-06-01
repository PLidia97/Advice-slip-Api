const result = document.getElementById("results");
const button = document.getElementById("getData");
const textAdvice = document.getElementById("textAdvice");
function renderAdvice(id, advice) {
  result.textContent = id;
  textAdvice.textContent = advice;
}

async function getAdvice() {
  const url = "https://api.adviceslip.com/advice";
  let adviceId = "";
  let adviceText = "";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.slip) {
      adviceId = `ADVICE #${data.slip.id}  `;
      adviceText = `"${data.slip.advice}"`;
    }
    console.log(data);

    console.log(adviceId, adviceText);
  } catch (err) {
    console.log("Eroare este: " + err);
  }
  renderAdvice(adviceId, adviceText);
}

button.addEventListener("click", getAdvice);
