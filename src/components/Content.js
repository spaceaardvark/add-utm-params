import { TextInput } from "./TextInput"; 

import { html } from "../html";

export const Content = ({ register }) => 
  html`
    <div class="form-group">
      <${TextInput}
        name="content"
        label=${html`<i class="fas fa-lg fa-fw fa-map-marker-alt"></i> Content`}
        placeholder="banner-ad or in-text-ad or email-bottom-ad or ..."
        register=${register}
      />
      <p class="help">Use this to be more specific about exactly where and how the
        URL link was made available to readers, e.g. differentiate between the top and
        bottom ads in an email newsletter with <em>email-top</em> or <em>email-bottom</em>.</p>
    </div>
  `;
