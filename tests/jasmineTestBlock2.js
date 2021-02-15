
describe('first describe', function() {
    it('first  it block', function(){
        console.log("This is First it block in First Desc block")
    })
});

describe('second describe', function() {
    it('second  it block', function(){
        console.log("This is second it block in second Desc block")
    })
});
describe('Third describe', function() {
    it('third  it block', function(){
        console.log("This is Third it block in third Desc block")
    })
    it('third  it block2', function(){
        
        let x=100;
        expect(x).toBe(100);
        expect(x).not.toBe(200);
        console.log("This is Third it block2 in third Desc block")
    })
});