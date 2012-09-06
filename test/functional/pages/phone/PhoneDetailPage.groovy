package pages.phone

class PhoneDetailPage extends PhonePage {
    static action = "show"

    static url = "$controller/$action" // This seems to only be needed on pages that are called with an id.

    static content = {
        phoneName { $('h1').text() }
        mainPhoneImage { $('img.phone').@src }
        phoneThumb { int index -> $(".phone-thumbs li:nth-child(${index}) img") }
    }
}
