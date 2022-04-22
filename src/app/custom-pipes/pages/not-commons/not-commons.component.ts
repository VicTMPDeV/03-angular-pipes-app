import { Component } from '@angular/core';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  // i18nSelect
  persons = {
    person1 : {
      'maleName':'Víctor',
      'gender':'masculino'
    },
    person2 : {
      'femaleName':'Laura',
      'gender':'femenino'
    }
  }

  selectMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  customers = {
    none: [],
    one: ['Víctor'],
    many: ['Víctor','Laura','Avena']
  }
    
  pluralMap = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes esperando.' // symbol # is a wildcard
  }

}