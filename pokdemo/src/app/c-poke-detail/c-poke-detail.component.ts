import { Component, Input, OnInit } from '@angular/core';
import { PokeDetail } from '../pokemon';
import { ShareDetailService } from '../share-detail.service';

@Component({
  selector: 'app-c-poke-detail',
  templateUrl: './c-poke-detail.component.html',
  styleUrls: ['./c-poke-detail.component.css'],
})
export class CPokeDetailComponent implements OnInit {

  @Input('truc')
  truc!: PokeDetail;
  constructor(private share : ShareDetailService){
    this.share.getDetail().subscribe(machin => console.log('PokeDetail '+machin));
  }
  ngOnInit(): void {
    
  }

}
