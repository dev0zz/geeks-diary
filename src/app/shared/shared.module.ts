import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteTriggerDirective } from './autocomplete/autocomplete-trigger.directive';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ButtonComponent } from './button/button.component';
import { CalendarTableProvider } from './calendar/calendar-table';
import { FormFieldControlDirective } from './form-field/form-field-control.directive';
import { FormFieldErrorComponent } from './form-field/form-field-error.component';
import { FormFieldHintComponent } from './form-field/form-field-hint.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { IconComponent } from './icon/icon.component';
import { OptionItemComponent } from './option-item/option-item.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TextComponent } from './text/text.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OverlayModule,
        PortalModule,
        A11yModule,
    ],
    declarations: [
        // Autocomplete
        AutocompleteTriggerDirective,
        AutocompleteComponent,
        // Button
        ButtonComponent,
        // Icon
        IconComponent,
        // Form field
        FormFieldComponent,
        FormFieldControlDirective,
        FormFieldErrorComponent,
        FormFieldHintComponent,
        // Option item
        OptionItemComponent,
        // Spinner
        SpinnerComponent,
        // Text
        TextComponent,
        // Tooltip
        TooltipComponent,
        TooltipDirective,
    ],
    entryComponents: [
        // Tooltip
        TooltipComponent,
    ],
    providers: [
        CalendarTableProvider,
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        // Autocomplete
        AutocompleteTriggerDirective,
        AutocompleteComponent,
        // Button
        ButtonComponent,
        // Icon
        IconComponent,
        // Form field
        FormFieldComponent,
        FormFieldControlDirective,
        FormFieldErrorComponent,
        FormFieldHintComponent,
        // Option item
        OptionItemComponent,
        // Spinner
        SpinnerComponent,
        // Text
        TextComponent,
        // Tooltip
        TooltipDirective,
    ],
})
export class SharedModule {
}
