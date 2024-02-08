import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('serverElement')
  element: { type: string, name: string, content: string } = {
    type: "",
    name: "",
    content: ""
  };
  @Input() name: string = "";
  @ViewChild('heading', { static: true }) header !: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph !: ElementRef;

  constructor() {
    console.log("Constructor called");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }
  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log(this.header.nativeElement.textContent);
    console.log("Paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
    console.log("Paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called")
  }
}
