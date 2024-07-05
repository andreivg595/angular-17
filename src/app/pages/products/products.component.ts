import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList: IProduct[] = [];
  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((products: IProduct[]) => {
      this.productList = products;
    });
  }

  showDetails(id: number) {
    this._router.navigate(['/products', id]);
  }
}
