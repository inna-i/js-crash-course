const testConfig = {
    module: 'users',
    unitType: 'unit-tests',
    e2eType: 'e2e-tests',
    json: '.json',
    xml: '.xml'
};
  
function triggerTests(type, format) {
    console.log('Output is in ' + format + ' format');
   
    if (type === 'e2e-tests') {
      console.log('e2e tests are running...');
    } else {
      console.log('unit tests are running...');
    }
}
  
// call the same function with different values
// triggerTests(testConfig.unitType, testConfig.json);
triggerTests(testConfig.e2eType, testConfig.xml);
  