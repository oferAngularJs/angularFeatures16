import {Component, Inject, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {FormBuilder, FormGroup, FormsModule, RequiredValidator, Validators,ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-adding-vegetable-modal',
  imports: [FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule, MatDialogModule, NgIf],
  standalone : true,
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  templateUrl: './adding-vegetable-modal.component.html',
  styleUrl: './adding-vegetable-modal.component.css'
})
export class AddingVegetableModalComponent implements OnInit{



  newVegetableForm! : FormGroup;

  fileMsgForNotSelected = 'No file selected';

  fileName = this.fileMsgForNotSelected;

  selectedFile : File| null = null;

  constructor(private fb:FormBuilder,private matDialogRef:MatDialogRef<AddingVegetableModalComponent>) {
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
      this.clear();
    }
  }

  clear () {
    this.fileName = this.fileMsgForNotSelected;
    this.selectedFile = null;
    this.newVegetableForm.controls['image'].setValue('');
  }

  saveNewVegetable () {
    console.log("The date that saved :"+JSON.stringify(this.newVegetableForm.value));
    this.matDialogRef.close(this.newVegetableForm);
  }


}
