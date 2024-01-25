import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false; // Se for true, adiciona uma classe chamada "open" na <tag> ou componente!

  constructor(private elRef: ElementRef){} // Injeta a referêncido elemento atrelado.

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) { // Configura um evento no document, que será ativado caso tenha algum clique! Passa o evento para a função.
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}
