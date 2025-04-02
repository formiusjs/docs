document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('commit-container');
  const delay = 7000;

  function randomHash(length = 7) {
    return [...Array(length)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  }

  function createCommitElement(hash) {
    const div = document.createElement('div');
    div.className = 'will-change-[transform,opacity] animate-fadeUpDown opacity-0 h-6 justify-center items-center flex absolute';
    div.textContent = `[commit] ${hash}`;
    return div;
  }

  function cycleCommit() {
    container.innerHTML = '';
    const hash = randomHash();
    const el = createCommitElement(hash);
    container.appendChild(el);
  }

  setTimeout(() => {
    cycleCommit();
    setInterval(cycleCommit, delay);
  }, 3500);
})