package specs.phone

import geb.GebSpecWithDefaultConfig
import pages.phone.PhoneDetailPage
import pages.phone.PhoneListPage
import pages.phone.PhonePage

class PhoneListSpec extends GebSpecWithDefaultConfig {

    def setup() {
        to PhoneListPage
    }

    def 'should filter the phone list as user types into the search box'() {
        expect: phones.size() == 20

        when: searchField.value('nexus')
        then: phones.size() == 1

        when: searchField.value('motorola')
        then: phones.size() == 8
    }

    def 'should be possible to control phone order via the drop down select box'() {
        searchField.value('tablet') //let's narrow the dataset to make the test assertions shorter

        expect: phoneNames.collect { it.text() } == ["Motorola XOOM\u2122 with Wi-Fi", "MOTOROLA XOOM\u2122"]

        when: orderField.value('Alphabetical')
        then: phoneNames.collect { it.text() } == ["MOTOROLA XOOM\u2122", "Motorola XOOM\u2122 with Wi-Fi"]
    }

    def 'should render phone specific links'() {
        searchField.value('nexus')
        when: phoneLinks[0].click()
        then: at PhoneDetailPage
    }

    def 'should redirect index.html to index.html#/phones'() {
        when: to PhoneIndexPage
        then: at PhoneListPage
    }

}

class PhoneIndexPage extends PhonePage {
    static action = "index"
}
