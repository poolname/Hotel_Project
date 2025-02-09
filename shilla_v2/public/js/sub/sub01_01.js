// 드롭다운리스트
$(function () {
    $(".sortbox").click(function () {
        $(".dropdown.sort").toggleClass("on");
    });
    $(".dropdown-item-sort li").click(function () {
        let selectedSort = $(this).text();
        $(".sortbox").text(selectedSort);
        $(".dropdown.sort").removeClass("on");
    });
    $(".typebox").click(function () {
        $(".dropdown.type").toggleClass("on");
    });
    $(".dropdown-item-type li").click(function () {
        let selectedType = $(this).text();
        $(".typebox").text(selectedType);
        $(".dropdown.type").removeClass("on");
    });

    // 데이트피커
    $('input[name="daterange3"]')
        .daterangepicker({
            minYear: 1000,
            maxYear: 9999,
            autoUpdateInput: false,
            locale: {
                format: "YYYY.MM.DD",
                separator: " - ",
                applyLabel: "확인",
                cancelLabel: "취소",
                fromLabel: "From",
                toLabel: "To",
                customRangeLabel: "Custom",
                weekLabel: "주",
                daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
                monthNames: [
                    "1월",
                    "2월",
                    "3월",
                    "4월",
                    "5월",
                    "6월",
                    "7월",
                    "8월",
                    "9월",
                    "10월",
                    "11월",
                    "12월",
                ],
                firstDay: 1,
            },
            drops: "down", // up, down, auto 중 선택
        })
        .on("apply.daterangepicker", function (ev, picker) {
            $(this).val(
                picker.startDate.format("YYYY.MM.DD") +
                    " - " +
                    picker.endDate.format("YYYY.MM.DD")
            );
        });
});

// 초기화 버튼 눌렀을 때 날짜, 유형구분, 키워드 초기상태로 만들기
$(".pkg-filter-resetbtn").on("click", function () {
    $(".typebox").text("전체");
    $("input[type='checkbox']").prop("checked", false);
    $('input[name="daterange3"]').val("");
});

