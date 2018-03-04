describe('foo', function() {
  beforeAll(function() {
    console.log('hi');
  });

  it('should work', function() {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
  });
});
