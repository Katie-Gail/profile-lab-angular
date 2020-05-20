import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  profile: UserProfile;
  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profile = this.profileService.getUserProfile();
  }
  editProfile(form: NgForm): void {
    this.profile = {
      name: form.value.name,
      contact: form.value.contact,
      bio: form.value.bio,
    };
    this.profileService.setUserProfile(this.profile);
    this.router.navigate(['profile']);
  }
}
