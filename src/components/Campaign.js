import { TextInput } from "./TextInput";

import { html } from "../html";

export const Campaign = ({ register }) => 
  html`
    <div class="form-group">
      <${TextInput}
        name="campaign"
        label=${html`<i class="fas fa-lg fa-fw fa-bullhorn"></i> Campaign`}
        placeholder="summer-sale"
        register=${register}
      />
      <p class="help">Use this to group URL links across multiple mediums and associate
        them with a marketing campaign or ad buy.</p>
    </div>
  `;
