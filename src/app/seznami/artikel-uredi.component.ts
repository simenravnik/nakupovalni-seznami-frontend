import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {switchMap} from 'rxjs/operators';
import {Artikel} from './models/artikel';
import {SeznamiService} from './services/seznami.service';

@Component({
    moduleId: module.id,
    selector: 'artikel-uredi',
    templateUrl: 'artikel-uredi.component.html'
})
export class ArtikelUrediComponent {
    artikel: Artikel = new Artikel;

    constructor(private seznamiService: SeznamiService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.params.pipe(
            switchMap((params: Params) => this.seznamiService.getArtikel(+params['id'])))
            .subscribe(artikel => this.artikel = artikel);
    }

    submitForm(): void {
        this.seznamiService.updateArtikel(this.artikel)
            .subscribe(() => this.router.navigate(['/seznami']));
    }

    nazaj(): void {
        this.router.navigate(['/seznami/']);
    }

}
