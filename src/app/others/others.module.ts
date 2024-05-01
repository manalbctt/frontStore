import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { SliderComponent } from './slider/slider.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { LatestProductsComponent } from './latest-products/latest-products.component';
import { NewsWrapperComponent } from './news-wrapper/news-wrapper.component';
import { MixproductsComponent } from './mixproducts/mixproducts.component';
import { NewsItemComponent } from './news-wrapper/news-item/news-item.component';
import { BoxComponent } from './services/box/box.component';
import { WrapperChildComponent } from './wrapper/wrapper-child/wrapper-child.component';
import { SingleFeaturedComponent } from './featured-products/single-featured/single-featured.component';
import { SingleLatestComponent } from './latest-products/single-latest/single-latest.component';
import { TopRatedComponent } from './mixproducts/top-rated/top-rated.component';
import { FeaturedCategoriesComponent } from './mixproducts/featured-categories/featured-categories.component';
import { LatestBestSellersComponent } from './mixproducts/latest-best-sellers/latest-best-sellers.component';
import { SubcategoriesComponent } from './mixproducts/featured-categories/subcategories/subcategories.component';
import { SingleProductComponent } from './mixproducts/latest-best-sellers/single-product/single-product.component';



@NgModule({
  declarations: [
         SliderComponent,
         ServicesComponent,
         BoxComponent,
         WrapperComponent,
         WrapperChildComponent,
         FeaturedProductsComponent,
         LatestProductsComponent,
         NewsWrapperComponent,
         MixproductsComponent,
         NewsItemComponent,
         SingleFeaturedComponent,
         SingleLatestComponent,
         TopRatedComponent,
         FeaturedCategoriesComponent,
         LatestBestSellersComponent,
         SubcategoriesComponent,
         SingleProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SliderComponent,
    ServicesComponent,
    WrapperComponent,
    FeaturedProductsComponent,
    LatestProductsComponent,
    NewsWrapperComponent,
    MixproductsComponent
  ]
})
export class OthersModule { }
