import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {switchMap} from 'rxjs/operators';
import {NakupovalniSeznam} from './models/seznam';
import {SeznamiService} from './services/seznami.service';

@Component({
    moduleId: module.id,
    selector: 'seznam-uredi',
    templateUrl: 'seznam-uredi.component.html'
})
export class SeznamUrediComponent {
    seznam: NakupovalniSeznam = new NakupovalniSeznam();

    constructor(private seznamiService: SeznamiService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.params.pipe(
            switchMap((params: Params) => this.seznamiService.getSeznam(+params['id'])))
            .subscribe(seznam => this.seznam = seznam);
    }

    submitForm(): void {
        this.route.params.pipe(
            switchMap((params: Params) => this.seznamiService.updateSeznam(this.seznam)))
            .subscribe(() => this.router.navigate(['/seznami/' + this.seznam.id]));
    }

    nazaj(): void {
        this.router.navigate(['/seznami/' + this.seznam.id]);
    }

}
