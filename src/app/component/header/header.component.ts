import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  miPortfolio:any;


  constructor(private datosPortfolio:PortfolioService) { }


  tecnologiasList:any;

  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miPortfolio=data;
      this.tecnologiasList=this.miPortfolio.tecnologias;
    });
      
  
  }

}
