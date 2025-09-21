// 검색 기능: index.html의 <input id="search"> 와 카드들 연동
document.addEventListener("DOMContentLoaded", () => {
  const q = document.getElementById("search");
  if (!q) return; // 검색창 없으면 그냥 종료

  const cards = [...document.querySelectorAll(".card")];

  q.addEventListener("input", () => {
    const kw = q.value.trim().toLowerCase();

    cards.forEach(c => {
      const text = c.textContent.toLowerCase();
      const tags = (c.dataset.tags || "").toLowerCase();

      const hit = text.includes(kw) || tags.includes(kw);
      c.style.display = hit ? "" : "none";
    });
  });
});
