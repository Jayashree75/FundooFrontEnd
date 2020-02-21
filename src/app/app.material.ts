import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule} from '@angular/material/select';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule,MatInputModule  } from '@angular/material';
import { MatIconModule  } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
    declarations: [
     
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSelectModule,
        MatButtonModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatFormFieldModule,MatInputModule,MatIconModule,MatButtonToggleModule,MatSidenavModule,MatSnackBarModule,MatMenuModule
    ],
    exports: [
        BrowserModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSelectModule,
        MatButtonModule,
        FlexLayoutModule,
        BrowserAnimationsModule,MatFormFieldModule,MatInputModule,MatIconModule,MatButtonToggleModule,MatSidenavModule,MatSnackBarModule,MatMenuModule
    ],
})
export class materialModule { }