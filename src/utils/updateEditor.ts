import { EditorActionType } from "../constants";
import editorState from "../state/editorState";
import { EditorAction } from "../types";

function updateEditor(updates: EditorAction[]) {
  editorState.actions.push(...updates);

  for (let update of updates) {
    const { type, content } = update;

    switch (type) {
      case EditorActionType.ADD:
      case EditorActionType.REMOVE:
      default:
        break;
    }
  }
}

export default updateEditor;
