import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Forms-Assignment';

  hasSubmitted = false;

  public onSubmit():void{
    this.hasSubmitted=true;
    console.log("submitted ");

    if (this.profileForm.valid){
      console.log("validated");
      
    } else {
      console.log("not validated");
      
    }
    

  }


  public addHobby():void {

    const hobbiesArray = this.profileForm.get("hobbies") as FormArray;
    hobbiesArray.push(new FormControl(''));
    
  }

  profileForm = new FormGroup({

    firstName:new FormControl('',[Validators.required,Validators.maxLength(20)]),
    middleName:new FormControl('',[Validators.maxLength(20)]),
    lastName:new FormControl('',[Validators.required,Validators.maxLength(20)]),

    age:new FormControl('',[Validators.min(10),Validators.max(50),Validators.required,Validators.pattern("^[0-9]*$")]),

    addressForm: new FormGroup({

      street:new FormControl('',[Validators.required,Validators.maxLength(20)]),
      landMark:new FormControl('',[Validators.maxLength(20)]),
      city:new FormControl('',[Validators.required,Validators.maxLength(20)]),
      state:new FormControl('',[Validators.required,Validators.maxLength(20)]),
      zipCode:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern("^[0-9]*$")]),
      country:new FormControl('',[Validators.required,Validators.maxLength(20)]),

    }),

    hobbies:new FormArray([])



  });




  
}
