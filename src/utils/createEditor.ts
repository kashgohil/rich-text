interface Configuration {}

function onFocus(this: GlobalEventHandlers, event: FocusEvent) {}

function onBlur(this: GlobalEventHandlers, event: FocusEvent) {}

function createEditor(configuration: Configuration) {
  const editor = document.createElement("div");
  editor.setAttribute("contenteditable", "true");

  editor.style.minHeight = "20px";

  editor.onfocus = onFocus;
  editor.onblur = onBlur;

  return editor;
}

export default createEditor;
