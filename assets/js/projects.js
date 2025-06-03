// Filtrage dynamique des projets
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    filterButtons.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.getAttribute('data-filter');
    projectCards.forEach(card => {
      if (filter === 'all' || card.classList.contains('cat-' + filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Gestion de la modale vidéo
const videoModal = document.getElementById('videoModal');
const modalVideoFrame = document.getElementById('modalVideoFrame');
const openVideoBtns = document.querySelectorAll('.open-video-btn');

openVideoBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const videoUrl = this.getAttribute('data-video');
    modalVideoFrame.src = videoUrl;
    const modal = new bootstrap.Modal(videoModal);
    modal.show();
  });
});

if(videoModal) {
  videoModal.addEventListener('hidden.bs.modal', function () {
    modalVideoFrame.src = '';
  });
} 