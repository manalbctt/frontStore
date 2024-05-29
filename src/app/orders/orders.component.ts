import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
  commands: any[] = [];
  clientId: number = 4; // Remplacez par l'ID du client souhaité

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.loadCommandsByClient(this.clientId);
  }

  loadCommandsByClient(clientId: number): void {
    this.ordersService.getCommandsByClient(clientId).subscribe(
      (data: any[]) => {
        this.commands = data;
      },
      (error: any) => {
        console.error('There was an error while fetching the commands for the client!', error);
      }
    );
  }
}
