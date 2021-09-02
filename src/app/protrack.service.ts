import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProtrackService {
  private username!: string;
  private token = environment.apikey;
  private clientId = environment.clientId;
  private clientSecret = environment.clientSecret;
  constructor(private http: HttpClient) { }
    getProfileData(){
      return this.http.get(`https://api.github.com/users/${this.username}?clientId=${this.clientId}&client_secret=${this.clientSecret}`);
    }
    getRepoData(){
      return this.http.get(`https://api.github.com/users/${this.username}/repos?${this.clientId}&client_secret=${this.clientSecret}`);
    }
    getFollowers(){
      return this.http.get(`https://api.github.com/users/${this.username}/followers?${this.clientId}&client_secret=${this.clientSecret}`);
    }
    getFollowing(){
      return this.http.get(`https://api.github.com/users/${this.username}/following?${this.clientId}&client_secret=${this.clientSecret}`);
    }
    updateFields(username: string){
      this.username = username;
    }


}
