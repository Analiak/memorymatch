import { Component } from '@angular/core';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent {
title="back";
constructor(public nameService:NameService){}
}