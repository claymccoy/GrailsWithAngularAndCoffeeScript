package pages.phone

class PhoneListPage extends PhonePage {
    static action = "list"

    static content = {
        phones { $('.phones li') }
        phoneNames { phones(it).find('p.phoneName') }
        phoneLinks(to: PhoneDetailPage) { phones(it).find('a') }
        searchField { $('input[name=query]') }
        orderField { $('select[name=orderProp]') }
    }
}
