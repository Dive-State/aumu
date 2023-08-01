import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../../_core/components/base/base.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IUploadTrack} from "../../interfaces/IUploadTrack";

@Component({
  selector: 'app-your-music',
  templateUrl: './your-music.component.html',
  styleUrls: ['./your-music.component.scss']
})
export class YourMusicComponent extends BaseComponent implements OnInit {
  uploadTrackForm!: FormGroup;
  fileName = '';
  formData = new FormData();

  constructor() {
    super();
  }

  ngOnInit() {
    this.uploadTrackForm = new FormGroup<IUploadTrack>({
      name: new FormControl<string>('', Validators.required)
    })
  }

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      this.formData = new FormData();
      this.formData.append("thumbnail", file);
    }
  }

  uploadAction(): void {
    if (this.uploadTrackForm.valid) {

    }
  }
}
