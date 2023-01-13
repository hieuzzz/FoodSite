import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'Tất cả', count: 14 },
      { name: 'Món ăn nhanh', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Bữa trưa', count: 3 },
      { name: 'Món ăn chậm', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Đồ chiên', count: 1 },
      { name: 'Canh', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "Tất cả" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Món Ý'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['Món ăn nhanh', 'Pizza', 'Bữa trưa'],
      },
      {
        id: 2,
        name: 'Thịt viên',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['Món Ba Tư', 'Món Trung Đông', 'Món Tầu'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['Món ăn chậm', 'Bữa trưa'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Món Đức', 'Món Mỹ'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['Món ăn nhanh', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Khoai tây chiên',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['Món Bỉ', 'Món Pháp'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['Món ăn nhanh', 'Đồ chiên'],
      },
      {
        id: 5,
        name: 'Canh gà',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['Món Ấn', 'Món Á'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['Món ăn chậm', 'Canh'],
      },
      {
        id: 6,
        name: 'Pizza Rau củ',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Món Ý'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['Món ăn nhanh', 'Pizza', 'Bữa trưa'],
      },
      {
        id: 7,
        name: 'Bò lá lốt',
        price: 10,
        cookTime: '40-50',
        favorite: false,
        origins: ['Món Việt'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags: ['Món ăn nhanh'],
      },
      {
        id: 8,
        name: 'Gỏi cuốn',
        price: 5,
        cookTime: '10-20',
        favorite: false,
        origins: ['Món Việt'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food-8.jpg',
        tags: ['Món ăn nhanh'],
      },
      {
        id: 10,
        name: 'Phở bò',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['Món Việt'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food-10.jpg',
        tags: ['Món ăn chậm', 'Bữa trưa'],
      },
      {
        id: 9,
        name: 'Cơm tấm',
        price: 7,
        cookTime: '10-15',
        favorite: false,
        origins: ['Món Việt'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food-9.jpg',
        tags: ['Món ăn chậm', 'Bữa trưa'],
      },
    ];
  }
}
