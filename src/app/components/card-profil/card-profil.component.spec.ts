import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfilComponent } from './card-profil.component';

describe('CardProfilComponent', () => {
  let component: CardProfilComponent;
  let fixture: ComponentFixture<CardProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
