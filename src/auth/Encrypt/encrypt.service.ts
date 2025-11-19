import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  convertText(conversion:string, text: string) {
    if (conversion=="encrypt") {
      const encryptText = CryptoJS.AES.encrypt(text.trim(), environment.encPasswordKey.trim()).toString();
      console.log(encryptText);
      return encryptText;
    }
    else {
      const decryptText = CryptoJS.AES.decrypt(text.trim(), environment.encPasswordKey.trim()).toString(CryptoJS.enc.Utf8);
      console.log(decryptText);
      return decryptText;
    }
  }

}
