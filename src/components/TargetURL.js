import { useEffect, useRef } from "preact/hooks";

import { TextInput } from "./TextInput";

import { html } from "../html";

export const TargetURL = ({ register }) => {
  let input = useRef();

  useEffect(() => {
    input.current.focus();
  }, [input]);

  return html`
    <div class="form-group">
      <${TextInput}
        name="targetURL"
        label=${html`<i class="fas fa-lg fa-fw fa-bullseye"></i> Target URL`}
        register=${(e) => {
          register(e);
          input.current = e;
        }}
      />
      <p class="help">The target website or page, e.g., <em>https://myproduct.com</em> or <em>https://myproduct.com/special-offer/summer</em>.</p>
    </div>
  `;
}