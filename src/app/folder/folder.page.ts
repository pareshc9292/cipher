import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  type = 'Present';
  public folder!: string;
  Present = [
    {name: 'Paresh', Roll: '35'},
    {name: 'Siddhant', Roll: '45'},
    {name: 'Aditya', Roll: '51'},
    {name: 'Balaji', Roll: '28'},
    {name: 'Aditya', Roll: '51'},
    {name: 'Balaji', Roll: '28'},

    {name: 'Paresh', Roll: '35'},
    {name: 'Siddhant', Roll: '45'},
    {name: 'Aditya', Roll: '51'},
    {name: 'Balaji', Roll: '28'},
    {name: 'Aditya', Roll: '51'},
    {name: 'Balaji', Roll: '28'},
  ]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  } 
}
