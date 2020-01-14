import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import { switchMap } from 'rxjs/operators';

import {NakupovalniSeznam} from './models/seznam';
import {SeznamiService} from './services/seznami.service';
import {Artikel} from './models/artikel';

@Component({
    moduleId: module.id,
    selector: 'seznam-podrobnosti',
    templateUrl: 'seznam-podrobnosti.component.html'
})
export class SeznamPodrobnostiComponent implements OnInit {
    seznam: NakupovalniSeznam;

    constructor(private seznamiService: SeznamiService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
       this.route.params.pipe(
            switchMap((params: Params) => this.seznamiService.getSeznam(+params['id'])))
            .subscribe(seznam => this.seznam = seznam);
    }

    dodajArtikel(): void {
        this.router.navigate(['seznami/' + this.seznam.id + '/dodaj']);
    }

    nazaj(): void {
        this.router.navigate(['seznami/']);
    }

    uredi() {
        this.router.navigate(['seznami/uredi/' + this.seznam.id]);
    }

    deleteArtikel(artikel: Artikel) {
        this.seznamiService
            .deleteArtikel(artikel.id)
            .subscribe(artikelId => this.seznam.artikli = this.seznam.artikli.filter(s => s.id !== artikelId));
        this.refresh();
    }

    refresh(): void {
        window.location.reload();
    }

    naPodrobnosti(artikel: Artikel) {
        this.router.navigate(['/artikli/', artikel.id]);
    }
}
