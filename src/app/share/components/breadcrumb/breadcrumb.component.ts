import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'xm-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbComponent implements OnInit {
  // 为了支持可以传递模板(Dom)
  @Input() xmSeparator: TemplateRef<HTMLElement | string>;

  constructor() {}

  ngOnInit(): void {}
}
