import { Component } from '@angular/core';

@Component({
	selector: 'patient-content',
	templateUrl: './app/html/content-index.html'
})

export class patientContent{
	contentTitle = "Patient Zero File";
	cardTexts = [{
		'cardTitle' : "Card One",
		'cardContent' : "This text might describe the photo and provide further information, such as where and when it was taken.",
 		'cardLink' : "#"
 	},{
 		'cardTitle' : "Card Two",
		'cardContent' : "This text might describe the photo and provide further information, such as where and when it was taken.",
 		'cardLink' : "#"	
 	},{
 		'cardTitle' : "Card Three",
		'cardContent' : "This text might describe the photo and provide further information, such as where and when it was taken.",
 		'cardLink' : "#"	
 	},{
 		'cardTitle' : "Card Four",
		'cardContent' : "This text might describe the photo and provide further information, such as where and when it was taken.",
 		'cardLink' : "#"	
 	},{
 		'cardTitle' : "Card Five",
		'cardContent' : "This text might describe the photo and provide further information, such as where and when it was taken.",
 		'cardLink' : "#"	
 	},{
 		'cardTitle' : "Card Six",
		'cardContent' : "This text might describe the photo and provide further information, such as where and when it was taken.",
 		'cardLink' : "#"	
 	}]
}
