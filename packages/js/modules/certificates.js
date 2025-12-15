// certificates.js: Handles certificate filtering and lightbox
export function initCertificates() {
  const body = document.body;
  const certificateTabs = document.querySelectorAll('.certificate_tabs li');
  const certificateItems = document.querySelectorAll('.certificate_item');
  const certificateImgs = document.querySelectorAll('.certificate_item img');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox_img');
  const lightboxCloseBtn = document.querySelector('.lightbox_close');

  // Filter function
  const filterGallery = (filterValue) => {
    certificateItems.forEach((currItem) => {
      if (filterValue === 'all' || currItem.classList.contains(filterValue)) {
        currItem.classList.remove('hide');
        currItem.classList.add('show');
      } else {
        currItem.classList.remove('show');
        currItem.classList.add('hide');
      }
    });
  };

  // Tab clicks
  certificateTabs.forEach((currTab) => {
    currTab.addEventListener('click', (e) => {
      e.target.parentElement.querySelector('.active').classList.remove('active');
      e.target.classList.add('active');
      let filterValue = e.target.getAttribute('data-filter');
      filterGallery(filterValue);
    });
  });

  // Initial filter (Web_Dev)
  const initialTab = document.querySelector('.certificate_tabs li[data-filter="Web_Dev"]');
  if (initialTab) {
    initialTab.classList.add('active');
    filterGallery('Web_Dev');
  }

  // Lightbox
  if (certificateImgs.length > 0 && lightbox && lightboxImg && lightboxCloseBtn) {
    certificateImgs.forEach((currImg) => {
      currImg.addEventListener('click', (e) => {
        let imgSrc = e.target.getAttribute('src');
        lightboxImg.setAttribute('src', imgSrc);
        lightbox.classList.add('open');
        body.classList.add('overflow_hide');
      });
    });

    const lightboxClose = () => {
      lightbox.classList.remove('open');
      body.classList.remove('overflow_hide');
    };

    lightboxCloseBtn.addEventListener('click', lightboxClose);

    window.addEventListener('click', (e) => {
      if (e.target.className === 'lightbox_wrapper') {
        lightboxClose();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        lightboxClose();
      }
    });
  }
}