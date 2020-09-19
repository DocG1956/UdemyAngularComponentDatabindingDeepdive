/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ServerElementComponent } from './server-element.component';

let component: ServerElementComponent;
let fixture: ComponentFixture<ServerElementComponent>;

describe('Server-element component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ServerElementComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ServerElementComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});