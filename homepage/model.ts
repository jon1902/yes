class Roommate {
  uid: string;
  
  constructor(
    public name: string,
    public password: string,
  ) {
    this.uid = uid();
  }
}
const roommates:Roommate[] = [];

roommates.push(new Roommate('Panda Bired',"121314"))
roommates.push(new Roommate('Fire Bired',"233445"))
roommates.push(new Roommate('Owl Cartoon',"344546"))
console.log(roommates)

class RoommateProfil {
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
    // this.uid = uid();
  }
}
const roommateProfils:RoommateProfil[] = [];

roommateProfils.push(new RoommateProfil('Panda Bired','Herzel 5', 'Tel aviv', 'Center', 'Yes', 'No', '4', '5', '4', '2000',  'https://icon2.cleanpng.com/20171221/weq/lovely-pink-owl-5a3c4517ea17e2.0389561715138992879589.jpg'))
roommateProfils.push(new RoommateProfil('Fire Bired', 'Negev', 'Hifa', 'North', 'No', 'Yes', '3', '4', '3', '3000','https://icon2.cleanpng.com/20171221/jtq/large-blue-bird-png-cartoon-clipart-5a3c5525e9c967.7588221415139033979576.jpg'))
roommateProfils.push(new RoommateProfil('Owl Cartoon', 'Herzel 30', 'Holon', 'Merkaz', 'Yes', 'No', '4', '6', '5', '1500','https://icon2.cleanpng.com/20171221/lxe/owl-with-school-books-png-clipart-picture-5a3c4e3aaf2de9.3807862115139016267175.jpg'))
console.log(roommateProfils)

class ApartmentProfil {
  uid: string;
  
  constructor(
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
    // this.uid = uid();
  }
}
const apartmentProfils:ApartmentProfil[] = [];

apartmentProfils.push(new ApartmentProfil('Herzel 5', 'Tel aviv', 'Center', 'Yes', 'No', '4', '5', '4', '2000',  'data:image/jpeg;base64,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'))
apartmentProfils.push(new ApartmentProfil('Negev', 'Hifa', 'North', 'No', 'Yes', '3', '4', '3', '3000','https://e7.pngegg.com/pngimages/48/624/png-clipart-house-housing-cartoon-house-cartoon-character-houses-thumbnail.png'))
apartmentProfils.push(new ApartmentProfil('Herzel 30', 'Holon', 'Merkaz', 'Yes', 'No', '4', '6', '5', '1500','https://e7.pngegg.com/pngimages/462/450/png-clipart-minecraft-house-building-house-building-interior-design-services-modern-house-furniture-building-thumbnail.png'))
console.log(apartmentProfils)


