import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: UserProfile = {
    name: '',
    contact: '',
    bio: '',
  };
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profile = this.profileService.getUserProfile();
  }
}
