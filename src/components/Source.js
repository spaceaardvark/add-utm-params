import { TextInput } from "./TextInput";

import { html } from "../html";

export const Source = ({ register }) => 
  html`
    <div class="form-group">
      <${TextInput}
        name="source"
        label=${html`<i class="far fa-lg fa-fw fa-newspaper"></i> Source`}
        register=${register}
      />
      <p class="help">The publisher or website displaying the URL link, e.g., <em>citynews</em> or <em>citynews.com</em>.</p>
    </div>
  `;
