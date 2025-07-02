const projectTexts = {
  katarsis: {
    title: "KATARSIS, 2025",
    text: 'A speculative glimpse into the future workplace, presented in the form of a short film commissioned by <a href="#">A house</a>.',
    link: "katarsis.html"
  },
  literallyme: {
    title: "LITERALLY ME, 2025",
    text: 'Graduation project. An exploration of how information overload and constant connectivity shape a generation’s way of feeling and understanding the present.',
    link: "literallyme.html"
  },
  kentpromenaden: {
    title: "KENTPROMENADEN, 2024",
    text: "An audiovisual experience about Sweden's biggest rock band, portrayed in the place where it all began.",
    link: "kentpromenaden.html"
  }
};

const updateText = (projectKey) => {
  const data = projectTexts[projectKey];
  document.getElementById("project-info").innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.text}</p>
    <a href="${data.link}" class="see-more">see more ⟶</a>
  `;
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const key = entry.target.dataset.project;
      updateText(key);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".image-wrapper").forEach(section => {
  observer.observe(section);
});

// Slideshow image fading
document.querySelectorAll('.slideshow').forEach(slideshow => {
  const images = slideshow.querySelectorAll('img');
  let index = 0;

  images[index].classList.add('active');

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000);
});
