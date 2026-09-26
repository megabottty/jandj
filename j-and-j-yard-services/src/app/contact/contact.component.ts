import { Component, ElementRef, ViewChild, inject } from '@angular/core';
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
  status: 'idle' | 'sending' | 'sent' | 'error' = 'idle';
  errorKind: 'server' | 'network' = 'server';
  sentMessage = '';
  @ViewChild('sentPanel') sentPanel?: ElementRef<HTMLElement>;

  async onSubmit() {
    if (this.form.invalid || this.status === 'sending') return;
    this.status = 'sending';
    const { name, email } = this.form.value;
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
        this.sentMessage = this.ls.t('contact.sentBody')
          .replace('{name}', (name || '').trim())
          .replace('{email}', (email || '').trim());
        this.status = 'sent';
        this.form.reset();
        // Move focus to the confirmation so screen readers announce it and it is in view.
        setTimeout(() => {
          this.sentPanel?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          this.sentPanel?.nativeElement.focus({ preventScroll: true });
        });
      } else {
        this.fail('server', `Netlify Forms responded ${res.status}`);
      }
    } catch (e) {
      // fetch throws only on network failure (offline, DNS, blocked request).
      this.fail('network', e);
    }
  }

  /** Show the error state; the form keeps its values so the visitor can retry. */
  private fail(kind: 'server' | 'network', detail: unknown) {
    console.error('Contact form submission failed:', detail);
    this.errorKind = kind;
    this.status = 'error';
  }

  reset() {
    this.status = 'idle';
    this.sentMessage = '';
  }
}
