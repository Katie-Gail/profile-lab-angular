import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile: UserProfile = {
    name: 'Katie',
    contact: 'katie@email.com',
    bio: 'Student at Grand Circus Bootcamp',
  };
  constructor() {}
  getUserProfile(): UserProfile {
    return this.profile;
  }
  setUserProfile(profile: UserProfile) {
    this.profile = profile;
  }
}
