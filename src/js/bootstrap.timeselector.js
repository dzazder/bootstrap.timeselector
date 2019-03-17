(function ( $ ) {
    $.fn.timeselector = function(  ) {
        this.each(function() {
            $(this).click(function() {
                showTimeSelector();
            });
        });
    };

    function showTimeSelector() {
        console.log("show time selector");
    };
}( jQuery ));