import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
  commands: any[] = [];
  ConnectionString : any;
  clientId !:number;


  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void{
  this.clientId = Number(localStorage.getItem('idClient')); // Remplacez par l'ID du client souhaité
  this.ConnectionString =localStorage.getItem('connectionString');
    this.loadCommandsByClient(this.clientId);
  }

  loadCommandsByClient(clientId: number): void {
    this.ordersService.getCommandsByClient(clientId,this.ConnectionString).subscribe(
      (data: any[]) => {
        this.commands = data;
        console.log(data);
      },
      (error: any) => {
        console.error('There was an error while fetching the commands for the client!', error);
      }
    );
  }
}
