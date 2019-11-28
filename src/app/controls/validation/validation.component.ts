import { Component, OnInit } from '@angular/core';

import { ValidationService } from '../../services/ValidationService';

import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: []
})
export class ValidationComponent implements OnInit {

  password = "";
  maxDate: Date = new Date();
  cityPattern = "^[^0-9]+$";
  namePattern: any = /^[^0-9]+$/;
  phonePattern: any = /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/;
  countries: string[];
  phoneRules: any = {
    X: /[02-9]/
  }
  constructor(service: ValidationService) {
    this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
    this.countries = service.getCountries();
  }

  ngOnInit() {

  }

  passwordComparison = () => {
    return this.password;
  };
  checkComparison() {
    return true;
  }

 sendRequest = function(value) {
    const validEmail = "test@test.com";
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(value === validEmail);
        }, 1000);
    });    
}

  asyncValidation(params) {
    return this.sendRequest(params.value);
  }
  onFormSubmit = function (e) {
    notify({
      message: "You have submitted the form",
      position: {
        my: "center top",
        at: "center top"
      }
    }, "success", 3000);

    e.preventDefault();
  }

}
