import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ContactComponent } from '../../shared/contact/contact.component';
import { CommonModule } from '@angular/common';
import { FormService } from '../../services/form.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Form } from '../../models/Form';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [HeaderComponent, NavigationComponent, FooterComponent, ContactComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent implements OnInit {

  form : Form = new Form();

  forms : Form[] = [];

  private service: FormService = inject(FormService);

  constructor (private formBuilder : FormBuilder) {}

  formValue!: FormGroup;

  async ngOnInit(): Promise<void> {
    this.formValue = this.formBuilder.group({
      name: [''],
      surname: [''],
      birthDate: [''],
      lieuDeNaissance: [''],
      email: [''],
      niveauEtude: [''],
      domaineEtude: [''],
      motivation: [''],
  });

  await this.getData();
  }

  async saveForm() {
    try{
      this.form = this.formValue.value;

      await this.service.save(this.form)

      this.formValue.reset();

      await this.getData();
    }catch (error : any){
      console.error(error);
    }  
  }

  async getData() {
    try {
      await this.service.get().then((data : any) => {
        this.forms = data;
      });
    } catch (error : any) {
      console.error(error);
    }
  }

  

}
