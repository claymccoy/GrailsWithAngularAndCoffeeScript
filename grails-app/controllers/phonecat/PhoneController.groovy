package phonecat

class PhoneController {

    def phoneService

    def index = { redirect(action: 'list', params: params) }

    def list() { [jsController: 'PhoneListCtrl'] }

    def show() { [jsController: 'PhoneDetailCtrl'] }

    def query(String id) {
        if (id) {
            render phoneService.getPhone(id)
        } else {
            render phoneService.allPhones()
        }
    }
}
