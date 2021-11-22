import { Component, OnInit } from '@angular/core';
import { ApiservService } from '../apiserv.service';

@Component({
  selector: 'app-mainspace',
  templateUrl: './mainspace.component.html',
  styleUrls: ['./mainspace.component.css']
})
export class MainspaceComponent implements OnInit {
  
  sucess: boolean = true;
  LandSucc: boolean = true;
  showError: any;
 







  constructor(private http: ApiservService) { }

  flightData: any = []
  dev_name = "Thaneshwara";

  ngOnInit() {
    this.http.fetchFlights().subscribe(data => {
      // console.log("responce recived ",data),
      this.flightData = data;
      if (this.flightData.length == 0) {
        this.showError = "No Record Found";
      }
      console.log("Data :", this.flightData)
      // error=>console.log("exception recoved ")
    })
  }

  
  sendYear(year:any): void {
    console.log(year);
    this.http.fetchAll(year, this.sucess, this.LandSucc).subscribe(data => {
      // console.log("responce recived ",data),
      this.flightData = data;
      console.log("sucees :", this.flightData)
      // error=>console.log("exception recoved ")
    })
  }
  sendSuccess(succ:any) {
    this.sucess = succ;
    //console.log(succ);
    this.http.fetchLanchSucess(succ).subscribe(data => {
      // console.log("responce recived ",data),
      this.flightData = data;
      console.log("sucees :", this.flightData)
      // error=>console.log("exception recoved ")
    })
  }
  LandSuccLuanchSucc(val:any) {
    this.LandSucc = val;
    this.http.fetchLanchSucessAndLandSuccess(val).subscribe(data => {
      // console.log("responce recived ",data),
      this.flightData = data;
      console.log("Land :", this.flightData)
      // error=>console.log("exception recoved ")
    })
  }

}