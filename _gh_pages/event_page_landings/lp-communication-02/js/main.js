(function($){

    var FV = {

        thankYou: function(){
            console.log('thank you');
            return false;
        },

        submitForm: function() {
            $('#input-form').one('submit', function(){
                console.log('te')
                var inputq1 = encodeURIComponent($('#input-q1').val());
                var inputq2 = encodeURIComponent($('#input-q2').val());
                var inputq3 = encodeURIComponent($('#input-q3').val());
                var inputq4 = encodeURIComponent($('#input-q4').val());
                var inputq5 = encodeURIComponent($('#input-q5').val());
                var inputq6 = encodeURIComponent($('#input-q6').val());
                var inputq7 = encodeURIComponent($('#input-q7').val());
                var inputq8 = encodeURIComponent($('#input-q8').val());
                var q1ID = "entry.1459891162";
                var q2ID = "entry.349091248";
                var q3ID = "entry.220779010";
                var q4ID = "entry.51706867";
                var q5ID = "entry.897423061";
                var q6ID = "entry.1999098183";
                var q7ID = "entry.1104764436";
                var q8ID = "entry.52830598";
                var baseURL = 'https://docs.google.com/forms/d/1Xc_jcrzGP-JNvXSuf1Kyy5OYjE_P4ieFCw7UpcmU2r4/formResponse?';
                var submitRef = '&submit=Submit';
                var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + "&" + q3ID + "=" + inputq3 + "&" + q4ID + "=" + inputq4 + "&" + q5ID + "=" + inputq5 + "&" + q6ID + "=" + inputq6 + "&" + q7ID + "=" + inputq7 + "&" + q8ID + "=" + inputq8 + submitRef);
                $(this)[0].action=submitURL;
                FV.thankYou();
            });

        },

        init : function () {
            $('#get-started').on('click', function(e){
                e.preventDefault();
                $("#message-one").hide();
                $("#message-two").show();
                FV.submitForm;
            });
        }

    };

    FV.init();

    /* MIX PANEL */
    mixpanel.track("lp-test-communication:Load");


    $('[track]').click(function() {
        mixpanel.track($(this).attr('track'));
    });

})(jQuery);