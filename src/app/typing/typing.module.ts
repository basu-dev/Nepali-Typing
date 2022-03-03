import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxNepaliUnicodeModule } from 'ngx-nepali-unicode';
import { NepaliInputComponent } from "./components/nepali-input/nepali-input.component";
const routes = [
    { path: '', component: NepaliInputComponent }
];

@NgModule({
    declarations: [NepaliInputComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        NgxNepaliUnicodeModule
    ],
    exports: [
        NepaliInputComponent
    ],
    providers: []
})
export class TypingModule { }