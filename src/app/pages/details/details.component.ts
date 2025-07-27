import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products/products.service';
import { Iproduct } from '../../shared/interfaces/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute)
    private readonly productsService = inject(ProductsService)
      private readonly cdr = inject(ChangeDetectorRef);

      detailsProduct:Iproduct | null = null
      isAddLoading: { [key: string]: boolean } = {};
        isDarkMode = false;


        ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe({
      next:(p)=>{
        let productId =(p.get('id'))


        this.productsService.getSpecificProducts(productId).subscribe({

          next:(res)=>{
            console.log(res)

            this.detailsProduct =res


          },
          error:(err)=>{
            console.log(err)
          }



        })

      }
    })
  }



   getFullStars(rating: number): number[] {
  return Array(Math.floor(rating)).fill(0);
}

getHasHalfStar(rating: number): boolean {
  return rating % 1 !== 0;
}


addToCart(id: number): void {
  this.isAddLoading[id] = true;
  this.cdr.detectChanges();

  console.log('added');

  setTimeout(() => {
    this.isAddLoading[id] = false;
    this.cdr.detectChanges();
  }, 1500);
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