// 필터타입 + 페이지네이션
$(document).ready(function () {
    const productItems = $(".product-item"); // 모든 상품 리스트 항목들
    const searchButton = $(".pkg-filter-searchbtn"); // 검색 버튼
    let selectedType = "전체"; // 기본값은 '전체'
    let currentPage = 1; // 현재 페이지 번호
    const itemsPerPage = 10; // 한 페이지에 표시할 상품 수
    const pagesPerGroup = 5; // 한 그룹에 표시할 페이지 수
    let filteredItems = productItems; // 필터링된 아이템을 저장할 변수

    // 필터 선택 시 선택된 값을 저장하고 필터링 적용
    $(".filter-type").on("click", function () {
        selectedType = $(this).data("type"); // 선택된 필터 유형 저장
    });

    // 검색 버튼 클릭 시 필터링 적용
    searchButton.on("click", function () {
        applyFilter(); // 검색 버튼 클릭 시 필터 적용
    });

    // 필터링 로직 통합
    function applyFilter() {
        // "전체" 선택 시, 모든 상품을 표시
        if (selectedType === "전체" || selectedType === "all") {
            // selectedType === "all" : 패키지가 유형구분없이 전체했을때만 노출되도록 하는 경우
            filteredItems = productItems;
        } else {
            // 필터링된 상품들 가져오기
            filteredItems = productItems.filter(function () {
                const productType = $(this).data("type").split(" "); // 각 상품의 유형 가져오기
                return productType.includes(selectedType); // 필터 조건
            });
        }

        // 필터링된 항목 개수 출력
        $(".totalnum").text(filteredItems.length);

        // 필터링된 항목 표시 및 페이지네이션 생성
        currentPage = 1; // 필터 선택 또는 검색 시 첫 페이지로 돌아감
        paginateItems(filteredItems); // 필터링된 상품들을 페이지에 맞게 표시
    }
    // 필터링된 항목을 페이지에 맞게 나누어 출력하는 함수
    function paginateItems(items) {
        const totalPages = Math.ceil(items.length / itemsPerPage); // 총 페이지 수 계산
        if (currentPage > totalPages) currentPage = 1; // 현재 페이지가 전체 페이지를 넘지 않도록 설정

        // 필터링된 항목을 출력할 때 페이지네이션 버튼 갱신
        $("#pagination").empty(); // 기존 페이지 버튼 지우기
        for (let i = 1; i <= totalPages; i++) {
            // 페이지를 1부터 전체페이지까지 반복
            const pageButton = $("<button></button>").text(i);
            pageButton.on("click", function () {
                currentPage = i; // 클릭한 페이지로 이동
                paginateItems(items); // 클릭한 페이지의 항목들만 표시
            });
            if (i === currentPage) {
                // 현재페이지 스타일 추가적용
                pageButton.addClass("active");
            }
            $("#pagination").append(pageButton); // 생성된 숫자에 버튼태그 생성
        }

        // 첫 페이지의 항목 표시
        displayPage(items);
        updateControlButtons(totalPages); // 이전,다음 버튼 상태 업데이트
    }

    // 현재 페이지에 맞는 항목들만 표시하는 함수
    function displayPage(items) {
        productItems.hide(); // 모든 항목 숨기기
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        // 현재 페이지에 맞는 항목만 표시
        items.slice(start, end).each(function () {
            $(this).show(); // DOM에 다시 추가
        });
    }

    // 이전, 첫 페이지, 다음, 마지막 페이지 버튼 상태 제어
    function updateControlButtons(totalPages) {
        // 첫페이지일 때 이전, 처음으로 버튼 안보이기
        $("#prev-page").css("display", currentPage === 1 ? "none" : "block");
        $("#first-page").css("display", currentPage === 1 ? "none" : "block");
        // 다음, 마지막 페이지 버튼 상태 제어
        // 마지막페이지일 때 다음, 마지막으로 버튼 안보이기
        $("#next-page").css(
            "display",
            currentPage === totalPages ? "none" : "block"
        );
        $("#last-page").css(
            "display",
            currentPage === totalPages ? "none" : "block"
        );
    }
    // 이전,다음,첫페이지,마지막 페이지 클릭시 필터링된 항목 보여주기
    $("#prev-page").on("click", function () {
        if (currentPage > 1) {
            currentPage--;
            displayPage(filteredItems);
            paginateItems(filteredItems);
        }
    });
    $("#next-page").on("click", function () {
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayPage(filteredItems);
            paginateItems(filteredItems);
        }
    });
    $("#first-page").on("click", function () {
        currentPage = 1;
        displayPage(filteredItems);
        paginateItems(filteredItems);
    });
    $("#last-page").on("click", function () {
        currentPage = Math.ceil(filteredItems.length / itemsPerPage);
        displayPage(filteredItems);
        paginateItems(filteredItems);
    });

    // 페이지 로드 시 전체 상품 개수 출력 및 초기 상태 설정
    const pkgCount = productItems.length;
    $(".totalnum").text(pkgCount); // 초기 상품 개수 출력
    paginateItems(productItems); // 전체 상품을 페이지네이션에 맞춰 출력
});

// 페이지 이동 고민하기
$(function () {
    var targetOffset = $(".pkg-section").offset().top - 90;
    $(".pkg-paging button").on("click", function () {
        $("html, body").animate({ scrollTop: targetOffset }, "fast");
    });
    $("#pagination").on("click", function () {
        $("html, body").animate({ scrollTop: targetOffset }, "fast");
    });
});

// 디데이계산
$(document).ready(function () {
    // 마감일 설정
    var deadline = new Date("2024-10-30T00:00:00").getTime();

    // 타이머 업데이트 함수
    function updateTimer() {
        var now = new Date().getTime(); // 현재 시간
        var timeRemaining = deadline - now; // 남은 시간

        // 남은 시간을 일, 시간, 분, 초로 변환
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
            (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor(
            (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // 남은 시간 업데이트
        $("#d-day-timer").text(
            days + "일 " + hours + "시간 " + minutes + "분 " + seconds + "초"
        );

        //시간이 다 되면 타이머를 멈추고 메시지를 변경
        if (timeRemaining < 0) {
            clearInterval(timerInterval);
            $(".d-day").text("예약이 마감되었습니다.");
            $(".d-day").css({ "text-align": "center", "padding-left": "0" });
        }
    }
    // 페이지로드시 바로 실행
    updateTimer();
    // 1초마다 타이머 업데이트
    var timerInterval = setInterval(updateTimer, 1000);
});
