import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BoardComponent } from './board/board.component';
import { BoardCollectionComponent } from './board-collection/board-collection.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list'; 

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BoardComponent,
    BoardCollectionComponent,
    CardComponent,
    ListComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatButtonModule,
      MatListModule,
      DragDropModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
