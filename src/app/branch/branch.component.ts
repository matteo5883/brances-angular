import { Component, OnInit, Input } from '@angular/core';
import { Branch } from '../model/branch';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  @Input() branches: Branch[];
  @Input() head: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
