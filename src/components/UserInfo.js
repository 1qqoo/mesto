export class UserInfo {
  constructor({ nameSelector, infoSelector, profileAvatar }) {
    this.nameElement = document.querySelector(nameSelector);
    this.infoElement = document.querySelector(infoSelector);
    this.profileAvatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      about: this.infoElement.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this.nameElement.textContent = name;
    this.infoElement.textContent = about;
  }

  setUserAvatar({ avatar }) {
    this.profileAvatar.src = avatar;
  }
}
