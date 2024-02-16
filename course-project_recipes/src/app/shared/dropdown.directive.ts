import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    @Input() set appDropdown(toggle: boolean) {
        toggle ? this.renderer.addClass(this.elementRef.nativeElement, 'open')
            : this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
}