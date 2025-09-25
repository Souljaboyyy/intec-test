const tabsAnswers = document.querySelectorAll('.tab-answer');
const tabsBtns = document.querySelectorAll('.button-tab');

tabsBtns.forEach(btn => {
    btn.addEventListener('click',() => {
        const tabId = btn.getAttribute('data-tab');
        const answer = document.getElementById(tabId);

        tabsAnswers.forEach(tab => {
            if(tab !== answer)
            tab.classList.remove('active')
        });
        
        if(answer.classList.contains('active')){
            answer.classList.remove('active');
        }
        else{
            answer.classList.add('active');
        }
    });
})