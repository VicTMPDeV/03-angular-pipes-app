import { Component } from '@angular/core';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  // i18nSelect
  private persons = {
    person1 : {
      'maleName':'Víctor',
      'gender':'masculino'
    },
    person2 : {
      'femaleName':'Laura',
      'gender':'femenino'
    }
  }

  get getPersons(){
    return this.persons;
  }

  public selectMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  private customers = {
    none: [],
    one: ['Víctor'],
    many: ['Víctor','Laura','Avena']
  }

  get getCustomers(){
    return this.customers;
  }
    
  public pluralMap = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes esperando.' // symbol # is a wildcard
  }

}