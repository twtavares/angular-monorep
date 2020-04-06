import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'lib-common-switch-toggle',
  templateUrl: './switch-toggle.component.html',
  styleUrls: ['./switch-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchToggleComponent {
  
  @Input('aria-label')
  ariaLabel: string | null;

  @Input('aria-labelledby')
  ariaLabelledby: string | null;

  @Input()
  checked: boolean;

  @Input()
  disableRipple: boolean;

  @Input()
  disabled: boolean;

  @Input()
  label: string | null;

  @Input()
  labelPosition: 'before' | 'after' = 'after';
  
  @Input()
  formControlName: string;

  @Input()
  color: ThemePalette;

  // @Output()
  // change: EventEmitter<MatSlideToggleChange> = new EventEmitter<MatSlideToggleChange>();

  @Output()
  toggleChange: EventEmitter<void> = new EventEmitter<void>();

}
