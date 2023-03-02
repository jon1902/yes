var User = /** @class */ (function () {
    function User(name, password) {
        this.name = name;
        this.password = password;
        this.uid = uid();
    }
    return User;
}());
var users = [];
users.push(new User('Panda Bired', "121314"));
users.push(new User('Fire Bired', "233445"));
users.push(new User('Owl Cartoon', "344546"));
console.log(users);
var UserProfil = /** @class */ (function () {
    function UserProfil(name, address, city, area, animal, smoke, flor, rooms, partersNo, price, imgSrc) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.area = area;
        this.animal = animal;
        this.smoke = smoke;
        this.flor = flor;
        this.rooms = rooms;
        this.partersNo = partersNo;
        this.price = price;
        this.imgSrc = imgSrc;
        // this.uid = uid();
    }
    return UserProfil;
}());
var userProfils = [];
userProfils.push(new UserProfil('Panda Bired', 'Herzel 5', 'Tel aviv', 'Center', 'Yes', 'No', '4', '5', '4', '2000', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg'));
userProfils.push(new UserProfil('Fire Bired', 'Negev', 'Hifa', 'North', 'No', 'Yes', '3', '4', '3', '3000', 'https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg'));
userProfils.push(new UserProfil('Owl Cartoon', 'Herzel 30', 'Holon', 'Merkaz', 'Yes', 'No', '4', '6', '5', '1500', 'https://icon2.cleanpng.com/20171221/lxe/owl-with-school-books-png-clipart-picture-5a3c4e3aaf2de9.3807862115139016267175.jpg'));
userProfils.push(new UserProfil('Owl Cartoon', 'Herzel 30', 'Holon', 'Merkaz', 'Yes', 'No', '4', '6', '5', '1500', 'https://icon2.cleanpng.com/20171221/lxe/owl-with-school-books-png-clipart-picture-5a3c4e3aaf2de9.3807862115139016267175.jpg'));
console.log(userProfils);
var ApartmentProfil = /** @class */ (function () {
    function ApartmentProfil(apartmentName, address, city, neighbour, area, animal, smoke, flor, rooms, partersNo, price, apartmentImages) {
        if (apartmentImages === void 0) { apartmentImages = []; }
        this.apartmentName = apartmentName;
        this.address = address;
        this.city = city;
        this.neighbour = neighbour;
        this.area = area;
        this.animal = animal;
        this.smoke = smoke;
        this.flor = flor;
        this.rooms = rooms;
        this.partersNo = partersNo;
        this.price = price;
        this.apartmentImages = apartmentImages;
        this.uid = uid();
    }
    return ApartmentProfil;
}());
var apartmentProfils = [];
apartmentProfils.push(new ApartmentProfil('one', 'Herzel 5', 'Tel aviv', 'North', 'Center', 'Yes', 'No', '4', '5', '4', '2000', [{ id: uid(), urlPicture: 'https://i.pinimg.com/474x/f0/c7/82/f0c78244f383cf4ea53640a606ed7310.jpg', imageName: "out Apartment" },
    { id: uid(), urlPicture: 'https://i.pinimg.com/474x/f3/cf/a7/f3cfa7a0652500cbc58f1d41e9165cab.jpg', imageName: "Saloon" },
    { id: uid(), urlPicture: 'https://i.pinimg.com/474x/26/55/3a/26553ac29d6df41ea98ebfeca53390ab.jpg', imageName: "Badroom" },
    { id: uid(), urlPicture: 'https://i.pinimg.com/474x/e8/16/93/e8169353a711058d901c8994469ec443.jpg', imageName: "Livig Room" }]));
apartmentProfils.push(new ApartmentProfil('two', 'Negev', 'Haifa', 'Bat galim', 'North', 'No', 'Yes', '3', '4', '3', '3000', [{ id: uid(), urlPicture: 'https://e7.pngegg.com/pngimages/48/624/png-clipart-house-housing-cartoon-house-cartoon-character-houses-thumbnail.png', imageName: "out Apartment" },
    { id: uid(), urlPicture: 'https://i.pinimg.com/564x/26/55/3a/26553ac29d6df41ea98ebfeca53390ab.jpg', imageName: "Badroom" },
    { id: uid(), urlPicture: 'https://i.pinimg.com/474x/e3/89/7d/e3897df913172bde95d119589661425f.jpg', imageName: "Living Room" }]));
apartmentProfils.push(new ApartmentProfil('three', 'Herzel 30', 'Holon', 'All', 'Merkaz', 'Yes', 'No', '4', '6', '5', '1500', [{ id: uid(), urlPicture: 'https://e7.pngegg.com/pngimages/462/450/png-clipart-minecraft-house-building-house-building-interior-design-services-modern-house-furniture-building-thumbnail.png', imageName: "out Apartment" },
    { id: uid(), urlPicture: 'https://icon2.cleanpng.com/20180219/guq/kisspng-loft-window-office-room-stock-photography-building-floor-windows-high-clear-buckle-material-5a8aa45ccc55c5.914750281519035484837.jpg', imageName: "Living room" },
    { id: uid(), urlPicture: 'https://icon2.cleanpng.com/20180304/oue/kisspng-kitchenware-animation-cartoon-pressure-cooker-kitchen-furniture-show-5a9bf02969c104.3227696815201690014332.jpg', imageName: "kitchen" }]));
console.log(apartmentProfils);
