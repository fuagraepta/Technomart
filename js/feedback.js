`use strict`;

//feedback
(function() {
  const feedbackLink = document.querySelector(`.feedback-link`);
  const feedback = document.querySelector(`.modal-feedback`);
  const feedbackUser = feedback.querySelector(`#feedback-user`);
  const feedbackMail = feedback.querySelector(`#feedback-mail`);
  const feedbackModalClose = feedback.querySelector(`.modal-close`);

  const openFeedback = (evt) => {
    window.utils.openPopup(feedback, evt);
    feedbackUser.focus();
  };

  const closeFeedback = (evt) => {
    window.utils.closePopup(feedback, evt);
    feedback.classList.remove(`modal-error`);
  };

  feedbackLink.addEventListener(`click`, openFeedback);
  feedbackModalClose.addEventListener(`click`, closeFeedback);


  // If the required form fields are not filled in, shake the feedback
  const feedbackForm = feedback.querySelector(`.feedback-form`);

  feedbackForm.addEventListener(`submit`, (evt) => {
    if (!feedbackUser.value || !feedbackMail.value) {
      evt.preventDefault();
      feedback.classList.remove(`modal-error`);
      feedback.offsetWidth = feedback.offsetWidth;
      feedback.classList.add(`modal-error`);
    }
  });
  window.addEventListener(`keydown`, (evt) => {
    window.utils.onEscPressCloseModal(evt, feedback);
  });
})();
