import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dev-test-project';
  products: any;

  constructor(private http: HttpClient,private sanitizer: DomSanitizer) {
  }


  getProducts() {

    const URL = 'http://localhost:3000/shopify-data';

    return this.http.get<any[]>(URL).subscribe(r => this.products = r);
  }

  getSafeHtml(productHtml: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(productHtml);
  }


}
