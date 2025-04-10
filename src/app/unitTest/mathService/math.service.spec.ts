import { MathService } from "./math.service";
import { TestBed } from "@angular/core/testing";

let mathService: MathService;
fdescribe("MathService", () => {
  beforeAll(() => {
    // Arrange
    //Instancier le mathService
    mathService = TestBed.inject(MathService);
  })
  it('should work', () => { expect(1).toBe(1)})

  it('should add two numbers', () => {

    // Act
    // appeler la méthode add
    const result = mathService.add(2,3);
    const expectedResult = 5;
    // Assert
    // évaluer est ce que le résultat obtenu est égal au résultat attendu
    expect(result).toEqual(expectedResult);
  })
  it('should substract two numbers', () => {

    // Act
    // appeler la méthode add
    const result = mathService.substract(2,3);
    const expectedResult = -1;
    // Assert
    // évaluer est ce que le résultat obtenu est égal au résultat attendu
    expect(result).toEqual(expectedResult);
  })
});
