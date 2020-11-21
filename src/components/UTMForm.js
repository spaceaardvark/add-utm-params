import { useMemo } from "preact/hooks";
import { useForm } from "react-hook-form";

import { Campaign } from "./Campaign";
import { Content } from "./Content";
import { FullURL } from "./FullURL";
import { Medium } from "./Medium";
import { Source } from "./Source";
import { TargetURL } from "./TargetURL";

import { html } from "../html";

const initialState = {
  targetURL: "",
  source: "",
  medium: "",
  campaign: "",
  content: "",
};

const parseSearchParams = () => {
  let searchParams;

  searchParams = new URLSearchParams(window.location.search);

  return {
    targetURL: searchParams.get("url") || initialState.targetURL,
    source: searchParams.get("source") || initialState.source,
    medium: searchParams.get("medium") || initialState.medium,
    campaign: searchParams.get("campaign") || initialState.campaign,
    content: searchParams.get("content") || initialState.content,
  };
}

const addUTMParams = (state) => {
  let url, params, param;

  try {
    url = new URL(state.targetURL);
  } catch {
    return null;
  }

  params = [
    ["utm_source", state.source],
    ["utm_medium", state.medium],
    ["utm_campaign", state.campaign],
    ["utm_content", state.content],
  ];

  for (param of params) {
    if (param[1]) {
      url.searchParams.set(param[0], param[1]);
    } else {
      url.searchParams.delete(param[0]);
    }
  }

  return url.toString();
};

export const UTMForm = () => {
  let supportsClipboard, onCopy, state, url;

  let { register, reset, watch } = useForm({
    defaultValues: parseSearchParams(),
  });

  supportsClipboard = useMemo(() => {
    return navigator.clipboard && navigator.clipboard.writeText
  }, []);

  state = watch();
  url = useMemo(() => addUTMParams(state), [state]);

  onCopy = () =>
    navigator.clipboard.writeText(url)
      .catch((err) => console.error("Unable to copy to clipboard", err));

  return html`
    <form onsubmit=${(e) => e.preventDefault()}>
      <${TargetURL} register=${register} />
      <${Source} register=${register} />
      <${Medium} register=${register} />
      <${Campaign} register=${register} />
      <${Content} register=${register} />
      <${FullURL} value=${url} />

      <div class="form-group">
        ${supportsClipboard &&
          html`
            <button
              class="btn btn-primary"
              disabled=${!url}
              onclick=${onCopy}>Copy URL to Clipboard</button> `
        }
        <button
          class="btn btn-primary btn-ghost"
          onclick=${() => reset(initialState)}>Reset Form</button>
      </div>
    </form>
  `;
};