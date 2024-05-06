window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var contentHeight = document.querySelector('.Paragrapholder').offsetHeight;

    var yOffset = window.pageYOffset;
    var windowHeight = window.innerHeight;

    // Calculate how far the user has scrolled from the top of the content
    var scrolled = yOffset + windowHeight;





    //calculate the percentage of scroll progress
    var scrollPercentage = Math.min(scrolled / contentHeight,1);//Ensure opacity does not exceed 1
    
    if (scrollPercentage >= 0.90) {
        footer.style.opacity  = Math.min((scrollPercentage - 0.90) * 20, 1) //Scale to range from 0 to 1
    } else {
        //Reset opacity to 0 if user isn't 95% there yet
        footer.style.opacity = 0;
    }


});
