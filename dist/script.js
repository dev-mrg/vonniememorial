jQuery("#banner").mousemove(
    function(e) {

        var offset = jQuery(this).offset();
        var xPos = e.pageX - offset.left - 650;
        var yPos = e.pageY - offset.top - 200;

        var mouseXPercent = Math.round(xPos / jQuery(this).width() * 100);
        var mouseYPercent = Math.round(yPos / jQuery(this).height() * 100);

        jQuery(this).children('img').each(
            function() {
                var diffX = jQuery('#Parallax').width() - jQuery(this).width();
                var diffY = jQuery('#Parallax').height() - jQuery(this).height();

                var myX = diffX * (mouseXPercent / 800);

                var myY = diffY * (mouseYPercent / 1080);


                var cssObj = {
                    'left': myX + 'px',
                    'top': myY + 'px'
                }

                jQuery(this).animate({ left: -myX, top: -myY }, { duration: 20, queue: false, easing: 'linear' });

            }
        );

    }
);