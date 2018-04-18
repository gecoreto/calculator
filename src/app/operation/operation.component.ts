import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators, AbstractControl, FormGroup, FormBuilder } from '@angular/forms';
import { OperationServicesService } from '../services/operation-services.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {

  calcFormGroup: FormGroup;
  result = '';
  operador = '';
  loading = false;

  constructor(private fb: FormBuilder, private operationServices: OperationServicesService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.calcFormGroup = this.fb.group({
      operationOne: [null, Validators.required],
      operationTwo: [null, Validators.required],
      result: [{ value: this.result, disabled: true }]
    });
  }


  operar(operador: string) {
    this.operador = operador;
    if (this.calcFormGroup.valid) {
      this.loading = true;
      this.operationServices.getResult(
        operador,
        this.calcFormGroup.value['operationOne'],
        this.calcFormGroup.value['operationTwo']
      )
        .subscribe(
          (resp) => {
            this.loading = false;
            this.result = resp['result'];
          },
          err => {
            this.loading = false;
          }
        );
    } else {
      this.calcFormGroup.get('operationOne').markAsTouched();
      this.calcFormGroup.get('operationTwo').markAsTouched();
      this.ref.detectChanges();
    }
  }

}
