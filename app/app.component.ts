import { Component } from '@angular/core';
import { patientContent } from './patient-content.component'
import { AppHeader } from './header.component'

@Component({
  selector: 'my-app',
  templateUrl: './app/html/base.html',
			 directives:[AppHeader, patientContent]
})
export class AppComponent { 

}
