import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {UporabnikiComponent} from './uporabnik/uporabniki.component';
import {UporabnikiDodajComponent} from './uporabnik/uporabniki-dodaj.component';
import {UporabnikPodrobnostiComponent} from './uporabnik/uporabnik-podrobnosti.component';
import {UporabnikService} from './uporabnik/services/uporabnik.service';

import {SeznamiComponent} from './seznami/seznami.component';
import {SeznamPodrobnostiComponent} from './seznami/seznam-podrobnosti.component';
import {ArtikelDodajComponent} from './seznami/artikel-dodaj.component';
import {SeznamiService} from './seznami/services/seznami.service';
import {UporabnikUrediComponent} from './uporabnik/uporabnik-uredi.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        UporabnikiComponent,
        UporabnikPodrobnostiComponent,
        UporabnikiDodajComponent,
        UporabnikUrediComponent,
        SeznamiComponent,
        SeznamPodrobnostiComponent,
        ArtikelDodajComponent
    ],
    providers: [UporabnikService, SeznamiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

