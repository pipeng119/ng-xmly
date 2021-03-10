import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[xmStrTplOutlet]'
})
export class StrTplOutletDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
}
