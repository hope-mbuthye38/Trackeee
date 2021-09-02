import { Component, OnInit } from '@angular/core';
import { ProtrackService } from '../protrack.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile :any;
  repos :any;
  followers:any;
  following:any;
  username!:string;
  constructor(private perform: ProtrackService) { }
  submitInput(){
    this.perform.updateFields(this.username);
    this.perform.getProfileData().subscribe(profile => {
      this.userProfile = profile;
    }, error => {
    });
    this.username = '';
    this.perform.getRepoData().subscribe(repos => {
      this.repos = repos;
    });
    this.perform.getFollowers().subscribe(followers => {
      this.followers = followers;
    });
    this.perform.getFollowing().subscribe(following => {
      this.following = following;
    });
  }
  ngOnInit(): void {
  }
}



