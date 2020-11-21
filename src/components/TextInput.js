import { html } from "../html";

export const TextInput = ({ name, label, register }) => {
  let id;

  id = `id_${name}`;

  return html`
    <label for=${id}>${label}</label>
    <input
      type="text"
      name=${name}
      id=${id}
      ref=${register}
     />
  `;
}