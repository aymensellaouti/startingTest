import { AuthService } from "./auth.service";

let authService: AuthService;

// LE describe c'est un groupement de test
fdescribe('AuthService', () => {
  beforeAll(() => {
    authService = new AuthService();
    localStorage.removeItem('user');
  })
  afterEach(() => {
    localStorage.removeItem('user');
  })
  it('should work', () => {
    // on implémente ici nos tests
    expect(1).toBe(1);
  });
  it('should return false when no user token in localStorage', () => {
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
