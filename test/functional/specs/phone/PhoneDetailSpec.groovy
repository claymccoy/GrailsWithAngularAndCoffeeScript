package specs.phone

import geb.GebSpecWithDefaultConfig
import pages.phone.PhoneDetailPage

class PhoneDetailSpec extends GebSpecWithDefaultConfig {

    def setup() {
        to PhoneDetailPage, 'nexus-s'
    }

    def 'should display nexus-s page'() {
        expect: phoneName == 'Nexus S'
    }

    def 'should display the first phone image as the main phone image'() {
        expect: mainPhoneImage.endsWith('/phonecat/images/phones/nexus-s.0.jpg')
    }

    def 'should swap main image if a thumbnail image is clicked on'() {
        when: phoneThumb(3).click()
        then: mainPhoneImage.endsWith('/phonecat/images/phones/nexus-s.2.jpg')
        when: phoneThumb(1).click()
        then: mainPhoneImage.endsWith('/phonecat/images/phones/nexus-s.0.jpg')
    }
}
