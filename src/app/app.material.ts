import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';


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
        MatFormFieldModule, 
        MatInputModule, 
        MatIconModule, 
        MatButtonToggleModule, 
        MatSidenavModule, 
        MatSnackBarModule, 
        MatMenuModule,
        MatDialogModule,
        MatTooltipModule,
        MatChipsModule,
        ImageCropperModule,
        MatAutocompleteModule,
        MatCheckboxModule, 
        HttpModule
    ],
    exports: [
        BrowserModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule, 
        HttpModule,
        HttpClientModule,
        MatSelectModule,
        MatButtonModule,
        FlexLayoutModule,
        BrowserAnimationsModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatIconModule, 
        MatButtonToggleModule, 
        MatSidenavModule, 
        MatSnackBarModule, 
        MatMenuModule,
        MatDialogModule, 
        MatTooltipModule, 
        MatChipsModule,
        ImageCropperModule,
        MatAutocompleteModule, 
        MatCheckboxModule
    ],
})
export class materialModule { }