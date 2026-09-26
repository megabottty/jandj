import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-home',
    imports: [MatButtonModule, MatCardModule, MatIconModule, RouterLink],
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  ls = inject(LanguageService);
}
