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
    {name: 'Paresh', Roll: '35'},
    {name: 'Anurag', Roll: '45'},
    {name: 'Nilay', Roll: '51'},
    {name: 'Balaji', Roll: '28'},
    {name: 'Shrivatsa', Roll: '51'},
    {name: 'Shruti', Roll: '52'},
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
