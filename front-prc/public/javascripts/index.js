window.onload = () => {
    const fn = {
        init() {
            fn.sidebar_template();
            fn.event();
        },
        sidebar_template() {
            const $stepList = document.getElementById('stepList');

            for(let i=0,len=1; i<len; i++) {
                $stepList.innerHTML = `
                <li><a href="/pages/step${i+1}" data-step="${i+1}"  data-button="moveBtn">Step${i+1}</a></li>
                `;
            }
        },
        event() {
            const $stepList = document.querySelector('a[data-button="moveBtn"]');
            const $content = document.getElementById('content');
            $stepList.addEventListener('click', (e) => {
                e.preventDefault();
            });
        }
    };

    fn.init();
};