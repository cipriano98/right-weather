import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { environment } from 'src/environments/environment'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAnalytics(() => getAnalytics())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
