import { TextInput } from "./TextInput";

import { html } from "../html";

export const Medium = ({ register }) => 
  html`
    <div class="form-group">
      <${TextInput}
        name="medium"
        label=${html`<i class="fas fa-lg fa-fw fa-truck"></i> Medium`}
        placeholder="website or email or social or ..."
        register=${register}
      />
      <p class="help">The marketing medium used to deliver the URL link, e.g., <em>website</em>, <em>email</em>, <em>social</em>, <em>facebook</em>, or <em>linkedin</em>.</p>
    </div>
  `;
