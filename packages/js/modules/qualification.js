// qualification.js: Handles qualification tabs and modals
export function initQualification() {
  const tabs = document.querySelectorAll("[data-target]");
  const tabContents = document.querySelectorAll("[data-content]");
  const modalViews = document.querySelectorAll(".services__modal");
  const modalBtns = document.querySelectorAll(".services__button");
  const modalCloses = document.querySelectorAll(".services__modal-close");

  // Tabs
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("qualification__active");
      });
      target.classList.add("qualification__active");

      tabs.forEach((t) => {
        t.classList.remove("qualification__active");
      });
      tab.classList.add("qualification__active");
    });
  });

  // Modals
  let modal = function (modalClick) {
    modalViews[modalClick].classList.add("active-modal");
  };

  modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
      modal(i);
    });
  });

  modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
      modalViews.forEach((modalView) => {
        modalView.classList.remove("active-modal");
      });
    });
  });
}