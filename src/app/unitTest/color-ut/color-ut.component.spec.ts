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
});
