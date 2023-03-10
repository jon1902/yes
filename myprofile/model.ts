class UserProfil {
    uid: string;
    
    constructor(
      public name: string,
      public address: string,
      public city: string,
      public area: string,
      public animal: string,
      public smoke: string,
      public flor: string,
      public rooms: string,
      public partersNo: string,
      public price: string,
      public imgSrc: string,
      
    ) {
      this.uid = uid();
    }
  }
  
 
  
  const userProfil: UserProfil = {uid:"", name: "", address: "", city: "",area: "",animal: "",smoke: "",flor: "",rooms: "",partersNo: "",price:"",imgSrc:""};
  let UserProfilList: UserProfil[] = [];