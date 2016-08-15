import { Component } from '@angular/core';
import { patientContent } from './components/patient-content.component'
import { AppHeader } from './components/header.component'
import { AppFooter } from './components/footer.component'

@Component({
  selector: 'my-app',
  templateUrl: './app/html/base.html',
			 directives:[AppHeader, patientContent, AppFooter]
})
export class AppComponent { }
