import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ContactComponent } from '../../shared/contact/contact.component';
import { CommonModule } from '@angular/common';

type Offres = {
  id : number;
  typeDeContrat : string;
  titre : string;
  localisation : string;
}

@Component({
  selector: 'app-candidature-page',
  standalone: true,
  imports: [HeaderComponent, NavigationComponent, FooterComponent, ContactComponent, CommonModule],
  templateUrl: './candidature-page.component.html',
  styleUrl: './candidature-page.component.css'
})
export class CandidaturePageComponent {
  offresSimilaires: Offres[] = [
    {
      id : 1,
      typeDeContrat : "CDD",
      titre : 'International Marketing Project Maager H/F',
      localisation : 'Brazzaville',
    },
    {
      id : 2,
      typeDeContrat : "CDI",
      titre : 'Contrôleur de Gestion Sociale H/F',
      localisation : 'Pointe Noir',
    },
    {
      id : 3,
      typeDeContrat : "CDD",
      titre : 'Conseiller Clientèle BtoB, H/F, CDD',
      localisation : 'Pointe Noir',
    }
  ] 
}
