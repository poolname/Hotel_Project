const reservationSearchBtn = document.querySelector(".reservation-search-btn"); //예약 폼 검색 버튼
const noSelect = document.querySelector(".no-select"); // 검색하기 전 결과 없을 때 화면
const searchResults = document.querySelector(".search-results-wrap"); // 검색하기 누른 후 결과 리스트 나오는 화면
const sortSelected = document.querySelector(".keyword-sorting .selected"); // 낮은 가격순(정렬하기) 버튼
const selectSort = document.querySelector(".keyword-sorting .select-sort"); // 정렬하기 버튼 눌렀을 때 나오는 정렬 기준 변경 리스트
const selectSortLi = document.querySelectorAll(".keyword-sorting .select-sort > li"); // 정렬하기 버튼 눌렀을 때 나오는 정렬 기준 변경 리스트의 li 하나하나

const keywordBtn = document.querySelector(".keyword-sorting .keyword-btn"); // 키워드 버튼
const keywordBox = document.querySelector(".keyword-box"); // 키워드 버튼 누르면 나오고 사라지는 키워드 박스
const searchResultsTab = document.querySelectorAll(".search-results-wrap .tab > li"); //패키지/객실 탭 구분 버튼
const searchResultsTabCont = document.querySelectorAll(".search-results-wrap .tab-cont"); // 패키지/객실 탭 버튼에 따라 나오는 내용 부분

const reservationBtn = document.querySelectorAll(".r-box .btn"); // 예약하기 버튼
const arrowIcon1 = document.querySelectorAll(".r-box .btn i"); // 예약하기 버튼안에 있는 화살표 아이콘
const roomTypeSelect = document.querySelectorAll(".room-type-select"); //룸 타입 선택하기 박스 전체
const roomTypeRadio = document.querySelectorAll(".room-type-select input[type='radio']"); // 침대타입 선택하는 인풋 라디오버튼
const cartBtn = document.querySelectorAll(".cart-btn"); //보관함담기 버튼


// 예약 페이지 검색 버튼 놀렀을 때 아래 검색 내용 보이게 하기
reservationSearchBtn.addEventListener("click",function(){
    noSelect.classList.remove("on");
    searchResults.classList.add("on");
});

// 예약페이지 검색 결과 탭 이동
for(let i = 0; i < searchResultsTab.length; i++){
    searchResultsTab[i].addEventListener("click",function(){
        for(let j = 0; j < searchResultsTab.length; j++){
            searchResultsTab[j].classList.remove("on");
            searchResultsTabCont[j].classList.remove("on");
        }
        searchResultsTab[i].classList.add("on");
        searchResultsTabCont[i].classList.add("on");
    });
}

for(let i = 0; i < selectSortLi.length; i++){
    selectSortLi[i].addEventListener("click",function(){
        for(let j = 0; j < selectSortLi.length; j++){
            selectSortLi[j].classList.remove("on");
        }
        selectSortLi[i].classList.add("on");
        sortSelected.innerHTML = selectSortLi[i].textContent;
        selectSort.classList.remove("on");
        sortSelected.classList.remove("on");
    });
}


// 예약하기 갯수만큼 
for(let i = 0; i < reservationBtn.length; i++){
    reservationBtn[i].addEventListener("click",function(){
        if(!roomTypeSelect[i].classList.contains("on")){
            roomTypeSelect[i].classList.add("on");
            reservationBtn[i].innerHTML = '닫기<i className="fa-solid fa-chevron-up"></i>';
        }
        else {
            roomTypeSelect[i].classList.remove("on");
            reservationBtn[i].innerHTML = '예약하기<i className="fa-solid fa-chevron-down"></i>';
        }
    });
}

viewHide(sortSelected,selectSort);
viewHide(keywordBtn,keywordBox);


// 버튼을 눌렀을 때 활성화 class가 붙어있으면 없애주고, 없으면 넣어준다.
function viewHide(btn,item){
    btn.addEventListener("click",function(){
        if(!item.classList.contains("on")){
            item.classList.add("on");
            btn.classList.add("on");
        }
        else {
            item.classList.remove("on");
            btn.classList.remove("on");
        }
    });
}

if(selectSort.classList.contains("on")){
    
}




