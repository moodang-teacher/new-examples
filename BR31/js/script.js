$(function () {
    // 1. 아이스크림 상세 정보 : 이미지, 이름, 해쉬태그, 배경색(제목색), 해쉬태그 색
    const iceCreamContents = [
        ['icecream01.png', '키세스 브라우니 초콜릿', '#키세스 #크림 #브라우니 #이달의맛', '#af7a3b', '#fff'],
        ['icecream02.png', '치토스 밀크쉐이크 아이스크림', '#치토스 #밀크쉐이크 #초콜릿', '#a97157', '#fff'],
        ['icecream03.png', '아이스 도쿄바나나', '#아이스도쿄바나나', '#fcbf49', '#f77f00'],
        ['icecream04.png', '허니 크런치', '#바닐라 #꿀 #크런치', '#ebc349', '#fff'],
        ['icecream05.png', '오레오 쿠키 앤 콜드브루', '#오레오 #콜드브루', '#af7a3b', '#fff'],
        ['icecream06.png', '윈터 민트 초콜릿 칩', '#민트 #초콜릿칩 #팝핑캔디', '#6ca18f', '#fff'],
        ['icecream07.png', '쫀떡궁합', '#흑임자 #인절미 #프랄린피칸', '#a97157', '#fff'],
        ['icecream08.png', '나주배 소르베', '#나주배', '#f5b21c', '#fff'],
        ['icecream09.png', '소금 우유 아이스크림', '#소금우유 #단짠', '#004e98', '#fff'],
        ['icecream10.png', '애플 민트', '#그린애플 #민트 #사과', '#9bb053', '#fff'],
        ['icecream11.png', '아이스 호떡', ' #호떡 #호떡시럽리본 #씨앗', '#fefae0', '#bc6c25'],
        ['icecream12.png', '너는 참 달고나', '#달고나 #카라멜', '#fdf8e1', '#fdb833'],
    ];

    // 2. 뿌려질 li 상세정보
    const liEl = `
        <li>
            <a href="#">
                <figure><img src="./img/icecream01.png" alt="" /></figure>
                <p>키세스 브라우니 초콜릿</p>
                <p class="hash-tag">#키세스 #크림 #브라우니 #이달의맛</p>
            </a>
        </li>
    `;

    // 3. 아이스크림 수 많큼 반복해서 삽입
    for (let i = 0; i < iceCreamContents.length; i++) {
        $('.ice-cream-list').append(liEl);
    }

    // 4. 상세 정보를 각 배열의 값으로 적용
    $('.ice-cream-list li').each((index, el) => {
        console.log(el, index);

        $(el)
            .find('img')
            .attr('src', './img/' + iceCreamContents[index][0]);

        $(el).find('p').text(iceCreamContents[index][1]);
        $(el).find('p.hash-tag').text(iceCreamContents[index][2]).css('color', iceCreamContents[index][4]);
        $(el).hover(
            function () {
                $(el).find('figure').css('background-color', iceCreamContents[index][3]);
                $(el).find('figure+p').css('color', iceCreamContents[index][3]);
            },
            function () {
                $(el).find('figure').css('background-color', '');
                $(el).find('figure+p').css('color', '');
            }
        );
    });
});
