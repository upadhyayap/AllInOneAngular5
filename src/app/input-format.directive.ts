import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('format') format: string;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onfocus() {
    console.log('On focus');
  }

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    console.log(this.format);
    if (this.format === 'uppercase') {
      console.log('inside Uppercase');
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      console.log('inside lowercase');
      this.el.nativeElement.value = value.toLowerCase();
    }
  }

}
