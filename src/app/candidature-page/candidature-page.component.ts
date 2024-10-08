import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactComponent } from '../shared/contact/contact.component';

@Component({
  selector: 'app-candidature-page',
  standalone: true,
  imports: [HeaderComponent, NavigationComponent, FooterComponent, ContactComponent],
  templateUrl: './candidature-page.component.html',
  styleUrl: './candidature-page.component.css'
})
export class CandidaturePageComponent {

}
