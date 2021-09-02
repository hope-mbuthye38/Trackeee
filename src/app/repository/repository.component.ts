import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo.service'; 

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  repository:any
  repoProfile!:any;

  constructor(private service : RepoService) { }

  submitInput(){
    this.service.updateFields(this.repository);
    this.service.getRepoData().subscribe(repo =>{
      this.repoProfile = repo;
      console.log(this.repoProfile)
    },error => {

    });
  }

  ngOnInit(): void {
  }

}
