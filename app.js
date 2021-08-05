paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function() {
    /**
     * Loading
     */
    $('.p').delay(500).animate({
        top: '30%',
        opacity: '0'}, 3000,
        $.bez([
            0.19,
            1,
            0.22,
            1
        ])
    );

    /**
     * Main
     */
    $("#preloader").delay(1500).animate({
        bottom: '1000'}, 2000,
        /**
         * Animation 
         */
        $.bez([
            0.19,
            1,
            0.22,
            1
        ])
    );

    /**
     * Title Animation
     */
    TweenMax.from(".title", 2, {
        delay: 1.8,
        y: 10,
        opacity: 0,
        ease: Expo.eaeInOut
    })
})