import { useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './Editor.module.css';

interface IProps {
	versionA: string;
	versionB: string;
}

export const Editor = ({ versionA, versionB }: IProps) => {
	const [editor, setEditor] = useState<monaco.editor.IDiffEditor | null>(null);
	const monacoEl = useRef(null);

	useEffect(() => {
		if (monacoEl.current) {
			setEditor((editor) => {
				if (editor) return editor;

				return monaco.editor.createDiffEditor(monacoEl.current!, {
					automaticLayout: true,
					diffWordWrap: "on",
					enableSplitViewResizing: false,
					readOnly: true,
					originalEditable: false,
					renderSideBySide: true,
					scrollBeyondLastLine: false,
					wordWrap: "on"
				});
			});
		}

		return () => editor?.dispose();
	}, [monacoEl.current]);

	useEffect(() => {
		if (!editor) {
			return;
		}

		const original = monaco.editor.createModel(versionA, "application/json");
		const modified = monaco.editor.createModel(versionB, "application/json");
		editor.setModel({ original, modified });
	}, [editor, versionA, versionB]);

	// Such hack resolves issue
	/*
	if (!(versionA || versionB)) {
		return null;
	}
	*/

	return <div className={styles.Editor} ref={monacoEl}></div>;
};
