import { LoggerService } from "src/app/services/logger.service";
import { MathService } from "./math.service";
import { TestBed } from "@angular/core/testing";

let mathService: MathService;
let loggerService: LoggerService;
let loggerSpy: any;
let loggerServiceSpy: any;

fdescribe("MathService", () => {
  beforeEach(() => {
    // Arrange
    loggerService = TestBed.inject(LoggerService);
    //loggerSpy = jasmine.createSpyObj('LoggerService', ['logger']);
    loggerServiceSpy = spyOn(loggerService, 'logger');
    loggerServiceSpy.and.callFake(() => {console.log('fake');
    });
    mathService = new MathService(loggerService);
  })
  it("should work", () => {
    // Todo : Test if the service is well instanciated
    expect(1).toBe(1);
  });

  it("should add two numbers", () => {
    // Act
    const result = mathService.add(4,5);
    const expectedResult = 9;
    // Assert
    expect(result).toBe(expectedResult);
  });
  it("should substract two numbers", () => {
    // Act
    const result = mathService.substract(4,5);
    const expectedResult = -1;
    // Assert
    expect(result).toBe(expectedResult);
  });
});
