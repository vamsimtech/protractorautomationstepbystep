
// des takes two arguments
describe('mysuite1', function() {
    
beforeEach(() => {
    console.log("This is login")
});

afterEach(() => {
    console.log("this is logout")
});



beforeAll(function() {
    console.log("Before all")
});


afterAll(function() {
    console.log("After all")
});
    
    
    

    it('Mytest1',function(){

        console.log("MyTest1......")

    })

    it('Mytest2',function(){
        console.log("MyTest2......")

    })

    it('Mytest3',function(){
        console.log("MyTest3......")
    })
    
});
// describe('Mysuite2', function() {
    
//     it('Mytest1',function(){

//     })

//     it('Mytest2',function(){

//     })

//     it('Mytest3',function(){

//     })
    
// });
    