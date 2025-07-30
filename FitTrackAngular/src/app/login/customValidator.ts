import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidatior() : ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null =>{
        const value=control.value;

        const hasUpperCase=/[A-Z]/.test(value);
        const hasNumber=/[0-9]/.test(value);

        const isValid= hasNumber && hasUpperCase

        return isValid ? null : {invalidPassword: true}
    }
}