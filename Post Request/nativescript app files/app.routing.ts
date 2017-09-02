import { LoginComponent } from "./pages/login/login.component";
import { HomePageComponent } from "./pages/HomePage/homepage.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "pages/HomePage", component: HomePageComponent }
];

export const navigatableComponents = [
  LoginComponent,
  HomePageComponent
];