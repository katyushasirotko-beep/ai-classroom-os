let mode = "lec";

const data = {
 lec: [
  "📚 Углеводороды — соединения углерода и водорода",
  "📚 Алканы — насыщенные соединения CnH2n+2",
  "📚 Алкены содержат двойную связь"
 ],

 prac: [
  "🧪 Объясни реакцию этилена с бромной водой",
  "🧪 Составь реакцию этанола с натрием",
  "🧪 Как отличить спирт от кислоты?"
 ],

 test: [
  {
    q:"Формула алканов?",
    a:["CnH2n","CnH2n+2"],
    c:1
  },
  {
    q:"Группа спиртов?",
    a:["-OH","-COOH"],
    c:0
  }
 ]
};

function openTab(m){
  mode = m;
  render();
}

function answer(i){
  const q = data.test[0];
  alert(i === q.c ? "✔ Верно" : "❌ Ошибка");
}

function render(){

  const app = document.getElementById("app");

  if(mode === "lec"){
    app.innerHTML = `
      <h2>📚 Лекции</h2>
      <p>${data.lec[Math.floor(Math.random()*data.lec.length)]}</p>
    `;
  }

  if(mode === "prac"){
    app.innerHTML = `
      <h2>🧪 Практика</h2>
      <p>${data.prac[Math.floor(Math.random()*data.prac.length)]}</p>
    `;
  }

  if(mode === "test"){
    const q = data.test[0];
    app.innerHTML = `
      <h2>🧾 Контроль</h2>
      <p>${q.q}</p>
      ${q.a.map((x,i)=>
        `<button onclick="answer(${i})">${x}</button>`
      ).join("")}
    `;
  }
}

render();
