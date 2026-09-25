import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  ls = inject(LanguageService);
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });
  submitting = false;
  success = '';
  error = '';

  async onSubmit() {
    if (this.form.invalid) return;
    this.submitting = true;
    this.success = this.error = '';
    try {
      // Submit to Netlify Forms (the static form in index.html registers it).
      const data = new URLSearchParams({ 'form-name': 'contact', 'bot-field': '' });
      Object.entries(this.form.value).forEach(([k, v]) => data.set(k, v ?? ''));
      const res = await fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: data.toString()
      });
      if (res.ok) {
        this.success = this.ls.t('contact.success');
        this.form.reset();
      } else {
        this.error = `${this.ls.t('contact.error')} (${res.status})`;
      }
    } catch (e) {
      this.error = String(e);
    } finally {
      this.submitting = false;
    }
  }
}
