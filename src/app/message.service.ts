import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private spinner: NgxSpinnerService) { }


  showLoader(status:boolean) {
    if (status) {
        this.spinner.show();
    } else {
        setTimeout(() => {
            this.spinner.hide();
          }, 500);
    }
}
}
