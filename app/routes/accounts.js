import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
            id: 'chase-bank',
            account: 'Account #1 - CHECKING (....1234)',
            bankName: 'Chase Bank',
            description: 'Ohio Residential 2017'
            
          }, {
            id: 'zwink-bank',
            account: 'Account #2 (....7323)',
            bankName: 'First National Bank of Zwink',
            description: 'Ohio Residential 2017- Refinance'
          }, {
            id: 'reliable-bank',
            account: 'Account #3 - Saving (....1184)',
            bankName: 'Reliable Bank of Ohio',
            description: 'Ohio Residential 2017'
        
          }, {
            id: 'zach-bank',
            account: 'Account #4 (....4321)',
            bankName: 'Last National Bank of Zach',
            description: 'Maryland Residential 2017'
            
            
          
          }]
    }
});
