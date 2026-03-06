document.addEventListener('DOMContentLoaded', function () {
    const titles = document.querySelectorAll('.et_pb_toggle_title');

    titles.forEach(title => {
        title.addEventListener('click', function () {
            const toggle = this.parentElement;
            const isOpen = toggle.classList.contains('et_pb_toggle_open');

            // Optional: Close other toggles in the same accordion
            /*
            const accordion = toggle.parentElement;
            const otherToggles = accordion.querySelectorAll('.et_pb_toggle');
            otherToggles.forEach(other => {
                if (other !== toggle) {
                    other.classList.remove('et_pb_toggle_open');
                    other.classList.add('et_pb_toggle_close');
                }
            });
            */

            if (isOpen) {
                toggle.classList.remove('et_pb_toggle_open');
                toggle.classList.add('et_pb_toggle_close');
            } else {
                toggle.classList.remove('et_pb_toggle_close');
                toggle.classList.add('et_pb_toggle_open');
            }
        });
    });
});
