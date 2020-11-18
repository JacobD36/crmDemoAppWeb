import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaimeComponent } from './jaime.component';

describe('JaimeComponent', () => {
  let component: JaimeComponent;
  let fixture: ComponentFixture<JaimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
