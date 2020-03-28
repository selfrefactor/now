import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughDemoComponent } from './rough-demo.component';

describe('RoughDemoComponent', () => {
  let component: RoughDemoComponent;
  let fixture: ComponentFixture<RoughDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoughDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoughDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
