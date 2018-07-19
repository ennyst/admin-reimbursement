import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserTableComponen } from './usertable.componen';


describe('UsertableComponent', () => {
    let component: UserTableComponen;
    let fixture: ComponentFixture<UserTableComponen>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ UserTableComponen ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(UserTableComponen);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });