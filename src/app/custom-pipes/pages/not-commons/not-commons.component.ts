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
      'name':'Víctor',
      'gender':'male'
    },
    person2 : {
      'name':'Laura',
      'gender':'female'
    }
  }

  get getPersons(){
    return this.persons;
  }

  public selectMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changePerson() {
    this.persons.person1.name = 'Victoria';
    this.persons.person1.gender = 'female';
  }

  //i18nPlural
  private customers = {
    none: [],
    one: ['Víctor'],
    many: ['Víctor','Laura','Avena','Danka']
  }

  get getCustomers(){
    return this.customers;
  }

  public pluralMap = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes esperando :' // symbol # is a wildcard
  }

  deleteClient(){
    this.customers.many.pop();
  }

  //Slice
  public heroes = ['Capitán América','Spiderman','Iron Man','Thor','Soldado de Invierno'];

  deleteHeroe(){
    this.heroes.pop();  
  }

}