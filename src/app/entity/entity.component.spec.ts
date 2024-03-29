import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityComponent } from './entity.component';

describe('EntityComponent', () => {
  let component: EntityComponent;
  let fixture: ComponentFixture<EntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
