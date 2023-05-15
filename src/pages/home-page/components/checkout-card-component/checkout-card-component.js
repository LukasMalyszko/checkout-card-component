export const CheckoutCardComponent = () => {
  const checkoutCardComponent = document.querySelector(
    ".checkout-card-component"
  );

  const confirmButton = checkoutCardComponent.querySelector(".btn-primary");

  const cancelButton = checkoutCardComponent.querySelector(".btn-secondary");

  let isLoading = false;

  // Add event listener to the confirm button
  confirmButton.addEventListener("click", () => {
    if (isLoading) {
      console.log("The payment is already processing");
      return null;
    }
    // set the data-loading attribute to 1
    // in order to change the buttons state to loading
    confirmButton.setAttribute("data-loading", "1");
    cancelButton.setAttribute("disabled", true);

    isLoading = true;
  });
};
