import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ColorUtComponent } from "./color-ut.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

fdescribe("ColorUtComponent", () => {
  let component: ColorUtComponent;
  let fixture: ComponentFixture<ColorUtComponent>;
  let debugElement: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorUtComponent],
    }).compileComponents();

    // Encapsule le composant et son template
    fixture = TestBed.createComponent(ColorUtComponent);
    component = fixture.componentInstance;
    // C'est le représentant du template
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Div should have red background", () => {
    // Il faut chercher P
    const paragraphe = debugElement.query(By.css('[data-testid=para]'));
    // Assert sur la couleur
    expect(paragraphe.nativeElement.style.backgroundColor).toBe('red');
  });

  it("Div should have yellow background after click", () => {
    // Il faut chercher P
    const paragraphe = debugElement.query(By.css('[data-testid=para]'));
    // Assert sur la couleur
    expect(paragraphe.nativeElement.style.backgroundColor).toBe('red');

    // on doit simuler un click
    paragraphe.triggerEventHandler('click');
    // Dire à Angular de faire un change Detection
    fixture.detectChanges();
    // Assert sur la couleur => Yellow
    expect(paragraphe.nativeElement.style.backgroundColor).toBe('yellow');

  });
});
