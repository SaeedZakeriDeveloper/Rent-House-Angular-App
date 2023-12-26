import {Component, OnInit} from '@angular/core';
import {HouseService} from 'src/app/services/house.service';
import {House} from "../../models/house";
import {Price} from 'src/app/models/price';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  allHouses: House[] = [];
  filteredHouses: House[] = [];
  isLoading: boolean = false;
  bedroomFilter: number = 0;
  priceFilter: Price = {id: 0, title: 'All Prices', from: 0, to: 1000};
  searchPanelFilter: string = '';

  constructor(
    private houseService: HouseService
  ) {
  }

  ngOnInit(): void {
    this.houseService.getAllHouses().subscribe(res => {
      this.allHouses = res as any;
      this.filteredHouses = res as any;
    })
  }

  houseFilterChanged() {
    this.isLoading = true;
    window.setTimeout(() => {
      if (this.bedroomFilter != 0 && this.priceFilter.id == 0) {
        this.filteredHouses = this.allHouses.filter((x: House) => x.bedrooms == this.bedroomFilter);
      } else if (this.bedroomFilter != 0 && this.priceFilter.id != 0) {
        this.filteredHouses = this.allHouses.filter((x: House) =>
          x.bedrooms == this.bedroomFilter
          &&
          x.price >= this.priceFilter.from && x.price <= this.priceFilter.to
        );
      } else if (this.bedroomFilter == 0 && this.priceFilter.id != 0) {
        this.filteredHouses = this.allHouses.filter((x: House) => x.price >= this.priceFilter.from && x.price <= this.priceFilter.to);
      } else {
        this.filteredHouses = this.allHouses;
      }
      if (this.searchPanelFilter) {
        this.filteredHouses = this.filteredHouses.filter(x =>
          x.code.toString().includes(this.searchPanelFilter) ||
          x.description.toString().includes(this.searchPanelFilter) ||
          x.size.toString().includes(this.searchPanelFilter) ||
          x.bedrooms.toString().includes(this.searchPanelFilter) ||
          x.bathrooms.toString().includes(this.searchPanelFilter) ||
          x.price.toString().includes(this.searchPanelFilter));
      }

      this.isLoading = false;
    }, 900);
  }

  onBedroomClick(id: number) {
    this.bedroomFilter = id;
    this.houseFilterChanged();
  }

  onPriceClick(price: Price) {
    this.priceFilter = price;
    this.houseFilterChanged();
  }

  searchPanelFilterChange(value: string) {
    this.searchPanelFilter = value;
    this.houseFilterChanged();
  }

}
