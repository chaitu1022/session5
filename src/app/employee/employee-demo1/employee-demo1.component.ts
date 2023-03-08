import { Component } from '@angular/core';
import { EmployeeDetailsService } from 'src/app/employee-details.service';

@Component({
  selector: 'app-employee-demo1',
  templateUrl: './employee-demo1.component.html',
  styleUrls: ['./employee-demo1.component.css']
})
export class EmployeeDemo1Component {

  constructor(private empDetails: EmployeeDetailsService) {

  }

  ngOnInit() {
    console.log(this.empDetails.getEmployee());
  }
}
