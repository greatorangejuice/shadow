import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class customValidators {
  static restrictedEmails(control: FormControl): {[key:string]: boolean} {
    if (['test@gmail.com'].includes(control.value)) {
      return {
        restrictedEmail: true,
      }
    }
    return null
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(res => {
      setTimeout(() => {
        if (control.value === 'async@gmail.com') {
          res({uniqEmail: true})
        } else {
          res(null)
        }
      }, 1000)
    })
  }
}


