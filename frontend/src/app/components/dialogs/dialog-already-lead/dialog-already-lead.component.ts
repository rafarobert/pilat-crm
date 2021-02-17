import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Users} from "../../../../core/models/users";
import {UserService} from "../../../../core/services/user.service";
import {Leads} from "../../../../core/models/leads";

@Component({
  selector: 'app-dialog-already-lead',
  templateUrl: './dialog-already-lead.component.html',
  styleUrls: ['./dialog-already-lead.component.scss']
})
export class DialogAlreadyLeadComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogAlreadyLeadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Leads[],
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
