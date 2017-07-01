export const actions = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

// Action to open a modal.
export const openModal = (template) => ({
    type: actions.OPEN_MODAL,
    data: template
});

// Action to close a modal.
export const closeModal = () => ({
    type: actions.CLOSE_MODAL
});