import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDeatailComponent } from './recipe-deatail.component';

describe('RecipeDeatailComponent', () => {
  let component: RecipeDeatailComponent;
  let fixture: ComponentFixture<RecipeDeatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDeatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDeatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
