import { Component, OnInit } from '@angular/core';
import {Uporabnik} from '../uporabnik/models/uporabnik';
import {UporabnikService} from '../uporabnik/services/uporabnik.service';
import {Router} from '@angular/router';
import {NakupovalniSeznam} from './models/seznam';
import {SeznamiService} from './services/seznami.service';

@Component({
  selector: 'app-seznam-dodaj',
  templateUrl: './seznam-dodaj.component.html'
})
export class SeznamDodajComponent implements OnInit {

  seznam: NakupovalniSeznam = new NakupovalniSeznam();

  ngOnInit() {
  }

  constructor(private seznamiService: SeznamiService,
              private router: Router) {
  }

  submitForm(): void {
    this.seznamiService.createSeznam(this.seznam)
        .subscribe(() => this.router.navigate(['/seznami']));
  }

  nazaj(): void {
    this.router.navigate(['/seznami']);
  }

}
