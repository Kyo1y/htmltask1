
const service = $('.service')
const optionsContainer = $(".options-container")
const arrow = $('.arrow')
const optionsList = $('.option')

$(".service").on('click', () => {
    optionsContainer.toggleClass('active')
    service.toggleClass('active')
    arrow.toggleClass('active')
})


optionsList.each(function () {
    $(this).on('click', function () {
        let cur = $(this).find('label').html()
        $('.service').html(cur)
        optionsContainer.removeClass('active')
    })
});
