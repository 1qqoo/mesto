export class UserInfo {
  constructor({ nameSelector, infoSelector }) {
    this.nameElement = document.querySelector(nameSelector);
    this.infoElement = document.querySelector(infoSelector);
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
}
