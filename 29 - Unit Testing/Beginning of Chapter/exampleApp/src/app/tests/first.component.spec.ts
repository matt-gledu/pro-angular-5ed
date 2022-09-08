import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FirstComponent } from "../ondemand/first.component";

let fixture: ComponentFixture<FirstComponent>;
let component: FirstComponent;

describe("FirstComponent", () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [FirstComponent]
        });

        fixture = TestBed.createComponent(FirstComponent);
        component = fixture.componentInstance;

    });

    it("is defined", () => {
            expect(component).toBeDefined()
        });

});