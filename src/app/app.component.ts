import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'firstAng';


  id: any ;
  storeDetails: any;

  constructor(private route: ActivatedRoute, private router :Router) {
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      let identif=Number(this.id);
      if (this.id) {
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
