import { Injectable } from '@angular/core';
import { Strength } from './app.type';

@Injectable({
  providedIn: 'root',
})
export class StrengthsService {
  private strengths = [
    {
      title: '創富',
      content: [
        '健康增值',
        '財富增值',
      ],
      bgUrl:
        '../assets/image/home-page/layer-0.jpg',
    },
    {
      title: '科技',
      content: [''],
      bgUrl:
        '../assets/image/home-page/rectangle-3-copy.jpg',
    },
    {
      title: '生活風格',
      content: [
        '尊享獨特品味生活活動邀請',
        '聯同著名品牌舉辦貴賓之夜',
        '私人管家服務',
        '提供優越購物娛樂體驗',

      ],
      bgUrl:
        '../assets/image/home-page/rectangle-3-copy-2.jpg',
    },
  ];
  constructor() {}
  getStrengths(): Strength[] {
    return this.strengths;
  }
}
