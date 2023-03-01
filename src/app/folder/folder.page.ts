import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../services/photo.service';


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
    {name: 'Paresh', Roll: '1'},
    {name: 'Anurag', Roll: '2'},
    {name: 'Nilay', Roll: '4'},
    {name: 'Balaji', Roll: '8'},
    {name: 'Shrivatsa', Roll: '9'},
    {name: 'Shruti', Roll: '10'},
    {name: 'Bhawika', Roll: '14'},
    {name: 'Vedant', Roll: '15'},
    {name: 'Pritesh', Roll: '16'},
    {name: 'Vaishnavi', Roll: '20'},
  ]
  dateTime: string | undefined;
  constructor(private activatedRoute: ActivatedRoute, public photoService: PhotoService) {}


  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  ngOnInit(): void {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  } 
}
