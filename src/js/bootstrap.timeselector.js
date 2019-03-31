(function ( $ ) {
    $.fn.timeselector = function(  ) {
        this.each(function() {
            $(this).click(function() {
                showTimeSelector(this );
            });
        });
    };

    function showTimeSelector(el) {
        console.log("show time selector");
        $('<div>hello</div>').appendTo(el);
    };
}( jQuery ));