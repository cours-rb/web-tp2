class CntContactApp extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `<form>
    <label for="formFirstName">First Name</label>
    <input id="formFirstName" name="firstName" value="John">
    <label for="formLastName">Last Name</label>
    <input id="formLastName" name="lastName" value="DOE">
    <input type="button" id="addNameButton" value="Add">
</form>
<cnt-contact-list>
</cnt-contact-list>`;

    const addButton = shadowRoot.querySelector("#addNameButton");
    addButton.addEventListener("click", this.handleAddButtonClick.bind(this));
  }

  handleAddButtonClick() {
    const firstName = this.shadowRoot.querySelector("#formFirstName");
    const lastName = this.shadowRoot.querySelector("#formLastName");

    const contactText = firstName.value + " " + lastName.value;
    this.addContactToList(contactText);
  }

  /* Add li containing contactText in contactList list */
  addContactToList(contactText) {
    const contact = document.createElement("cnt-contact");
    contact.setAttribute("title", "Mr");
    contact.innerText = contactText;
    const contactList = this.shadowRoot.querySelector("cnt-contact-list");

    contactList.appendChild(contact);
  }
}

customElements.define('cnt-contact-app', CntContactApp);
