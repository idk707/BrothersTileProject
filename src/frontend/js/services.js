document.addEventListener('DOMContentLoaded', () => {
    const first_pillar = document.getElementById('first_pillar');
    const sec_pillar = document.getElementById('second_pillar');
    const three_pillar = document.getElementById('third_pillar')
        
    // force browser to recognise initial transform state before adding the visible class
    requestAnimationFrame(() => {
        first_pillar.classList.add('visible');
        first_pillar.style.right = "0px";
        sec_pillar.classList.add('visible');
        sec_pillar.style.transitionDelay = '0.3s'
        sec_pillar.style.right = '550px';
        three_pillar.classList.add('visible');
        three_pillar.style.transitionDelay = '0.6s'
        three_pillar.style.right = '';
        three_pillar.style.left = '0px'
    });
});