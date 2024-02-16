// import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";
import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    //My Solution
    //constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
    // @Input() set appDropdown(toggle: boolean) {
    //     toggle ? this.renderer.addClass(this.elementRef.nativeElement, 'open')
    //         : this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    // }

    // @Input() set appDropdown(toggle: boolean) {
    //     toggle ? this.renderer.addClass(this.elementRef.nativeElement, 'open')
    //         : this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    // }

    //Author's solution
    @HostBinding('class.open') toggle: boolean = false;
    @HostListener('document:click', ['$event']) toggleIsOpen(event: Event) {
        this.toggle = this.elementRef.nativeElement.contains(event.target) ? !this.toggle : false;
    }
    // @HostListener('click') appDropdown() {
    //     this.toggle = !this.toggle;
    // }
    constructor(private elementRef: ElementRef) {

    }
}