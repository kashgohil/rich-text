import { EditorActionType } from "../constants";

export interface EditorNode {
  type: string;
  content: any;
  children: EditorNode[];
}

export interface EditorAction {
  type: EditorActionType;
  content: any;
}

export interface EditorState {
  nodes: EditorNode[];
  actions: EditorAction[];
}
