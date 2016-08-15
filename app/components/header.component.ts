import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './app/html/header.html'
})

export class AppHeader{ 
	title = "Patient Zero";
	menuOptions = [{
		'item' : "First Option"
	},
	{
		'item' : "Second Option"
	},
	{
		'item' : "Third Option"
	}]
}