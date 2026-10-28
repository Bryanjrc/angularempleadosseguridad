import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadSubordinados } from './load-subordinados';

describe('LoadSubordinados', () => {
  let component: LoadSubordinados;
  let fixture: ComponentFixture<LoadSubordinados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadSubordinados],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadSubordinados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
