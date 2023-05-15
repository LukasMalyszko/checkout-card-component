export const CheckoutCardComponent = () => {

 // Get the checkout card component
 const checkoutCardComponent = document.querySelector('.checkout-card-component')

 // Get the confirm button
 const confirmButton = checkoutCardComponent.querySelector('.btn-primary')

 // Get the cancel button
 const cancelButton = checkoutCardComponent.querySelector('.btn-secondary')

 // Add event listener to the confirm button
 confirmButton.addEventListener('click', () => {
     // set the data-loading attribute to 1
     // in order to change the buttons state to loading
     confirmButton.setAttribute('data-loading', '1')
     cancelButton.setAttribute('disabled', 'disabled')
 })
}