/**
 * Gallery & Modal Functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.getElementById('modalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');

    // Gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentImageIndex = 0;

    // Create an array of image data
    const images = Array.from(galleryItems).map(item => {
        const img = item.querySelector('.gallery-image');
        const title = item.querySelector('.gallery-title');
        const category = item.querySelector('.gallery-category');

        return {
            src: img.src,
            alt: img.alt,
            title: title ? title.textContent : '',
            category: category ? category.textContent : ''
        };
    });

    // Open modal when gallery item is clicked
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = index;
            openModal();
        });

        // Keyboard accessibility - Enter or Space to open
        item.setAttribute('tabindex', '0');
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                currentImageIndex = index;
                openModal();
            }
        });
    });

    // Open modal and display image
    function openModal() {
        const image = images[currentImageIndex];
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalCaption.innerHTML = `<strong>${image.title}</strong><br>${image.category}`;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Focus on close button for accessibility
        modalClose.focus();
    }

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Show next image
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const image = images[currentImageIndex];
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalCaption.innerHTML = `<strong>${image.title}</strong><br>${image.category}`;
    }

    // Show previous image
    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        const image = images[currentImageIndex];
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalCaption.innerHTML = `<strong>${image.title}</strong><br>${image.category}`;
    }

    // Event Listeners
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalNext) {
        modalNext.addEventListener('click', showNextImage);
    }

    if (modalPrev) {
        modalPrev.addEventListener('click', showPreviousImage);
    }

    // Close modal when clicking outside the image
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
                case 'ArrowLeft':
                    showPreviousImage();
                    break;
            }
        }
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    if (modal) {
        modal.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, false);

        modal.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - show next image
                showNextImage();
            } else {
                // Swipe right - show previous image
                showPreviousImage();
            }
        }
    }
});
