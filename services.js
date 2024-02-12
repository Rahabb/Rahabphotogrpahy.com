// JavaScript to handle the "Book Now" button click
const bookNowButtons = document.querySelectorAll(".book-now");
const bookingForms = document.querySelectorAll(".booking-form");

bookNowButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Toggle visibility of the corresponding booking form
        if (bookingForms[index].style.display === "block") {
            bookingForms[index].style.display = "none";
        } else {
            bookingForms[index].style.display = "block";
        }
    });

    // Hide the booking forms initially
    bookingForms[index].style.display = "none";
});
