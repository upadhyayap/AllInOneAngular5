import { FavoriteComponent } from './favorite/favorite.component';
import { DoubleNumber } from './courses/double.pipe';
import { CoursesComponent } from './courses/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses/Courses.service';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { CommonModule } from '@angular/common';
import { InputFormatDirective } from './input-format.directive';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    DoubleNumber,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
