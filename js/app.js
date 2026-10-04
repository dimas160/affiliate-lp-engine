/**
 * Affiliate LP Engine
 *
 * Application layer.
 *
 * Responsibilities:
 * - Initialize landing page
 * - Handle affiliate CTA
 * - Prepare tracking hooks
 *
 * Tracking providers such as:
 * - Google Analytics
 * - Google Tag Manager
 * - Meta Pixel
 *
 * will be added in Phase 2.
 */

document.addEventListener("DOMContentLoaded", () => {

    const CONFIG = {
        affiliateUrl: "",
        enableAffiliateRedirect: false
    };


    /**
     * Affiliate CTA Handler
     */
    const affiliateButtons = document.querySelectorAll(
        '[data-destination="affiliate"]'
    );


    affiliateButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

            /*
             * Prevent placeholder "#"
             * from jumping to the top of the page.
             */
            if (!CONFIG.enableAffiliateRedirect) {

                event.preventDefault();

                console.log(
                    "Affiliate URL belum dikonfigurasi."
                );

                return;
            }


            /*
             * Affiliate redirect.
             */
            if (CONFIG.affiliateUrl) {

                event.preventDefault();

                window.location.href =
                    CONFIG.affiliateUrl;
            }

        });

    });


    /**
     * Application initialization
     */
    console.log(
        "Affiliate LP Engine initialized."
    );

});
