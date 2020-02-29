import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app';
  formattedAddress = '';

  public handleAddressChange(address: any) {
  this.formattedAddress = address.formatted_address  // Do some stuff
}
  //AIzaSyCrcGtyBX9qgQP-W22uiapGQ-Su9zn9uV8
}
