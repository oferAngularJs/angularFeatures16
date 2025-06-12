import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {FormBuilder, FormGroup, FormsModule, RequiredValidator, Validators,ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-adding-vegtable-modal',
  imports: [FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule, MatDialogModule, NgIf],
  standalone : true,
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  templateUrl: './adding-vegetable-modal.component.html',
  styleUrl: './adding-vegtable-modal.component.css'
})
export class AddingVegetableModalComponent implements OnInit{

  newVegetableForm! : FormGroup;

  fileMsgForNotSelected = 'No file selected';

  fileName = this.fileMsgForNotSelected;

  selectedFile : File| null = null;

  constructor(private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.newVegetableForm = this.fb.group({
      name : ['',Validators.required],
      price : [0,Validators.required],
      image : ['',Validators.required]
    });

  }

  selectedImgFile (event : any) {
    console.log ("uploadImgFile");
    this.selectedFile = event.target.files[0];
    console.log("name of file:"+this.selectedFile!.name);
    if (this.selectedFile!.name){
      this.fileName = this.selectedFile!.name;
    }else {
      this.fileName = this.fileMsgForNotSelected;
      this.selectedFile = null;
    }
  }


}
