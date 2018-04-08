export default function() {
  this.namespace = '/api';

  this.get('/accounts', function() {
    return {
      data: [{
        type: 'accounts',
        id: 'chase-bank',
        attributes: {
          account: 'Account #1 - CHECKING (....1234)',
          bankName: 'Chase Bank',
          description: 'Ohio Residential 2017'
        }
      }, {
        type: 'accounts',
        id: 'zwink-bank',
        attributes: {
          account: 'Account #2 (....7323)',
          bankName: 'First National Bank of Zwink',
          description: 'Ohio Residential 2017- Refinance'
        }
      }, {
        type: 'accounts',
        id: 'reliable-bank',
        attributes: {
          account: 'Account #3 - Saving (....1184)',
          bankName: 'Reliable Bank of Ohio',
          description: 'Ohio Residential 2017'
        }
      }, {
        type: 'accounts',
        id: 'zach-bank',
        attributes: {
          account: 'Account #4 (....4321)',
          bankName: 'Last National Bank of Zach',
          description: 'Maryland Residential 2017'
        }
        
      
      }]
    };
  });
}