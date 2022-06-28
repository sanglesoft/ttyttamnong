$(document).ready(function () {
    $("option").each(function (index) {
        if ($(this).text() == "Not Set") {
            $(this).text("Chưa chọn");
        }
        else if ($(this).text() == "False") {
            $(this).text("Không");
        }
        else if ($(this).text() == "True") {
            $(this).text("Có");
        }
        ;
    });
    $(".dataTables_length select").addClass("form-control");
    $(".dataTables_filter input").addClass("form-control");
});

if (0 < $(".date-picker").length) {
    $(".date-picker").pickadate({
        format: "dd/mm/yyyy",
        monthsFull: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'],
        monthsShort: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        weekdaysFull: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
        weekdaysShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        showMonthsShort: true,
        showWeekdaysFull: false,
        today: 'Hôm nay',
        clear: 'Xóa',
        close: 'Đóng',
        labelMonthNext: 'Tháng sau',
        labelMonthPrev: 'Tháng trước',
        labelMonthSelect: 'Chọn tháng',
        labelYearSelect: 'Chọn năm',
        editable: false,
        selectYears: true,
        selectMonths: true,
        closeOnSelect: true,
        closeOnClear: true,
    });
}
