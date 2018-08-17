import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OnemovieComponent } from "./onemovie.component";

describe("OnemovieComponent", () => {
  let component: OnemovieComponent;
  let fixture: ComponentFixture<OnemovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnemovieComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
