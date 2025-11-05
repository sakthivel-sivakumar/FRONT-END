async function callGemini() {
  let query = prompt("What is your question? ")
  let response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBJYjI2FZXJ-g75tR8VeyAB1pRf5CUL6Tk",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: query }] }]
      }),
    }
  );

  let data = await response.json();
  let result = data.candidates[0].content.parts[0].text;
  // data.candidates[0]

  document.writeln(result)
}

callGemini();
