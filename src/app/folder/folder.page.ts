import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  today = Date.now();
  type = 'Present';
  public folder!: string;
  Present = [
    {name: 'Paresh', Roll: '35'},
    {name: 'Siddhant', Roll: '45'},
    {name: 'Aditya', Roll: '51'},
    {name: 'Balaji', Roll: '28'},
    {name: 'Aditya', Roll: '51'},
    {name: 'Shruti', Roll: '52'},

    {name: 'Paresh', Roll: '35'},
    {name: 'Siddhant', Roll: '45'},
    {name: 'Aditya', Roll: '51'},
    {name: 'Balaji', Roll: '28'},
    {name: 'Aditya', Roll: '51'},
    {name: 'Balaji', Roll: '28'},
  ]
  dateTime: string | undefined;
  constructor(private activatedRoute: ActivatedRoute ) { 
    
  }

  ngOnInit(): void {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  } 
  

}
