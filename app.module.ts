import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/primeng';
import { TestExComponent } from './test-ex/test-ex.component';
@NgModule({
  declarations: [
    AppComponent,
    TestExComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    
ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
