document.addEventListener('DOMcontentLoaded', () => {
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const infoId = btn.getAttribute('aria-controls');
            const panel = document.getElementById(infoId);
            const isOpen = btn.getAttribute('aria-expanded') ===

            btn.setAttribute('aria-expanded', String(!isOpen));
            if (isOpen) {
                panel.hidden = true;
                btn.textContent= 'More Info';
            }else{
                panel.hidden=false;
                btn.textContent='Less Info';

            }
        });
    });
});