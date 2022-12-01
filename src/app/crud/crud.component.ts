import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { MedicineModel } from './crud.model';
import { ApiService } from '../shared/api.service';

@Component({
  
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
 
})
export class crudComponent implements OnInit {
  formValue!: FormGroup;
  medicinemodelobj: MedicineModel = new MedicineModel();
  medicineData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
     medicineDescription: [''],
      medicineName: [''],
      medicinePrice: [''],
      instock: [''],

    });
    this.getAllMedicine();
  }
 

  postMedicineDetails() {
 
  
    this.medicinemodelobj.medicineDescription = this.formValue.value.medicineDescription;
    this.medicinemodelobj.medicineName = this.formValue.value.medicineName;
    
    this.medicinemodelobj.medicinePrice = this.formValue.value.medicinePrice;
    this.medicinemodelobj.instock = this.formValue.value.instock;

    this.api.postMedicineDetails(this.medicinemodelobj).subscribe(
      (res) => {
        console.log(res);
        alert('Item added Successfully');
        this.formValue.reset();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getAllMedicine();
      },
      (err) => {
        alert('something worng happen');
      }
    );
  }

  getAllMedicine() {
    this.api.getAllMedicine().subscribe((res) => {
      this.medicineData = res;
    });
  }


  deleteMedicine(row: any) {
    this.api.deleteMedicine(row.medicineId).subscribe((res) => {
      alert('Item Deleted Sucessfully');
      this.getAllMedicine();
    })
  }
  
  onEdit(row: any) {
    this.medicinemodelobj.medicineId = row.medicineId;
   this.formValue.controls['description'].setValue(row.medicineDescription);
    this.formValue.controls['medicineName'].setValue(row.medicineName);
    this.formValue.controls['medicinePrice'].setValue(row.medicinePrice);
    this.formValue.controls['instock'].setValue(row.instock);
    this.showAdd = false;
    this.showUpdate = true;
  }
  updateMedicine() {
    this.medicinemodelobj.medicineDescription = this.formValue.value.medicineDescription;
    this.medicinemodelobj.medicineName = this.formValue.value.medicineName;
    
    this.medicinemodelobj.medicinePrice = this.formValue.value.medicinePrice;
    this.medicinemodelobj.instock = this.formValue.value.instock;
    this.api.updateMedicine(this.medicinemodelobj, this.medicinemodelobj.medicineId)
      .subscribe((res) => {
        alert('Updated');
        let ref = document.getElementById('Cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllMedicine();
      });
  }

  clickAddMedicine() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

}
