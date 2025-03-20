import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateShowroomBusinesPage } from './update-showroom-busines.page';

describe('UpdateShowroomBusinesPage', () => {
  let component: UpdateShowroomBusinesPage;
  let fixture: ComponentFixture<UpdateShowroomBusinesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateShowroomBusinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateShowroomBusinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
