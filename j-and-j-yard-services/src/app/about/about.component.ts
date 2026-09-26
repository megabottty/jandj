import { Component, inject } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LanguageService } from '../language.service';

@Component({
    selector: 'app-about',
    imports: [MatCardModule, MatIconModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
  ls = inject(LanguageService);
}
