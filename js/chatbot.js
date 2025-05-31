window.watsonAssistantChatOptions = {
    integrationID: "af01d845-e457-458e-844c-f942cfba0fd8", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "731c3874-6778-41cd-854f-c1543b2866c3", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });