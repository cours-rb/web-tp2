class CntContactList extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `<div>
  <h2>Contact List</h2>
  <ul><slot></slot></ul>
</div>`;
  }
}

customElements.define('cnt-contact-list', CntContactList);
