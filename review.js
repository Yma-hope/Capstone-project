  const stars = document.querySelectorAll('#star-rating i');
  let selectedRating = 0;

  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      const val = parseInt(star.getAttribute('data-star'));
      highlightStars(val);
    });

    star.addEventListener('mouseout', () => {
      highlightStars(selectedRating); // restore previous selection
    });

    star.addEventListener('click', () => {
      selectedRating = parseInt(star.getAttribute('data-star'));
      highlightStars(selectedRating);
    });
  });

  function highlightStars(rating) {
    stars.forEach(star => {
      const val = parseInt(star.getAttribute('data-star'));
      star.classList.remove('fa-solid', 'fa-regular');
      if (val <= rating) {
        star.classList.add('fa-solid');
      } else {
        star.classList.add('fa-regular');
      }
    });
  }

