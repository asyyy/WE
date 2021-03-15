import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPokeDetailComponent } from './c-poke-detail.component';

describe('CPokeDetailComponent', () => {
  let component: CPokeDetailComponent;
  let fixture: ComponentFixture<CPokeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPokeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPokeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
