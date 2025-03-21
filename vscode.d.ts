import { Uri, Position, Range, TextEdit, SnippetTextEdit, NotebookEdit, DataTransferFile } from 'vscode';

declare module 'vscode' {
    export namespace workspace {
        /**
         * Make changes to one or many resources or create, delete, and rename resources as defined by the given
         * {@link WorkspaceEdit workspace edit}.
         * 
         * All changes of a workspace edit are applied in the same order in which they have been added. If
         * multiple textual inserts are made at the same position, these strings appear in the resulting text
         * in the order the 'inserts' were made, unless that are interleaved with resource edits. Invalid sequences
         * like 'delete file a' -> 'insert text in file a' cause failure of the operation.
         * 
         * When applying a workspace edit that consists only of text edits an 'all-or-nothing'-strategy is used.
         * A workspace edit with resource creations or deletions aborts the operation, e.g. consecutive edits will
         * not be attempted, when a single edit fails.
         * 
         * @param edit A workspace edit.
         * @param metadata Optional {@link WorkspaceEditMetadata metadata} for the edit.
         * @returns A thenable that resolves when the edit could be applied.
         */
        export function applyEdit(edit: WorkspaceEdit, metadata?: WorkspaceEditMetadata): Promise<boolean>;
    }
}
