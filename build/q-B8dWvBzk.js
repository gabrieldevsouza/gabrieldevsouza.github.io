import{l as f,n as u}from"./q-lNDDqrzM.js";import{_hW as g}from"./q-lNDDqrzM.js";const b=(e={})=>{const[i,o,m,t]=f();let a,s;return e instanceof SubmitEvent?(s=e.target,a=new FormData(s),(e.submitter instanceof HTMLInputElement||e.submitter instanceof HTMLButtonElement)&&e.submitter.name&&e.submitter.name&&a.append(e.submitter.name,e.submitter.value)):a=e,new Promise(n=>{a instanceof FormData&&(t.formData=a),t.submitted=!0,t.isRunning=!0,m.isNavigating=!0,i.value={data:a,id:o,resolve:u(n)}}).then(({result:n,status:r})=>{if(t.isRunning=!1,t.status=r,t.value=n,s){s.getAttribute("data-spa-reset")==="true"&&s.reset();const l={status:r,value:n};s.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:l}))}return{status:r,value:n}})};export{g as _hW,b as s_N26RLdG0oBg};
