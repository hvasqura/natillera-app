import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizarRegistroAhorrosPage } from './actualizar-registro-ahorros.page';

describe('ActualizarRegistroAhorrosPage', () => {
  let component: ActualizarRegistroAhorrosPage;
  let fixture: ComponentFixture<ActualizarRegistroAhorrosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarRegistroAhorrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarRegistroAhorrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
