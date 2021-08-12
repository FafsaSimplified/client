import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-communication-preferences-form',
  templateUrl: './communication-preferences-form.component.html',
  styleUrls: ['./communication-preferences-form.component.scss']
})
export class CommunicationPreferencesFormComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  async goBack() {
    await this.router.navigate(['/create-account/contact-info']);
  }
}
