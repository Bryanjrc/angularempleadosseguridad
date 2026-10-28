import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './components/login-component/login-component';
import { VerPerfilComponent } from './components/ver-perfil-component/ver-perfil-component';
import { LoadSubordinados } from './components/load-subordinados/load-subordinados';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [App, LoginComponent, VerPerfilComponent, LoadSubordinados, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(),],
  bootstrap: [App],
})
export class AppModule {}
