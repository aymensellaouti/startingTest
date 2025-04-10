import { AuthService } from "./auth.service";

// LE describe c'est un groupement de test
fdescribe('AuthService', () => {
  it('should work', () => {
    // on implémente ici nos tests
    expect(1).toBe(1);
  });
  it('should return false when no user token in localStorage', () => {
    // on implémente ici nos tests
    // Arrange
    localStorage.removeItem('user');
    const authService = new AuthService();
    const expectedResult = false;
    //Act
    const result = authService.isAuthentified();
    //Assert
    expect(expectedResult).toBe(result);
  });

  it('should return true when there is user token in localStorage', () => {
    // on implémente ici nos tests
    // Arrange
    localStorage.setItem('user','test');
    const authService = new AuthService();
    const expectedResult = true;
    //Act
    const result = authService.isAuthentified();
    //Assert
    expect(expectedResult).toBe(result);
  });
});
