function addRecommendation() {
  const input = document.getElementById('newRec');
  const newRec = input.value.trim();
  if (newRec) {
    const li = document.createElement('li');
    li.textContent = newRec;
    document.getElementById('rec-list').appendChild(li);
    input.value = '';
  }
}
Let me know if you'd like this styled with a dark theme, made responsive, or converted into a downloadable zip file.










