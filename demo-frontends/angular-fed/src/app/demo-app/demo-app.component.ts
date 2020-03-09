import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
	selector: 'my-app',
	templateUrl: './demo-app.component.html',
	styleUrls: ['./demo-app.component.scss']
})
export class DemoAppComponent implements OnInit {
	// inquiryForm = this.formBuilder.group({
	// 	full_name: new FormControl('', [Validators.required]),
	// 	email: new FormControl('', [Validators.required, Validators.email]),
	// 	phone_number: new FormControl('',  [Validators.required]),
	// 	purpose: new FormControl('', []),
	// 	message: new FormControl('', [])
	// });
	// constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
	}

	onSubmit() {
	// 	if (this.inquiryForm.valid) {
	// 		const _v = this.inquiryForm.value;
	// 		const form = new FormData();
	// 		form.append('full_name', _v.full_name);
	// 		form.append('email', _v.email);
	// 		form.append('phone_number', _v.phone_number);
	// 		form.append('purpose', _v.purpose);
	// 		form.append('message', _v.message);
    //   console.log(form);

    //   // Submit your form to app call
	// 	}
	}

}

