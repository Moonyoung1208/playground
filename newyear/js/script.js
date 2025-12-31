document.addEventListener('DOMContentLoaded', () => {
    const luckyBag = document.getElementById('lucky-bag');
    const introText = document.getElementById('intro-text');
    const resultMessage = document.getElementById('result-message');
    const retryBtn = document.getElementById('retry-btn');

    let touchCount = 0;
    const maxTouch = 3;

    // 복주머니 터치 이벤트
    luckyBag.addEventListener('click', () => {
        touchCount++;

        // 터치 시 크기 피드백
        luckyBag.style.transform = 'scale(0.9)';
        setTimeout(() => {
            luckyBag.style.transform = 'scale(1)';
        }, 100);

        if (touchCount >= maxTouch) {
            revealGreeting();
        }
    });

    function revealGreeting() {
        // 인트로와 복주머니 숨기기
        luckyBag.classList.add('hidden');
        introText.classList.add('hidden');

        // 배경색 변화 (붉은 말의 열정을 표현)
        document.body.style.transition = 'background-color 1s ease';
        document.body.style.backgroundColor = '#fff5f5';

        // 결과 메시지 표시
        setTimeout(() => {
            resultMessage.classList.remove('hidden');
            resultMessage.style.display = 'block';
            createFirework(); // 간단한 시각 효과 호출
        }, 300);
    }

    // 다시 시작하기
    retryBtn.addEventListener('click', () => {
        location.reload();
    });

    // 화면에 '붉은' 입자 효과 생성 (게이미피케이션 시각화)
    function createFirework() {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.backgroundColor = '#c0392b';
            particle.style.borderRadius = '50%';
            particle.style.left = '50%';
            particle.style.top = '50%';

            document.body.appendChild(particle);

            const destinationX = (Math.random() - 0.5) * 300;
            const destinationY = (Math.random() - 0.5) * 300;

            particle.animate([
                { transform: 'translate(0, 0)', opacity: 1 },
                { transform: `translate(${destinationX}px, ${destinationY}px)`, opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 1000,
                easing: 'cubic-bezier(0, .9, .57, 1)',
                fill: 'forwards'
            });

            setTimeout(() => particle.remove(), 2000);
        }
    }
});