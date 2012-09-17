
describe 'filter', ->

  beforeEach module 'phonecatFilters'

  describe 'checkmark', ->

    it 'should convert boolean values to unicode checkmark or cross',
      inject (checkmarkFilter) ->
        expect(checkmarkFilter true).toBe '\u2713'
        expect(checkmarkFilter false).toBe '\u2718'
