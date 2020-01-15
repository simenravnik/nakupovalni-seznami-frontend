import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UporabnikiComponent} from './uporabnik/uporabniki.component';
import {UporabnikPodrobnostiComponent} from './uporabnik/uporabnik-podrobnosti.component';
import {UporabnikiDodajComponent} from './uporabnik/uporabniki-dodaj.component';

import {SeznamiComponent} from './seznami/seznami.component';
import {SeznamPodrobnostiComponent} from './seznami/seznam-podrobnosti.component';
import {ArtikelDodajComponent} from './seznami/artikel-dodaj.component';
import {UporabnikUrediComponent} from './uporabnik/uporabnik-uredi.component';
import {SeznamUrediComponent} from './seznami/seznam-uredi.component';
import {ArtikelUrediComponent} from './seznami/artikel-uredi.component';
import {SeznamDodajComponent} from './seznami/seznam-dodaj.component';

const routes: Routes = [
    {path: '', redirectTo: '/uporabniki', pathMatch: 'full'},
    {path: 'uporabniki', component: UporabnikiComponent},
    {path: 'uporabniki/:id', component: UporabnikPodrobnostiComponent},
    {path: 'uporabniki/:id/uredi', component: UporabnikUrediComponent},
    {path: 'dodajuporabnika', component: UporabnikiDodajComponent},
    {path: 'seznami', component: SeznamiComponent},
    {path: 'seznami/dodajSeznam', component: SeznamDodajComponent},
    {path: 'seznami/:id', component: SeznamPodrobnostiComponent},
    {path: 'seznami/:id/dodaj', component: ArtikelDodajComponent},
    {path: 'seznami/uredi/:id', component: SeznamUrediComponent},
    {path: 'artikli/:id', component: ArtikelUrediComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
