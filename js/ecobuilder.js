const buildArea = document.getElementById('build-area');
let droppedItems = [];

document.querySelectorAll('.draggable-item').forEach(item => {
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });
});

buildArea.addEventListener('dragover', e => {
  e.preventDefault();
  buildArea.style.background = "#bbf7d0";
});

buildArea.addEventListener('dragleave', e => {
  buildArea.style.background = "#f6fdf6";
});

buildArea.addEventListener('drop', e => {
  e.preventDefault();
  buildArea.style.background = "#f6fdf6";
  const id = e.dataTransfer.getData('text');
  if (!droppedItems.includes(id)) {
    droppedItems.push(id);
    const img = document.getElementById(id).cloneNode(true);
    img.classList.remove('draggable-item');
    img.setAttribute('draggable', 'false');
    buildArea.appendChild(img);
    checkBuild();
  }
});

function checkBuild() {
  if (droppedItems.includes('item-rope') && droppedItems.includes('item-tire')) {
    document.getElementById('build-result').innerHTML = 
      `🎉 You built a swing! Great job reusing materials!<br>
       <img src="assets/completed-swing.jpg" alt="Completed Swing" style="max-width: 220px; margin-top: 12px; border-radius: 8px; border: 2px solid #86efac;">`;
  }
}

