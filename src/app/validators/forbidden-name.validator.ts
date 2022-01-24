import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        // console.log(control.value);
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: true} : null;
    };
}

export const validatorDoesNotMatch = (control: AbstractControl) => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value? {doesNotMatch: true} : null;
}