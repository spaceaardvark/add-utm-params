import { html } from "../html";

export const FullURL = ({ value }) =>
  html`
    <div class="form-group">
      <label for="id_fullURL"><i class="fas fa-lg fa-fw fa-link"></i> Final URL</label>
      <textarea
        name="fullURL"
        id="id_fullURL"
        readonly
        rows="3"
      >${value}</textarea>
      <p class="help">This is the complete URL with UTM parameters.</p>
    </div>
  `;
