import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { PostsComponent } from "./components/posts/posts.component";
import { ImagesComponent } from "./components/images/images.component";

const routes: Routes = [

  {path: "home", component: HomeComponent},
  {path: "posts", component: PostsComponent},
  {path: "gallery", component: ImagesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
