import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileUpgradeHotspotPage } from './profile-upgrade-hotspot.page';

describe('ProfileUpgradeHotspotPage', () => {
  let component: ProfileUpgradeHotspotPage;
  let fixture: ComponentFixture<ProfileUpgradeHotspotPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUpgradeHotspotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileUpgradeHotspotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
