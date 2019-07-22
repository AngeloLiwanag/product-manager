import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allProducts: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getAll().subscribe(data => {
      this.allProducts = data['products'];
    })
  }

  onDelete(id){
    this._httpService.delete(id).subscribe(data => {
      this.ngOnInit();
    })
  }

}
