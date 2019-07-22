import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: ActivatedRoute, private _route: Router ) { }
  newProduct = { title: "", price: "", image: ""}
  err: any;

  ngOnInit() {
  }
  
  onSubmit(){
    console.log('Inside onSubmit() components')
    this._httpService.create(this.newProduct).subscribe(data =>{
      if(data['products']){
        this._route.navigate(['/products'])
      }else{
        this.err = data['error']['errors'];
        console.log(data)
      }
    })
  }
}
