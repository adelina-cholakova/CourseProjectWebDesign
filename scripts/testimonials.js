let testimonialsSliderIndex = 0;

window.onload = () => {
    setInitialTestimonial();
}

function setInitialTestimonial() {
    renderTestimonial(testimonialsData[testimonialsSliderIndex]);
}

function renderTestimonial(testimonial) {
    document.getElementById('testimonial-avatar-image').src = testimonial.avatar;
    document.getElementById('testimonial-name').innerText = testimonial.name;
    document.getElementById('testimonial-content').innerText = testimonial.content;
}

function showNextTestimonial() {
    try {
        renderTestimonial(testimonialsData[++testimonialsSliderIndex]);
    } catch (error) {
        testimonialsSliderIndex = 0;
        renderTestimonial(testimonialsData[testimonialsSliderIndex]);
    }
}

function showPreviousTestimonial() {
    try {
        renderTestimonial(testimonialsData[--testimonialsSliderIndex]);
    } catch (error) {
        testimonialsSliderIndex = testimonialsData.length - 1;
        renderTestimonial(testimonialsData[testimonialsSliderIndex]);
    }
}