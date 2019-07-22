import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editProduct: any;
  err: any;
  constructor(private _httpService: HttpService, private _router: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    this._router.params.subscribe(params => {
      console.log(params);
      this._httpService.getOne(params['id']).subscribe(data => {
        console.log(data)
        this.editProduct = data['products'];
      })
    })
  }

  onSubmit(){
    this._httpService.update(this.editProduct._id, this.editProduct).subscribe(data =>{
      if(data['products']){
        this._route.navigate(['/products'])
      }else{
        this.err = data['error']['errors'];
        console.log(data)
      }
    })
  }

}
