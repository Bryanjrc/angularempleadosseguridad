import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {

  public username: string = "";

  @ViewChild("cajausername") cajausername!: ElementRef;
  @ViewChild("cajapassword") cajapassword!: ElementRef;
}
