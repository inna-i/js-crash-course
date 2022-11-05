function testBind() {
    this.x = 9;
    
    const objectX = {
        x: 81,
        getX: function () {
            return this.x;
        }
    };

    const objectX100 = {
        x: 100,
    }
    
    
    objectX.getX(); // 81
    
    const getX = objectX.getX;
    console.log(' whithout bind ', getX()); // 9, because in this case, "this" refers to the global object
    
    // create a new function with 'this' bound to objectX
    const boundGetX = getX.bind(objectX);
    console.log('bind obj objectX ', boundGetX()); // 81
    
    // create a new function with 'this' bound to objectX100
    const boundGetX100 = getX.bind(objectX100);
    console.log('bind obj objectX100 ', boundGetX100()); // 81

    console.log('call with obj objectX100', getX.call(objectX100));
}

testBind();
