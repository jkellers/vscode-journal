import * as Q from 'q';
import * as vscode from 'vscode';
import * as J from '../.';
export interface Commands {
    processInput(): Q.Promise<vscode.TextEditor | null>;
    showNote(): Q.Promise<vscode.TextEditor | null>;
    showEntry(offset: number): Q.Promise<vscode.TextEditor>;
    loadJournalWorkspace(): Q.Promise<void>;
    printSum(): Q.Promise<string>;
    printDuration(): Q.Promise<string>;
    printTime(): Q.Promise<string>;
    runTestFeature(): Q.Promise<string>;
}
export declare class JournalCommands implements Commands {
    ctrl: J.Util.Ctrl;
    /**
     *
     */
    constructor(ctrl: J.Util.Ctrl);
    /**
     * Opens the editor for a specific day. Supported values are explicit dates (in ISO format),
     * offsets (+ or - as prefix and 0) and weekdays (next wednesday)
     *
     * Update: supports much more now
     */
    processInput(): Q.Promise<vscode.TextEditor>;
    /**
     * Called by command 'Journal:open'. Opens a new windows with the Journal base directory as root.
     *
     * @returns {Q.Promise<void>}
     * @memberof JournalCommands
     */
    loadJournalWorkspace(): Q.Promise<void>;
    /**
     * Prints the sum of the selected numbers in the current editor at the selection location
     */
    printSum(): Q.Promise<string>;
    /**
     * Prints the current time at the cursor postion
     *
     * @returns {Q.Promise<void>}
     * @memberof JournalCommands
     */
    printTime(): Q.Promise<string>;
    /**
     * Called by command 'Journal:printDuration'. Requires three selections (three active cursors)
     * in current document. It identifies which of the selections are times (in the format hh:mm
     *  or glued like "1223") and where to print the duration (in decimal form).
     * For now the duration is always printing hours.
     *
     * @returns {Q.Promise<void>}
     * @memberof JournalCommands
     */
    printDuration(): Q.Promise<string>;
    /**
     * Implements commands "yesterday", "today", "yesterday", where the input is predefined (no input box appears)
     * @param offset
     */
    showEntry(offset: number): Q.Promise<vscode.TextEditor>;
    /**
     * Creates a new file in a subdirectory with the current day of the month as name.
     * Shows the file to let the user start adding notes right away.
     *
     * @returns {Q.Promise<vscode.TextEditor>}
     * @memberof JournalCommands
     */
    showNote(): Q.Promise<vscode.TextEditor | null>;
    runTestFeature(): Q.Promise<string>;
    showError(error: string | Q.Promise<string> | Error): void;
    private showErrorInternal;
    /**
     * Expects any user input from the magic input and either opens the file or creates it.
     * @param input
     */
    private loadPageForInput;
}
