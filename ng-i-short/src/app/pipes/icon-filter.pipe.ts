import { PipeTransform, Pipe } from '@angular/core';
import { Icon } from '../models/icon';

@Pipe({
  name: 'iconFilter'
})
export class IconFilterPipe implements PipeTransform {
  transform(icons: Icon[], searchTerm: string): Icon[] {
    if (!icons || !searchTerm) {
      return icons;
    }
    return icons.filter(icon =>
      icon.url.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
