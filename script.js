document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  let activeCardIndex = 0;

  // 첫 화면에 프로필 카드 나타내기
  cards[activeCardIndex].classList.add('active');

  window.showCard = function (index) {
    if (index === activeCardIndex) return;

    const currentCard = cards[activeCardIndex];
    const nextCard = cards[index];

    // 현재 페이지 숨기기
    currentCard.classList.remove('active');
    setTimeout(() => currentCard.classList.add('d-none'), 500);

    // 다음 페이지 나타나기
    nextCard.classList.remove('d-none');
    setTimeout(() => nextCard.classList.add('active'), 50);

    activeCardIndex = index;
  };
});

document.addEventListener('DOMContentLoaded', function () {
  const imgElement = document.querySelector('.img-second');
  const textElement = document.querySelector('.text-transition');
  const originalImage = 'images/profile.jpg'; // 원본 이미지 경로
  const hoverImage = 'images/profile2.jpg'; // 마우스를 올렸을 때 바뀔 이미지 경로
  const originalText = '마우스를 올려보세요'; // 원본 텍스트
  const hoverText = '눈이 심하게 안좋아 오티 때와 많이 다릅니다.<br>알아봐주시면 감사하겠습니다😂<br> p.s 집 앞 편의점 사장님도 두 명으로 알고 계십니다.';

  imgElement.addEventListener('mouseenter', function () {
    imgElement.src = hoverImage; // 마우스를 올리면 이미지 변경
    textElement.innerHTML = hoverText; // 텍스트 변경 (줄바꿈 적용)
  });

  imgElement.addEventListener('mouseleave', function () {
    imgElement.src = originalImage; // 마우스를 떼면 원래 이미지로 돌아감
    textElement.innerHTML = originalText; // 텍스트 원래대로
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const favTitles = document.querySelectorAll(".fav-title");

  favTitles.forEach((title) => {
    const favDescription = title.nextElementSibling; // 클릭된 title의 다음 요소(fav-description)

    // 페이지 로드 시 모든 내용을 접힌 상태로 설정
    favDescription.style.maxHeight = null;

    title.addEventListener("click", function () {
      title.classList.add("active");

      setTimeout(() => {
        title.classList.remove("active");
      }, 100);

      // 현재 열려있으면 닫고, 닫혀있으면 열기
      if (favDescription.style.maxHeight) {
        favDescription.style.maxHeight = null;
      } else {
        favDescription.style.maxHeight = favDescription.scrollHeight + "px";
      }
    });
  });
});


