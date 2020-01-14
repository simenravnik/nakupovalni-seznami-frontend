import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Uporabnik} from './models/uporabnik';
import {UporabnikService} from './services/uporabnik.service';
import {switchMap} from 'rxjs/operators';

@Component({
    moduleId: module.id,
    selector: 'uporabnik-uredi',
    templateUrl: 'uporabnik-uredi.component.html'
})
export class UporabnikUrediComponent {
    uporabnik: Uporabnik = new Uporabnik;

    constructor(private uporabnikService: UporabnikService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.params.pipe(
            switchMap((params: Params) => this.uporabnikService.getUporabnik(+params['id'])))
            .subscribe(uporabnik => this.uporabnik = uporabnik);
    }

    submitForm(): void {
        this.uporabnikService.update(this.uporabnik, this.uporabnik.id)
            .subscribe(() => this.router.navigate(['/uporabniki']));
    }

    nazaj(): void {
        this.router.navigate(['/uporabniki/' + this.uporabnik]);
    }

}
