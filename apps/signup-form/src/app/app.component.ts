import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Errors = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
};

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;
  isValid: Errors = {
    firstName: true,
    lastName: true,
    email: true,
    password: true,
  };

  onSubmit() {
    this.isValid = {
      firstName: !!this.firstName && this.firstName !== '',
      lastName: !!this.lastName && this.lastName !== '',
      email: !!this.email && this.email !== '' && this.isValidEmail(),
      password: !!this.password && this.password !== ''
    }

    if (!Object.values(this.isValid).some((value) => value === false)) {
      alert('Sign up complete');
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.password = '';
    }
  }

  private isValidEmail() {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|br)$/.test(this.email as string);
  }
}
