import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  frmGroup = new FormGroup({
    firstName: new FormControl('', []),
    lastName: new FormControl('', []),
    address: new FormControl('', []),
    age: new FormControl('', []),
    income: new FormControl('', []),
    types: new FormControl('', []),
  });
  showDrpDown = false;
  types = [
    {
      name: 'sda7',
      value: 'sda7',
      thresholds: [
        {
          label: 'Warning',
          name: 'warning',
          applicable: ['OLT'],
          validator: [],
          defalutValue: '70',
        },
        {
          label: 'Minor',
          name: 'sminor',
          applicable: ['OLT'],
          validator: [],
          defalutValue: '75',
        },
        {
          label: 'Major',
          name: 'major',
          applicable: ['ONT'],
          validator: [],
          defalutValue: '80',
        },
        {
          label: 'Critical',
          name: 'critical',
          applicable: ['OLT'],
          validator: [],
          defalutValue: '85',
        },
      ],
    },
    {
      name: 'loop0',
      value: 'loop0',
      thresholds: [
        {
          label: 'Warning',
          name: 'warning',
          applicable: ['OLT'],
          validator: [],
          defalutValue: '70',
        },
        {
          label: 'Minor',
          name: 'sminor',
          applicable: ['OLT'],
          validator: [],
          defalutValue: '75',
        },
        {
          label: 'Major',
          name: 'major',
          applicable: ['ONT'],
          validator: [],
          defalutValue: '80',
        },
        {
          label: 'Critical',
          name: 'critical',
          applicable: ['OLT'],
          validator: [],
          defalutValue: '85',
        },
      ],
    },
    {
      name: 'loop1',
      value: 'loop1',
      thresholds: [
        {
          label: 'Warning',
          name: 'warning',
          applicable: ['OLT'],
          validator: [],
          defalutValue: '70',
        },
        {
          label: 'Minor',
          name: 'sminor',
          applicable: ['OLT'],
          validator: [],
          defalutValue: '75',
        },
        {
          label: 'Major',
          name: 'major',
          applicable: ['ONT'],
          validator: [],
          defalutValue: '80',
        },
        {
          label: 'Critical',
          name: 'critical',
          applicable: ['OLT'],
          validator: [],
          defalutValue: '85',
        },
      ],
    },
    {
      name: 'loop2',
      value: 'loop2',
      thresholds: [
        {
          label: 'Warning',
          name: 'warning',
          applicable: ['OLT'],
          validator: [],
          defalutValue: '70',
        },
        {
          label: 'Minor',
          name: 'sminor',
          applicable: ['OLT'],
          validator: [],
          defalutValue: '75',
        },
        {
          label: 'Major',
          name: 'major',
          applicable: ['ONT'],
          validator: [],
          defalutValue: '80',
        },
        {
          label: 'Critical',
          name: 'critical',
          applicable: ['OLT'],
          validator: [],
          defalutValue: '85',
        },
      ],
    },
  ];
  constructor() {
    this.frmGroup.valueChanges.subscribe((val) => {
      console.log(val.firstName);
      for (let ctrl in this.frmGroup.controls) {
        this.frmGroup.get(ctrl).setValidators([Validators.required]);
        this.frmGroup.get(ctrl).markAsTouched();
        this.frmGroup.get(ctrl).markAsDirty();
      }
    });
  }
  addMore() {
    debugger;
    // this.frmGroup.

    this.frmGroup['diskUtilizationTreshold'] = new FormGroup({});
    this.showDrpDown = true;
  }
  onTypeChange(value) {
    debugger;
    value.target.value;
    this.frmGroup['diskUtilizationTreshold'][value.target.value] =
      new FormArray([]);
    const type = this.types.find((el) => {
      return el.value == value.target.value;
    });
    let fields = {};
    for (let i = 0; i < type.thresholds.length; i++) {
      let elm = type.thresholds[i];
      fields[elm.name] = new FormControl(elm.defalutValue, [...elm.validator]);
      //   }
    }
    debugger;
    this.frmGroup['diskUtilizationTreshold'][value.target.value] =
      new FormGroup(fields);
  }
  submit() {
    this.frmGroup['submitted'] = true;
  }
  getArr(name) {
    const cntrls = this.frmGroup['diskUtilizationTreshold'][name].controls;
    return Object.keys(cntrls);
  }
}
