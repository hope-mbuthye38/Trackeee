export class Repo {
    constructor(
        public name :string,
        public description:string,
        public clone_url:string,
        public language:string,
        public created_at:Date,
        public updated_at:Date,
    ){
    }
}
