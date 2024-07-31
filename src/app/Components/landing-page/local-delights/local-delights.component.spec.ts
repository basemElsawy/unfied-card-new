import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDelightsComponent } from './local-delights.component';

describe('LocalDelightsComponent', () => {
  let component: LocalDelightsComponent;
  let fixture: ComponentFixture<LocalDelightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalDelightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalDelightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
