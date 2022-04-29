import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  // i18nSelect Pipe
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

  //i18nPlural Pipe
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

  //Slice Pipe
  public heroes = ['Capitán América','Spiderman','Iron Man','Thor','Soldado de Invierno'];

  deleteHeroe(){
    this.heroes.pop();  
  }

  //Key-Value Pipe
  public persona = {
    nombre: 'Víctor',
    apellidos: 'Morales Pérez',
    edad: 35, 
    casado: false
  }

  //Json Pipe
  public heroesJson = [
    {
      nombre:'Capitán América',
      poder: 'Repartir hostias como panes'
    },
    {
      nombre:'Spiderman',
      poder: 'Agilidad extrema'
    },
    {
      nombre:'Iron Man',
      poder: 'Mucha tecnología'
    },
    {
      nombre:'Thor',
      poder: 'Es el dios del trueno'
    }
  ];

  //Async Pipe - Observable
  myObservable = interval(5000);

  //Async Pipe - Promise
  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Datos de la Promise recibidos');
      reject('Hubo un error y no se recibó la Promise');
    }, 5000);
  });


}