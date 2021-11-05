# Q4 - Angular Material
**Grid Sorting, Paging & Search by using Angular Material design**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

**NodeJS version should be >12 for JSON-SERVER package**

Ref: https://www.npmjs.com/package/json-server

## After git clone (or download the zip file) open in VSCode.

open terminal:
>npm install -g json-server

>npm install

>json-server --watch db.json   // For starting the JSON Server default port 3000

in browser: http://localhost:3000/books will give result of your json. 
//books is the array variable in db.json

## open another terminal

ng serve

## in browser
localhost:4200

--------------------

# Steps to create an application from scratch (for learning purpose)
1. ng new q4material

2. install basic requirements
  >npm install -g json-server
  >npm i --save @angular/material@12.0.0
  >npm i --save @angular/cdk@12.0.0
  >npm i --save @angular/animations@12.0.0

3. create a folder by "material" under app folder
  >ng g m material
  
4. inside that material.module.ts
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
==> add in imports & exports array. (ref github)

5. inside app.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { BookService } from './services/book.service';

6. create a file book.model.ts
  ==> copy the relevant coding from github

7. create a folder "services" under app folder
  >ng g s book

8. insdie that book.service.ts (refer github)
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../book.model';

url = "http://localhost:3000/books";
constructor(private _httpClient: HttpClient) { }
GetBooks() {
  return this._httpClient.get<BookModel[]>(this.url);
}

9. inside app.component.html
  ==> copy the relevant coding from github

10. inside app.component.ts
  ==> copy the relevant coding from github

11. inside style.css
  ==> copy the relevant coding from github

12. create a file db.json
  ==> copy the relevant data from github

13. run the below watch command in one terminal
  >json-server --watch db.json   // For starting the JSON Server default port 3000

14. open another terminal and run the below
  >ng serve

15. Thats all... Enjoy :) All the BEST !!!
