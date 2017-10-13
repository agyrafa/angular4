import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBoxImageComponent } from './card-box-image.component';

describe('CardBoxImageComponent', () => {
  let component: CardBoxImageComponent;
  let fixture: ComponentFixture<CardBoxImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBoxImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBoxImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
