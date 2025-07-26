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
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  const scrollFactor = 3;
  const maxScroll = screenHeight * scrollFactor;

  const progress = Math.min(scrollY / maxScroll, 1); // 0 → 1

  // Animate heading size
  const headingSize = 25 + (progress * (110 - 25));
  heading.style.fontSize = `${headingSize}px`;

  // Get heading position (fixed once)
  const headingRect = heading.getBoundingClientRect();
  const headingX = window.innerWidth / 2;
  const headingY = heading.offsetTop + heading.offsetHeight / 2;

  // Final top position
  const topY = 100;

  // Final spacing
  const totalWidth = screenWidth * 0.8;
  const spacing = totalWidth / (boxes.length - 1);
  const startX = screenWidth * 0.1;

  boxes.forEach((box, i) => {
    // Final position at top
    const finalX = startX + spacing * i;
    const finalY = topY;

    // Current position in transition
    const currentX = headingX + (finalX - headingX) * progress;
    const currentY = headingY + (finalY - headingY) * progress;

    box.style.left = `${currentX}px`;
    box.style.top = `${currentY}px`;
    box.style.transform = `translate(-50%, -50%)`;
  });
});
