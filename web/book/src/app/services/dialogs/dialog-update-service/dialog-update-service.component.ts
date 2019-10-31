import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ServiceService, ServiceStruct } from 'src/app/_services/service.service';

@Component({
  selector: 'app-dialog-update-service',
  templateUrl: './dialog-update-service.component.html',
  styleUrls: ['../../../_css/dialogs_form.scss']
})
export class DialogUpdateServiceComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DialogUpdateServiceComponent>,
    private snackBar: MatSnackBar,
    private serviceService: ServiceService,
    @Inject(MAT_DIALOG_DATA) public data: ServiceStruct,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      odo: new FormControl(this.data.odo, [Validators.required, Validators.min(0)]),
      next_distance: new FormControl(this.data.next_distance, Validators.min(0)),
      dt: new FormControl(this.data.dt, Validators.required),
      price: new FormControl(this.data.price, Validators.min(0)),
      comment: new FormControl(this.data.description),
    });
  }

  submit() {
    const data: ServiceStruct = {
      service_id: this.data.service_id,
      odo: this.form.get('odo').value,
      next_distance: this.form.get('next_distance').value,
      dt: this.form.get('dt').value.format('YYYY-MM-DD'),
      price: this.form.get('price').value,
      description: this.form.get('description').value,
    };

    this.serviceService.update(data).subscribe((service: ServiceStruct) => {
      this.snackBar.open('Запись успешно изменена!', 'OK');
      this.dialogRef.close();
    }, () => {
      this.snackBar.open('Что-то пошло не так!', 'OK', {
        panelClass: 'error',
      });
    });

    return false;
  }
}
