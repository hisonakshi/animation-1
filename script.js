const heading = document.getElementById('heading');
const boxes = [
  document.getElementById('box1'),
  document.getElementById('box2'),
  document.getElementById('box3'),
  document.getElementById('box4'),
  document.getElementById('box5'),
];

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = window.innerHeight * 3;
  const progress = Math.min(scrollY / maxScroll, 1); // value from 0 → 1

  // ✅ Resize heading: bigger on scroll up, smaller on scroll down
  const minSize = 7;   // vw
  const maxSize = 2.5; // vw
  const currentSize = maxSize - progress * (maxSize - minSize);
  heading.style.fontSize = `${currentSize}vw`;
  heading.style.opacity = '1'; // always visible

  // ✅ Spread boxes in circular layout
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const maxRadius = Math.sqrt(centerX ** 2 + centerY ** 2);
  const radius = progress * maxRadius * 0.95;


  boxes.forEach((box, i) => {
    const angle = (2 * Math.PI / boxes.length) * i;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
    box.style.transform = `translate(-50%, -50%)`;
    box.style.opacity = '1';
  });
});
