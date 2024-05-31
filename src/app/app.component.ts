import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {AuthService} from "./auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'firstAng';


  id: any ;
  storeDetails: any;

  constructor(private route: ActivatedRoute, private router :Router,private authService : AuthService) {
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      let identif=Number(this.id);
      if (this.id) {
        this.authService.getStoreUrl(this.id).subscribe(
          Response=> {
            console.log(Response);
            localStorage.setItem('connectionString',Response);
            console.log(localStorage.getItem('connectionString'));
          },
          Error=> {
            console.log(Error);
          }
        );
        localStorage.setItem('idStore',this.id);
        console.log(this.id);
        this.loadStoreDetails();
        this.router.navigate(['/']);

        //redirect to home Component
      }
    });
  }

  loadStoreDetails() {

  }




}
