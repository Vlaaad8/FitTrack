import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidatior() : ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null =>{
        const value=control.value;

        const hasUpperCase=/[A-Z]/.test(value);
        const hasNumber=/[0-9]/.test(value);
        const hasSpecialCharacter=/[!@#$%^&*(),.?":{}|<>]/.test(value)

        const isValid= hasNumber && hasUpperCase && hasSpecialCharacter

        return isValid ? null : {invalidPassword: true}
    }
}

export function nameValidator() : ValidatorFn{
    return (control : AbstractControl) : ValidationErrors | null =>{
        const value = control.value;

        const hasNumbers=/[0-9]/.test(value);
        const hasSpecialCharacter=/[!@#$%^&*(),.?":{}|<>]/.test(value)

        const isInvalid= hasNumbers || hasSpecialCharacter


        return !isInvalid ? null : {invalidName: true}
    }
}