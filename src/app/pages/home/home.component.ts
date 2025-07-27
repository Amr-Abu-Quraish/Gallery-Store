import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { Iproduct } from '../../shared/interfaces/iproduct';
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { SearchPipe } from '../../core/search/search.pipe';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-home',
  imports: [RouterLink, SearchPipe, FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

 private readonly productsService = inject(ProductsService);

  private readonly cdr = inject(ChangeDetectorRef);

  products: Iproduct[] = [];
  showSortMenu: boolean = false;
  isAddLoading: { [key: string]: boolean } = {};

  text:string=''
    isDarkMode = false;




 ngOnInit(): void {
  this.getProductsData()

 }


 getProductsData():void{
   this.productsService.getAllProducts().subscribe({
      next:(res)=>{

        this.products=res
          console.log(this.products)

      },
       error:(err)=>{
        console.log(err)

      }
     })
 }



 getFullStars(rating: number): number[] {
  return Array(Math.floor(rating)).fill(0);
}

getHasHalfStar(rating: number): boolean {
  return rating % 1 !== 0;
}



sortDirection: 'high' | 'low' | null = null;

sortProducts(direction: 'high' | 'low') {
  this.sortDirection = direction;

  this.products = [...this.products].sort((a, b) => {
    return direction === 'high'
      ? b.price - a.price
      : a.price - b.price;
  });
}





addToCart(prodId: number) {

  this.isAddLoading[prodId] = true;


  setTimeout(() => {


    console.log(`added`);


    this.isAddLoading[prodId] = false;
  }, 2000);
}



 toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    const body = document.body;

    if (this.isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }

}
