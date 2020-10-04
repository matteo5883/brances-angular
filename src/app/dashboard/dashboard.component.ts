import { Component, OnInit } from '@angular/core';
import { BranchService } from '../service/branch.service';
import { Branch } from '../model/branch';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  head : string[] = ["Type", "Distance","City","Street","House Number","Postal Code","Coordinates"];
  branches: Branch[];
  filter: string;

  constructor(public branchService: BranchService) {

  }

  ngOnInit(): void {
    this.getBranches();
  }

  onKey(event: any) {
    this.filter = event.target.value;
  }

  getBranches() {
    this.branchService.getBranches().subscribe(data => {
      this.branches = data;
    })
  }

  onClick(){
    this.branchService.getFilteredBranches(this.filter).subscribe(data =>{
      this.branches = data;
    })
  }

}
