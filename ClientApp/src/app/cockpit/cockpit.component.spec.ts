/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CockpitComponent } from './cockpit.component';

let component: CockpitComponent;
let fixture: ComponentFixture<CockpitComponent>;

describe('cockpit component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CockpitComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CockpitComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});